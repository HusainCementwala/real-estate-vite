import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0,x:250}}
     transition={{duration:1}}
     whileInView={{opacity:1,x:0}}
     viewport={{once:true}}
    
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>

      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light px-2' >Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
     <img src={assets.brand_img} alt=""  className='w-full sm:w-1/2 max-w-md'/>
     <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>

      <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>

        <div>
          <p className='text-4xl font-medium text-gray-800'>10+</p>
          <p>Years of Creation</p>
        </div>
        <div>
          <p className='text-4xl font-medium text-gray-800'>14+</p>
          <p>Projects Completed</p>
        </div>
        <div>
          <p className='text-4xl font-medium text-gray-800'>500K+</p>
          <p>Sq. Ft. Developed</p>
        </div>
        <div>
          <p className='text-4xl font-medium text-gray-800'>30+</p>
          <p>Expert Team Members</p>
        </div>
      </div>
       <p className='my-10 max-w-lg text-1xl'>At <span className='span-header text-black text-2xl'>Estate</span>, we bring dreams to life with exceptional real estate solutions. With years of experience and a reputation for quality, we deliver trusted results. Our dedicated team and customer-first approach ensure that every project is a step toward building lasting communities. Discover your perfect space with <span className='span-header text-black text-2xl'>Us.</span></p>
       <button className='bg-blue-600 text-white py-2 px-8 rounded cursor-pointer'>Let's Meet</button>
     </div>
   </div>
</motion.div>
  )
}

export default About
