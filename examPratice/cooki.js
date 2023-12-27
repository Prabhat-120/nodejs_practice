const express = require("express");
const cookieparser = require("cookie-parser");

const app=express();

app.use(cookieparser());

app.get("/setCookie",(req,res)=>{
    res.cookie("myCookie","prabhat");
    res.send("set cookie successful ....");
});

app.get('/deleteCookie',(req,res)=>{
    res.clearCookie("myCookie");
    res.send("cookie")
})

const port= 3000;
app.listen(port,()=>{
    console.log(`server run at ${port}`)
})