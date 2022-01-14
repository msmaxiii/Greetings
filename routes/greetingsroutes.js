const express = require('express')

const greetingsRoutes = express.Router()

greetingsRoutes.get('/',(req,res)=>{
    res.status(200).json({ message:`Hello stranger`})        
}) 

greetingsRoutes.get('/:name',(req,res)=>{
let name =req.params.name
res.status(200).json({ message:`What's up ${name}`})
})


module.exports =greetingsRoutes