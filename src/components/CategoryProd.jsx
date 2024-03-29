import React from 'react'

function CategoryProd(route) {
  return (
    <div>
        <div>CategoryProd </div>
        <div>{console.log( route.categories , "trynna find some")}</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4   ">
                {route.categories.map((el,i)=>{
                return(
                    <div key={i} className="bg-gray-100 p-4 rounded-lg px-5 pb-5">



                    <div className="h-48 overflow-hidden mb-2">
                        <img src={el.file} alt={el.name} className="w-full h-full object-cover"  />
                    </div>



                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{el.name}</h5>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${el.price}</span>
                        <button className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Add to cart</button>
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



    
    </div>
  )
}

export default CategoryProd