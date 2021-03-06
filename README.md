# Global Read.md

This is a Global readme file containing information about  all three variations Survey services.
This file is meant to provide an understanding of variations among all implementations.
Alternatively you can go to each service to know  details respective to individual services too.

# 1 

# Project Title
Survey Service (Using File system - with data persistance)
---
## Requirements

For development, you will need Node.js installed in your system a node global package, npm , installed in your environment.
- #### Install Node.js in your system
   You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
---

## Clone Project
   1. You can clone this project using git clone https://github.com/shankaranarayanan712/Survey_Application
   2. By default it will be in main branch, and you can checkout to master branch using the command below
      $ git checkout master

## Install
    $ cd YOUR_PATH/serviceWithFileStorage
    $ npm install
## Running the project

    $ npm start

## Testing the project

    $ npm test

## Service Overview

1. This Survey service is a node (with Express) microservice that runs on port 8080

2. It is built with Service based architecture wherein the Layers are segregated into Controller, Service and
   Data Access layer is not used as the data is stored using filesystem

3. Overall Five API's are exposed from this service to perform CRUD operation for the service
   a. create : (Creates a Survey with questions) --> mapped to route : post '/api/survey/'
   b  get All survey  (gets all survey) --> mapped to route : get '/api/survey/'
   c. get survey by id  (gets a survey with given Id) --> mapped to route : get '/api/survey:id'
   d. Answer Survey (Answers a particular Survey) :  --> mapped to route : put'/api/survey/:id'
   e. Get Aggregated survey -- >  mapped to route : get '/api/survey/aggregated/result'
 
4. The Endpoint to get Aggregated survey gets all the grouped survey based on the survey name
   For Ex: If you create a Programing language survey and a Gaming Survey, the aggregated survey
   will get these two by grouping it so that it can be used to display as dashboard or view purposes

 
5. All endpoints follows http verbs and naming protocols
   for example: create survey is created with following convention : post : '/api/survey/'
   In the The above example "post" indicates it is a create operation and 'survey/' indicates the resource used for creation and explains what is being created
   Similarly ,other endpoints follows the same protocol

6. All API's are validation protected. That means you cannot make get API call if there are no surveys present

7. Similarly you cannot update a survey that is not present in system at all.

8. Request validation is present at the top level for create and update requests to make sure the API do not operate 
   for junk request. 

9. HTTP Status codes are used for all resources to provide a meaningful information and to expose errors.

10. File system (native to node.js ) is used to persist the data 

11. Data Structure to store the Survey is : 1. Array of Object 2. Jagged  Array(to map questions with answers)
    To see sample Request Object please refer 'programmingSurvey' in constants.js file
    That can be also used as request to create Surveys

12. Testing: Unit testing is done using Jest and supertest  libraries


--------------------------------------------------------------------------------------------------------------------------------

# 2
# Project Title
Survey Service (Using Global Object)

---
## Requirements

For development, you will need Node.js installed in your system a node global package, npm , installed in your environment.
- #### Install Node.js in your system
   You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
---

## Clone Project
   1. You can clone this project using git clone https://github.com/shankaranarayanan712/Survey_Application
   2. By default it will be in main branch, and you can checkout to master branch using the command below
      $ git checkout master

## Install
    $ cd YOUR_PATH/serviceInMemoryOperation
    $ npm install
## Running the project

    $ npm start

## Testing the project

    $ npm test

## Service Overview

1. This Survey service is a node (with Express) microservice that runs on port 8080

2. It is built with Service based architecture wherein the Layers are segregated into Controller, Service.
   Data Access layer is not used as the data is stored using global object of node.

3. Overall Five API's are exposed from this service to perform CRUD operation for the service
   a. create : (Creates a Survey with questions) --> mapped to route : post '/api/survey/'
   b  get All survey  (gets all survey) --> mapped to route : get '/api/survey/'
   c. get survey by id  (gets a survey with given Id) --> mapped to route : get '/api/survey:id'
   d. Answer Survey (Answers a particular Survey) :  --> mapped to route : put'/api/survey/:id'
   e. Get Aggregated survey -- >  mapped to route : get '/api/survey/aggregated/result'
 
