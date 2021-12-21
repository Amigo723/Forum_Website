const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const pug = require('pug');
const nodemon = require('nodemon');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongodb-session')(session);
const login = require("./Routes/login");
const home = require("./Routes/home");
const signup = require("./Routes/signup");
const profile = require("./Routes/profile");
const logout = require("./Routes/logout");
const ask = require("./Routes/ask");
const answer = require("./Routes/answer");
const searched = require("./Routes/searched");

// const question = require("./Routes/question");
// const answer = require("./Routes/answer");
// const user = require("./DB/userdata");

// const cheerio = require('cheerio');
const MONGODB_URI = "mongodb://localhost/Discusso";
const app = express();
let store = new MongoDBStore({
    uri:MONGODB_URI,
    collection:"sessions"
});

const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    store:store,
    resave: false 
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(MONGODB_URI,{useNewUrlParser:true , useUnifiedTopology:true}).then(()=>{
    console.log("DB connected");
})


app.set('view engine','pug');
app.set('views',path.join(__dirname, 'views'));
app.use('/',express.static(path.join(__dirname, 'static')));


app.use(login);
app.use(signup);
app.use(ask);
app.use(answer);
app.use(profile);
app.use(home);
app.use(logout);
app.use(searched);




app.listen(8080,()=>{
    console.log("server started");
})