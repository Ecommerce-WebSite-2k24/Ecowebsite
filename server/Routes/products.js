const productRouter = require('express').Router();
const {AllPro,GetOnePro,AddPro,DeletePro,UpdatePro} = require('../Controller/product.js');

productRouter.get('/product',AllPro)
productRouter.get('/product/:prodId',GetOnePro)
productRouter.post('/product',AddPro)
productRouter.put('/product/:prodId',UpdatePro)
productRouter.delete('/product/:prodId',DeletePro)

module.exports=productRouter;