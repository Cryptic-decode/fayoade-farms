'use client';

import Image from 'next/image';
import Link from 'next/link';

const About = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Images */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative h-[300px] col-span-2">
              <Image
                src="/images/about-1.jpg"
                alt="Fayoade Farms Overview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/images/about-3.jpg"
                alt="Sustainable Farming"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/images/about-2.jpg"
                alt="Chicks feeding"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-[#9FD134]/10 text-[#2A7E2E] px-4 py-2 rounded-full text-sm font-medium">
                About Fayoade Farms
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Nurturing Nature, Growing Sustainably
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              At Fayoade Farms, we&apos;re more than just farmers – we&apos;re stewards of the land committed to sustainable agriculture. 
              Our journey began with a vision to provide fresh, organic produce while preserving the environment for future generations.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#9FD134]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Organic Farming</h3>
                </div>
                <p className="text-sm text-gray-600">100% organic practices for healthier produce</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#9FD134]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Sustainability</h3>
                </div>
                <p className="text-sm text-gray-600">Eco-friendly farming methods</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#9FD134]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Quality</h3>
                </div>
                <p className="text-sm text-gray-600">Premium produce, consistently delivered</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#9FD134]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Community</h3>
                </div>
                <p className="text-sm text-gray-600">Supporting local agriculture</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Link 
                href="#contact"
                className="inline-flex items-center text-[#2A7E2E] hover:text-[#78A832] font-medium transition-colors"
                onClick={(e) => handleClick(e, 'contact')}
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 