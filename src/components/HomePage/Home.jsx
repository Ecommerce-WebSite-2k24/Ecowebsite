
import React, {useState} from 'react'
import img1 from '../../assets/banner1.jpg'
import img2 from '../../assets/banner2.jpg'
import MonthProduct from './MonthProduct'
import Categories from './Categories'
import OurProducts from './OurProducts'
import CartProduct from './CartProduct'
import {useContext} from 'react'
import Cont from '../Context/Cont'

const Home = (route) => {
const func = route.changeprod  
console.log(func);

const funcky = route.changeCat



const images = [img1, img2]
 
  const [currentIndex, setCurrentIndex] = useState(0);
const categories =useContext(Cont)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  console.log(categories.categories)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  return (
    <>
    <div className="flex w-4/5 mt-20">
      <ul className="flex flex-col w-80 max-w-[400px] mx-20 mt-0">
        
{categories.categories.map((cat,indd)=>{
  return (
    <li key={indd}>
          <details className="group">
            <summary className="flex items-center justify-between gap-2 font-medium marker:content-none hover:cursor-pointer">
                <a href="">{cat.content}</a>
              <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                </path>
              </svg>
            </summary>
            </details>
        </li>
  )
})}
       
      </ul>
      <div className="overflow-hidden relative w-[900px] mt-0 h-[400px] ">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} className="w-full" />
          ))}
        </div>
        <div className="flex justify-center gap-3 w-full absolute bottom-3">
          {images.map((_, index) => (
            <button key={index} className={`rounded-full w-3 h-3 cursor-pointer bg-gray-500 focus:outline-none ${index === currentIndex ? 'bg-gray-900' : ''}`} onClick={() => setCurrentIndex(index)}></button>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        <button className="rounded-full w-5 h-5 cursor-pointer bg-white" onClick={prevSlide}></button>
        <button className="rounded-full w-5 h-5 cursor-pointer bg-white" onClick={nextSlide}></button>
      </div>       

    </div>
    <Categories funcky={funcky} />
    <MonthProduct func={func} />
    <OurProducts func={func} />
    </>
  
  )
}

export default Home



          
         
          
          