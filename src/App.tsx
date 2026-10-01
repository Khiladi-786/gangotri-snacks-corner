
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickInfoBar } from './components/QuickInfoBar';
import { HeritageIntro } from './components/HeritageIntro';
import { SignatureVisual } from './components/SignatureVisual';
import { FoodMenuSection } from './components/FoodMenuSection';
import { AtmosphereSection } from './components/AtmosphereSection';
import { PhotoGallery } from './components/PhotoGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export function App() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-dark-brown)] flex flex-col font-sans selection:bg-[var(--color-terracotta)] selection:text-white">
      {/* Floating Glass Navigation Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Full-Screen Hero Section */}
        <HeroSection />

        {/* Quick Info Bar */}
        <QuickInfoBar />

        {/* About Section */}
        <HeritageIntro />

        {/* Heritage Visual Break */}
        <SignatureVisual />

        {/* Food Menu & Thalis Section */}
        <FoodMenuSection />

        {/* Restaurant Experience */}
        <AtmosphereSection />

        {/* Editorial Photo Gallery */}
        <PhotoGallery />

        {/* Google Reviews */}
        <ReviewsSection />

        {/* Verified Location & Map */}
        <LocationSection />

        {/* Final Immersive CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar />
    </div>
  );
}

export default App;
