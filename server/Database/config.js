const mysql = require ("mysql")

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    port:8889,
    database:'Kije'
})

module.exports = db