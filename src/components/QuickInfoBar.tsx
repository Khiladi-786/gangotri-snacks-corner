import React from 'react';
import { MapPin, Utensils, Leaf, Phone } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export const QuickInfoBar: React.FC = () => {
  const items = [
    { icon: <MapPin className="w-4 h-4 text-[var(--color-gold)]" />, label: 'Korhale Bk, Loni Bhapkar' },
    { icon: <Utensils className="w-4 h-4 text-[var(--color-gold)]" />, label: 'Family Restaurant' },
    { icon: <Leaf className="w-4 h-4 text-[var(--color-gold)]" />, label: 'Open-Air Dining' },
    { icon: <Phone className="w-4 h-4 text-[var(--color-gold)]" />, label: restaurantData.formattedPhone, isPhone: true }
  ];

  return (
    <section id="info-bar" className="bg-[var(--color-maroon)] text-cream border-y border-[var(--color-gold)]/30 py-4">
      <div className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-between text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3 py-2 px-3">
              <div className="p-2 rounded-full bg-white/5 border border-[var(--color-gold)]/20">
                {item.icon}
              </div>
              {item.isPhone ? (
                <a
                  href={`tel:${restaurantData.phone}`}
                  className="text-xs sm:text-sm font-semibold text-white hover:text-[var(--color-gold-light)] transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-cream/90">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
