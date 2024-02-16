import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import axios from 'axios';

import {useState,useContext,useEffect} from 'react'
import Cont from '../Context/Cont'
import Chartt from './Charts/Chartt';
const Products = ({user,single}) => {
const [sellerProducts, setSellerProducts] =useState();


useEffect((userUserId)=>{
  axios.get(`http://localhost:3000/api/findproduct/4${userUserId}`)
  .then((res)=>{console.log(res.data,"prodsbyuserid");setSellerProducts(res.data)})
  .catch((error)=>{console.log("error")})
},[])


    const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
  
        
  return (
    <div>
     
      <Button onClick={handleOpen}>Click here</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Stats
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
     Joined Since 
     {user.createdAt}  
    </Typography> <br />
    <Rating name="read-only" 
    value={user.ratings}  
    readOnly />
  <Typography> <br />
  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">5 star</a>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style={{"width":"70%"}}></div>
    </div>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
</div>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">4 star</a>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style={{"width": "17%"}}></div>
    </div>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">17%</span>
</div>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">3 star</a>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style={{"width": "8%"}}></div>
    </div>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8%</span>
</div>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">2 star</a>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style={{"width": "4%"}}></div>
    </div>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">4%</span>
</div>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">1 star</a>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-300 rounded" style={{"width": "1%"}}></div>
    </div>
    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">1%</span> <br />


</div>   
  </Typography>
  <Typography>

  
    
      <Chartt/>
      {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
        {sellerProducts?.map((ele,index)=>{
                
                return (
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {ele.prodId}
                </th>
                <td className="px-6 py-4">
                {ele.name}
                </td>
                <td className="px-6 py-4">
             <img src={ele.images} alt=""  className='w-32 h-24'/>
                </td>
                <td className="px-6 py-4">
                    {ele.description}
                </td>
                <td className="px-6 py-4">
                    ${ele.price}
                </td>
                <td className="px-6 py-4">
                    
             <Box style={{"display":"flex","alignItems":"center"}}><Rating value={ele.ratings} readOnly /> <p> ({ele.ratings })</p></Box>
                </td>
            </tr>
                )
            })}
            
        </tbody>
    </table>
      */}
    


  </Typography>
  </Box>
</Modal>

    </div>
  )
}

export default Products
