const db = require('../../database/Models/User')

module.exports ={
    updateClient: async (req,res)=>{
        try {
            const upd = await db.User.update(req.body,{
                where:{
                    userId:req.params.userId
                }
            })
            res.status(200).json(upd)
        }
        catch(error){
            res.status(400).send("Eroor")
        }

    },
    getClient : async(req,res) => {
        try {
        const client=await db.User.findAll({});
        res.json(client) }
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
