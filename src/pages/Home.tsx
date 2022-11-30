import { allMatches, Match } from '../constants';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ImageSection from '../components/ImageSection';
import InfoSection from '../components/InfoSection';
import MusicSection from '../components/MusicSection';
import TwoColumnSection from '../components/TwoColumnSection';
import Footer from '../components/Footer';

function Home() {
  const [matches, setMatches] = useState<Match[]>(allMatches);

  return (
    <>
      <Navbar />
      <Hero />
      <MusicSection />
      <InfoSection />
      <ImageSection />
      <TwoColumnSection />
      <Footer />
    </>
  );
}

export default Home;
