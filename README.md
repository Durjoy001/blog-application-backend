# Blog Application Backend.

access my site at : https://blog-application001.herokuapp.com

## Table of contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Installation](#installation)
- [Dockerization](#dockerization)
- [Deployment](#deployment)
- [Api Documentation](#api-documentation)

## Introduction:

It is a **restfull api** where users can get all the created blogs by other users, also can create their own blogs after signing up in the application and will able to update and delete his/her own blog. For implementing authentication and authorization I use **JWT token.** I have **dockerized** this project and also write **unit and integration test** case.

This repository contain all about backend related stuff of my blog application project , for frontend code please visit this repo: https://github.com/Durjoy001/blog-application-frontend

## Technologies:

- **Express.js** which is a back end web application framework for **Node.js**.
- Database - **mongoDB (mongoose orm)**.
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

- **User signup** : `POST /api/v1/users/signup`

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

    ```
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

- **User login** : `POST /api/v1/users/login`

  - Request body

    ```json
    {
      "email": "durjoy001@gmail.com",
      "password": "pass1234"
    }
    ```

  - Status code

    ```
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

* **Get all blogs** : `POST /api/v1/blogs/`
  - Get blogs in JSON format, so set this header
    ```
    Accept : application/json
    ```
  - Status code
    ```
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
  * Get blogs in XML format, so set this header
    ```
    Accept : application/xml
    ```
  * Status code
    ```
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
* **Get single blog by id** : `GET /api/v1/blogs/blog_id`
  - Get blog in JSON format
    ```
    Accept : application/json
    ```
  - Status code
    ```
    Status : 200 OK
    ```
  - Valid response body
    ```json
    {
      "status": "success",
      "blog": {
        "name": "Maybe Arsenal are interested’ – Sanches reacts to transfer talk and makes Barcelona admission",
        "description": "The Portugal international midfielder has rebuilt his reputation at Lille and feels ready to make a big move again  Renato Sanches feels “ready” to make the of another big move, having previously flopped at Bayern Munich, and is aware Arsenal may be interested in his services after coming close to joining Barcelona last summer.",
        "time": "11/22/2021",
        "creator": "user100",
        "id": "619b6e919db6280fe8559598"
      }
    }
    ```
  * Get blog in XML format
    ```
    Accept : application/xml
    ```
  * Status code
    ```
    Status : 200 OK
    ```
  * Valid response body
    ```xml
    <data>
      <name>Maybe Arsenal are interested’ – Sanches reacts to transfer talk and makes Barcelona admission</name>
      <description>The Portugal international midfielder has rebuilt his reputation at Lille and feels ready to make a big move again  Renato Sanches feels “ready” to make the of another big move, having previously flopped at Bayern Munich, and is aware Arsenal may be interested in his services after coming close to joining Barcelona last summer.</description>
      <time>11/22/2021</time>
      <creator>user100</creator>
      <id>619b6e919db6280fe8559598</id>
    </data>
    ```
* **Create blog** : `POST /api/v1/blogs`
  - If a user want to create a blog he/she must have to logged in to the application.
  * Then user must have to set the **jwt token** in the authorization header which he/she get after the loggin in a response body.
  * Header
    ```
    Authorization: Bearer jwt_token
    ```
  * Request body
    ```json
    {
      "name": "title of the blog",
      "description": "description of the blog"
    }
    ```
  * Status code
    ```
    Status : 201 Created
    ```
  * Valid response body (user can set which type of response format he/she willing to get , it can be json or xml, and default response format is json )
    ```json
    {
      "status": "success",
      "blog": {
        "name": "title of the blog",
        "description": "description of the blog",
        "time": "12/9/2021",
        "creator": "user500",
        "id": "61b1c96d155ae73eade689f7"
      }
    }
    ```
* **Update blog** : `PATCH /api/v1/blogs/blog_id`
  - A user only can update his/her own blog.
  - So , user must have to logged in to the application and also have to set the jwt token in authorization header because authorization is checked by verifing **jwt token**.
  - Header
    ```
    Authorization: Bearer jwt_token
    ```
  - Request body
    ```json
    {
      "name": "Updated blog title",
      "description": "updated blog description"
    }
    ```
  - Status code
    ```
    Status : 200 OK
    ```
  - Valid response body (default response format is json )
    ```json
    {
      "status": "success",
      "blog": {
        "name": "updated blog title",
        "description": "updated blog description",
        "time": "12/9/2021",
        "creator": "test500",
        "id": "61b1c96d155ae73eade689f7"
      }
    }
    ```
* **Delete blog** : `DELETE /api/v1/blogs/blog_id`
  - A user only can delete his/her own blog.
  - So , user must have to logged in to the application and also have to set the jwt token in authorization header because authorization is checked by verifing **jwt token**.
  - Header
    ```
    Authorization: Bearer jwt_token
    ```
  - Status code
    ```
    Status : 204 No Content
    ```
