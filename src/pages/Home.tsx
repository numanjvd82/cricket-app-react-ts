import Hero from '../components/Hero';
import ImageSection from '../components/ImageSection';
import InfoSection from '../components/InfoSection';
import MusicSection from '../components/MusicSection';
import TwoColumnSection from '../components/TwoColumnSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <MusicSection />
      <InfoSection />
      <ImageSection />
      <TwoColumnSection />
      <Footer />
    </div>
  );
}

export default Home;
