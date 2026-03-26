import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './HeroSection.css';

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const [email, setEmail] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert('Thank you for joining the waitlist!');
    setEmail('');
  };

  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="hero-section">
      <div
        className="hero-background"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Gourmet food"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {t('hero.title')} <br />
            <span className="gradient-text">{t('hero.subtitle')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('hero.description')}
          </p>

          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="email"
              placeholder={t('hero.email-placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
            <button type="submit" className="cta-button">
              {t('hero.cta-button')}
            </button>
          </form>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}
