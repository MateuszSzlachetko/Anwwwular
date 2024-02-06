FROM nginx
ARG PROJECT_NAME='anwwwular'

RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d

COPY /dist/${PROJECT_NAME}/browser/ /usr/share/nginx/html

EXPOSE 80
