import React from 'react';


export const FamilyLegacy: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[var(--color-cream-alt)] border-t border-[var(--color-gold)]/30 relative text-center overflow-hidden">
      <div className="site-container max-w-3xl mx-auto px-6">
        
        {/* Small Decorative Line / Divider */}
        <div className="w-12 h-0.5 bg-[var(--color-terracotta)] mx-auto mb-6 opacity-80" />

        {/* Heading */}
        <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[var(--color-maroon)] mb-3 tracking-tight">
          A Digital Touch to a Family Legacy
        </h3>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base text-[var(--color-terracotta)] font-semibold mb-2">
          Website thoughtfully designed & developed by Nikhil More
        </p>

        {/* Secondary Line */}
        <p className="text-xs sm:text-sm text-[var(--color-muted-brown)] font-medium tracking-wide">
          For Gangotri Snacks Corner • Since 1987
        </p>

        {/* Small Decorative Accent */}
        <div className="mt-6 flex items-center justify-center gap-2 text-[var(--color-gold-dark)] text-xs">
          <span>❖</span>
          <span className="font-devanagari font-semibold">परंपरा व आपुलकी</span>
          <span>❖</span>
        </div>

      </div>
    </section>
  );
};
