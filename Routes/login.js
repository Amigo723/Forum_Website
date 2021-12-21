const express = require("express");
// const session = require('express-session');
const user = require("../DB/userdata");


const router = express.Router()
// var session;

router.get("/login",(req,res,next)=>{
    // console.log(req.session.isLoggedIn);
    res.render("login")
})
router.post("/login",(req,res,next)=>{ 
    // console.log(req.session)
    var email = req.body.email;
    user.findOne({email:email})
        .then(User=>{
            if(User){
                req.session.isLoggedIn = true;
                req.session.email=req.body.email;
                req.session.fname=User.fullname;
                req.session.bio=User.bio;
                req.session.gender=User.gender;
                
                console.log(User.fullname);
                res.redirect('/');
            }
            res.redirect('/login')
        })
        .catch(err=>{
            console.log(err);
        })
    // if(req.body.email == User.email){
    //     res.redirect('/');
    //     console.log("done");
    // } else{
    //     console.log("no logged in");
    // }
})         
module.exports = router;