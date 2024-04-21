const express=require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction=require('./models/Transaction.js');
const { default: mongoose } = require('mongoose');
const app=express();

app.use(cors());
app.use(express.json());
app.get('/api/test',(req,res)=>{
    res.json('test ok3');
});

app.post('/api/transaction', async(req,res)=>{
  //console.log(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    const{name,description,datetime,price} =req.body;
    const transaction=await Transaction.create({name,description,datetime,price});
    //to connect to our database 
    
     res.json(transaction);
})
app.listen(4040, () => {
    console.log('Server is running on port 4040');
});