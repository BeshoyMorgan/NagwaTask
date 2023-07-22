//  make rest api 
const express=require("express");
const app=express();
var PORT=3333;// the port for our app 
var cors =require("cors");

var wordsRoute=require("./routes/words");// to use this routes in the entry point of our app and handle the middleware 

var rankRoute=require("./routes/rank");// to use this routes in the entry point of our app and handle the middleware 
app.use(cors());// to use our api in browser 

app.use(express.json());//middle ware to handle comming data in json form
app.use("/words",wordsRoute);//middleware to use words route
app.use("/rank",rankRoute);//middleware to use rank route



app.listen(PORT,()=>{console.log(`server started successfully on port ${PORT}`)})



