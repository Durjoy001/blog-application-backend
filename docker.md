### dockerized command:

create image:  
docker build -t blog-application-backend .

create and run container:  
docker run -it -p 9000:8000 blog-application-backend

### push image in docker hub:

docker tag blog-application-backend durjoy62/blog-application-backend:1.0.0

docker push durjoy62/blog-application-backend:1.0.0

### pulling and runnig from dockerhub

docker pull durjoy62/blog-application-backend:1.0.0  
docker run -it -p 9000:8000 durjoy62/blog-application-backend:1.0.0

### deploy in heroku

heroku container:login  
heroku create blog-application001  
heroku container:push web --app blog-application001  
heroku container:release web --app blog-application001
