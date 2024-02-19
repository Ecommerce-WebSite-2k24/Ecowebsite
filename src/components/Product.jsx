import React ,{useEffect,useState}from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Cookies from 'js-cookie';

function Product({func1}) {

    console.log(func1,'hey from product')
const id = Cookies.get("id")
    const [productData, setProductData] = useState([]);
    const navigate = useNavigate();

    const addwish=(obj)=>{
        axios.post('http://localhost:3000/fav/add',obj)
        .then(r=>console.log('addded')).catch(err=>console.log(err))
      }

      const addtocart=(obj)=>{
        axios.post('http://localhost:3000/cartt/addOne',obj).then((res)=>
        console.log(res,'product has been added'))
        .catch(err=>console.log(err))
      }


 useEffect(() => {
     axios.get("http://localhost:3000/apii/product")
         .then((response) => {
           console.log('gg data',response.data);
             setProductData(response.data);

         })
         .catch((error) => {
             console.error("Error fetching :", error);
         });

 }, []);

  //finale

    return (
           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4   ">
                {productData.map((el,i)=>{
                return(
                    <div key={i} className="bg-gray-100 p-4 rounded-lg px-5 pb-5">



                    <div className="h-48 overflow-hidden mb-2">
                        <img src={el.file} alt={el.name} className="w-full h-full object-cover" onClick={() =>{navigate("/Details",{el:el}); func1(el) }} />
                    </div>



                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{el.name}</h5>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${el.price}</span>
                        <button className="bg-black text-white px-14 py-2" onClick={()=>{addtocart(
                            {  CartQuantity: 10,
                            userId: 9,
                            productId: 35
                            }

                        )}
                    }>Add To Cart</button>
                        <FavoriteIcon onClick={()=> {const obj = {
                        idWishlist:el.idWishlist
                    };
                    addwish(obj);}}/>
                    </div>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            {[...Array(el.ratings)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                            ))}
                            {[...Array(5 - el.ratings)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-gray-200 dark:text-gray-600" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>)})}
            
        </div>
    );
}

export default Product;
