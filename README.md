# Template of common code we learned in class


## from Express lesson, on Tuesday 5/21/2024
https://github.com/kingwilldabeast/u2_lesson_express_controllers

To set up an Express JSON doc:

*Use controllers folder and server.js*

TERMINAL COMMANDS:
1. npm init -y  
2. npm install express
3. npm install nodemon --save-dev
4. npm install cors //for middleware
5. npm run dev

Those steps will add these items:
* folder "node_modules"
* file "package-lock.json"
* file "package.json" **Note: Make sure it references the correct JS file**


## from lesson on Mongoose and MVC, on Thursday 5/23/2024
https://github.com/kingwilldabeast/u2_lesson_mongoose_data_model

TERMINAL COMMANDS:
1. npm init -y
2. npm install mongoose
2. mkdir db models seed 
2. touch db/index.js 
2. touch models/{airport,flight,index}.js 
2. touch seed/{airports,flights}.js
2. touch query.js  
2. node seed/publishers.js
2. node seed/books.js

Those steps will add these items:
* file "package.json"
* folder "node_modules" and file "package-lock.json"
* folders "db" and "models" and "seed"
* file db/index.js 
* files publisher.js book.js index.js 
* files publishers.js books.js 
* file touch query.js

TERMINAL for mongo:
* mongosh
* db
* Show dbs
* use <DATABASE_NAME> //as defined in db/index.js

Mongo Terminal examples:
* db.users.insertOne( {name: "Benny", age: 28, status: "active"})
* db.users.insertMany([ { name: "Claire", age: 28, status: "active" }, { name: "Joey", age: 28, status: "active" }, { name: "Abe", age: 22, status: "pending" }, { name: "Sunny", age: 23, status: "pending" }, { name: "Lizzy", age: 28, status: "active" }, { name: "Julie", age: 21, status: "active" }] )
* db.users.find( { name: "Benny" } )
* db.users.findOne( { name: "Benny" } )
* db.users.find( { status: "pending", age: { $lt: 25 } } )
* db.users.find( { $or: [ { status: "pending" }, { age: { $lt: 25 } } ] } )
* db.users.updateOne( { name: "Benny" }, { $set: { name: "Ben", age: 29 }, $currentDate: { lastModified: true } } )
* db.users.updateMany( { age: { $lt: 27 } }, { $set: { name: "Ben", age: 29 }, $currentDate: { lastModified: true } } )
* db.users.replaceOne( { name: "Ben" }, { name: "Benny", age: 39, status: "active" } )
* db.users.deleteOne( { name: "Joey" } )
* db.users.deleteMany( { status: "pending" } )
* db.users.deleteMany({})