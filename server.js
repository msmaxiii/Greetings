const express = require('express')
const bodyParser = require('body-parser')
const greetingsRoutes = require('./routes/greetingsroutes')
const tiproutes = require('./routes/tiproutes')
const magicroute = require('./routes/magicroutes')
const pass_it_aroundroutes = require('./routes/pass_it_aroundroutes')


const port = 7000

const app = express()

app.use(bodyParser.json())
app.use("/greetings",greetingsRoutes)
app.use('/tip',tiproutes)
app.use('/magic',magicroute)
app.use('/pass',pass_it_aroundroutes)


app.get('/',(req,res)=> {
    res.status(200).json({ message: "API UP"})
    })

app.listen(port, ()=>{
    console.log('Present')
})