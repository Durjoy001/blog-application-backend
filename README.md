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
   First pull the docker image from docker hub

  ```
  docker pull durjoy62/blog-application-backend101:1.0.0
  ```

- step - 2  
  Create and run container by using this command

  ```
  docker run -it -p 9000:8000 durjoy62/blog-application-backend101:1.0.0
  ```

Open http://localhost:9000/ and verify.

## Deployment:

I have also deploy this backend project in heroku. Access it here : https://blog-application-backend101.herokuapp.com  
This is the root url ,if you add the correct path after this url you can do your desired operation, Please read the api documentation bellow to know more.

## Api Documentation:

- User signup : `POST /api/v1/users/signup`

  - Request body

    ```json
    {
      "name": "Durjoy Dey",
      "email": "durjoydey001@gmail.com",
      "password": "pass1234",
      "passwordConfirm": "pass1234"
    }
    ```

  - Status code

    ```json
    status : 201 Created
    ```

  - Valid response body

    ```json
    {
      "status": "sucess",
      "token": "jwt_token",
      "data": {
        "user": {
          "name": "Durjoy Dey",
          "email": "durjoydey001@gmail.com",
          "role": "user",
          "password": "$2a$08$GRpgFt3jC6MIJ2NeqglHNOONq1BGHh2QayUSl3pQkfpUs8nfTnDBO",
          "_id": "61b19c2308a3e12266fce707"
        }
      }
    }
    ```

- User login : `POST /api/v1/users/login`

  - Request body

    ```json
    {
      "email": "durjoy001@gmail.com",
      "password": "pass1234"
    }
    ```

  - Status code

    ```json
    status : 200 OK
    ```

  - Valid response body

    ```json
    {
      "status": "sucess",
      "name": "Durjoy Dey",
      "token": "jwt_token"
    }
    ```

* Get all blogs : `POST /api/v1/blogs/`
  - Get blogs in JSON format, so set this header
    ```
    Accept : application/json
    ```
  - Status code
    ```json
    Status : 200 OK
    ```
  - Valid response body
    ```json
    {
      "status": "success",
      "Blogs": 3,
      "blog": [
        {
          "name": "Form Control React",
          "description": "In HTML, form elements such as &lt;input>, &lt;textarea>, and &lt;select> typically maintain their own state and update it based on user input. In React, mutable state is the typically kept in the state property of components, and only updated with setState().",
          "time": "11/19/2021",
          "creator": "Durjoy Dey",
          "id": "619747c5564ae03eafc467f8"
        },
        {
          "name": "Maybe Arsenal are interested’ – Sanches reacts to transfer talk and makes Barcelona admission",
          "description": "The Portugal international midfielder has rebuilt his reputation at Lille and feels ready to make a big move again  Renato Sanches feels “ready” to make the of another big move, having previously flopped at Bayern Munich, and is aware Arsenal may be interested in his services after coming close to joining Barcelona last summer.",
          "time": "11/22/2021",
          "creator": "user100",
          "id": "619769e3cb0ffe55b2d56378"
        },
        {
          "name": "Bangladesh vs Pak dffd istan, 3rd T20I - Live Cricket Score, Commentary",
          "description": "That's it from this series. Babar Azam was informed that the trophy for winning the T20Is will be handed out after the Tests. So Pakistan continue their good run in the shortest format, although it got way too close today for their liking. We'll be back for the first Test that begins on Friday. Goodbye for now. ",
          "time": "11/23/2021",
          "creator": "Durjoy Dey",
          "id": "61978967cb0ffe55b2d5639f"
        }
      ]
    }
    ```
  * Get blogs in xml format, so set this header
    ```
    Accept : application/xml
    ```
  * Status code
    ```json
    Status : 200 OK
    ```
  * Valid response body
    ```xml
    <data>
      <data>
          <name>Form Control React</name>
          <description>In HTML, form elements such as &lt;input>, &lt;textarea>, and &lt;select> typically maintain their own state and update it based on user input. In React, mutable state is the typically kept in the state property of components, and only updated with setState().</description>
          <time>11/19/2021</time>
          <creator>Durjoy Dey</creator>
          <id>61978967cb0ffe55b2d5639f</id>
      </data>
      <data>
          <name>Maybe Arsenal are interested’ – Sanches reacts to transfer talk and makes Barcelona admission</name>
          <description>The Portugal international midfielder has rebuilt his reputation at Lille and feels ready to make a big move again  Renato Sanches feels “ready” to make the of another big move, having previously flopped at Bayern Munich, and is aware Arsenal may be interested in his services after coming close to joining Barcelona last summer.</description>
          <time>11/22/2021</time>
          <creator>user100</creator>
          <id>619b6e919db6280fe8559598</id>
      </data>
      <data>
          <name>Bangladesh vs Pak dffd istan, 3rd T20I - Live Cricket Score, Commentary</name>
          <description>That's it from this series. Babar Azam was informed that the trophy for winning the T20Is will be handed out after the Tests. So Pakistan continue their good run in the shortest format, although it got way too close today for their liking. We'll be back for the first Test that begins on Friday. Goodbye for now. </description>
          <time>11/23/2021</time>
          <creator>Durjoy Dey</creator>
          <id>619c6eff3dd1eb0f5ca80fc5</id>
      </data>
    </data>
    ```
