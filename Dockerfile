<<<<<<< HEAD
FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN npm run build
EXPOSE 5000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
=======
FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN npm run build
EXPOSE 5000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
>>>>>>> 2311233f782c5251c94a4fa3de5970de965e3c02
