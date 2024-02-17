const wishrouter =  require('express').Router();
const {UsersFav,AddToFav,RemoveFav}=require('../Controller/wishList')



wishrouter.get('/getall',UsersFav)
wishrouter.post('/add',AddToFav)
wishrouter.delete('/delete',RemoveFav)

module.exports= wishrouter;