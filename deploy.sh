#!/bin/bash

# Nome da imagem
IMAGE_NAME="wayreavelar/digitalx-site:latest"

echo "Construindo a imagem Docker..."
docker buildx build -t $IMAGE_NAME --load .

echo "Tagueando a imagem..."
docker tag $IMAGE_NAME $IMAGE_NAME

echo "Enviando a imagem para o Docker Hub..."
docker push $IMAGE_NAME

echo "Processo concluído."

