const express=require('express');
const router=express.Router();

//login Page
router.get('/login',(req,res)=> res.send("Login"));


//Register Page

router.get('/login',(req,res)=> res.send("Register"));

module.exports=router;