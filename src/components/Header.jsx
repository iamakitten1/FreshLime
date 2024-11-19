import React, { useState, useEffect } from 'react';
import Button from './UiComponents/Button';

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0  w-full h-[5rem] flex justify-between items-center px-11 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-[#e6f2ef]'
        }`}
    >
      {/* Logo */}
      <a href="#home">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-[7.375rem] md:w-[7.375rem]"
        />
      </a>

      {/* Navigation */}
      <nav className="flex  md:gap-[4rem] ">
        <ul className="flex items-center  md:gap-[3.5rem] text-[1.125rem] font-[700] color:rgb(30 41 59);">
          <li>
            <a href="#howItWorks" className="hover:text-[#087f5b] ">
              How it works
            </a>
          </li>
          <li>
            <a href="#insideUs" className="hover:text-[#087f5b]">
              Inside us
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-[#087f5b]">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-[#087f5b]">
              Pricing
            </a>
          </li>
        </ul>

        {/* Button */}
        {/* <button
        className={`rounded-[0.5625rem] w-[9rem] h-[2.625rem] transition-colors ${isScrolled ? 'bg-[#087f5b] text-white font-[700]' : 'bg-[#087f5b] text-white font-[700]'
          }`}
      >
        Try for free
      </button> */}
        <Button text="Try for free"
          size="medium"
          bgColor="bg-[#087f5b]"
          textColor="text-white"
          isScrolled={isScrolled}
          targetId="ContactSection" 
          
        />
      </nav>


    </header>
  );
};

export default Header;
