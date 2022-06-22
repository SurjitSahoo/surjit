FROM nginx:alpine as thoughts-ui
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY dist/packages/thoughts-ui/ /usr/share/nginx/html/
RUN ls -la /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
RUN chgrp -R 0 /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R g=u /var/cache/nginx /var/run /var/log/nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]


FROM node:lts-alpine as thoughts-api
WORKDIR /app
EXPOSE 3000
ENV PORT 3000
COPY package.json .
RUN npm i express tslib dotenv payload
COPY dist/packages/thoughts/ ./
RUN ls
CMD ["node", "main.js"]