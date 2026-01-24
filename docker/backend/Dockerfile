FROM node:25
WORKDIR /data
ADD .output/server /data/
EXPOSE 3000
ENTRYPOINT ["node", "/data/index.mjs"]