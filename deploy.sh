#!/bin/bash
echo "deploy start"

git pull

docker build -t gemcardweb .

docker stop gemcardweb1
docker run -idt -p 8000:8000 --rm --name gemcardweb1 gemcardweb

sleep 7

docker stop gemcardweb2
docker run -idt -p 8001:8000 --rm --name gemcardweb2 gemcardweb

docker image prune -f
echo "deploy end"

