FROM node:9

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
 && sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
 && apt-get update -y \
 && apt-get install -y google-chrome-stable

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app
RUN npm install

EXPOSE 4200
CMD ["npm", "start"]
