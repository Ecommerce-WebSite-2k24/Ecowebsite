import React, { useState, useEffect } from "react";
import axios from "axios";
import OurProducts from "./OurProducts";
import rectangle from '../assets/rectangle.png'

const WhishList = ({userID}) => {
    const[wishes,setWishes]=useState([])

useEffect(()=>{
         axios.get(`http://localhost:3000/fav/getall/${userID}`)
        .then(result=>{
          console.log('wish',result.data)
          setWishes(result.data)}).catch(err=>console.log(err))
      },[])

const deleted=(obj)=>{

        axios
          .delete(`http://localhost:3600/fav/delete`, {
            data: obj,
          })
          .then(() => {
            console.log("deleted fav");
          })
          .catch((err) => console.log(err));
      };



  return (
    <div>
        <h1 className='text-gray-300 ml-20 mt-10'>
          Home / <span className='text-black'> WishList</span>
        </h1>
        <div className='mb-20 mt-[35px] ml-20 shadow-md rounded w-5/6 h-20 bg-white flex items-center justify-center gap-96'>
            <h1>Product</h1>
            <h1>Price</h1>
            <h1>Image</h1>
        </div>


        {wishes.length&&wishes.map((e,i)=>(
                    <div className='mb-20 mt-28 ml-20 shadow-md rounded w-5/6 h-20 bg-white flex items-center justify-center gap-96'>


        <h1>{e.NameWish}</h1>
        <h1>{e.WishPrice}$</h1>
        <img className='w-20 mb-10 mr-10' src={e.WishImage} alt="" />
        <button
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg mt-2"
                  onClick={() => {
                    const obj = {
                        idWishlist:e.idWishlist
                    };
                    deleted(obj);
                  }}
                >
                  Delete
                </button>
        </div>

        ))}


            <div className="flex mt-2 gap-8">
                <img className="h-10 w-15 " src={rectangle} alt="" />
                <h1 className="text-red-500 font-bold text-xl">Just For you</h1>
            </div>
            <OurProducts/>
        </div>
    );
}

export default WhishList;
