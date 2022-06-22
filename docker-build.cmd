call yarn install
call ./node_modules/.bin/nx affected --target=build --configuration production

call docker-compose down
call docker-compose build