FROM node
RUN mkdir /app
WORKDIR /app

RUN npm install -g nodemon
COPY package.json /app/package.json
RUN npm install
COPY . /app

EXPOSE 3001

CMD ["node", "index.js"]