import { useEffect, useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <HeroSection scrollY={scrollY} />
      <HowItWorks />
      <Marquee />
      <Footer />
    </div>
  );
}

export default App;
