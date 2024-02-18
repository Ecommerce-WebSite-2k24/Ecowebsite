import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function BasicRating({prod}) {
  const [value, setValue] = useState(prod.ratings);


  const updateRatings=(prodId,value)=>{
    axios.put(`http://localhost:3000/api/updateRatings/${prodId}`,value)
    .then((res)=>{console.log("Rating Updated")})
    .catch((error)=>{console.log("error")})
  }

  return (
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend"> </Typography>
        <Rating size="small"
        value={prod.ratings}
  onChange={(event,newValue)=>{updateRatings(prod.prodId,{ratings:newValue})}}

        />
    </Box>
  );
}