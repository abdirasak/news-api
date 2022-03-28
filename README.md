# AA NEWS API

## Add .env files

in order to run this project you must add .env files to connect to the database.

## How to add .env file

in the main project folder crate two new files and name them .env.test and .env.development. Into each, add PGDATABASE=<database_name_here>, with the correct database name for that environment (see /db/setup.sql for the database names). Double check that these .env files are .gitignored.
