import { useEffect, useState } from 'react';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

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
    <LanguageProvider>
      <div className="app">
        <LanguageSwitcher />
        <HeroSection scrollY={scrollY} />
        <HowItWorks />
        <Marquee />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
