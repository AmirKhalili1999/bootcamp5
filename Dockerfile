### STAGE 1: Build ###
FROM node:16 as build

WORKDIR /usr/src/app

ARG NG_APP_API_URL
ARG NG_APP_API_URL_STORAGE

# COPY package*.json ./
COPY . .
RUN npm install --legacy-peer-deps

ENV NODE_ENV=production
ENV NG_APP_API_URL=$NG_APP_API_URL
ENV NG_APP_API_URL_STORAGE=$NG_APP_API_URL_STORAGE

RUN npm run build

### STAGE 2: NGINX ###
FROM nginx

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/faradid-panel /usr/share/nginx/html

ENV NGINX_ENTRYPOINT_QUIET_LOGS=1

CMD [ "nginx", "-g", "daemon off;" ]