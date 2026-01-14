import HeroSection from '@/components/HeroSection';
import NamesSection from '@/components/NamesSection';
import DetailsSection from '@/components/DetailsSection';
import WishesSection from '@/components/WishesSection';
import FooterSection from '@/components/FooterSection';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <NamesSection />
      <DetailsSection />
      <WishesSection />
      <FooterSection />
      <AudioPlayer />
    </main>
  );
};

export default Index;
