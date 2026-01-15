import HeroSection from '@/components/HeroSection';
import BismillahSection from '@/components/BismillahSection';
import NamesSection from '@/components/NamesSection';
import DetailsSection from '@/components/DetailsSection';
import WishesSection from '@/components/WishesSection';
import FooterSection from '@/components/FooterSection';
import AudioPlayer from '@/components/AudioPlayer';
import StickyHeader from '@/components/StickyHeader';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <main className="bg-background">
      <StickyHeader />
      <HeroSection />
      <BismillahSection />
      <NamesSection />
      {!isLandingPage && (
        <>
          <DetailsSection />
          <WishesSection />
          <FooterSection />
        </>
      )}
      <AudioPlayer />
    </main>
  );
};

export default Index;
