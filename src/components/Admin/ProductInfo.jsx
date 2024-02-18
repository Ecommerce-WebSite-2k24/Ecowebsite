import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {useContext} from 'react'
import Cont from '../Context/Cont'

const ProductInfo = () => {
    
  

    const prods = useContext(Cont)
    console.log(prods.prods,"prods")
  return (
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Images
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Ratings
                </th>
            </tr>
        </thead>




        <tbody>
            {prods.prods.map((prod,index)=>{
                
                return (
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {prod.prodId}
                </th>
                <td className="px-6 py-4">
                {prod.name}
                </td>
                <td className="px-6 py-4">
             <img src={prod.images} alt=""  className='w-32 h-24'/>
                </td>
                <td className="px-6 py-4">
                    {prod.description}
                </td>
                <td className="px-6 py-4">
                    ${prod.price}
                </td>
                <td className="px-6 py-4">
                    
             <Box style={{"display":"flex","alignItems":"center"}}><Rating value={prod.ratings} readOnly /> <p> ({prod.ratings })</p></Box>
                </td>
            </tr>
                )
            })}
            
        </tbody>
    </table>
</div>
  )
}

export default ProductInfo
