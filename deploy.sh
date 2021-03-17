#!/bin/bash
echo "deploy start"

git pull

docker build -t auction .

docker stop auction1
docker run -idt -p 8000:8000 --rm --name auction1 auction

docker image prune -f
echo "deploy end"

