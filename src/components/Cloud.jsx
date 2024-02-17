
import React, { useEffect, useState, useRef } from 'react'

const Create = () => {
  
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  const [img, setImg] = useState("")
  const [view, setView] = useState(false)
  const [refresh, setRefresh] = useState(false)
  


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
          setImg(result.info.secure_url)
          console.log(result.info.secure_url);
        }
      }
    })
  }, [refresh])
  
  
  const addImg=(productProdId)=>{
    axios.post(`http://localhost/img/add/${productProdId}`)
  }

  return (
    <div>
      

      <button onClick={()=> widgetRef.current.open()}>image</button><br />
      
      { view ? <img src={img} alt="file" width={100} height={100}/> : <></>}
      
      <button
        onClick={()=>{
          add({
            img: img
          })
        }}
      >add
      </button>
    </div>
  )
}

export default Create