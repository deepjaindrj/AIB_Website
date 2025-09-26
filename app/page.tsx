import HeroStatsSection from '@/components/HeroStatsSection';
import HeroSection from './../components/HeroSection';
import TechSection from '@/components/TechSection';
import HeroStack from '@/components/HeroStack';
import PartneringSection from '@/components/PartneringSection';
import FullscreenZoomHero from '@/components/FullscreenZoomHero';
import ContactFormSection from '@/components/ContactFormSection';
import SplitPinnedStory from '@/components/SplitPinnedStory';
import HelloRoboTeam from '@/components/HelloRoboTeam';
import NewsList from '@/components/NewsList';

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <HeroStatsSection />
      <TechSection />
      <HeroStack />
      <PartneringSection />

      {/* Zoom effect applies only while this section crosses the viewport */}
      <FullscreenZoomHero />
      <SplitPinnedStory/>
      <ContactFormSection/>
      <HelloRoboTeam/>
      <NewsList/>
    </div>
  );
}
