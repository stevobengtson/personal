FROM node:7

RUN mkdir -p /app
WORKDIR /app

COPY package.json package.json
RUN npm install

EXPOSE 4200
CMD ["npm", "start"]
