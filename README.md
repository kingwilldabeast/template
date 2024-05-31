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
* file "package.json" **Note: Make sure it references the correct JS file of server.js**
* folder "node_modules"
* file "package-lock.json"


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

Notes: 
* models filenames are singular, seed filenames are plural.
* In model file, the Schema name is capital singular.
* In seed file, the array is plural.
* the id is not defined by the user, it is generated automatically when an object is created 
* Parents have their own ID/primary key
* Children have their own ID/primary key, but also have a foreign key, which is the Parent's primary key
* the Foreign Key is presented as array: theParent[0]._id
* schema can have subdocument or embedded schema, example is in employee.js and employee.js


## Mongo lesson, on Wednesday 5/22/2024:
https://github.com/kingwilldabeast/u2_lesson_mongoDB

TERMINAL COMMANDS for mongo:
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

## Friday 5/24/2024 combining Mongoose and Express
https://github.com/kingwilldabeast/u2_lesson_mongoose_express
https://github.com/kingwilldabeast/u2_mongoose_express_plants

TERMINAL COMMANDS and other steps 
1. fork and clone into terminal
2. mkdir client controllers db models seed 
2. touch client/{index.html,style.css,script.js} controllers/{EventController,ComicController,VenueController}.js db/index.js models/{event,comic,venue,index}.js seed/initData.js server.js
2. touch query.js  //OPTIONAL
2. touch seed/{brands,products}.js //Alternate
1. npm init -y //creates package.json
2. npm install mongoose express cors morgan body-parser
2. * mongoose //creates node modules folder and package-lock.json
2. * express //necessary for controllers 
2. * cors //used to make smooth the connection between front end and back end
2. * morgan //shows commands that are in command line
2. * body-parser //used in create and update json in thunder client
3. npm install nodemon --save-dev
3. add to package.json scripts:  "start":"node server.js",
  "dev":"nodemon server.js"
5. add stuff to server.js including: 
* const logger = require('morgan');
* const bodyParser = require('body-parser')
* app.use(logger('dev'))
* app.use(bodyParser.json()) 
2. node seed/brands.js
2. node seed/products.js
1. touch .gitignore //OPTIONAL
add:
 /node_modules
.DS_Store
5. add mongo stuff to the express stuff in server.js
5. add file paths to server.js
to add controllers:
7. add stuff to controller but use res.json not res.send like before
8. add controller variable and app.get filepaths to server.js
9. npm run dev