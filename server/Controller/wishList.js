const { User} = require('../../database/Models/User'); 
const {Product}=require('../../database/Models/Product')
const db = require('../../database/index');
const{AddPro}=require('./product')
const {sequelize}=require('sequelize')
const UsersFav = async (req,res) => {
    try {
    //     const { userId, productId } = req.body;
    
    //     await sequelize.query(
    //      ` INSERT INTO wishlist (userId, productId, createdAt,updatedAt)
    //       VALUES (:userId, :productId, NOW(),NOW())`
    //     , {
    //       replacements: { userId, productId }
    //     });
    
    //     res.status(200).json({ message: 'Product added to wishlist successfully.' });
    //   } catch (error) {
    //     console.error('Error adding product to wishlist:', error);
    //     res.status(500).json({ error: 'Internal server error' });
    //   }

        const wishlistData = await Product.findAll({
            include: [{
                model: User,
                as: 'users',
                through: { attributes: [] } 
            }]
        });

        res.json( wishlistData);
        return wishlistData;
    } catch (error) {
        console.error('Error fetching wishlist data:', error);
    }
};



const AddToFav = async (req, res) => {
  try {
 const add = await User.findOrCreate({where:{
 userId:req.body.userUserId,
 prodId:req.body.productProdId
 }});
res.json(add)
   } catch (error) {
       console.error('Error adding product to wishlist:', error);
   }
}
        
     
        


const RemoveFav = async (req, res) => {
    try {


        const { userId, productId } = req.body;

        await sequelize.query(
         ` DELETE FROM wishlist
          WHERE userId = :userId AND productId = :productId`
        , {
          replacements: { userId, productId }
        });
    
        res.status(200).json({ message: 'Product removed from wishlist successfully.' });
      } catch (error) {
        console.error('Error removing product from wishlist:', error);
        res.status(500).json({ error: 'Internal server error' });
    //     const {userUserId, productProdId } = req.body; 
    //     const deletedCount = await wishlist.destroy({
    //         where: {userUserId:userUserId, productProdId: productProdId }
    //     });
    //     res.json({ deletedCount: deletedCount });
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { UsersFav, AddToFav, RemoveFav };


// const Op = sequelize.Op





// const wishlistP = await Product.findAll({
//   include: [{
//     model: favorit,
//     required: true,
//     where: {
//        userUserId: { [Op.eq]:userUserId} 
//     }
//   }]
// });

// favorit.create({
//     userUserId:  userUserId, 
//     productProdId: productProdId 
//   })
//   .then(() => {
//     console.log('Favorit created successfully:')
//   })
//   .catch((error) => {
//     console.error('Error creating favorit:', error)
//   });

// module.exports = {
//     wishlistP
// };