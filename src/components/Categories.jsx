import React from 'react'
import rectangle from '../assets/rectangle.png'
import phone from '../assets/phone.png'
import computer from '../assets/computer.png'
import smartwatch from '../assets/SmartWatch.png'
import camera from '../assets/Camera.png'
import headphones from '../assets/headphone.png'
import gaming from '../assets/Gaming.png'

const Categories = () => {
  return (
    <div class="relative w-4/5 mt-20 p-8 mx-auto">
        <div class="gap-20">
            <div class="flex mt-2 gap-6">
                <img  class="h-10 w-15 " src={rectangle} alt="" />
                <h1 class="text-black font-bold text-xl	">Categories</h1>
            </div>
            <h1 class="text-black font-bold text-4xl	">Browse By Category</h1>
            <div class="flex justify-center w-fill h-60">
                <a href=""><img class="h-60 p-4" src={phone} alt="" /></a>
                <a href=""><img class="h-60 p-4" src={computer} alt="" /></a>
                <a href=""><img class="h-60 p-4" src={smartwatch} alt="" /></a>
                <a href=""><img class="h-60 p-4" src={camera} alt="" /></a>
                <a href=""><img class="h-60 p-4" src={headphones} alt="" /></a>
                <a href=""><img class="h-60 p-4" src={gaming} alt="" /></a>
            </div>     
        </div>
    </div>
  )
}

export default Categories
