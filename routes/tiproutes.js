const express =require('express')

const tiproutes = express.Router()

tiproutes.get('/:total/:tipPercentage',(req,res)=>{
let total =req.params.total
let tipPercentage = req.params.tipPercentage
let tip =Number(total)*Number(tipPercentage)
res.status(200).json({message:`The amount of the tip is ${tip}`})
})

module.exports =tiproutes