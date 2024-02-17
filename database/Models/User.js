const connection = require('../index')
const { DataTypes} = require('sequelize')
const {Product} = require('./Product')

const User = connection.define("user", {
    userId:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    role:{
        type:DataTypes.STRING,
        // allowNull:false
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:true
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:true
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

User.hasMany(Product)
Product.belongsToMany(User, {through:"wishlist"})
Product.belongsToMany(User, {through:"cart"})

User.sync({ alter: true });
    

const findOne=()=>{
    User.findAll({where:{
        id:id
    }})
}





module.exports={
   User
}