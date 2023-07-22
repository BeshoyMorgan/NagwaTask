//to make words router 
const express=require("express");
var router=express.Router();

//regester all routes that we need
 const  {calculateRank}=require("../controllers/rankController");
router.post("/",(req,res,next)=>{
    let score=req.body.score;
  
    res.status(201).json(calculateRank(score));
})





module.exports=router;