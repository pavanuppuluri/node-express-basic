

const http = require('http');
const express = require('express');
const app = express();


app.use('/skills',(req,res,next)=>{
    res.send('<ul><li>Java, Spring Boot</li><li>MERN</li><li>MEAN</li><li>AWS etc...</li></ul>');
});

app.use('/',(req,res,next)=>{    
    res.send('<h1>Home Page - Welcome to my GitHub<h1>');
});

app.listen(3000);