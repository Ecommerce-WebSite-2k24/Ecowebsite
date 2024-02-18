const connection = require('../../database/index')
const { Sequelize, DataTypes } = require("sequelize");
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
    allowNull:false,
},
imagess:{
    type:DataTypes.STRING,
    allowNull:false,
    }
}

const Product= connection.define("product",productSchema)

Product.hasMany(Image)
// connection.sync({alter: true})




module.exports = {
Product
}