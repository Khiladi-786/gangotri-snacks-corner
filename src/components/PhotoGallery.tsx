import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import { restaurantData, type GalleryItem } from '../data/restaurantData';
import { LightboxModal } from './LightboxModal';

export const PhotoGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const filterItems = activeTab === 'all'
    ? restaurantData.galleryItems
    : restaurantData.galleryItems.filter((item) => item.category === activeTab);

  const handleOpenLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="section-padding bg-[var(--color-cream-alt)] relative">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="eyebrow-label mx-auto mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>REAL PHOTOGRAPHY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[var(--color-maroon)] mb-3">
            Photo Gallery
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-muted-brown)]">
            Explore the authentic architecture, seating, entrance, and dishes of Hotel Gangotri.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {[
            { id: 'all', label: 'ALL' },
            { id: 'architecture', label: 'ARCHITECTURE' },
            { id: 'dining', label: 'DINING' },
            { id: 'food', label: 'FOOD' },
            { id: 'signboard', label: 'SIGNBOARD' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest transition-all ${
                activeTab === tab.id
                  ? 'bg-[var(--color-terracotta)] text-white shadow-md'
                  : 'bg-white text-[var(--color-dark-brown)] hover:bg-[var(--color-cream)] border border-[var(--color-gold)]/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filterItems.map((item: GalleryItem, idx: number) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className={`group relative rounded-2xl overflow-hidden shadow-md cursor-pointer border border-[var(--color-gold)]/30 bg-white hover:shadow-2xl transition-all duration-300 ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* High Contrast Dark-to-Transparent Bottom Gradient Overlay */}
              <div className="absolute inset-0 card-bottom-gradient opacity-95 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* VIEW PHOTO Badge */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 border border-white/20 z-10 shadow-lg">
                <Maximize2 className="w-3 h-3 text-[var(--color-gold-light)]" />
                <span>VIEW PHOTO</span>
              </div>

              {/* High-Contrast White/Cream Text Content */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-left z-10">
                {item.category && (
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--color-gold-light)] mb-1 block drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    {item.category}
                  </span>
                )}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF8ED] mb-1 leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                  {item.title}
                </h3>
                {item.marathiTitle && (
                  <p className="font-devanagari text-xs text-[var(--color-gold-light)] font-semibold mb-1.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                    {item.marathiTitle}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-[#F5EBDD] font-normal leading-relaxed line-clamp-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxOpen}
          currentIndex={currentIndex}
          items={filterItems}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setCurrentIndex((prev) => (prev === 0 ? filterItems.length - 1 : prev - 1))}
          onNext={() => setCurrentIndex((prev) => (prev === filterItems.length - 1 ? 0 : prev + 1))}
        />

      </div>
    </section>
  );
};
