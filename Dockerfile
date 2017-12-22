FROM node:7

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

# COPY . /app
WORKDIR /app

EXPOSE 4200

CMD ["npm", "start"]
