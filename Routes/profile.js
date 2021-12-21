const express = require("express");
const session = require('express-session');
const user = require("../DB/userdata");
const question = require("../DB/questiondata");

const router = express.Router()

router.get("/profile",(req,res,next)=>{
    var email = req.session.email;
    question.find({email:email})
            .then(ques=>{
                // ques.forEach(ele => {
                //     req.session.per_que = ele.body;
                //     // console.log(req.session.per_que);
                // });
                req.session.per_que = ques; 
                console.log(req.session.per_que);
                res.render("profile",{
                    isAuth:req.session.isLoggedIn, 
                    email:req.session.email,
                    fname:req.session.fname,
                    ques:req.session.per_que,
                    gender:req.session.gender,
                    bio:req.session.bio,
                })
            })
    // console.log(req.session.per_que);
})
router.post("/profile",(req,res,next)=>{    
            res.redirect('profile');  
})         
module.exports = router;
