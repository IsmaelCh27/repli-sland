import MainContent from '@/components/home/MainContent';
import Hero from '@/components/home/Hero';
import NoveltySection from '@/components/home/NoveltySection';
import GalaSection from '@/components/home/GalaSection';
import Guide from '@/components/home/Guide';
import Redit from '@/components/home/Redit';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <MainContent />
      <NoveltySection />
      <GalaSection />
      <Guide />
      <Redit />
    </main>
  );
}
