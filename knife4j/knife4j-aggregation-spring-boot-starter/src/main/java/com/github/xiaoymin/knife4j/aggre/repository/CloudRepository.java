/*
 * Copyright © 2017-2023 Knife4j(xiaoymin@foxmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


package com.github.xiaoymin.knife4j.aggre.repository;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.core.thread.ThreadUtil;
import com.github.xiaoymin.knife4j.aggre.core.pojo.BasicAuth;
import com.github.xiaoymin.knife4j.aggre.core.pojo.SwaggerRoute;
import com.github.xiaoymin.knife4j.aggre.spring.support.CloudSetting;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/***
 * 基于本地配置的方式动态聚合云端(http)任意OpenAPI
 * @since 2.0.8
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2020/10/29 20:11
 */
public class CloudRepository extends AbstractRepository {

    final Logger logger = LoggerFactory.getLogger(CloudRepository.class);
    private volatile boolean stop = false;
    private Thread thread;
    private CloudSetting cloudSetting;

    public CloudRepository(CloudSetting cloudSetting) {
        this.cloudSetting = cloudSetting;
        if (cloudSetting != null && CollectionUtil.isNotEmpty(cloudSetting.getRoutes())) {
            cloudSetting.getRoutes().stream().forEach(cloudRoute -> {
                if (cloudRoute.getRouteAuth() == null || !cloudRoute.getRouteAuth().isEnable()) {
                    cloudRoute.setRouteAuth(cloudSetting.getRouteAuth());
                }
                routeMap.put(cloudRoute.pkId(), new SwaggerRoute(cloudRoute));
            });
        }
    }

    @Override
    public BasicAuth getAuth(String header) {
        BasicAuth basicAuth = null;
        if (cloudSetting != null && CollectionUtil.isNotEmpty(cloudSetting.getRoutes())) {
            if (cloudSetting.getRouteAuth() != null && cloudSetting.getRouteAuth().isEnable()) {
                basicAuth = cloudSetting.getRouteAuth();
                // 判断route服务中是否再单独配置
                BasicAuth routeBasicAuth = getAuthByRoute(header, cloudSetting.getRoutes());
                if (routeBasicAuth != null) {
                    basicAuth = routeBasicAuth;
                }
            } else {
                basicAuth = getAuthByRoute(header, cloudSetting.getRoutes());
            }
        }
        return basicAuth;
    }

    public CloudSetting getCloudSetting() {
        return cloudSetting;
    }

    @Override
    public void start() {
        if (this.cloudSetting != null && CollectionUtil.isNotEmpty(this.cloudSetting.getRoutes())) {
            this.cloudSetting.getRoutes().forEach(cloudRoute -> {
                routeMap.put(cloudRoute.pkId(), new SwaggerRoute(cloudRoute));
            });
        }
    }

    @Override
    public void close() {
        logger.info("stop Cloud heartbeat Holder thread.");
        this.stop = true;
        if (this.thread != null) {
            ThreadUtil.interrupt(this.thread, true);
        }
    }
}
