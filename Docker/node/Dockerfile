# Node.js
#
# VERSION 0.10.32

# Tag name place holder is replaced with the actual build tag during the build
# The explicit use of the tag allows multiple version of the same Docker container
FROM ubuntu:trusty

MAINTAINER John McLaughlin <jmclaughlin@tssg.org>

# Install required libs to download Node.js, nodemon to run the app, bunyan to get a nice
# view on the logs, and node-inspector to debug the app.
RUN apt-get update -y && \
	apt-get install -y curl build-essential ; \
  	mkdir /home/node;\
  	cd /home/node;\
  	curl http://nodejs.org/dist/v0.10.32/node-v0.10.32-linux-x64.tar.gz | tar xz;\
  	ln -s /home/node/node-v0.10.32-linux-x64/bin/node /usr/bin/node;\
 	ln -s /home/node/node-v0.10.32-linux-x64/bin/npm /usr/bin/npm;\
 	npm install -g node-inspector nodemon forever;

EXPOSE 8080

CMD [ "nodemon", "--exitcrash" ]
#CMD [ "forever", "start", "-c", "nodemon", "--exitcrash" ]
