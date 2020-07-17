const express = require('express');
const app = express();
const cropRoute = require('./route/crop');


app.use('/c',cropRoute)


app.listen(3000,(req,res)=>{
    console.log("Started at 3000");
});