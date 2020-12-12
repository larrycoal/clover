const express = require("express")
const db = require('./Database/config')
const bodyPaser = require('body-parser')
const cors = require('cors')
const cookie = require('cookie-parser')
const session = require('express-session')

const app = express()
app.use(bodyPaser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET","POST"],
    credentials:true
}))

app.use(cookie())
app.use(session({
    key:"user",
    secret:"kije",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60*60*24
    }
}))



db.connect((error,result)=>{
    error?console.log(error):console.log(result)
})

//Seed a user
// const temp = {
//     email:"admin@kije.com",
//     password:"password",
//     name:"Admin",
// }
// db.query('SELECT email FROM users WHERE email = ?',[temp.email],async (error,result)=>{
//   if(error){
//       console.log(error)
//   }else{
//     var hashPass = await bcrypt.hash(temp.password,8)
//   }
//   db.query('INSERT INTO users SET ?',{name:temp.name,email:temp.email,password:hashPass},(error,result)=>{
//       if(error){
//           console.log(error)
//       }else{
//           console.log(result)
//       }
//   })
// })

app.use("/auth",require('./Api/auth'))

app.listen(3001,()=>{
    console.log("connected")
})