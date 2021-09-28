'use strict'
const axios = require('axios');
const mongoose = require("mongoose");
const {MyFruiteModle ,Fruit} =require('../models/fruit.model')



const getFruit = (req,res) =>{

axios.get('https://fruit-api-301.herokuapp.com/getFruit').then ((result) => {
    let fruitArray=result.data.fruits.map((item) => {
 return new Fruit(item.name,item.image,item.price)
    
    });
    res.json(fruitArray)
    console.log(fruitArray)
})}



const addFav = (req,res)=>{
console.log('reqBody', req.body)
let{image,name,price}=req.body

let MyFruite = new MyFruiteModle ({
image:image,
name:name,
price:price

});
MyFruite.save();
res.json(MyFruite)
}



const getFav = (req,res)=> {

    MyFruiteModle.find((davData,error) =>{

res.json(davData)


    })


}


const deleteFruit = async (req, res) => {
    const fruitName = req.params._id;
    MyFruiteModle.deleteOne({ _id:fruitName  }, (error, deleteFav) => {
      res.json(deleteFav);
    });
  };

module.exports ={getFruit,addFav,getFav,deleteFruit }