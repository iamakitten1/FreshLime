import React, { useState, useEffect } from 'react';
import Button from './UiComponents/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className={`fixed top-0 w-full h-[4rem] md:h-[5rem] flex justify-between items-center px-4 sm:px-6 md:px-11 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-[#e6f2ef]'
      }`}
    >
      {/* Logo */}
      <a href="#home">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-[5rem] sm:w-[6rem] md:w-[7.375rem]"
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center md:gap-[4rem]">
        <ul className="flex items-center gap-3 sm:gap-5 md:gap-[3.5rem] text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] font-[700]">
          <li>
            <a href="#howItWorks" className="text-[#333] hover:text-[#087f5b]">
              How it works
            </a>
          </li>
          <li>
            <a href="#insideUs" className="text-[#333] hover:text-[#087f5b]">
              Inside us
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-[#333] hover:text-[#087f5b]">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-[#333] hover:text-[#087f5b]">
              Pricing
            </a>
          </li>
        </ul>

        {/* Button */}
        <Button
          text="Try for free"
          size="medium"
          bgColor="bg-[#087f5b]"
          textColor="text-white"
          isScrolled={isScrolled}
          targetId="ContactSection"
        />
      </nav>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#333] text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="absolute top-[4rem] left-0 w-full bg-[#e6f2ef] flex flex-col items-center gap-4 py-4 shadow-md sm:hidden"
        >
          <a
            href="#howItWorks"
            className="text-[#333] hover:text-[#087f5b] text-lg font-[700]"
            onClick={() => setIsMenuOpen(false)}
          >
            How it works
          </a>
          <a
            href="#insideUs"
            className="text-[#333] hover:text-[#087f5b] text-lg font-[700]"
            onClick={() => setIsMenuOpen(false)}
          >
            Inside us
          </a>
          <a
            href="#testimonials"
            className="text-[#333] hover:text-[#087f5b] text-lg font-[700]"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            className="text-[#333] hover:text-[#087f5b] text-lg font-[700]"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <Button
            text="Try for free"
            size="medium"
            bgColor="bg-[#087f5b]"
            textColor="text-white"
            isScrolled={isScrolled}
            targetId="ContactSection"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
