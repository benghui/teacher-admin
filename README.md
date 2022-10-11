# Teacher Admin

## Setup

### Option 1

Docker and docker-compose is required for this method.

1. Run command `docker-compose up -d`
2. Once it is built and running enter command `docker exec -it teachers db-migrate up`

### Option 2

Running locally without docker.

1. Run command `db-migrate up` to execute the database migration
2. Run command `npm run start`
3. Run command `npm test` to execute test cases
