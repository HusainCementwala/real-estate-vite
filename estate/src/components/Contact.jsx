import React from 'react'
import { toast } from 'react-toastify';
import {motion} from 'framer-motion'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f7a9223f-6d4c-4fbf-bab9-351d342d0e91");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Will get back shortly")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };


  return (
    <div 
    
    className='text-center p-6 py-30 lg:px-32 w-full overflow-hidden' id='Contact'>

<motion.h1 
initial={{ opacity: 0, y: -50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1, delay: 0.4 }}
viewport={{ once: false, amount: 0.3 }}


className='text-3xl sm:text-4xl font-bold mb-2 text-center'>Reach Out To <span className='underline underline-offset-4 decoration-1 under font-light'>US</span></motion.h1>
<p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Let's turn your real estate dreams into reality!</p>

<form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
  <div className='flex flex-wrap'>
    <div className='w-full md:w-1/2 text-left'>
      Your Name
      <motion.input 
       initial={{ opacity: 0, x: -50 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.6, delay: 0.4 }}
       viewport={{ once: false, amount: 0.3 }}
      
      className='w-full border-2 border-gray-500 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name...' required/>
    </div>
    <div className='w-full md:w-1/2 text-left md:pl-4'>
      Your Email
      <motion.input 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false, amount: 0.3 }}
      
      
      className='w-full border-2 border-gray-500 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your email...' required/>
    </div>
  </div>

  <div className='my-10 text-center'>
    Message 
    <motion.textarea 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    viewport={{ once: false, amount: 0.3 }}
    
    
    className='w-full border-2 border-gray-500 rounded py-3 px-4 mt-2 h-48 resize-none'
     name="message" placeholder="Let's have a call on..." required ></motion.textarea>
  </div>

  <motion.button 
   initial={{ opacity: 0, y: 30 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.6, delay: 0.8 }}
   viewport={{ once: false, amount: 0.3 }}
  
  className='bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer'>{result ? result : "Send Message"}</motion.button>
</form>


      
    </div>
  )
}

export default Contact
