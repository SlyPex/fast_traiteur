FROM node:19-alpine3.16

RUN apk update && apk upgrade
RUN npm i -g @nestjs/cli

USER node
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

EXPOSE 3000

ENTRYPOINT [ "yarn","run","start:dev" ]