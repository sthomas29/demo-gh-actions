FROM node:12
COPY . /github-action
WORKDIR /github-action
RUN npm install
ENTRYPOINT ["node", "/github-action/index.js"]
