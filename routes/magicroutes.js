const express =require('express')
const magicquotes = require('../data/magicdata')

const magicroute =express.Router()

magicroute.get('/',(req,res)=>{
    res.status(200).json({message:'Do you feel lucky?'})
})

magicroute.get('/:question',(req,res)=>{
    let question =req.params.question
    let idx= Math.floor(Math.random()*magicquotes.length)
     res.status(200).json({message:`${question},${magicquotes[idx]}`})

})
module.exports = magicroute