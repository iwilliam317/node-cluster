FROM node:latest
RUN mkdir -p /usr/src/node-cluster
WORKDIR /usr/src/node-cluster
COPY package.json /usr/src/node-cluster
RUN npm install
COPY . /usr/src/node-cluster
EXPOSE 3000
CMD [ "npm", "start" ]