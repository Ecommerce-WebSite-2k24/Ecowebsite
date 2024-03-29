import React, { useState, useEffect } from "react";
import axios from "axios";
// import OurProducts from "./HomePage/OurProducts";
// import rectangle from '../../assets/rectangle.png'
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
const ReviewIcon = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon key={index} color={index < rating ? "warning" : "disabled"} />
  ));

  return <div>{stars}</div>;
};

const WhishList = () => {
    const[wishes,setWishes]=useState([])

useEffect(()=>{
         axios.get(`http://localhost:3000/fav/getall`)
        .then(result=>{
          console.log('wish',result.data)
          setWishes(result.data)}).catch(err=>console.log(err))
      },[])

const deleted=(idWishlist)=>{
        axios
          .delete(`http://localhost:3000/fav/delete/${idWishlist}`)
          .then(() => {
            console.log("deleted fav");
          })
          .catch((err) => console.log(err));
      };



  return (
  <div  style={{ width: "100%", height: "100vh", borderTop: "1px solid black", boxShadow: 4 }}>
  <div style={{ width: "100%", display: "flex" }}>
    <h1 style={{ marginTop: 60, marginLeft: 40, borderBottom: 1 }}>wishlist()</h1>
  </div>

  <div style={{ width: "100%", margin: "auto", marginTop: 10, }}>
    {wishes.map((e) => (
      <Card
        sx={{ width: 300, height: 300, margin: "auto", marginLeft: 8, display: "inline-block", marginTop: 15 }}
      >
        <CardMedia component="img" height="160px" image={e.file} alt="Product" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {e.name} - {e.price}
            <ReviewIcon rating={4} />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
        <Button
          onClick={() => {}}
          sx={{ marginLeft: 20, marginTop: 5, backgroundColor: "black" , width:"auto"}}
          variant="contained"
          disableElevation
        >
          ADD TO THE CART
        </Button>
        <DeleteIcon onClick={()=> {
                    deleted(e.idWishList)}} />
      </Card>
    ))}
  </div>
</div>


    )
}

export default WhishList;