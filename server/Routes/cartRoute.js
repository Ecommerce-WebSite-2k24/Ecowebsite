const cartRouter = require('express').Router()
const {getAll, add ,del} = require ('../Controller/cart')

cartRouter.get('/getAll',getAll)
cartRouter.post('/addOne',add)
cartRouter.delete('/delete',del)


module.exports= cartRouter