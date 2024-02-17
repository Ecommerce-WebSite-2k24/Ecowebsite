import React, { useState, useEffect } from "react";
import axios from "axios";
import OurProducts from "./OurProducts";
import rectangle from '../assets/rectangle.png'


const WhishList = () => {
// const[data,setData]=useState({})
// const [refresh, setRefresh] = useState(false);

// useEffect(() => {
//   axios
//     .get(`http://localhost:3000/fav/getall${id}`, {
//       // headers: {
//       //   Autho: token,
//       // },
//     })
//     .then((res) => {
//       console.log(res.data)
//       setLessons(res.data)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }, [refresh])

  return (
    <div>    
     <div class="relative w-4/5 mt-20 p-8 mx-auto">
         <h2>wishList ()</h2>
        <div class="gap-20">
            <div class="flex mt-2 gap-8">
                <img  class="h-10 w-15 " src="" alt="" />
            </div>
            <div class="flex p-8">
                <div class="p-2 w-full max-w-sm bg-white rounded-lg dark:bg-gray-800">
                    <div class="bg-slate-100"> 
                        <a href="#" class="bg-black">
                        </a>
                    </div>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">The north coat</h5>
                    </a>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">$260</span>
                    </div>
                    <div class="flex items-center mt-2.5 mb-5">
                         <div class="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg class="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                           
                            
                        </div>
                    </div>
                </div>
                </div>
              
            </div>
        </div>
    </div>
    <div className="flex mt-2 gap-8">
                <img  className="h-10 w-15 " src={rectangle} alt="" />
                <h1 className="text-red-500 font-bold text-xl	">Just For you</h1>
            </div>
    <OurProducts/>
    </div>
   
  
    
  )
}

export default WhishList
