const productRouter = require('express').Router();
const {AllPro,GetOnePro,AddPro,DeletePro,UpdatePro,GetOneByUser,UpdateRating,updateSellerProd} = require('../Controller/product.js');

productRouter.get('/product',AllPro)
productRouter.get('/product/:prodId',GetOnePro)
productRouter.get('/findproduct/:userUserId',GetOneByUser)

productRouter.post('/product',AddPro)
productRouter.put('/product/:prodId',UpdatePro)
productRouter.put('/updateRatings/:prodId',UpdateRating)
productRouter.put("/update/:prodId",updateSellerProd)
productRouter.delete('/product/:prodId',DeletePro)

module.exports=productRouter;