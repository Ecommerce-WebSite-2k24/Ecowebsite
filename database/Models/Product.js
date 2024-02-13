const connection = require('../../database/index')
const { Sequelize, DataTypes } = require("sequelize");

const productSchema = {
id:{
    type:DataTypes.STRING,
    autoIncrement: true,
    primaryKey:true
},
name:{
    type:DataTypes.STRING,
    allowNull:false,
},
description:{
    type:DataTypes.STRING,
    allowNull:false,
},
price:{
    type:DataTypes.INTEGER,
    allowNull:false,
},
ratings:{
    type:DataTypes.INTEGER,
    allowNull:false,
},
images:{
    type:DataTypes.STRING,
    allowNull:false,
    }
}
console.log(connection)
const Product= connection.define("products",productSchema)
connection.sync({alter: true})

const fetechAll=()=>{

}

module.exports = {
Product
}