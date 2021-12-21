const express = require("express");
// const session = require("express-session");
const user = require("../DB/userdata");



const router = express.Router();

router.get("/logout",(req,res,next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
      });
})

module.exports = router;