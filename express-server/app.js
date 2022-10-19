const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/html");
});

app.get('/main', (req,res)=>{
    res.send("this is main");
});

app.listen(port, () => {
    console.log("starting server...");
});