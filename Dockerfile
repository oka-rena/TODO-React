FROM node:23.11.0-slim

RUN apt-get update && apt-get install -y locales
RUN locale-gen ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP
ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /app/my-app