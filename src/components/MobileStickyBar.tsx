import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-maroon-dark)]/98 backdrop-blur-md border-t-2 border-[var(--color-gold)]/40 p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={`tel:${restaurantData.phone}`}
          className="btn-terracotta py-3 px-3 text-xs font-bold justify-center shadow-lg"
        >
          <Phone className="w-4 h-4 text-[var(--color-gold-light)]" />
          <span>CALL NOW</span>
        </a>

        <a
          href={restaurantData.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold py-3 px-3 text-xs font-bold justify-center shadow-lg"
        >
          <MapPin className="w-4 h-4" />
          <span>DIRECTIONS</span>
        </a>
      </div>
    </div>
  );
};
