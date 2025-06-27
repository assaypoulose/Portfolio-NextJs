import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = ({ isDarkmode }) => {
  return (
    // <div className='w-10/12 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
    <div className='w-11/12 max-w-screen-lg mx-auto min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='Profile' className='rounded-full w-24 sm:w-32 md:w-36 mx-auto' />
      </div>
      <h1 className='flex flex-wrap justify-center items-center gap-2 text-lg sm:text-xl md:text-2xl font-ovo'>
        Hi! I'm Assay Poulose Peenikkaparamban
        <Image src={assets.hand_icon} alt='Wave' className='w-5 sm:w-6' />
      </h1>

      <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] leading-tight font-ovo px-2'>
        Salesforce Administrator & Developer based in Germany.
      </h3>
      <p className='text-sm sm:text-base md:text-lg font-ovo text-justify leading-relaxed px-2 sm:px-4 md:px-6 '>
        I love turning “we have a problem” into “here’s your solution.” With hands-on experience gained through countless hours on Trailhead, I specialize in streamlining business processes, automating workflows, integrating third-party systems, and supporting sales and service operations. Exploring Salesforce’s latest innovations— Einstein Analytics, AgentForce and Sales Coach features as an AgentBlazer Champion and Innovator. Currently, I’m deepening my expertise in CPQ & Platform App Developer.
        <br />
        Beyond Salesforce, I’m a Full-Stack Developer with a solid foundation in React.js, Express.js, Node.js, MongoDB, and AWS. I enjoy bringing well-crafted designs to life through fast, responsive, and scalable web applications that users truly appreciate. My diverse background spans over 5 years in Web development, Project & CMS management, logistics operations, sales, and client-facing roles, all of which enrich my perspective as a Salesforce Admin and Developer.
      </p>
      <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mt-6'>
        <a href='#footer' className='px-8 py-2.5 border rounded-full bg-black text-white flex items-center gap-2'>
          Connect Me
          <Image src={assets.right_arrow_white} alt='Arrow' className='w-4' />
        </a>

        <a href='/CV_AssayPoulose.pdf' download className='px-8 py-2.5 border rounded-full border-gray-500 flex items-center gap-2'>
          Salesforce Admin CV
          <Image src={isDarkmode ? assets.download_icon_white : assets.download_icon} alt='Download' className='w-4' />
        </a>

        <a href='/CV-AssayPoulose.pdf' download className='px-8 py-2.5 border rounded-full border-gray-500 flex items-center gap-2'>
          Full-Stack Developer CV
          <Image src={isDarkmode ? assets.download_icon_white : assets.download_icon} alt='Download' className='w-4' />
        </a>
      </div>
    </div>
  )
}

export default Header