#!/bin/sh
sudo docker run --name redis -d tglaser11/dockerredis
sudo docker run --name rabbitmq -d -p 15672:15672 tglaser11/dockerrabbitmq
sudo docker run -w="/src" -d -p 3000:3000 --name chatapp --link redis:localhost-redis --link rabbitmq:localhost-rabbitmq tglaser11/node-chatapp
sudo docker run -w="/src" -d --name logworker --link rabbitmq:localhost-rabbitmq tglaser11/chatapp-logworker
sudo docker run -w="/src" -d --name chatworker --link rabbitmq:localhost-rabbitmq --link redis:localhost-redis tglaser11/chatapp-worker


