
//three module needed cros,express dotenv
//nodemon:to automaticallyy detct changes and re run the server
require('dotenv').config()
const express = require('express');
const cors = require('cors');
require('./DB/connection');
const routes=require('./Routes/router')
const userRoutes =  require('./Routes/userRouter')
const cartServer=express();
cartServer.use(cors())
cartServer.use(express.json());
cartServer.use(routes)
cartServer.use(userRoutes)
const PORT=3000;

cartServer.listen(PORT,()=>{
    console.log("Cart server running successfully in port:",PORT);
    
})
cartServer.get('/',(req,res)=>{
    res.send('<h3>cart sever suucesulyy </h3>')
})
