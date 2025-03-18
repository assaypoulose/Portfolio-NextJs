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

  const [isDarkmode, setIsDarkmode] = useState(false); // Default state

useEffect(() => {
  // Only run on client
  const theme = localStorage.getItem("theme") === "dark";
  setIsDarkmode(theme);
}, []);


  // Effect to toggle theme based on isDarkmode state
  useEffect(() => {
    if(isDarkmode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkmode]);

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
