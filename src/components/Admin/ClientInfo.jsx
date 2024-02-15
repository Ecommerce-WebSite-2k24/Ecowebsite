import React from 'react'
import WhishList from '../WhishList'

const ClientInfo = () => {
  return (
    
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Client id
                </th>
                <th scope="col" className="px-6 py-3">
                    ClientName
                </th>
                <th scope="col" className="px-6 py-3">
                    favorite Items
                </th>
                <th scope="col" className="px-6 py-3">
                    Purchased Items
                </th>
                <th scope="col" className="px-6 py-3">
                    Stats
                </th>
                <th scope="col" className="px-6 py-3">
                    Total Payed
                </th>
            </tr>
        </thead>




        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td className="px-6 py-4">
                    Amjed
                </td>
                <td className="px-6 py-4">
                    <WhishList/>
                </td>
                <td className="px-6 py-4">
                    Image
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default ClientInfo
