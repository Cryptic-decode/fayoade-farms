'use client';

import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Poultry Products',
    description: 'Fresh, farm-raised chickens and premium quality eggs from our sustainable poultry farm.',
    image: '/images/poultry.jpg',
    items: ['Fresh Chicken', 'Farm Eggs', 'Day-Old Chicks'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Maize',
    description: 'High-quality maize grown using sustainable farming practices, perfect for both human consumption and animal feed.',
    image: '/images/maize.jpg',
    items: ['Fresh Maize', 'Dried Maize', 'Maize Flour'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Cassava',
    description: 'Fresh cassava and processed products grown with care and harvested at peak quality.',
    image: '/images/cassava.jpg',
    items: ['Fresh Cassava', 'Cassava Flour', 'Processed Cassava'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Palm Kernel',
    description: 'Sustainably harvested palm kernel products processed with modern techniques.',
    image: '/images/palm-kernel.jpg',
    items: ['Palm Kernel Oil', 'Palm Kernel Cake', 'Raw Palm Kernel'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
];

const Products = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#9FD134]/10 text-[#2A7E2E] px-4 py-2 rounded-full text-sm font-medium">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Featured Farm Products
          </h2>
          <p className="text-gray-600">
            Discover our range of premium agricultural products, grown and processed with care for quality and sustainability.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative h-48 rounded-t-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#9FD134]">
                    {product.icon}
                  </span>
                  <h3 className="font-semibold text-xl text-gray-900">
                    {product.name}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                {/* Product Items */}
                <ul className="space-y-2">
                  {product.items.map((item, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#9FD134] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center bg-[#2A7E2E] text-white px-6 py-3 rounded-full hover:bg-[#78A832] transition-colors"
          >
            View All Products
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products; 