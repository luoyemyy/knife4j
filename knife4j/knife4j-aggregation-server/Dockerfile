FROM registry.cn-shenzhen.aliyuncs.com/luoyemyy/openjdk-17:17
LABEL authors="yeyuming"

ADD /target/*.jar /app.jar

ENTRYPOINT ["java", "-jar", "/app.jar", "--spring.config.location=/app.yaml"]