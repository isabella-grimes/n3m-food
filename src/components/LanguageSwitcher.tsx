import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`lang-button ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button
        className={`lang-button ${language === 'ar' ? 'active' : ''}`}
        onClick={() => setLanguage('ar')}
      >
        AR
      </button>
    </div>
  );
}