4. The Endpoint to get Aggregated survey gets all the grouped survey based on the survey name
   For Ex: If you create a Programing language survey and a Gaming Survey, the aggregated survey
   will get these two by grouping it so that it can be used to display as dashboard or view purposes

5. All endpoints follows http verbs and naming protocols
   for example: create survey is created with following convention : post : '/api/survey/'
   In the The above example "post" indicates it is a create operation and 'survey/' indicates the resource used for creation and explains what is being created
   Similarly ,other endpoints follows the same protocol

6. All API's are validation protected. That means you cannot make get API call if there are no surveys present

7. Similarly you cannot update a survey that is not present in system at all.

8. Request validation is present at the top level for create and update requests to make sure the API do not   
   operate for junk request. 

9. HTTP Status codes are used for all resources to provide a meaningful information and to expose errors.

10. Global Object is used to store the data in-memory

11. Data Structure to store the Survey is : 1. Array of Object 2. Jagged  Array(to map questions with answers)
    To see sample Request Object please refer 'programmingSurvey' in constants.js file
    That can be also used as request to create Surveys

--------------------------------------------------------------------------------------------------------------------------------


# 3  
# Project Title
Survey Service - Using node-cache
---
## Requirements

For development, you will need Node.js installed in your system a node global package, npm , installed in your environment.
- #### Install Node.js in your system
   You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
---

## Clone Project
   1. You can clone this project using git clone https://github.com/shankaranarayanan712/Survey_Application
   2. By default it will be in main branch, and you can checkout to master branch using the command below
      $ git checkout master

## Install
    $ cd YOUR_PATH/serviceInMemoryOperation
    $ npm install
## Running the project

    $ npm start

## Testing the project

    $ npm test

## Service Overview

1. This Survey service is a node (with Express) microservice that runs on port 8080

2. It is built with Service based architecture wherein the Layers are segregated into Controller, Service.
   Data Access layer is not used as the data is stored using node-cache.

3. Overall Five API's are exposed from this service to perform CRUD operation for the service
   a. create : (Creates a Survey with questions) --> mapped to route : post '/api/survey/'
   b  get All survey  (gets all survey) --> mapped to route : get '/api/survey/'
   c. get survey by id  (gets a survey with given Id) --> mapped to route : get '/api/survey:id'
   d. Answer Survey (Answers a particular Survey) :  --> mapped to route : put'/api/survey/:id'
   e. Get Aggregated survey -- >  mapped to route : get '/api/survey/aggregated/result'
 
4. All endpoints follows http verbs and naming protocols
   for example: create survey is created with following convention : post : '/api/survey/'
   In the The above example "post" indicates it is a create operation and 'survey/' indicates the resource used for creation and explains what is being created
   Similarly ,other endpoints follows the same protocol

5. The Endpoint to get Aggregated survey gets all the grouped survey based on the survey name
   For Ex: If you create a Programing language survey and a Gaming Survey, the aggregated survey
   will get these two by grouping it so that it can be used to display as dashboard or viw purposes
  
6. All API's are validation protected. That means you cannot make get API call if there are no surveys present

7. Similarly you cannot update a survey that is not present in system at all.

8. Request validation is present at the top level for create and update requests to make sure the API do not   
   operate for junk request. 

9. HTTP Status codes are used for all resources to provide a meaningful information and to expose errors.

10. This service used "node-cache" to make in-memory operation to maintain data

11. Data Structure to store the Survey is : 1. Array of Object 2. Jagged  Array(to map questions with answers)
    To see sample Request Object please refer 'programmingSurvey' in constants.js file
    That can be also used as request to create Surveys

12. Testing: Unit testing is done using Jest and supertest  libraries