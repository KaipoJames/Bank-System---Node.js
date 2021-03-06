// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const passport = require('passport');
require('dotenv').config();

// Enables the use of ES6 import statements throughout our application. (ESM Package)
require = require("esm")(module/*, options*/);

// REQUIRE CONFIG DATA
const addMiddleware = require("./config/middleware.js");
const addPassport = require("./config/passport.js");
const addLocalStrategy = require("./config/strategies/strategy.js");


// REQUIRE OUR MODELS
const User = require('./src/models/user');

const app = express();
// Implement ejs template engine to render html file from views folder
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

//MIDDLEWARE
addMiddleware(app, express);

//PASSPORT + LOCAL STARTEGY
addPassport(passport, User);
addLocalStrategy(passport, User);

// CONNECT TO EXPRESS SERVER, THEN TO MongoDB
app.listen(process.env.PORT || 5000, (err, res) => {
    if (err) console.log(err);
    console.log("Server is listening on port 5000 at: http://localhost:5000");

    mongoose.connect(process.env.URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true, 
        useFindAndModify: true,
    }).then(() => {
        console.log("Connected to mongoDB!"); 
    },
    err => { console.log(err) },
    );
});
