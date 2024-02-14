const clientRouter = require('express').Router();
const {updateClient,getClient,addClient,getSome,getOneClient} = require('../Controller/Client');

clientRouter.put('/update/:userId',updateClient)
clientRouter.get("/getAll",getClient)
clientRouter.get("/getClient/:role",getSome)
clientRouter.post("/addClient",addClient)
module.exports=clientRouter