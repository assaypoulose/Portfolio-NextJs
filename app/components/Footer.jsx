import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <div id='footer' className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo1} alt='' className='w-36 mx-auto'/>
            <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            assaypoulose16@gmail.com
            </div>
        </div>

        <div className='text-center border-t border-gray-400 mx-[10%] mt-6 py-6'>
            <p>© 2025 Assay Poulose. All rights reserved.</p>
        </div>
    </div>
  )
}
