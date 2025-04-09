'use client';

import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    name: 'Poultry Farming',
    description: 'Expert poultry farming services including breeding, raising, and management of healthy birds for optimal production.',
    image: '/images/services/poultry-farming.jpg',
    features: [
      'Modern breeding techniques',
      'Disease prevention & control',
      'Feed management systems',
      'Production optimization'
    ],
  },
  {
    id: 2,
    name: 'Crop Cultivation',
    description: 'Professional crop cultivation services utilizing sustainable farming practices for maximum yield and quality.',
    image: '/images/services/crop-cultivation.jpg',
    features: [
      'Soil preparation & management',
      'Crop rotation planning',
      'Pest control solutions',
      'Harvest optimization'
    ],
  },
  {
    id: 3,
    name: 'Agricultural Consulting',
    description: 'Expert agricultural consulting services to help farmers optimize their operations and increase productivity.',
    image: '/images/services/consulting.jpg',
    features: [
      'Farm planning & setup',
      'Production optimization',
      'Technical training',
      'Market analysis'
    ],
  },
  {
    id: 4,
    name: 'Processing Services',
    description: 'Modern processing facilities for various agricultural products, ensuring quality and food safety standards.',
    image: '/images/services/processing.jpg',
    features: [
      'Product processing',
      'Quality control',
      'Packaging solutions',
      'Storage facilities'
    ],
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#9FD134]/10 text-[#2A7E2E] px-4 py-2 rounded-full text-sm font-medium">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Agricultural Services
          </h2>
          <p className="text-gray-600">
            We provide comprehensive agricultural services with modern techniques and sustainable practices to ensure optimal results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Service Image */}
                <div className="relative h-64 md:h-auto md:w-2/5">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Service Content */}
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#9FD134] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link 
                    href={`/services#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-[#2A7E2E] hover:text-[#78A832] mt-4 text-sm font-medium transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#2A7E2E] text-white px-8 py-4 rounded-full hover:bg-[#78A832] transition-colors text-lg font-medium"
          >
            Schedule a Consultation
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services; 