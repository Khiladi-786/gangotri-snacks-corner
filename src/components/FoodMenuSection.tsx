import React, { useState } from 'react';
import { Utensils, Phone, Info, Award, Sparkles } from 'lucide-react';
import { restaurantData, type MenuItem } from '../data/restaurantData';

export const FoodMenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('specialities');

  const filteredItems = restaurantData.menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="menu" className="section-padding bg-[var(--color-cream-alt)] relative">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="eyebrow-label mx-auto mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>{restaurantData.foodSection.marathiHeading}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[var(--color-maroon)] mb-3">
            {restaurantData.foodSection.heading}
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-muted-brown)]">
            {restaurantData.foodSection.subheading}
          </p>
        </div>

        {/* Editorial Overlapping Signboard & Thali Feature Banner */}
        <div className="max-w-5xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-white border border-[var(--color-gold)]/40 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Overlapping Photo Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[var(--color-gold)]/40 aspect-[4/3]">
                <img
                  src={restaurantData.foodSection.signboardImage}
                  alt="Hotel Gangotri Signboard"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Floating Thali Card */}
              <div className="absolute -bottom-6 -right-4 w-44 sm:w-52 rounded-2xl overflow-hidden shadow-2xl border-2 border-white hidden sm:block">
                <img
                  src={restaurantData.foodSection.foodImage}
                  alt="Special Thali"
                  className="w-full h-32 object-cover"
                />
                <div className="bg-[var(--color-maroon)] text-white p-2 text-center">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[var(--color-gold-light)] block">
                    MAHARASHTRIAN THALI
                  </span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-[var(--color-terracotta)] text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md border border-[var(--color-gold)]/40">
                SINCE 1987
              </div>
            </div>

            {/* Right: Signboard Highlights & Verification Copy */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-cream-alt)] text-[var(--color-terracotta)] text-xs font-bold uppercase mb-3">
                <Award className="w-4 h-4 text-[var(--color-gold)]" />
                <span>SIGNBOARD SPECIALITIES</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-maroon)] mb-3">
                Hotel Gangotri Thalis & Local Specialties
              </h3>

              <p className="text-sm text-[var(--color-muted-brown)] mb-4 leading-relaxed">
                As displayed on our roadside signage: Special Mutton Thali, Special Chicken Thali, Special Fish Thali, Egg Masala, and freshly baked Jowar / Bajra Bhakri & Chapati.
              </p>

              <div className="p-4 rounded-xl bg-[var(--color-cream)] border border-[var(--color-gold)]/30 mb-6">
                <p className="text-xs text-[var(--color-dark-brown)] font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--color-gold)]" />
                  <span>Veg & Non-Veg Family Restaurant</span>
                </p>
              </div>

              <a
                href={`tel:${restaurantData.phone}`}
                className="btn-terracotta py-3 px-6 text-xs shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>ASK ABOUT TODAY'S MENU</span>
              </a>
            </div>

          </div>
        </div>

        {/* Menu Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {restaurantData.menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm ${
                activeCategory === cat.id
                  ? 'bg-[var(--color-terracotta)] text-white shadow-lg scale-105 border border-[var(--color-terracotta-dark)]'
                  : 'bg-white text-[var(--color-dark-brown)] hover:bg-[var(--color-cream)] border border-[var(--color-gold)]/30'
              }`}
            >
              <span>{cat.name}</span>
              <span className="ml-2 font-devanagari text-xs opacity-75">({cat.marathiName})</span>
            </button>
          ))}
        </div>

        {/* Physical Menu Card Layout */}
        <div className="max-w-4xl mx-auto bg-white border-2 border-[var(--color-gold)]/40 rounded-3xl p-6 sm:p-12 shadow-xl relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item: MenuItem) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[var(--color-cream)]/70 border border-[var(--color-gold)]/20 hover:border-[var(--color-terracotta)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-serif text-xl font-bold text-[var(--color-maroon)]">
                      {item.name}
                    </h4>
                    {item.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[var(--color-gold)]/20 text-[var(--color-maroon)] border border-[var(--color-gold)]/40">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {item.marathiName && (
                    <p className="font-devanagari text-xs font-semibold text-[var(--color-terracotta)] mb-2">
                      {item.marathiName}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-[var(--color-muted-brown)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--color-gold)]/20 flex items-center justify-between text-xs text-[var(--color-muted-brown)]">
                  <span className="font-semibold text-[var(--color-terracotta)]">Freshly Prepared</span>
                  <span className="font-medium italic">Call for today's price</span>
                </div>
              </div>
            ))}
          </div>

          {/* Menu Notice */}
          <div className="mt-10 pt-6 border-t border-[var(--color-gold)]/30 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[var(--color-cream-alt)] p-4 sm:p-6 rounded-2xl">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[var(--color-dark-brown)]">
              <Info className="w-5 h-5 text-[var(--color-gold-dark)] flex-shrink-0" />
              <span>{restaurantData.foodSection.disclaimer}</span>
            </div>

            <a
              href={`tel:${restaurantData.phone}`}
              className="btn-terracotta text-xs py-3 px-6 flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>{restaurantData.foodSection.ctaText}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
