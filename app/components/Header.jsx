import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = ({isDarkmode}) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
            </div>
            <h1 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi! I'm Assay Poulose Peenikkaparamban <Image src={assets.hand_icon} alt='' className='w-6' /></h1>
            <h3 className='text-2xl sm:text-3xl lg:text-[45px] font-ovo'>
                Full-Stack Developer based in Germany.
            </h3>
            <p className=' mx-auto font-ovo'>
            I'm a full-stack developer with experience in building web applications using React.js, Next.js, and the MERN stack. I’m passionate about solving problems, optimizing features, and writing clean, high-quality code. Whether working independently or as part of a team, I enjoy bringing projects to life and ensuring they deliver real value.
                </p>
                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <a href='#footer' className='px-10 py-3 border rounded-white rounded-full bg-black text-white flex items-center gap-2'>connect me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>

                    <a href='/AssayPoulose_CV.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>download CV <Image src={isDarkmode ? assets.download_icon_white :assets.download_icon} alt='' className='w-4' /></a>
                </div>
    </div>
  )
}

export default Header