const express=require('express')
const bodyParser=require('body-parser')
const db=require('./mongoose')
const app=express()
const cors=require('cors')   

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/upload`));
app.use(cors())
const router=require('./Routes')
app.use('/ecommerce',router) 

app.listen(3001,()=>{
    console.log("Server created successfully");
})