const express = require("express");
const mongoose = require("mongoose");

let ansschema = mongoose.Schema({
    iid : String,
    question:String,
    body : String,
});
var answer = mongoose.model('answer',ansschema);

module.exports = answer;