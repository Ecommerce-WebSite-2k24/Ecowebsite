import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios'

const Cloud=()=>{

    const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [view, setView] = useState(false);
  const [refresh, setRefresh] = useState(false);
    
const [file,setFile]=useState('')

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
    
    
 <div className="grid md:grid-cols-2 md:gap-10">
 <div style={{"display":"flex","justifyContent":"flex-end"}}>

 <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={()=> widgetRef.current.open()}>Upload image</button><br/>
      
      { view ? <img src={file} alt="file" width={200} height={200}/> : <></>}
      
      </div>     
 </div>
 
)
}
export default Cloud