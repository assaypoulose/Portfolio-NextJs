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
            I love turning “we have a problem” into “here’s your solution.” With hands-on experience gained through countless hours on Trailhead, I specialize in streamlining business processes, automating workflows, integrating third-party systems, and supporting sales and service operations. Exploring Salesforce’s latest innovations— Einstein Analytics, AgentForce and Sales Coach features as an AgentBlazer Champion and Innovator. Currently, I’m deepening my expertise in CPQ.
            <br/>
            Beyond Salesforce, I’m a Full-Stack Developer with a solid foundation in React.js, Express.js, Node.js, MongoDB, and AWS. I enjoy bringing well-crafted designs to life through fast, responsive, and scalable web applications that users truly appreciate. My diverse background spans over 5 years in Web development, Project & CMS management, logistics operations, sales, and client-facing roles, all of which enrich my perspective as a Salesforce Admin and Developer.
                </p>
                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <a href='#footer' className='px-10 py-3 border rounded-white rounded-full bg-black text-white flex items-center gap-2'>connect me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>

                    <a href='/CV-AssayPoulose.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>download CV <Image src={isDarkmode ? assets.download_icon_white :assets.download_icon} alt='' className='w-4' /></a>
                </div>
    </div>
  )
}

export default Header