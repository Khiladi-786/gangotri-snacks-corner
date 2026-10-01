import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu as MenuIcon, X, Utensils } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-5 sm:px-8 py-3 flex items-center justify-between border ${
          isScrolled
            ? 'bg-[var(--color-cream)]/95 backdrop-blur-md shadow-xl border-[var(--color-gold)]/40 text-[var(--color-dark-brown)]'
            : 'bg-[var(--color-maroon)]/85 backdrop-blur-sm shadow-lg border-white/20 text-white'
        }`}
      >
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm ${
              isScrolled
                ? 'bg-[var(--color-terracotta)] text-white'
                : 'bg-[var(--color-gold)] text-[var(--color-maroon)]'
            }`}
          >
            <Utensils className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-serif text-lg font-bold tracking-tight leading-none ${
                isScrolled ? 'text-[var(--color-maroon)]' : 'text-white'
              }`}
            >
              GANGOTRI
            </span>
            <span
              className={`text-[10px] font-semibold tracking-wider uppercase mt-0.5 ${
                isScrolled ? 'text-[var(--color-terracotta)]' : 'text-[var(--color-gold-light)]'
              }`}
            >
              SNACKS CORNER • HOTEL
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-terracotta)] hover:after:w-full after:transition-all ${
                isScrolled
                  ? 'text-[var(--color-dark-brown)] hover:text-[var(--color-terracotta)]'
                  : 'text-cream/90 hover:text-[var(--color-gold-light)]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={restaurantData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? 'text-[var(--color-terracotta)] hover:bg-[var(--color-cream-alt)]'
                : 'text-[var(--color-gold-light)] hover:bg-white/10'
            }`}
            title="Get Directions"
          >
            <MapPin className="w-5 h-5" />
          </a>
          <a
            href={`tel:${restaurantData.phone}`}
            className="btn-terracotta text-xs py-2 px-5 shadow-md"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>CALL NOW</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-full focus:outline-none ${
            isScrolled ? 'text-[var(--color-maroon)]' : 'text-white'
          }`}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-md mx-auto rounded-3xl bg-[var(--color-maroon)] text-white border border-[var(--color-gold)]/30 p-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-cream/90 hover:text-[var(--color-gold-light)] py-2 border-b border-white/10"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-3 pt-2">
              <a
                href={`tel:${restaurantData.phone}`}
                className="btn-terracotta w-full justify-center py-3 text-xs"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW ({restaurantData.formattedPhone})</span>
              </a>
              <a
                href={restaurantData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold w-full justify-center py-3 text-xs"
              >
                <MapPin className="w-4 h-4 text-[var(--color-terracotta)]" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
