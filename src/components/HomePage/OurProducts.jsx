import React from 'react'
import axios from 'axios'

import rectangle from '../../assets/rectangle.png'
import coat from '../../assets/coat.png'
import Product from '../Product'
// import Product from './Product'

const OurProducts = ({func}) => {

    const addwish=(obj)=>{
        axios.post('http://localhost:3000/fav/add',obj) 
        .then(r=>console.log('addded')).catch(err=>console.log(err))
      }

  return (
    <div className="relative w-4/5 mt-20 mx-auto">
        <div className="gap-20">
            <div className="flex mt-2 gap-8">
                <img  className="h-10 w-15 " src={rectangle} alt="" />
                <h1 className="text-red-500 font-bold text-xl	">Our Products</h1>
            </div>
            <h1 className="text-black font-bold text-4xl">Explore Our Products</h1>
              <Product func1={func}/>
              
        </div>
    </div>
  )
}

export default OurProducts
