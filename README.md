#Resume [A collection of professional experiences of Lim Han]

## Instructions on running

- git clone <url>
- cd resume
- npm install
- node app.js


## Running on Docker

The following command runs the docker container on the port 18080 and binds the container port to the host port 18080

`docker run --name resume-nodejs --expose=18080 -e "PORT=18080" -p 18080:18080 -d tagore79/resume-nodejs`
