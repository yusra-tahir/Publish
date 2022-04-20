#  LAP 2 Coding Challenge - Publish

A full stack web application with an HTML/CSS/JS client and an Express server connected to a PostgreSQL database.

A place to write down your thoughts and remain anonymous whilst doing so!


## Installation

 - install docker
 - clone or fork the repo
 - open terminal and navigate to folder 

 ## Usage

**bash _scripts/startDev.sh**
- starts client, api & db services
- runs db migrations
- seeds db for development
- serves client on localhost:8080
- serves api on localhost:3000

**bash _scripts/teardown.sh**
- stop all running services
- removes containers
- removes volumes

## Changelog

# controllers/posts.js

[x] added `create function`

# models/posts.js

[x] updated `get all()` function
[x] added `create` function 

## Bugs

[x] Unable to post and show in the browser

## Wins & Challenges

### Wins 

- Managed to get the server running and update the docker-compose file 

### Challenges 

 - Send form data to database and show in the browser 

