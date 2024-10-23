import React from 'react'
import { toast } from 'react-toastify'

const NewsletterBox = () => {
    
    const onSubmitHandler= (event)=> {
        event.preventDefault()
        const formData = new FormData(event.target); // Create a FormData object from the form
        const email = formData.get('email'); // Get the value of the input with name 'email'
        console.log(email)
        if(email){
          toast.success("Your Email has been added")
        }
        else{
          toast.error("Please provide a valid email")
        }
        }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20%  off</p>
        <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' name='email'  required />
            <button type="submit" className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
        </div>
  )
}

export default NewsletterBox