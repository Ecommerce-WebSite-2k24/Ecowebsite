import React,{useContext,useState,useRef,useEffect} from 'react'
import Cloud from '../Cloud'
import Cont from '../Context/Cont'
import axios from 'axios'
const Seller = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [view, setView] = useState(false);
  const [refresh, setRefresh] = useState(false);
    
  const categories = useContext(Cont)
    console.log(categories.categories,"seller")   


const [name, setname] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [images, setImages] = useState('');
const [ratings, setRatings] = useState(2.5);
const [user, setUser] = useState(2);
const [cat, setCat] = useState(1);
const [file,setFile]=useState('')


const addProd=(content)=>{
  axios.post(`http://localhost:3000/api/product`,content)
  .then((res)=>{console.log("added")})
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
    <div className=" flex flex-col p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10 w-4/5 ml-auto mr-auto">
       <div className=" flex flex-col w-4/5 mr-auto ml-auto">
        
        <label className='w-4/5'>Product Name</label> 
      <input className='bg-gray-100 w-4/5' type="text" onChange={(e)=>{setname(e.target.value)}}/>
      
       <label>Description</label> 
      <input className='bg-gray-100 w-4/5' type="text" onChange={(e)=>{setDescription(e.target.value)}}/>
       
       <label>Price</label> 
      <input className='bg-gray-100 w-4/5' type="number" onChange={(e)=>{setPrice(e.target.value)}}/>

<label >Product Category</label>
<select className='bg-gray-100'>
    {categories.categories.map((cat,indexx)=>{
        return (
 <option key={indexx} value={cat} onChange={((e)=>{setCat(e.target.value)})} >{cat.content}</option>
        )
    })}
</select>

<div className='flex gap-2'>
      

      <button style={{"backgroundColor":"#FA9884","padding":"1rem"}}onClick={()=> widgetRef.current.open()}>Upload image</button><br />
      
      { view ? <img src={file} alt="file" width={200} height={200}/> : <></>}
      
      <button style={{"backgroundColor":"#E74646","padding":"1rem"}}
        onClick={()=>{
          addProd({
                name: name,
                description: description,
                price:price,
                ratings:ratings,
                images:images,
                userUserId:user,
                categoryCatId:cat,
                file:file
          })
        }}
      >add
      </button>
    </div>
      
       </div>
      
    </div>
  )
}

export default Seller
