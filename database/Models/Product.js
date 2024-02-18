const connection = require('../../database/index')
const { Sequelize, DataTypes } = require("sequelize")
const{mysql2}=require("mysql2")

const productSchema = {

prodId:{
    type:DataTypes.INTEGER,
    autoIncrement: true,
        primaryKey: true
},
name:{
    type:DataTypes.STRING,
    allowNull:false
},
description:{
    type:DataTypes.STRING,
    allowNull:false
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

const Product= connection.define("product",productSchema)
connection.sync({alter: true})

const fetechAll=()=>{

}

module.exports = {
Product
}