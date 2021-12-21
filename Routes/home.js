const express = require("express");
// const session = require("express-session");
const user = require("../DB/userdata");
const question = require("../DB/questiondata");


    
const router = express.Router()

// var session;
router.get("/",(req,res,next)=>{
    // console.log(req.session.isLoggedIn);
    // console.log(req.session.email);
    // var head = req.session.head;

    question.find({})
    .then(que=>{
        // console.log(que);
        res.render("home",{
            isAuth:req.session.isLoggedIn, 
            email:req.session.email,
            fname:req.session.fname,
            ques:que
        });
    })
})
router.post("/",(req,res,next) => {
    let quedata = req.body; 
    console.log(quedata.quelist);
    req.session.quelist = quedata.quelist;
    req.session.iid = quedata.iid;
    res.redirect("/answer",);
})


module.exports = router;