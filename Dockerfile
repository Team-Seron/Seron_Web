# FROM node:lts-alpine
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 3000
# RUN chown -R node /usr/src/app
# USER node
# CMD ["npm", "start"]
FROM node:lts-alpine

# Yarn 설치
RUN apk add --no-cache yarn

ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"] # yarn.lock 파일 복사
RUN yarn install --frozen-lockfile # 의존성 설치
COPY . .
RUN yarn build
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "start"]
