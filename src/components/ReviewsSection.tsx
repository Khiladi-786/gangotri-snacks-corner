import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="section-padding bg-[var(--color-cream)] relative">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="eyebrow-label mx-auto mb-3">
            <Star className="w-3.5 h-3.5 text-[var(--color-gold)] fill-[var(--color-gold)]" />
            <span>GUEST REVIEWS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[var(--color-maroon)] mb-3">
            {restaurantData.reviews.title}
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-muted-brown)]">
            {restaurantData.reviews.subtitle}
          </p>
        </div>

        {/* Premium Google Reviews CTA Card */}
        <div className="max-w-3xl mx-auto p-8 sm:p-14 rounded-3xl bg-white border-2 border-[var(--color-gold)]/40 shadow-xl text-center relative overflow-hidden">
          
          {/* 5-Star Rating Display */}
          <div className="flex items-center justify-center gap-1.5 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-[var(--color-gold)] fill-[var(--color-gold)]" />
            ))}
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-maroon)] mb-4">
            Read Genuine Guest Reviews on Google
          </h3>

          <p className="text-sm sm:text-base text-[var(--color-muted-brown)] max-w-xl mx-auto mb-8 leading-relaxed">
            View authentic feedback, customer photos, and directions directly on our official Google Business Profile for Hotel Gangotri.
          </p>

          <a
            href={restaurantData.reviews.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold py-4 px-8 text-sm shadow-xl inline-flex items-center gap-3"
          >
            <span>{restaurantData.reviews.ctaText}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
