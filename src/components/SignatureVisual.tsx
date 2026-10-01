import React from 'react';
import { restaurantData } from '../data/restaurantData';
import { HeritageDivider } from './HeritageDivider';

export const SignatureVisual: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[var(--color-maroon-dark)] text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={restaurantData.signatureVisual.image}
          alt="Hotel Gangotri courtyard architecture"
          className="w-full h-full object-cover object-center scale-102"
        />
        {/* Light Warm Overlay for High Image Visibility & Crisp Text Contrast */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(45, 18, 10, 0.42),
              rgba(45, 18, 10, 0.48)
            )`
          }}
        />
      </div>

      {/* Top Roof Divider */}
      <div className="absolute top-0 inset-x-0 z-10">
        <HeritageDivider color="#F7F1E7" accentColor="#A9472B" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[750px] mx-auto px-6 text-center">
        {/* Thin Gold Decorative Line */}
        <div className="w-16 h-0.5 bg-[var(--color-gold)] opacity-90 mx-auto mb-6 shadow" />

        {/* Section Heading */}
        <h2
          className="font-serif text-3xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.75)' }}
        >
          {restaurantData.signatureVisual.statement}
        </h2>

        {/* Marathi Heading: चव • परंपरा • आपुलकी */}
        <p
          className="font-devanagari text-2xl sm:text-3xl md:text-[32px] text-[#FFF8ED] font-bold mb-4 tracking-wide"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.75)' }}
        >
          "{restaurantData.marathiTagline}"
        </p>

        {/* English Description */}
        <p
          className="text-base sm:text-xl md:text-[22px] text-[#FFF8ED] font-medium leading-[1.6] max-w-[750px] mx-auto"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.75)' }}
        >
          {restaurantData.signatureVisual.subtext}
        </p>

        {/* Thin Gold Decorative Line Bottom */}
        <div className="w-16 h-0.5 bg-[var(--color-gold)] opacity-90 mx-auto mt-6 shadow" />
      </div>

      {/* Bottom Roof Divider */}
      <div className="absolute bottom-0 inset-x-0 z-10">
        <HeritageDivider color="#EFE8D9" accentColor="#A9472B" />
      </div>
    </section>
  );
};
