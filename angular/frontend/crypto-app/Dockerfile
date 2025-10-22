FROM node:24

WORKDIR /my-app

RUN npm install -g @angular/cli

COPY package*.json ./
RUN npm i

COPY . .

EXPOSE 4200

CMD ["npm", "start"]

