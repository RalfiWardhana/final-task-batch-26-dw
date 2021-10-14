const dataBase = require("mysql2");

const connection = dataBase.createPool({
    host : "localhost",
    user : "root",
    password : null,
    database : "web_task",
    connectionLimit : 6
})

connection.getConnection((err)=>{
    if(err) throw err;
    console.log("Berhasil terkoneksi");
})

module.exports = connection;