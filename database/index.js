const { Sequelize } = require('sequelize')
const mysql = require('mysql2')

const connection = new Sequelize('ecome', 'root', 'azerty12345AZ', {
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