import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = ({isDarkmode}) => {
  return (
    <div className='w-10/12 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
            </div>
            <h1 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi! I'm Assay Poulose Peenikkaparamban <Image src={assets.hand_icon} alt='' className='w-6' /></h1>
            <h3 className='text-2xl sm:text-3xl lg:text-[45px] font-ovo'>
                Salesforce Administrator & Developer based in Germany.
            </h3>
            <p className='mx-auto font-ovo text-justify'>
            Certified Salesforce Administrator, Agentforce Specialist, and AI Associate with a strong foundation in full-stack web development together with a unique blend of technical, project management, and customer-facing experience. Over 5 years of cross-functional experience blending development, CRM support, project coordination, and customer service. Skilled in building scalable, user-centric web applications using React.js, Next.js, Node.js, and AWS. Hands-on experience configuring Salesforce Trailhead platform to improve business processes, automate workflows, and support sales and service operations.
                </p>
                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <a href='#footer' className='px-10 py-3 border rounded-white rounded-full bg-black text-white flex items-center gap-2'>connect me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>

                    <a href='/CV-Assay.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>download CV <Image src={isDarkmode ? assets.download_icon_white :assets.download_icon} alt='' className='w-4' /></a>
                </div>
    </div>
  )
}

export default Header