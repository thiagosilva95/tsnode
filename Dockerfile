FROM node:8.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./dist .

EXPOSE 3050

CMD [ "npm", "start" ]