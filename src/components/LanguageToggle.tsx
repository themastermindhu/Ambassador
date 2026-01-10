import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'hu' ? 'en' : 'hu')}
      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label="Toggle language"
    >
      <Globe size={18} className="text-gray-600" />
      <span className="font-medium text-sm text-gray-700 uppercase">
        {language}
      </span>
    </button>
  );
};
