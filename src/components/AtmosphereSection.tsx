import React from 'react';
import { restaurantData } from '../data/restaurantData';

export const AtmosphereSection: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-[var(--color-cream)] relative overflow-hidden">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow-label mx-auto mb-3">
            <span>RESTAURANT EXPERIENCE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[var(--color-maroon)] mb-3">
            {restaurantData.atmosphere.heading}
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-muted-brown)]">
            {restaurantData.atmosphere.subheading}
          </p>
        </div>

        {/* 3 Layered Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {restaurantData.atmosphere.cards.map((card, idx) => (
            <div
              key={idx}
              className="editorial-card p-8 flex flex-col justify-between group hover:border-[var(--color-terracotta)] transition-all bg-white relative overflow-hidden"
            >
              {/* Card Numbering */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--color-gold)]/30">
                <span className="font-serif text-3xl font-extrabold text-[var(--color-terracotta)]">
                  {card.number}
                </span>
                <span className="font-devanagari text-xs font-semibold text-[var(--color-gold-dark)]">
                  {card.marathiTitle}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[var(--color-maroon)] mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--color-muted-brown)] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 pt-4">
                <div className="w-10 h-0.5 bg-[var(--color-gold)] group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
