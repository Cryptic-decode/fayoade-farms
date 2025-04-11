'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
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
    <div id="hero" className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Fayoade Farms Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Cultivating Excellence in <span className="text-[#9FD134]">Organic Farming</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100">
            Your trusted source for premium organic produce and sustainable farming practices
          </p>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 mt-8">
            <div className="text-center p-4">
              <h3 className="text-3xl font-bold text-[#9FD134]">5+</h3>
              <p className="text-sm mt-2">Years Experience</p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-3xl font-bold text-[#9FD134]">100%</h3>
              <p className="text-sm mt-2">Organic Products</p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-3xl font-bold text-[#9FD134]">500+</h3>
              <p className="text-sm mt-2">Happy Customers</p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-3xl font-bold text-[#9FD134]">50+</h3>
              <p className="text-sm mt-2">Products</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#products"
              className="bg-[#9FD134] text-white px-8 py-3 rounded-full font-medium hover:bg-[#78A832] transition-colors text-lg"
              onClick={(e) => handleClick(e, 'products')}
            >
              Explore Products
            </Link>
            <Link 
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors text-lg"
              onClick={(e) => handleClick(e, 'contact')}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer"
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            const offset = 80;
            const elementPosition = aboutSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }}
      >
        <svg 
          className="w-6 h-6 text-white"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero; 