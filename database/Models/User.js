const connection = require('../index')
const { DataTypes} = require('sequelize')
const {Product} = require('./Product')
const {wishlist} = require('./WishList')
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
Product.belongsTo(User);

wishlist.belongsTo(User,{foreignKey:'userId'})
wishlist.belongsTo(Product,{foreignKey:'productId'})

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