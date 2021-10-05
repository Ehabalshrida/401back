'use strict'
const {WatchModel}=require('../models/Favmodel');
const axios = require('axios');



let updateFav=(req,res)=>{
let id=req.params.id;
let newobj=req.body;
WatchModel.findOne({_id:id}).then(item=>{
    item.title=newobj.title
    item.description=newobj.description
    item.toUSD=newobj.toUSD
    item.image_url=newobj.image_url


    item.save()

}).then(()=>{

    WatchModel.find().then(data=>{
res.json(data)

    });

});


}



let deleteFav=(req,res)=>{
let id=req.params.id;

WatchModel.findByIdAndDelete(id).then(()=>{
    WatchModel.find().then(data=>{

res.json(data);

    })
    


})


}

let createFav=(req,res)=>{

let newobj=req.body;
let newWatch=new WatchModel(newobj);
newWatch.save();

WatchModel.find().then(data=>{


    res.json(data);
})

}
let getFav=(req,res)=>{
    WatchModel.find().then(data=>{

res.json(data)

    })



}





module.exports={getFav,createFav,deleteFav,updateFav}

