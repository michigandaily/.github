#!/bin/sh
# Syncs the current directory to an ec2 instance

# KEY is filepath of the ec2 instance's pem file, ex. "push-server.pem"
# HOST is the host you want to connect to plus the path of the directory you want to sync to
# ex. ubuntu@ec2-3-142-111-156.us-east-2.compute.amazonaws.com:/home/ubuntu/push-server

KEY_FILE=""
HOST=""

if [[ -z $KEY_FILE ]]; then
    echo "No keyfile set in script."
    exit 1
elif [[ -z $HOST ]]; then
    echo "No host set in script."
    exit 1
else
    rsync -avze "ssh -i $KEY_FILE" . $HOST --filter=':- .gitignore' --exclude='.git'
fi
