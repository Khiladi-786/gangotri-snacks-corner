import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { type GalleryItem } from '../data/restaurantData';

interface LightboxModalProps {
  isOpen: boolean;
  currentIndex: number;
  items: GalleryItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-8 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none"
        aria-label="Close Lightbox"
      >
        <X className="w-7 h-7" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none"
        aria-label="Next Image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Image & Caption Container */}
      <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-h-[75vh]">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="font-serif text-xl font-bold text-white mb-1">
            {currentItem.title}
          </h3>
          {currentItem.marathiTitle && (
            <p className="font-devanagari text-sm text-[var(--color-amber-light)] font-medium mb-1">
              {currentItem.marathiTitle}
            </p>
          )}
          <p className="text-xs sm:text-sm text-cream/70">
            {currentItem.caption}
          </p>
          <span className="text-[11px] text-cream/40 mt-2 block">
            {currentIndex + 1} of {items.length}
          </span>
        </div>
      </div>
    </div>
  );
};
