FROM node:latest
LABEL authors="aebid"

WORKDIR /node

COPY . .

RUN npm install

EXPOSE 8877

CMD ["node", "apiServer.js"]
