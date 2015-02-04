FROM    centos:centos6

# Enable EPEL for Node.js
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
# Install Node.js and npm
RUN     yum install -y npm

# Install git for React
RUN	yum install -y git

# Bundle app source
COPY . /src
# Install app dependencies
RUN cd /src; npm install
RUN cd /src/static/js; ln -s ../../node_modules/socket.io/node_modules/socket.io-client/socket.io.js
RUN cd /src; npm install -g bower
RUN cd /src; bower install --allow-root

EXPOSE  3000
# CMD ["node", "/src/app.js"]
CMD server_prep.sh