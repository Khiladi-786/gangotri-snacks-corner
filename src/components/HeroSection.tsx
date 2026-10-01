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
        
        {/* Layered Gradient Overlay (Strong behind left text area, fading to transparent right) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              90deg,
              rgba(20, 10, 6, 0.78) 0%,
              rgba(20, 10, 6, 0.60) 32%,
              rgba(20, 10, 6, 0.25) 58%,
              rgba(20, 10, 6, 0.05) 80%,
              rgba(20, 10, 6, 0) 100%
            )`
          }}
        />

        {/* Subtle Overall Bottom Gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to top,
              rgba(20, 10, 6, 0.55) 0%,
              rgba(20, 10, 6, 0) 45%
            )`
          }}
        />
      </div>

      {/* Main Left-Aligned Hero Content */}
      <div className="relative z-10 site-container my-auto">
        <div className="max-w-xl lg:max-w-2xl text-left">
          
          {/* 1. SINCE 1987 Badge */}
          <div className="mb-4 inline-block">
            <HeritageBadge year={restaurantData.sinceYear} text="SINCE" />
          </div>

          {/* 2. GANGOTRI Main Heading */}
          <h1
            className="font-serif text-[clamp(3.2rem,6.2vw,6.2rem)] font-bold text-[#FFF8ED] leading-[0.95] tracking-[0.02em] mb-1"
            style={{
              textShadow: '0 3px 12px rgba(0, 0, 0, 0.65), 0 4px 14px rgba(0, 0, 0, 0.35)'
            }}
          >
            GANGOTRI
          </h1>

          {/* 3. SNACKS CORNER Sub-Title */}
          <p
            className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F3D19A] font-semibold tracking-[0.2em] uppercase mb-4"
            style={{
              textShadow: '0 2px 5px rgba(0, 0, 0, 0.65)'
            }}
          >
            SNACKS CORNER
          </p>

          {/* 4. MARATHI TAGLINE ("चव • परंपरा • आपुलकी") */}
          <p
            className="font-devanagari text-lg sm:text-xl text-[#FFF8ED] font-medium mb-3 tracking-wide"
            style={{
              textShadow: '0 2px 5px rgba(0, 0, 0, 0.65)'
            }}
          >
            "{restaurantData.marathiTagline}"
          </p>

          {/* 5. MAIN SUPPORTING LINE ("Good Food. Warm Hospitality.") */}
          <h2
            className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F0C77A] font-semibold mb-3 leading-tight"
            style={{
              textShadow: '0 2px 5px rgba(0, 0, 0, 0.65), 0 4px 14px rgba(0, 0, 0, 0.35)'
            }}
          >
            {restaurantData.hero.headline}
          </h2>

          {/* 6. DESCRIPTION ("A welcoming family restaurant on Shirur–Sangavi Road.") */}
          <p
            className="text-base sm:text-lg text-[rgba(255,248,237,0.95)] font-normal max-w-[520px] mb-8 leading-relaxed"
            style={{
              textShadow: '0 2px 5px rgba(0, 0, 0, 0.65)'
            }}
          >
            {restaurantData.hero.subheadline}
          </p>

          {/* 7. Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
            <a
              href={`tel:${restaurantData.phone}`}
              className="btn-terracotta py-3.5 px-8 text-sm shadow-2xl"
            >
              <Phone className="w-4 h-4 text-[#F3D19A]" />
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

          {/* Location Line */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFF8ED]/90 tracking-widest uppercase bg-black/45 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 drop-shadow">
            <MapPin className="w-3.5 h-3.5 text-[#F0C77A]" />
            <span>{restaurantData.hero.locationBadge}</span>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 text-center pb-2">
        <a
          href="#info-bar"
          className="inline-flex flex-col items-center gap-1 text-[10px] font-bold tracking-widest text-[#FFF8ED]/80 hover:text-[#F0C77A] transition-colors uppercase"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.65)' }}
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#F0C77A]" />
        </a>
      </div>
    </section>
  );
};
