import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-10'>
            {/* <h4 className='text-center mt-5 mb-2 text-lg font-ovo'>Introduction</h4> */}
            <h2 className='mt-5 text-center text-5xl font-ovo'>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-5'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='mb-5 max-w-2xl font-ovo text-justify'>
                    My background in project coordination and sales consulting enables me to bridge the gap between technical solutions and business needs, ensuring high-quality delivery in both individual and team- based environments. Committed to continuous learning, collaboration, and delivering impactful digital experiences. Currently seeking roles in Salesforce administration or CRM-focused Full Stack Development to support digital transformation and customer success.
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