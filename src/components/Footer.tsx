import React from 'react';
import { Utensils, Phone, MapPin, ExternalLink } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-maroon-dark)] text-cream border-t border-[var(--color-gold)]/30 pt-16 pb-24 lg:pb-12">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-terracotta)] text-white flex items-center justify-center border border-[var(--color-gold)]/40 shadow-sm">
                <Utensils className="w-5 h-5 text-[var(--color-gold-light)]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white leading-tight">
                  {restaurantData.businessName}
                </h3>
                <span className="font-devanagari text-xs text-[var(--color-gold-light)] block">
                  हॉटेल गंगोत्री • Since 1987
                </span>
              </div>
            </div>

            <p className="text-sm text-cream/75 leading-relaxed max-w-sm mb-6">
              A traditional roadside dining destination offering authentic Maharashtrian food, thalis, hot snacks, and open-air family dining on Shirur-Sangavi Road.
            </p>

            <a
              href={restaurantData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-gold-light)] hover:text-white transition-colors border border-[var(--color-gold)]/40 rounded-full px-4 py-2 bg-white/5"
            >
              <span>View Google Business Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[var(--color-gold)]/40 pb-2 inline-block">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-cream/80">
              <li><a href="#hero" className="hover:text-[var(--color-gold-light)] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[var(--color-gold-light)] transition-colors">About & Heritage</a></li>
              <li><a href="#menu" className="hover:text-[var(--color-gold-light)] transition-colors">Menu & Thalis</a></li>
              <li><a href="#experience" className="hover:text-[var(--color-gold-light)] transition-colors">Experience</a></li>
              <li><a href="#gallery" className="hover:text-[var(--color-gold-light)] transition-colors">Photo Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[var(--color-gold-light)] transition-colors">Reviews</a></li>
              <li><a href="#location" className="hover:text-[var(--color-gold-light)] transition-colors">Location & Directions</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[var(--color-gold)]/40 pb-2 inline-block">
              CONTACT & ADDRESS
            </h4>
            <div className="space-y-3.5 text-xs text-cream/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">796Q+436, Shirur-Sangavi Rd, Korhale Bk, Loni Bhapkar, Maharashtra 412204</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0" />
                <a href={`tel:${restaurantData.phone}`} className="font-bold text-[var(--color-gold-light)] hover:underline text-sm">
                  {restaurantData.formattedPhone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/60 gap-4">
          <p>© 2026 Gangotri Snacks Corner (Hotel Gangotri). All rights reserved.</p>
          <p className="font-devanagari text-cream/70">
            चव • परंपरा • आपुलकी
          </p>
        </div>
      </div>
    </footer>
  );
};
