import React from 'react'
import Products from './Products'
import {useContext,useState} from 'react'
import Cont from '../Context/Cont'
import axios from 'axios'

const SellerInfo = (userId) => {
    const [single,setSingle]=useState()
    const users = useContext(Cont)

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
                    Profile Pic
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
            {users.users.map((user,index)=>{
                if(user.role==="Seller") {
                    return (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {user.userId}
                        </th>
                        <td className="px-6 py-4">
                            {user.firstName} {user.lastName}
                        </td>
                        <td className="px-6 py-4">
                            <img src={user.image} alt="" className='w-20 h-20'/>
                        </td>
                        <td className="px-6 py-4">
                            4
                        </td>
                        <td className="px-6 py-4">
                        
                        2999
                        </td>
                        <td className="px-6 py-4"
                          onClick={()=>{
                            axios.get(`http://localhost:3000/user/get/${user.userId}`)
                            .then((res)=>{console.log(res.data,"singleeeeeeeeeeeeeeeeeeee");
                            setSingle(res.data)
                            })
                             .catch((error)=>console.log("error"))
                          
                          }}> <Products user={user} single={single}/> 
                            
                        </td>
                    </tr>
                    )
                }
            })}
           
        </tbody>
    </table>
</div>
</>
  )
}

export default SellerInfo
