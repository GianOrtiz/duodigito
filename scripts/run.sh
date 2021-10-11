#!/bin/bash
# This script executes both the backend and the frontend together, so developers
# won't need to open two terminals and remember two commands before testing this
# project.

(trap 'kill 0' SIGINT; cd backend && ./gradlew bootRun & cd frontend && yarn start )
