# Introduction
Project is part of the graded assignment of Comp 3340 (World Wide Web Info System Dev) at University of Windsor during Summer 2022. 

## Created CRUD methods

Creating, Retrieving, Updating, and Deleting

### getAllProducts Method 

<img width="800" alt="image" src="https://user-images.githubusercontent.com/59122465/176261093-1c8da74c-6a34-4039-9e71-1cca4960f66d.png">


### getOneProduct Method

**Query for existing ID**

<img width="800" alt="image" src="https://user-images.githubusercontent.com/59122465/176260929-5851b411-1543-4731-8067-52642dd36f5f.png">

**Query for non-existing ID**

<img width="800" alt="image" src="https://user-images.githubusercontent.com/59122465/176260835-cc847442-56b2-4797-9b65-f021b4dc439a.png">

### createProduct Method

**Last item in sample data**

![image](https://user-images.githubusercontent.com/59122465/176261854-dee5e7e1-ff86-4fd0-9375-28b567f7ae3b.png)



**POst Request to create new Product**
<img width="800" alt="image" src="https://user-images.githubusercontent.com/59122465/176262010-d04633f9-c58f-4b6a-ade3-dc9893791bb8.png">


**Updated Sample database entry**

![image](https://user-images.githubusercontent.com/59122465/176262396-ff171b16-0fd4-43ae-90c0-b5bdbeee9e9d.png)


### updateProduct

<img width="800" alt="image" src="https://user-images.githubusercontent.com/59122465/176264065-bb69ff09-8e98-46fa-a6f0-d5c3c17a8cdb.png">

### deleteProduct

<img width="800" alt="image" src="https://user-images.githubusercontent.com/59122465/176264196-295728ba-28ca-4694-9522-e01463a069b9.png">



## File Structure
```.
├── README.md
├── app.js
├── data
│   └── sample-data.json
├── package-lock.json
├── package.json
├── public
│   ├── css
│   └── img
└── requirements.md
```


Handler functions

`app.get()` or `app.post()` are called handler functions. The application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.

## express.Router

Use the `express.Router` class to create modular, mountable route handlers. A `Router` instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

