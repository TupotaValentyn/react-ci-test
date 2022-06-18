FROM node:alpine

RUN npm install -g serve

COPY build/ /home/build
WORKDIR /home/build
EXPOSE 5000

CMD ["serve", "-s", "-l", "5000"]
