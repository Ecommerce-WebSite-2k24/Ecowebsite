const { Sequelize } = require('sequelize')
const mysql = require('mysql2')

const connection = new Sequelize('commerce', 'root', 'efta7 yasemsem', {
    host:'localhost',
    dialect:'mysql'
})

connection.authenticate() 
.then(()=>{
    console.log("connection has been successfully establissshed");
})
.catch((err)=>{
    console.log(err);
})


module.exports = connection