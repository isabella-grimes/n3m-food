import { useState } from 'react';
import './HeroSection.css';

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const [email, setEmail] = useState('');

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
            Cook. Share. Earn. <br />
            <span className="gradient-text">Welcome to N3M.</span>
          </h1>
          <p className="hero-subtitle">
            The ultimate short-video app that turns your home kitchen into a profitable cloud kitchen.
            Share your culinary passion, build your audience, and let us handle the delivery.
            Your dream restaurant starts at home.
          </p>

          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
            <button type="submit" className="cta-button">
              Join the Chef Waitlist
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
