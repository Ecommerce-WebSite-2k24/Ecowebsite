import React from 'react'
import wish from '../assets/wish.png'
import cart from '../assets/cart.png'


const Header = () => {
  return (
    <div>
        <div class="bg-black text-white text-center flex ">
    <div class="w-full">
        <span class="text-white block mx-auto">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" class="text-white">Shop Now</a></span>
    </div>
    <div class="hidden md:block">
        <ul class="flex flex-col font-medium ">
            <li class="relative">
                <button class="flex items-center text-white-100 rounded dark:text-white">English <svg class="w-2.5 h-2.5 ms-2.5" >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg></button>
            </li>

        </ul>
    </div>
    </div>

      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex justify-between mx-auto p-4">
            <a href="#" class="flex items-center  ">
                <span class="font-inter text-2xl font-bold tracking-wide ">Exclusive</span>
             </a>
             <div class="flex md:order-2 md:space-x-4">
                <div class="relative md:block">
                    <input type="text" class="block w-full p-2 pr-10 text-sm text-gray-900 bg-gray-100" placeholder="Search..."/>
                    <div class="absolute inset-y-0 end-0 flex items-center pe-3">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span class="sr-only">Search icon</span>
                    </div>
                   
                </div>
                <div class="flex md:order-2 md:space-x-4">
                        <img class="w-6 h-6 " src={wish} alt="" />
                        <img class="w-6 h-6" src={cart} alt="" />
                    </div>
            </div>
            <div class="items-center w-full md:flex md:w-auto md:order-1">
                <ul class="flex font-medium md:space-x-8 ">
                    <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded no-underline hover:underline">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded no-underline hover:underline">Contact</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded no-underline hover:underline">About Us</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded no-underline hover:underline">Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
