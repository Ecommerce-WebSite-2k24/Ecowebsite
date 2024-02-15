import React from 'react'
import Products from './Products'


const SellerInfo = () => {
  return (
    <>


   
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    id
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Average Rating
                </th>
                <th scope="col" className="px-6 py-3">
                Total Earnings
                </th>
                <th scope="col" className="px-6 py-3">
                    More Details
                </th>
            </tr>
        </thead>




        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    4
                </td>
                <td className="px-6 py-4">
                
                2999
                </td>
                <td className="px-6 py-4">
                <Products/>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</>
  )
}

export default SellerInfo
