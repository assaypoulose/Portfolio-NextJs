import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        // Use the environment variable for the access key
        const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
        formData.append("access_key", accessKey);

    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-10 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
         <h4 className='text-center mt-5 mb-2 text-lg font-ovo'>I would love to hear from you! If you have any questions, comments, or feedback, please use the form below. </h4>
            <h2 className='text-center text-5xl font-ovo'>Get in Touch...</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-5 font-ovo'>
            Let's connect! If you're looking for a committed and skilled Full-Stack Developer, I am ready to contribute to your team's success.
            </p>
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-2 grid-columns gap-6 mt-5 mb-8'>
                    <input type='text' placeholder='Enter your name...' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
                    <input type='email' placeholder='Enter your email...' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email'/>
                </div>
                <textarea rows='6' placeholder='Enter your message...' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></textarea>
                <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/70 text-white rounded-full mx-auto hover:bg-black duration-500'>
                    Send now
                    </button>
                    <p className='mt-4'>
                        {result}
                    </p>
            </form>
    </div>
  )
}

export default Contact