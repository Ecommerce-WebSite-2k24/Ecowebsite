const connection = require('../../database/index')
const { Sequelize, DataTypes } = require("sequelize")
const{mysql2}=require("mysql2")
// const {Category} = require('./Category')
const {Image}=require('./Image')

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
    allowNull:true,
},
file:{
    type:DataTypes.STRING,
    allowNull:false,
    }
}

const Product= connection.define("product",productSchema,{timestamps:false})

Product.hasMany(Image)
connection.sync({alter: true})




module.exports = {
Product
}