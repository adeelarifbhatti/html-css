FROM node:10

MAINTAINER adeelarifbhatti@gmail.com


WORKDIR /usr/app/src
COPY . .
RUN npm install -g serve
CMD [ "npm","run" ,"start:dev"]