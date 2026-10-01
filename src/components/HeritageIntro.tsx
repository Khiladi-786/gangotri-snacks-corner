import React from 'react';
import { HeritageBadge } from './HeritageBadge';
import { restaurantData } from '../data/restaurantData';
import { ShieldCheck, Users, Flame } from 'lucide-react';

export const HeritageIntro: React.FC = () => {
  const highlights = [
    { icon: <Flame className="w-4 h-4 text-[var(--color-terracotta)]" />, label: 'Traditional Character' },
    { icon: <Users className="w-4 h-4 text-[var(--color-terracotta)]" />, label: 'Family Dining' },
    { icon: <ShieldCheck className="w-4 h-4 text-[var(--color-terracotta)]" />, label: 'Open-Air Atmosphere' }
  ];

  return (
    <section id="about" className="section-padding bg-[var(--color-cream)] relative">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: ~45% Entrance Photo Frame */}
          <div className="lg:col-span-5 relative">
            <div className="editorial-frame p-2.5 bg-white border border-[var(--color-gold)]/40 relative">
              <img
                src={restaurantData.heritage.image}
                alt="The Gangotri Entrance"
                className="w-full h-[400px] sm:h-[480px] object-cover rounded-xl"
              />
              
              {/* Top Badge */}
              <div className="absolute top-6 left-6 z-10">
                <HeritageBadge year={restaurantData.sinceYear} text="HERITAGE" />
              </div>

              {/* Bottom Dark Gradient Overlay for Maximum High Contrast Text */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none flex flex-col justify-end">
                <div className="w-full p-6 bg-gradient-to-t from-[rgba(20,10,6,0.95)] via-[rgba(20,10,6,0.65)] via-50% to-transparent text-left">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E0B457] mb-0.5 block drop-shadow">
                    ENTRANCE ARCHWAY
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF8ED] mb-1 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                    The Gangotri Entrance
                  </h3>
                  <p className="font-devanagari text-xs text-[#E0B457] font-semibold mb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                    {restaurantData.heritage.marathiTitle}
                  </p>
                  <p className="text-xs text-[#F5EBDD] font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                    A traditional entrance with terracotta architecture and landscaped surroundings.
                  </p>
                </div>
              </div>

            </div>
            
            {/* Layered Accent Offset Card */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[var(--color-terracotta)]/10 rounded-2xl -z-10 hidden sm:block" />
          </div>

          {/* RIGHT: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="eyebrow-label mb-3">
              <span>{restaurantData.heritage.title}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--color-maroon)] mb-6 leading-tight">
              {restaurantData.heritage.heading}
            </h2>

            {restaurantData.heritage.copyParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg text-[var(--color-muted-brown)] mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* 3 Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 pt-4 border-t border-[var(--color-gold)]/30">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <div className="p-1.5 rounded-full bg-[var(--color-cream)]">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-dark-brown)]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Marathi Heritage Card */}
            <div className="p-5 rounded-2xl bg-[var(--color-cream-alt)] border-l-4 border-[var(--color-terracotta)] shadow-sm">
              <p className="font-devanagari text-base font-bold text-[var(--color-maroon)] mb-1">
                "आपले सहर्ष स्वागत आहे. उत्तम चव आणि आपुलकीची सेवा हेच आमचे वैशिष्ट्य."
              </p>
              <p className="text-xs text-[var(--color-muted-brown)]">
                Welcoming travelers and families along the Shirur-Sangavi highway.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
