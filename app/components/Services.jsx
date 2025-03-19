import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-10'>
        <h4 className='text-center mt-5 mb-2 text-lg font-ovo'>What I Offer?</h4>
        <h2 className='text-center text-5xl font-ovo'>My Services...</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        I specialize in building seamless web applications, from stunning frontend designs to powerful backend architectures. With hands-on experience in web development, Salesforce CRM, and AWS cloud computing, I create scalable, high-performance solutions tailored to your needs.
        </p>

        <div className='grid grid-cols-4 grid-columns gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, index) => (
                <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer lightHover hover:-translate-y-1 duration-500'>
                    <Image src={icon} alt='' className='w-10 border rounded-md'/>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-gray-900'>{title}</h3>
<p className='text-sm text-gray-600 dark:text-gray-400 leading-5'>{description}</p>

                    {/* <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image src={assets.right_arrow} alt='' className='w-4' />
                    </a> */}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services