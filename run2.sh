#!/bin/bash

node /var/app/test.js&
pid=$!
echo App PID = $pid
ps -ax
wait $pid
