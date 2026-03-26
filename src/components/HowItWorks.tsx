import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './HowItWorks.css';

interface Step {
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    title: 'Scroll to Drool',
    description:
      'Post mouth-watering short videos of your recipes. Capture the sizzle, build a hungry following, and make your food go viral.',
    image: 'https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Home to Cloud Kitchen',
    description:
      'Turn viewers into customers. With one tap, your followers can order the exact dish they are watching. You cook it, we deliver it.',
    image: 'https://images.pexels.com/photos/3297882/pexels-photo-3297882.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Be the Boss',
    description:
      'Manage your menu, track orders, and watch your earnings grow—all from the N3M creator dashboard.',
    image: 'https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function HowItWorks() {
  const { t } = useLanguage();
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">{t('how-it-works.title')}</h2>

        <div className="steps">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => { stepRefs.current[index] = el; }}
              className={`step ${index % 2 === 1 ? 'reverse' : ''} ${
                visibleSteps.has(index) ? 'visible' : ''
              }`}
            >
              <div className="step-content">
                <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>

              <div className="step-image">
                <div className="image-wrapper">
                  <img src={step.image} alt={step.title} className="float-anim" />
                  <div className="image-glow"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
