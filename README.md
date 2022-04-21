# LAP 2 Coding Challenge - Publish

A full stack web application with an HTML/CSS/JS client and an Express server connected to a PostgreSQL database.

A place to write down your thoughts and remain anonymous whilst doing so! Making a telegra.ph clone with [Diren](https://github.com/Dnayir)

## Installation

- install docker
- clone or fork the repo
- open terminal and navigate to folder

## Usage

**bash \_scripts/startDev.sh**

- starts client, api & db services
- runs db migrations
- seeds db for development
- serves client on localhost:8080
- serves api on localhost:3000

**bash \_scripts/teardown.sh**

- stop all running services
- removes containers
- removes volumes

## Changelog

# controllers/posts.js

[x] added `create() function`

# models/posts.js

[x] updated `get all()` function

# client/static/js/requests.js

[x] updated `publishPost()` to post to database

[x] updated try and catch so `publishPost() function` clears form content and displays post

## Bugs

[x] the `#post/id` endpoint does not retrieve the requested id

## Wins & Challenges

### Wins

- managed to get the server running and update the docker-compose file
- post able to be posted and seen in browser

### Challenges

- show path
- id path
