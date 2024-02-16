const categoryRouter = require('express').Router();
const {getCategories,getOneCategory,deleteCategory,addCategory,UpdateCategory} = require('../Controller/Category');

categoryRouter.get('/getAll',getCategories)
categoryRouter.get('/getOne/:catId',getOneCategory)
categoryRouter.delete('/delete/:catId',deleteCategory)
categoryRouter.post('/add',addCategory)
categoryRouter.put('/update/:catId',UpdateCategory)

module.exports=categoryRouter