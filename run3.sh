#!/bin/bash

stopServer() {
        echo "Stopping process - Killing PID $pid"
        kill -TERM $pid
}

trap "stopServer" TERM


node /var/app/test.js&
pid=$!
echo App PID = $pid
ps -ax
wait $pid
