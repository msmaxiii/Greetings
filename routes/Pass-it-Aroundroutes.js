const express = require('express')

const pass_it_aroundroutes = express.Router()
let pass_it_arounddata = require('../data/Pass-it-Arounddata')
pass_it_aroundroutes.get('/',(req,res)=>{
    res.status(200).json({message:`99 Bottles of beer on the wall`})
})

pass_it_aroundroutes.get(`/98`,(req,res)=>{
 
    res.status(200).json({ message:`take one down,pass it around ${pass_it_arounddata-=1}`})
})

module.exports =pass_it_aroundroutes