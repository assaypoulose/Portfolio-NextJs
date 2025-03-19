import { assets,socials } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = ({isDarkmode}) => {

  const iconStyles = "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500";

  return (
    <div id='footer' className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkmode? assets.assay_white : assets.logo1} alt='' className='w-36 mx-auto'/>
            <div className='w-max mt-8 flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
          assaypoulose16@gmail.com
        </div>
      </div>
      <div className="mb-8 mt-8 xl:mb-0 flex gap-6 items-center justify-center">
          {socials.map((item, index) => {
            return (
              <Link key={index} href={item.path} className={iconStyles} target="_blank">
                {item.icon}
              </Link>
            )
          })}
        </div>

        <div className='text-center border-t border-gray-400 mx-[10%] mt-6 py-6'>
            <p>© 2025 Assay Poulose. All rights reserved.</p>
        </div>
    </div>
  )
}
