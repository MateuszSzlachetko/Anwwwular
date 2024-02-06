#FROM node:20 as builder
#
#WORKDIR /usr/$PROJECT_NAME
#
#COPY package*.json ./
#RUN npm install
#COPY . .
#
#RUN npm run build

#--------------------------------
FROM node:20-alpine3.19
ARG PROJECT_NAME='anwwwular'

WORKDIR /usr/${PROJECT_NAME}/app

#COPY --from=builder /usr/$PROJECT_NAME/dist/$PROJECT_NAME/ ./
COPY ./dist/${PROJECT_NAME}/ ./

EXPOSE 4000
CMD [ "node", "./server/server.mjs" ]
