const express = require("express");
// const session = require('express-session');
const bcrypt = require('bcryptjs');
const url = require('url');

const user = require("../DB/userdata");

const router = express.Router()

router.get("/signup",(req,res,next)=>{
    res.render("signup.pug")
})

router.post("/signup",(req,res,next)=>{
    var userInfo = req.body; //Get the parsed information
    var email = userInfo.email;
    var psw = userInfo.psw;
    console.log(userInfo);

    user.findOne({email:email})
        .then(userDoc=>{
            if(userDoc){
               return  res.redirect("/signup");
            }
            return bcrypt
            .hash(psw,12)
            .then(hashedpassword=>{
                var newUser = new user({
                    fullname: userInfo.fname,
                    email: userInfo.email,
                    gender:userInfo.gender,
                    bio:userInfo.bio,
                    password: hashedpassword
                    });
                return newUser.save();
             })
             .then(result =>{
                 res.redirect("/login")
             })
         })
         .catch(err=>{
             console.log(err);
         })

    // var newUser = new user({
    //     fullname: userInfo.fname,
    //     email: userInfo.email,
    //     password: userInfo.psw,
    //     repassword: userInfo.repsw
    //     });
        
    //     newUser.save(function(err, user){
    //     if(err){
    //         console.log("not saved");
    //         res.redirect('/signup', {message: "Database error", type: "error"});
    //     }else{
    //         console.log("saved")
    //         res.redirect('/login');
    //     }
    // });
    
})

module.exports = router;