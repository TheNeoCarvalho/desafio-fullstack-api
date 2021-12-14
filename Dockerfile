FROM node:alpine AS development

WORKDIR /usr/src

COPY package*.json ./

COPY . .

RUN npm install 

RUN npm install @nestjs/swagger swagger-ui-express

RUN npm run build