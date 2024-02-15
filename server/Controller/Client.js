const db = require('../../database/Models/User')

module.exports ={
    updateClient: async (req,res)=>{
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const newpwd = req.body.password;
        const id = req.params.userId;
        try {
            const hashpwd = await bycribt.hash(newpwd, 10);
            const result = db.User.update([firstName,lastName, hashpwd, id]);
            res.status(200).json(result);
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

    // update: async (req, res) => {
    //     const newname = req.body.name;
    //     const newpwd = req.body.pwd;
    //     const id = req.params.iduser;
    //     try {
    //       const hashpwd = await bycribt.hash(newpwd, 10);
    //       const result = updateU([newname, hashpwd, id]);
    //       res.status(200).json(result);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   },