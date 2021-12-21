const express = require("express");
const user = require("../DB/userdata");
const question = require("../DB/questiondata");




const router = express.Router()

function randomUniqueNum(range, outputCount) {

    let arr = []
    for (let i = 1; i <= range; i++) {
      arr.push(i)
    }
  
    let result = [];
  
    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }
  
    return result;
  }

// var session;
router.get("/ask",(req,res,next)=>{
    const random_array = randomUniqueNum(1000,1);
    const random = random_array.toString();
    res.render("ask",{
        isAuth:req.session.isLoggedIn, 
        email:req.session.email,
        fname:req.session.fname,
        id: random
    });
})
router.post("/ask",(req,res,next) => {
    quedata = req.body;
    req.session.questions = quedata;
    req.session.head = quedata.title;
    req.session.body = quedata.body;
    req.session.id = quedata.id;
    var newque = new question({
        title:quedata.title,
        body:quedata.body,
        email:req.session.email,
        iid: quedata.iid
    })
    console.log(newque);
    newque.save()
    // console.log(req.session.body,req.session.head);
    res.redirect("/")
})


module.exports = router;