const express = require("express");
const mongoose = require("mongoose");

let queschema = mongoose.Schema({
    title : String,
    body : String,
    email:String,
    iid: String
});
var question = mongoose.model('question',queschema);

module.exports = question;