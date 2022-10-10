# Teacher Admin

## Setup

### Option 1

Docker and docker-compose is required for this method.

1. Copy or rename `.env.dev` to `.env`
2. Run command `docker-compose up -d`
3. Once it is built and running enter command `docker exec -it teachers /bin/sh`
4. Run command `db-migrate up` to execute the database migration inside of the docker container

### Option 2

Running locally without docker.

1. Copy or rename `.env.dev` to `.env`
2. Run command `npm run start`
3. Run command `npm test` to execute test cases
