const express =require('express')

const api = express.Router()


api.post("/login",(req,res)=>{
console.log(req.body)
})
api.post("/register",(req,res)=>{
    console.log(req.body)
})

module.exports = api