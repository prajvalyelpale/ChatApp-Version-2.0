const express = require("express");
const dotenv=require('dotenv');

const app=express();
dotenv.config();

app.get('/', (req, res)=>{
    res.send("Hello");
})


const PORT=process.env.PORT;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`))
