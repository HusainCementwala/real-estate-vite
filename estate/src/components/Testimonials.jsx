import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "framer-motion"

const Testimonials = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    viewport={{ once:true, amount: 0.2 }}

    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-3xl sm:text-4xl font-bold mb-2 text-center'>What Our <span className='underline underline-offset-4 decoration-1 under font-light'>Clients</span> Say</h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Our clients' experiences speak for themselves.</p>
 
   <div className='flex flex-wrap justify-center gap-8'>
    {testimonialsData.map((testimonial,index)=>(
<div key={index} className='max-w-[340px] border-none shadow-lg shadow-gray-400 rounded px-8 py-12 text-center'>
  <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 rounded-full mx-auto mb-4'/>
  <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
  <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
  <div className='flex justify-center gap-1 text-red-500 mb-4'>
    {Array.from({length:testimonial.rating},(item,index)=>(
//this is the method to calculate the stars in rating
      <img key={index} src={assets.star_icon} alt="" />
    ))}
  </div>
  <p className='text-gray-600'>{testimonial.text}</p>
</div>
    ))}
   </div>



    </motion.div>
  )
}

export default Testimonials
