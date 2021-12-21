const express = require("express");
const user = require("../DB/userdata");
const question = require("../DB/questiondata");
const { rawListeners } = require("../DB/userdata");
const answer = require("../DB/answerdata");



const router = express.Router()

// var session;
router.get("/answer",(req,res,next)=>{
    que=req.session.quelist;
    iid = req.session.iid;
    // console.log(iid);
    answer.find({iid:iid})
        .then(answers=>{
            res.render("answer",{
                isAuth:req.session.isLoggedIn, 
                fname:req.session.fname,
                que:que,
                iid:iid,
                anss:answers
            })   
        })
    // question.find({iid:iid})
    // .then(data =>{
    //     // console.log(data);
    //     res.render("answer",{
    //         isAuth:req.session.isLoggedIn, 
    //         email:data.email,
    //         fname:data.fname,
    //         iid:data.iid
    //     });
    // })
    // console.log(req.session.isLoggedIn);
})
router.post("/answer",(req,res,next) => {
    ansdata = req.body;
    console.log(ansdata);
    email=req.session.email;
    var newanswer = new answer({
        iid:ansdata.iid,
        question:ansdata.question,
        body:ansdata.body
    })
    newanswer.save();

    res.redirect("/")
    // question.find({email:email})
    // // data = req.body;
    // // que = data.
    // // console.log(req.body);
    // res.render("answer",{
    //     isAuth:req.session.isLoggedIn, 
    //     email:req.session.email,
    //     fname:req.session.fname,
    //     que:req.body.quelist,
    //     iid: req.body.iid
    // });
})


module.exports = router;