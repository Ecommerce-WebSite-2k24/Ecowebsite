const db = require('../../database/Models/User')
const bycribt = require("bcrypt");
module.exports ={
    updateClient: async (req,res)=>{
    const role=req.body.role
   const firstName=req.body.firstName
   const lastName=req.body.lastName
   const email=req.body.email
   const newpwd=req.body.password
   const img =req.body.image
        try {
            const hashpwd = await bycribt.hash(newpwd, 10);
            const upd = db.User.update({role:role,firstName:firstName,lastName:lastName,email:email,password:hashpwd,image:img},{
                where:{userId:req.params.userId}
            });
            res.status(200).json(upd);
          } catch (err) {
            console.log(err);
          }

    },  
    getClient : async(req,res) => {
        try {
        const client=await db.User.findAll({});
        res.json(client) }
         catch (error) {res.send(error) }
    },
    getOneClient:async(req,res)=>{
        try{
            const client=await db.User.findOne({where:{userId:req.params.userId}})
            res.json(client)
        }
        catch (error) {res.send(error) }
    },

    getSome:async(req,res)=>{
        try{
            clients=await db.User.findAll({
                where:{role:req.params.role}
            })
            res.status(200).json(clients)
    }
    catch(error){
        res.send(error)
    }
},
    

    addClient:async(req,res)=>{
        try {
            const result=await db.User.create(req.body)
            res.json(result)
            console.log(req.body) 
        } 
            catch (error) {
                console.log(err) }
        }
    }

    
      