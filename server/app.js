const express = require("express")
const db = require('./Database/config')
//const bcrypt = require("bcryptjs")
const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())

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