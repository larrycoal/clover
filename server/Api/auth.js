const express =require('express')
const db = require('../Database/config')
const api = express.Router()
const bcrypt = require("bcryptjs")

api.post("/login",(req,res)=>{
    let {email,password} = req.body 
db.query("SELECT * FROM users WHERE email = ?",[email],(err,result)=>{
    if (result[0].length>0){
       bcrypt.compare(result[0].password,password,(err,response)=>{
           if (response){
               req.session.user = result
            res.json(result)
           }else{
            res.send({message:"wrong username/password"})
           }
       })
       
    }else{
        res.send({message:"wrong username/password"})
    }
})
})
api.post("/register",(req,res)=>{
    let {email,password,name,id} = req.body
    db.query("SELECT email FROM users WHERE email = ?",[email],(err,result)=>{
        if (result[0]){
            res.json({message:"User Already exist"})
        }else{
            bcrypt.hash(password,8 ,(hash)=>{
                db.query("INSERT INTO users SET ?",{id,name,email,password:hash},(err,result)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log(result)
                    }
                })
            })
        }
    })
})
api.get("/user",(req,res)=>{
    if (req.session.user){
        res.send({
            loggedIn:true,
            user:req.session.user
        })
    }else{
        res.send({
            loggedIn:false
        })
    }
})


module.exports = api