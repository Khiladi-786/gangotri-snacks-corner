import React from 'react';
import { Phone, MapPin, ChevronDown } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';
import { HeritageBadge } from './HeritageBadge';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative h-[90vh] min-h-[640px] max-h-[920px] flex flex-col justify-between pt-24 pb-6 overflow-hidden bg-[var(--color-dark-brown)] text-white">
      {/* Full-Screen Real Photo Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={restaurantData.hero.backgroundImage}
          alt="Hotel Gangotri Exterior"
          className="w-full h-full object-cover object-center scale-102"
        />
        
        {/* Balanced Left-to-Right Layered Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              90deg,
              rgba(20, 8, 5, 0.75) 0%,
              rgba(20, 8, 5, 0.50) 42%,
              rgba(20, 8, 5, 0.20) 75%,
              rgba(20, 8, 5, 0.08) 100%
            )`
          }}
        />

        {/* Subtle Bottom Gradient Overlay for Scroll Contrast */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to top,
              rgba(20, 8, 5, 0.60) 0%,
              transparent 45%
            )`
          }}
        />
      </div>

      {/* Main Left-Aligned Hero Content */}
      <div className="relative z-10 site-container my-auto">
        <div className="max-w-2xl text-left">
          
          {/* Eyebrow SINCE 1987 Badge */}
          <div className="mb-4 inline-block">
            <HeritageBadge year={restaurantData.sinceYear} text="SINCE" />
          </div>

          {/* Main Title: GANGOTRI */}
          <h1
            className="font-serif text-[clamp(3.5rem,6.5vw,6.5rem)] font-medium text-[#FFF8ED] leading-[0.95] tracking-[0.02em] mb-1 drop-shadow-[0_3px_14px_rgba(0,0,0,0.75)]"
          >
            GANGOTRI
          </h1>

          {/* Sub-Title: SNACKS CORNER */}
          <p
            className="font-serif text-2xl sm:text-3xl text-[#F5D9A6] font-bold tracking-[0.25em] uppercase mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]"
          >
            SNACKS CORNER
          </p>

          {/* Marathi Subtle Accent Line */}
          <p
            className="font-devanagari text-lg sm:text-xl text-[#FFF8ED] font-medium mb-3 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
          >
            "{restaurantData.marathiTagline}"
          </p>

          {/* Headline: Good Food. Warm Hospitality. */}
          <h2
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F0C77A] font-semibold mb-3 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]"
          >
            {restaurantData.hero.headline}
          </h2>

          {/* Subheadline Description */}
          <p
            className="text-sm sm:text-base md:text-lg text-[#FFF8ED]/90 font-normal max-w-xl mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
          >
            {restaurantData.hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
            <a
              href={`tel:${restaurantData.phone}`}
              className="btn-terracotta py-3.5 px-8 text-sm shadow-2xl"
            >
              <Phone className="w-4 h-4 text-[#F5D9A6]" />
              <span>CALL NOW</span>
            </a>

            <a
              href={restaurantData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold py-3.5 px-8 text-sm shadow-2xl"
            >
              <MapPin className="w-4 h-4 text-[var(--color-terracotta)]" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>

          {/* Location Badge Line */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFF8ED]/85 tracking-widest uppercase bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 drop-shadow">
            <MapPin className="w-3.5 h-3.5 text-[#F0C77A]" />
            <span>{restaurantData.hero.locationBadge}</span>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 text-center pb-2">
        <a
          href="#info-bar"
          className="inline-flex flex-col items-center gap-1 text-[10px] font-bold tracking-widest text-[#FFF8ED]/70 hover:text-[#F0C77A] transition-colors uppercase drop-shadow"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#F0C77A]" />
        </a>
      </div>
    </section>
  );
};
