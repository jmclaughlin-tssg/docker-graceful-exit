docker-graceful-exit
====================

Short demo on how to gracefully exit an application running in a Docker container

The included Dockerfile builds a container with Node.js support and various scenarios
are possible from running the app directly, through Bash scripts with varying degrees
of signal handling

All the instances can be stopped as follows

```
$ docker stop exit_test; docker rm exit_test
```

(the `docker rm exit_test` ensures that a `docker run` can be repeated - omit it if 
you just wany to play with the scripts)

#### To checkout 

```
$ git clone https://github.com/jmclaughlin-tssg/docker-graceful-exit.git
```

#### Build the Docker Node runner

```
$ docker build -t test/noderunner Docker/node
```

#### Run the app directly - simple case

```
$ docker run --name exit_test  -v `pwd`:/var/app test/noderunner node /var/app/test.js
```

#### Simple Shell script (run1.sh)

```
$ docker run --name exit_test  -v `pwd`:/var/app test/noderunner /var/app/run1.sh
```

#### Simple Shell script with process info (run2.sh)

```
$ docker run --name exit_test  -v `pwd`:/var/app test/noderunner /var/app/run2.sh
```

#### Shell script with signal handling (run3.sh)

```
$ docker run --name exit_test  -v `pwd`:/var/app test/noderunner /var/app/run3.sh
```

#### Shell script with signal handling and wait (run4.sh)

```
$ docker run --name exit_test  -v `pwd`:/var/app test/noderunner /var/app/run4.sh
```
