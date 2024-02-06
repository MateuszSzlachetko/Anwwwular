#!/bin/bash

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 app_name app_version"
    exit 1
fi

app_name=$1
app_version=$2
nginx_version='1.0.0'

# shellcheck disable=SC2046
docker build  --build-arg PROJECT_NAME="$app_name" -t mszlachetko/"$app_name":"$app_version" .
docker build  --build-arg PROJECT_NAME="$app_name" -t mszlachetko/"$app_name"-nginx:"$nginx_version" -f ./nginx/Dockerfile .
docker push mszlachetko/"$app_name":"$app_version"
docker push mszlachetko/"$app_name"-nginx:"$nginx_version"
