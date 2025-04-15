'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery/poultry-farm.jpg',
    alt: 'Modern Poultry Farm',
    category: 'Facilities',
    title: 'State-of-the-art Poultry Housing'
  },
  {
    id: 2,
    src: '/images/gallery/maize-field.jpg',
    alt: 'Maize Field',
    category: 'Crops',
    title: 'Thriving Maize Plantation'
  },
  {
    id: 3,
    src: '/images/gallery/chickens.jpg',
    alt: 'Healthy Chickens',
    category: 'Poultry',
    title: 'Healthy Bird Population'
  },
  {
    id: 4,
    src: '/images/gallery/cassava-harvest.jpg',
    alt: 'Cassava Harvest',
    category: 'Crops',
    title: 'Fresh Cassava Harvest'
  },
  {
    id: 5,
    src: '/images/gallery/farm-workers.jpg',
    alt: 'Farm Workers',
    category: 'Team',
    title: 'Our Dedicated Team'
  },
  {
    id: 6,
    src: '/images/gallery/palm-kernel-processing.jpg',
    alt: 'Palm Kernel Processing',
    category: 'Processing',
    title: 'Palm Kernel Processing'
  }
];

const categories = ['All', 'Facilities', 'Crops', 'Poultry', 'Team', 'Processing'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#9FD134]/10 text-[#2A7E2E] px-4 py-2 rounded-full text-sm font-medium">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Farm Life at Fayoade Farms
          </h2>
          <p className="text-gray-600">
            Take a visual journey through our farm operations and see how we maintain the highest standards in agricultural practices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === category
                  ? 'bg-[#2A7E2E] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <span className="text-sm bg-[#9FD134] px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute -top-12 right-0 text-white hover:text-[#9FD134] transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <span className="bg-[#9FD134] px-4 py-1 rounded-full text-sm">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 