import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';

import {useState,useContext} from 'react'
import Cont from '../Context/Cont'
const Products = ({user,single}) => {

  // const [single,setSingle]=useState({})
  // const getone=()=>{
  //   axios.get(`http://localhost:3000/user/get/${user.userId}`)
  //   .then((res)=>{console.log(res.data,"single") ;setSingle(res.data)
  //     setView("Single")
  //   })
  //    .catch((error)=>console.log("error"))
  // }


// const users = useContext(Cont)
// console.log(users,'from products')
// console.log(single,'single from products')
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
      
    //  console.log(single,"from product.jsx")
        
  return (
    <div>
      {/* {console.log(single,"from product div")} */}
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
     {/* {single.createdAt}   */}
    </Typography> <br />
    <Rating name="read-only" 
    // value={single.ratings}  
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
  </Box>
</Modal>

    </div>
  )
}

export default Products
