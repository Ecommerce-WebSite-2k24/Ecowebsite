import React from 'react'
import WhishList from '../WhishList'
import {useContext} from 'react'
import Cont from '../Context/Cont'
import Side from './Side'

const ClientInfo = () => {
    const users = useContext(Cont)
  console.log(users.users,"client")
  return (
    <div>

    <Side/>
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    User id
                </th>
                <th scope="col" className="px-6 py-3">
                    User Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                    User Image
                </th>
                <th scope="col" className="px-6 py-3">
                User Role
                </th>
                <th scope="col" className="px-6 py-3">
                favorite Items 
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
        {users.map((user,index)=>{
            if(user.role==="Client") {
                return (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.userId}
            </th>
            <td className="px-6 py-4">
                {user.firstName} {user.lastName} 
            </td>
            <td className="px-6 py-4">
                <img src={user.image} alt="" className='w-20'/>
            </td>
            <td className="px-6 py-4">
            {user.role}
            </td>
            <td className="px-6 py-4">
                <WhishList/>
            </td>
            <td className="px-6 py-4">
                $2999
            </td>
        </tr>
                )
            }
                    
                })}
            
        </tbody>
    </table>
</div>
</div>
  )
}

export default ClientInfo
