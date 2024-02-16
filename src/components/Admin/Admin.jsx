import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import Cont from '../Context/Cont'
import Side from './Side';

const Admin = () => {
   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const users = useContext(Cont)
  console.log(users,"users")


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
     <Side/>

<div className="p-4 sm:ml-64">
{users.map((user,index)=>{
               return (
                  <div key={index} className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div className="grid grid-cols-3 gap-4 mb-4">
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
       <p className="text-2xl text-gray-400 dark:text-gray-500"> {user.role} </p>
      
         </div>

      </div>
   </div>
               )
            })}
   
</div>
    </div>
  )
}

export default Admin
