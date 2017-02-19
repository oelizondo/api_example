FROM node

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json /usr/app
RUN npm install

COPY . /usr/app
RUN ./node_modules/.bin/babel src --out-dir lib

CMD ["node", "lib/index.js"]
