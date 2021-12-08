# Blog Application Backend.

access my site at :

## Table of contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Installation](#installation)
- [Dockerization](#dockerization)
- [Deployment](#deployment)
- [Api Documentation](#api-documentation)

## Introduction:

It is a restfull api where users can get/read all the created blogs by other users, also can create their own blogs after signing up in the application and will able to update and delete his/her own blog.  
 This repository contain all about backend related stuff of my blog application project , for frontend code please visit this repo: https://github.com/Durjoy001/blog-application-frontend  
I have **dockerized** this project and also write **unit and integration test** case.

## Technologies:

- **Express.js** which is a back end web application framework for Node.js.
- NoSQL database **mongoDB**.
- JavaScript testing framework **Jest**.

## Installation:

- Step - 1  
  First clone this repo in your local machine, for this run this bellow command in your desired directory where you want to clone.

```
git clone https://github.com/Durjoy001/blog-application-backend.git
```

- Step - 2  
  After colonning the repo run this bellow comand in your code editor terminal to installing project related various packages and resolving their various dependencies.

```
npm install
```

- Step - 3  
  We have to configure something to run this project. First create a .env file then create these field

```
USER = your database user name
DATABASE= mongodb+srv://your_database_user_name:<PASSWORD>your_database_connection_string
DATABASE_PASSWORD = your database password
DATABASE_NAME = 'mongodb'

JWT_SECRET = awe-xgtye-bhdksurcb-akkjsd-djhkksbjk-sjies
JWT_EXPIRES_IN = 90d
JWT_COOKIE_EXPIRES_IN =90

HOST = '0.0.0.0'
NODE_ENV = production
```

- Step - 4  
  Finally start backend server by this command

```
npm start
```

- You can also run all the test cases which are written for unit and integrating testing purpose and can check if every test cases got passed or not.

```
npm test
```

## Dockerization:

I have dockerized this project and upload the docker image in docker hub.If you want to run this project in your local machine from docker image then follow the bellow step:

- Step - 1
  - First pull the docker image from docker hub

```
docker pull durjoy62/blog-application-backend101:1.0.0
```

- step - 2
  - Create and run container by using this command

```
docker run -it -p 9000:8000 durjoy62/blog-application-backend101:1.0.0
```

Open http://localhost:9000/ and verify.

## Deployment:

I have also deploy this backend project in heroku. Access it here : https://blog-application-backend101.herokuapp.com  
This is the root url ,if you add the correct path after this url you can do your desired operation, Please read the api documentation bellow to know more.

## Api Documentation:
