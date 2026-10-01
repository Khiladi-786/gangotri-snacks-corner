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
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-maroon-dark)]/95 via-[var(--color-maroon)]/85 to-[var(--color-maroon-dark)]/95" />
      </div>

      {/* Top Roof Divider */}
      <div className="absolute top-0 inset-x-0 z-10">
        <HeritageDivider color="#F7F1E7" accentColor="#A9472B" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Thin Gold Decorative Line */}
        <div className="w-16 h-0.5 bg-[var(--color-gold)] mx-auto mb-6" />

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight">
          {restaurantData.signatureVisual.statement}
        </h2>

        <p className="font-devanagari text-xl sm:text-2xl text-[var(--color-gold-light)] font-semibold mb-6">
          "{restaurantData.marathiTagline}"
        </p>

        <p className="text-base sm:text-xl text-cream/90 font-normal max-w-2xl mx-auto leading-relaxed">
          {restaurantData.signatureVisual.subtext}
        </p>

        {/* Thin Gold Decorative Line Bottom */}
        <div className="w-16 h-0.5 bg-[var(--color-gold)] mx-auto mt-6" />
      </div>

      {/* Bottom Roof Divider */}
      <div className="absolute bottom-0 inset-x-0 z-10">
        <HeritageDivider color="#EFE8D9" accentColor="#A9472B" />
      </div>
    </section>
  );
};
