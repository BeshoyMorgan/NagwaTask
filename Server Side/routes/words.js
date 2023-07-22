//to make words router 
const express=require("express");
var router=express.Router();

//regester all routes that we need
const  {getWords}=require("../controllers/wordsController")
router.get("/",(req,res,next)=>{
res.status(201).json(getWords());
})





module.exports=router;