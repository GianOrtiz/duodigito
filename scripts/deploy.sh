#!/bin/bash
# This script deploys both the frontend and backend application to heroku so we 
# can access the application from anywhere via internet.

# Check if heroku is installed in the system.
if ! command -v heroku &> /dev/null; then
    echo "heroku is not installed"
    echo "Check how to install heroku on any system here https://devcenter.heroku.com/articles/heroku-cli"
    exit 1
fi

# Deploy backend to heroku.
cd backend
REPOSITORY=$(git rev-parse --abbrev-ref heroku/master)
if [ $REPOSITORY != "heroku/master" ]; then
    heroku create
fi
git push heroku master

# Deploy frontend to heroku.
cd ../frontend
REPOSITORY=$(git rev-parse --abbrev-ref heroku/master)
if [ $REPOSITORY != "heroku/master" ]; then
    heroku create
fi
git push heroku master
