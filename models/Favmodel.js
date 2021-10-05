'use strict'

const mongoose = require("mongoose");
const WatchScema = new mongoose.Schema({
title:String,
description:String,
toUSD:String,
image_url:String,

})


const WatchModel = mongoose.model('Watch',WatchScema );





let seed=()=>{

let newWatch=new WatchModel({

    
        title: "Justice Fashion",
        description: "new analog type stylish watch with multicolour dial designer latest watches for man Analog Watch - For Men",
        toUSD:"123",
        image_url: "https://rukminim1.flixcart.com/image/800/960/kgv5x…point-of-care-original-imaevxt5p32nw5wj.jpeg?q=50",
      

})

newWatch.save();



}

module.exports={seed,WatchModel}