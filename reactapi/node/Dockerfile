FROM node:latest
LABEL authors="mane"

WORKDIR /node

COPY . .

RUN npm install

EXPOSE 8877

CMD ["node", "apiServer.js"]
