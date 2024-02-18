import React,{useContext,useState,useRef,useEffect} from 'react'
import Cloud from '../Cloud'
import Cont from '../Context/Cont'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie';
import ProductInfo from '../Admin/ProductInfo'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
const Seller2=()=>{

 const id = Cookies.get("id")
 console.log(id)
 const prods = useContext(Cont)


    const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [view, setView] = useState(false);
  const [refresh, setRefresh] = useState(false);
   const users = useContext(Cont) 
  const categories = useContext(Cont)
    // console.log(categories.categories,"seller")   


const [name, setname] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [images, setImages] = useState('');
const [ratings, setRatings] = useState(null);
const [cat, setCat] = useState('');
const [file,setFile]=useState('')


const addProd=(content)=>{
  axios.post(`http://localhost:3000/api/product`,content)
  .then((res)=>{console.log("added")})
  .catch((error)=>{console.log("error")})
}

const deleteProd=(prodId)=>{
  axios.delete(`http://localhost:3000/api/product/${prodId}`)
  .then((res)=>{console.log("deleted")})
  .catch((error)=>{console.log("error")})
}


const updateProduct = (prodId,content)=>{
  axios.put(`http://localhost:3000/api/update/${prodId}`,content)
  .then((res)=>{console.log("product updated")})
  .catch((error)=>{console.log("error")})
}

useEffect(() => {
  cloudinaryRef.current = window.cloudinary
  widgetRef.current = cloudinaryRef.current.createUploadWidget({
    cloudName: "dnchnaonz",
    uploadPreset: "eilhhb9z"
  }, (error, result) => {
    if(error){
      console.log(error);
    }
    else{
      if(!!result.info.secure_url){
        setView(true)
        setFile(result.info.secure_url)
        console.log(result.info.secure_url);
      }
    }
  })
}, [refresh])


return (

  <div style={{"display":"flex","justifyContent":"center","alignItems":"center","marginTop":"4rem","gap":"2rem"}}>
   
    <section className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10 w-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
            {prods.prods.map((prod,index)=>{
                
                return (
<tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <DeleteIcon  onClick={()=>{deleteProd(prod.prodId)}}/>   {prod.prodId}
                <UpdateIcon onClick={()=>{updateProduct(prod.prodId,
                {
                name: name,
                description: description,
                price:price,
                categoryCatId:cat,
                file:file
                  })}}/>
                </th>
                <td className="px-6 py-4">
                {prod.name}
                </td>
                <td className="px-6 py-4">
             <img src={prod.file} alt=""  className='w-32 h-24'/>
                </td>
                <td className="px-6 py-4">
                    {prod.description}
                </td>
                <td className="px-6 py-4">
                    ${prod.price} {prod.userUserId}
                </td>
                <td className="px-6 py-4">
                    
             <Box style={{"display":"flex","alignItems":"center"}}><Rating value={prod.ratings} readOnly /> <p> ({prod.ratings })</p></Box>
             
                </td>
            </tr>
                )
            })}
            
        </tbody>
    </table>
    </section>
    <section className='p-2 shadow-md w'>
  
    <form className="max-w-md">
    <p className="text-red-500"> Add a Product </p>
 <div className="grid md:grid-cols-2 md:gap-10">

   <div className="relative z-0 w-96 mb-5 ">
       <input type="text" className="block py-2.5 px-0 w-52 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
      //  value={single.name} 
       onChange={(e)=>{setname(e.target.value)}}/>
       <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
   </div>
   
   <div className="relative z-0 w-96 mb-5 group">
       <input type="text" className="block py-2.5 px-0 w-52 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
        // value={prod.description} 
       onChange={(e)=>{setDescription(e.target.value)}}/>

       <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Desciption</label>
   </div>
 </div>
 

 <div className="relative z-0 w-96 mb-5 group">
     <select  className="block py-2.5 px-0 w-52 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
    // value={prod.categoryCatId}
     onChange={((e)=>{setCat(e.target.value)})} >
     {categories.categories.map((cat,indexx)=>{
        return (
 <option key={indexx} value={cat.catId} >{cat.content}</option>
        )
    })} 
    </select> 
     
     <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Chosse Category</label>
 </div>

 <div className="relative z-0 w-96 mb-5 group">
     <input type="number" className="block py-2.5 px-0 w-52 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
    //  value={prod.price}
     onChange={(e)=>{setPrice(e.target.value)}}/>
     <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set a Price</label>
 </div>
 


 <div style={{"display":"flex","justifyContent":"flex-end"}}>


 <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={()=> widgetRef.current.open()}>Upload image</button><br />
      
      { view ? <img src={file} alt="file" width={200} height={200}/> : <></>}
      
      <button className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={()=>{
          addProd({
                name: name,
                description: description,
                price:price,
                ratings:ratings,
                images:images,
                userUserId:id,
                categoryCatId:cat,
                file:file
          })
        }}
      >add
      </button>
        
 </div>
 
</form>
    </section>
    </div>
)
}
export default Seller2