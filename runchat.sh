sudo docker run --name redis -d tglaser11/redis
sudo docker run --name rabbitmq -d -p 15672:15672 tglaser11/rabbitmq
sudo docker run -w="/src" -d -p 3000:3000 --name chatapp --link redis:localhost-redis --link rabbitmq:localhost-rabbitmq tglaser11/node-chatapp
sudo docker run -w="/src" -d --name logworker --link rabbitmq:localhost-rabbitmq tglaser11/log-worker
sudo docker run -w="/src" -d --name chatworker --link rabbitmq:localhost-rabbitmq --link redis:localhost-redis tglaser11/chat-worker
