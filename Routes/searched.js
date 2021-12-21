const express = require("express");
// const session = require("express-session");
const user = require("../DB/userdata");
const question = require("../DB/questiondata");
const answer = require("../DB/answerdata");



    
const router = express.Router()

// var session;
router.get("/searched",(req,res,next)=>{
    // searchitem = req.body;
    console.log(req.query.search);
    const searchfield = req.query.search;
    question.find({body:{$regex: searchfield}})
        .then(data=>{
            console.log(data);
            res.render("searched",{
                isAuth:req.session.isLoggedIn, 
                fname:req.session.fname,
                data:data
            })
        })
})
router.post("/searched",(req,res,next) => {
    let quedata = req.body; 
    console.log(quedata.quelist);
    req.session.quelist = quedata.quelist;
    req.session.iid = quedata.iid;
    // res.redirect("/answer",);
    res.redirect("/answer");
})


module.exports = router;