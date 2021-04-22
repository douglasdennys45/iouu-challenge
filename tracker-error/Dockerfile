FROM node:14.16.1-alpine3.13
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build
EXPOSE 8081
ENTRYPOINT [ "npm" ]
CMD [ "run", "start" ]