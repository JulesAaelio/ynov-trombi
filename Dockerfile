FROM node:10-alpine
RUN npm install -g npm

COPY ./ /data
WORKDIR /data

EXPOSE 3000
CMD ./docker-command.sh