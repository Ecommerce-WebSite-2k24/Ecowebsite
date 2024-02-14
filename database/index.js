const { Sequelize } = require('sequelize')
const mysql = require('mysql2')

const connection = new Sequelize('ecommerce', 'root', 'nour123', {
    host:'localhost',
    dialect:'mysql'
})

connection.authenticate()
.then(()=>{
    console.log("connection has been successfully established");
})
.catch((err)=>{
    console.log(err);
})

module.exports = connection