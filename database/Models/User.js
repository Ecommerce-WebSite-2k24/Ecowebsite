const connection = require('../index')
const { DataTypes} = require('sequelize')
const {Product} = require('./Product')

const User = connection.define("user", {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
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



User.sync({ force: true });
    


const fetchall=()=>{

}
module.exports={
   User
}