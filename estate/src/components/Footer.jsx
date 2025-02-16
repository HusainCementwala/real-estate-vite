import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  //there are two parts to th footer
  //1. first one has 3 columns
  //2. second has the copyright message
  return (
    <div className='pt-10 pb-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        
        <div className='w-full md:w-1/5 mb-8 md:m-0'>
          <h3 className='text-gray-400 text-lg font-bold mb-4'>Company</h3>
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            <li>
              <a href="#Header" className="inline-block hover:text-white text-blue-600">Home</a>
            </li>
            <li>
              <a href="#About" className="inline-block hover:text-white text-blue-600">About</a>
            </li>
            <li>
              <a href="#Projects" className="inline-block hover:text-white text-blue-600">Projects</a>
            </li>
            <li>
              <a href="#Contact" className="inline-block hover:text-white text-blue-600">Contact</a>
            </li>
          </ul>

        </div>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt="" />
          <p className='text-gray-400 mt-4 '>Your dream home is just a step away. Whether you're buying, selling, or investing, we're here to guide you with expertise and care. Let's build your future together.</p>
        </div>
        <div className='w-full md:w-1/3'>
        <h3 className='text-white text-lg font-bold mb-4'>Never Miss an Update</h3>
        <p className='text-gray-400 mb-4 max-w-80'>Stay in the know with our latest updates. Subscribe to our newsletter for market insights, property news, and exclusive offers—delivered straight to your inbox.</p>
        <div className='flex gap-2'>
          <input type="email" placeholder='Enter your email...'
          className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
          <button className='py-2 px-4 rounded bg-blue-500 text-white cursor-pointer'>Subscribe</button>
        </div>
          
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
      Copyright 2025 © HusainProperties. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
