import  React,{useState,useEffect} from "react";
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

function Product() {
    const [ProductData,setProductData]=useState([])
    const [refrsh,setRefrsh]=useState(false)
    // const navigate=useNavigate()



    useEffect(() => {
        axios.get("http://localhost:3000/api/product")
          .then((response) => {setProductData(response.data)})
          .catch((error) => {console.error("Error fetching :", error)});
      }, [refrsh]);

      
      

  return (
    <div>
        <div>Product</div>
        <div>{
        ProductData.map((e,i)=>(<div>
            <div><img src={e.images} alt="" /></div>            
            <div>name: {e.name}</div>
            <div>price:{e.price} </div>
            <div>ratings:{e.ratings} </div>
        </div>


        ))
            }</div>
    
    </div>
    
  )
}

export default Product