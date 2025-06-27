import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkmode, setIsDarkmode }) => {

    const [isScroll, setIsScroll] = useState(false);
    const [mounted, setMounted] = useState(false);

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    useEffect(() => {
        setMounted(true); // Ensure client-side rendering
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)';
        }
    }, []);

    return (
        <>
            {!isDarkmode && (
                <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] '>
                    <Image src={assets.header_bg_color} alt='' className='w-full' />
                </div>
            )}
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bbg-white shadow-sm bg-opacity-50 backdrop-blur-lg" : ""}`}>
                <a href='#top'>
                    <Image src={isDarkmode ? assets.logo2 : assets.logo} alt='' className='w-35 cursor-pointer mr-14' />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
                    <li><a className='font-ovo' href='#top'>Home</a></li>
                    <li><a className='font-ovo' href='#about'>About Me</a></li>
                    <li><a className='font-ovo' href='#services'>Services</a></li>
                    <li><a className='font-ovo' href='#work'>My Work</a></li>
                    <li><a className='font-ovo' href='#contact'>Contact Me</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    {mounted && (
                        <button onClick={() => setIsDarkmode(prev => !prev)}>
                            <Image
                                src={isDarkmode ? assets.sun_icon : assets.moon_icon}
                                alt="Toggle Dark Mode"
                                className="w-6"
                            />
                        </button>
                    )}
                    <a href='https://www.linkedin.com/in/assay-poulose-peenikkaparamban-961911179/' target='_blank' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo'>LinkedIn <Image src={assets.arrow_icon} alt='' className='w-3' /> </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* mobile menu */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>
                    <li><a className='font-ovo dark:text-black' onClick={closeMenu} href='#top'>Home</a></li>
                    <li><a className='font-ovo dark:text-black' onClick={closeMenu} href='#about'>About Me</a></li>
                    <li><a className='font-ovo dark:text-black' onClick={closeMenu} href='#services'>Services</a></li>
                    <li><a className='font-ovo dark:text-black' onClick={closeMenu} href='#work'>My Work</a></li>
                    <li><a className='font-ovo dark:text-black' onClick={closeMenu} href='#contact'>Contact Me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar