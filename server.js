'use strict'
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app= express();
app.use(cors());
const mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGO_SERVER}`,{useNewUrlParser: true, useUnifiedTopology: true})
app.use(express.json());
const PORT=process.env.PORT;
const{seed}=require('./models/Favmodel');
const{getFav,createFav,deleteFav,updateFav}=require('./controller/Favcontroller');
let getApi=async(req,res)=>{
let url="https://watches-world.herokuapp.com/watches-list";
let response=await axios.get(url);
let resdata=response.data;

let finalres=resdata.map(item=>{
return new finalClass(item);

})
res.json(finalres);


}


class finalClass{
constructor(item){
this.title=item.title;
this.description=item.description;
this.toUSD=item.toUSD;
this.image_url=item.image_url;


}


}



app.put('/updateFav/:id',updateFav)
app.delete('/deleteFav/:id',deleteFav)
app.post('/createFav',createFav)
app.get('/getFav',getFav)
app.get('/getApi',getApi)
app.get('/seed',(req,res)=>{
    seed();

    res.send('hello')



})
app.listen(PORT,()=>{

    console.log(`you are on ${PORT}`)


})