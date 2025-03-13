'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {

  const [isDarkmode, setIsDarkmode] = useState(false);

  // Check localStorage for saved theme on initial load
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkmode(true);
    } else {
      setIsDarkmode(false);
    }
  }, []); // Empty dependency array to run only on component mount

  // Effect to toggle theme based on isDarkmode state
  useEffect(() => {
    if(isDarkmode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkmode])

  return (
    <>
      <Navbar isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode}/>
      <Header isDarkmode={isDarkmode}/>
      <About isDarkmode={isDarkmode}/>
      <Services isDarkmode={isDarkmode}/>
      <Work isDarkmode={isDarkmode}/>
      <Contact isDarkmode={isDarkmode}/>
      <Footer isDarkmode={isDarkmode}/>
    </>
  );
}
