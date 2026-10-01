import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';
import { HeritageDivider } from './HeritageDivider';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[var(--color-maroon-dark)] text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={restaurantData.hero.backgroundImage}
          alt="Hotel Gangotri restaurant"
          className="w-full h-full object-cover object-center scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-maroon-dark)] via-[var(--color-maroon-dark)]/90 to-black/80" />
      </div>

      {/* Top Roof Divider */}
      <div className="absolute top-0 inset-x-0 z-10">
        <HeritageDivider color="#EFE8D9" accentColor="#A9472B" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="font-devanagari text-lg sm:text-xl text-[var(--color-gold-light)] font-medium mb-2 block">
          आपले स्वागत आहे
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Ready for a Good Meal?
        </h2>

        <p className="text-lg sm:text-2xl text-cream/90 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Visit Gangotri Snacks Corner on Shirur-Sangavi Road.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={`tel:${restaurantData.phone}`}
            className="btn-terracotta w-full py-4 text-sm shadow-2xl"
          >
            <Phone className="w-4 h-4 text-[var(--color-gold-light)]" />
            <span>CALL NOW</span>
          </a>

          <a
            href={restaurantData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold w-full py-4 text-sm shadow-2xl"
          >
            <MapPin className="w-4 h-4 text-[var(--color-terracotta)]" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>
      </div>
    </section>
  );
};
