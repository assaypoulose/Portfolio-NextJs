import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full px-5 sm:px-10 md:px-20 py-10 scroll-mt-10'>
            {/* <h4 className='text-center mt-5 mb-2 text-lg font-ovo'>Introduction</h4> */}
            <h2 className='mt-5 text-center text-3xl sm:text-4xl md:text-5xl font-ovo'>About Me</h2>

            <div className='flex flex-col lg:flex-row items-center gap-10 sm:gap-14 md:gap-20 my-10'>
                <div className='w-40 sm:w-60 md:w-72 rounded-3xl overflow-hidden'>
                    <Image src={assets.user_image} alt='user' className='w-full h-auto rounded-3xl' />
                </div>

                <div className='flex-1 w-full'>
                    <p className='mb-6 font-ovo text-justify text-sm sm:text-base'>
                    What drives me is the thrill of simplifying complexity—whether that’s designing seamless workflows or connecting systems that never spoke before. Learning is at the heart of everything I do; every Flow, every line of Apex, and every Trailhead badge adds to my toolkit and fuels my growth.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li className='border-[0.5px] border-gray-400 rounded-xl p-3 cursor-pointer lightHover' key={index}>
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                {Array.isArray(description) ? (
                                    <ul className='list-disc list-inside text-gray-600 text-sm'>
                                        {description.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                ) : (
                                    <p className='text-gray-600 text-sm'>{description}</p>
                                )}
                            </li>
                        ))}
                    </ul>

                    <h4 className=' text-gray-700 font-ovo'>Tools I use</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About