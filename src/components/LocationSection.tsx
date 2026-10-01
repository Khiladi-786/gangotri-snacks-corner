import React from 'react';
import { MapPin, Phone, Compass, Navigation } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="section-padding bg-[var(--color-cream-alt)] relative">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="eyebrow-label mx-auto mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{restaurantData.location.marathiTitle}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[var(--color-maroon)] mb-3">
            {restaurantData.location.title}
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-muted-brown)]">
            {restaurantData.location.description}
          </p>
        </div>

        {/* Split Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* LEFT: Map Visual Card */}
          <div className="lg:col-span-6 bg-white border-2 border-[var(--color-gold)]/40 rounded-3xl overflow-hidden shadow-xl flex flex-col relative min-h-[380px]">
            <div className="p-4 bg-[var(--color-maroon)] text-white flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[var(--color-gold)]" />
                <span>Shirur-Sangavi Road Location</span>
              </div>
              <a
                href={restaurantData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--color-gold-light)] hover:underline font-bold"
              >
                OPEN GOOGLE MAPS →
              </a>
            </div>

            <div
              className="flex-1 relative bg-cover bg-center flex items-center justify-center p-8 text-center"
              style={{ backgroundImage: `url('/images/hero.png')` }}
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
              <div className="relative z-10 max-w-sm p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-[var(--color-gold)]/30">
                <div className="w-12 h-12 rounded-full bg-[var(--color-terracotta)] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Navigation className="w-6 h-6 text-[var(--color-gold-light)]" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[var(--color-maroon)] mb-1">
                  Gangotri Snacks Corner
                </h4>
                <p className="text-xs text-[var(--color-muted-brown)] mb-4">
                  796Q+436, Shirur-Sangavi Rd, Korhale Bk, Loni Bhapkar, Maharashtra
                </p>
                <a
                  href={restaurantData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full py-3 text-xs"
                >
                  <span>LAUNCH GOOGLE NAVIGATION</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Verified Location Card */}
          <div className="lg:col-span-6 bg-white border-2 border-[var(--color-gold)]/40 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-terracotta)] bg-[var(--color-terracotta-subtle)] px-3.5 py-1 rounded-full mb-6">
                <MapPin className="w-3.5 h-3.5" />
                <span>ROADSIDE DESTINATION</span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-[var(--color-maroon)] mb-2">
                {restaurantData.businessName}
              </h3>
              <p className="font-devanagari text-base font-semibold text-[var(--color-gold-dark)] mb-6">
                {restaurantData.signboardName}
              </p>

              {/* Verified Address & Phone Info */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-cream)] border border-[var(--color-gold)]/30 flex items-center justify-center flex-shrink-0 text-[var(--color-terracotta)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[var(--color-muted-brown)] block uppercase font-bold tracking-wider">ADDRESS</span>
                    <span className="text-sm font-semibold text-[var(--color-dark-brown)] leading-relaxed block">{restaurantData.address.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-cream)] border border-[var(--color-gold)]/30 flex items-center justify-center flex-shrink-0 text-[var(--color-terracotta)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[var(--color-muted-brown)] block uppercase font-bold tracking-wider">TELEPHONE</span>
                    <a href={`tel:${restaurantData.phone}`} className="text-lg font-extrabold text-[var(--color-terracotta)] hover:underline">
                      {restaurantData.formattedPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[var(--color-gold)]/20">
              <a
                href={restaurantData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terracotta flex-1 py-3.5 text-xs"
              >
                <MapPin className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>
              <a
                href={`tel:${restaurantData.phone}`}
                className="btn-outline-gold flex-1 py-3.5 text-xs"
              >
                <Phone className="w-4 h-4 text-[var(--color-terracotta)]" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
