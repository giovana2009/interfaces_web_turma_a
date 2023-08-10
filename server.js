const express = require('express');

const app = express();

app.get('/', (request, response)=>{
    response.send("Olá mundo");
})

app.listen(8000, ()=>{
    console.log("Abrindo servidor 🚀");
})