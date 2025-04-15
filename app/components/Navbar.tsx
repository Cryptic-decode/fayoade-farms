'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu when clicking a link
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Fayoade Farms Logo"
                width={150}
                height={60}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="#hero" 
              className="text-[#2A7E2E] hover:text-[#78A832] px-3 py-2 text-sm font-medium transition-colors"
              onClick={(e) => handleClick(e, 'hero')}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-[#2A7E2E] hover:text-[#78A832] px-3 py-2 text-sm font-medium transition-colors"
              onClick={(e) => handleClick(e, 'about')}
            >
              About
            </Link>
            <Link 
              href="#products" 
              className="text-[#2A7E2E] hover:text-[#78A832] px-3 py-2 text-sm font-medium transition-colors"
              onClick={(e) => handleClick(e, 'products')}
            >
              Products
            </Link>
            <Link 
              href="#services" 
              className="text-[#2A7E2E] hover:text-[#78A832] px-3 py-2 text-sm font-medium transition-colors"
              onClick={(e) => handleClick(e, 'services')}
            >
              Services
            </Link>
            <Link 
              href="#gallery" 
              className="text-[#2A7E2E] hover:text-[#78A832] px-3 py-2 text-sm font-medium transition-colors"
              onClick={(e) => handleClick(e, 'gallery')}
            >
              Gallery
            </Link>
            <Link 
              href="#contact" 
              className="bg-[#9FD134] text-white hover:bg-[#78A832] px-4 py-2 rounded-md text-sm font-medium transition-colors"
              onClick={(e) => handleClick(e, 'contact')}
            >
              Contact Us
            </Link>
          </div>
          

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2A7E2E] hover:text-[#78A832] hover:bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#9FD134]"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="#hero"
            className="block text-[#2A7E2E] hover:text-[#78A832] hover:bg-[#F5F5F5] px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={(e) => handleClick(e, 'hero')}
          >
            Home
          </Link>
          <Link 
            href="#about"
            className="block text-[#2A7E2E] hover:text-[#78A832] hover:bg-[#F5F5F5] px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={(e) => handleClick(e, 'about')}
          >
            About
          </Link>
          <Link 
            href="#products"
            className="block text-[#2A7E2E] hover:text-[#78A832] hover:bg-[#F5F5F5] px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={(e) => handleClick(e, 'products')}
          >
            Products
          </Link>
          <Link 
            href="#services"
            className="block text-[#2A7E2E] hover:text-[#78A832] hover:bg-[#F5F5F5] px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={(e) => handleClick(e, 'services')}
          >
            Services
          </Link>
          <Link 
            href="#gallery"
            className="block text-[#2A7E2E] hover:text-[#78A832] hover:bg-[#F5F5F5] px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={(e) => handleClick(e, 'gallery')}
          >
            Gallery
          </Link>
          <Link 
            href="#contact"
            className="block bg-[#9FD134] text-white hover:bg-[#78A832] px-4 py-2 rounded-md text-base font-medium transition-colors"
            onClick={(e) => handleClick(e, 'contact')}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 