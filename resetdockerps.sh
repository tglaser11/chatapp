#!/bin/sh
sudo docker stop chatapp
sudo docker stop redis
sudo docker stop rabbitmq
sudo docker stop logworker
sudo docker stop chatworker
sudo docker rm chatapp
sudo docker rm redis
sudo docker rm rabbitmq
sudo docker rm logworker
sudo docker rm chatworker
