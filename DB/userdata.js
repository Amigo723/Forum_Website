const express = require("express");
const mongoose = require("mongoose");

let userschema = mongoose.Schema({
    fullname : String,
    email : String,
    gender:String,
    bio:String,
    password : String,
});
var user = mongoose.model('user',userschema);

module.exports = user;