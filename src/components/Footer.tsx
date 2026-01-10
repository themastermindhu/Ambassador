import { useLanguage } from '../contexts/LanguageContext';

const THEMASTERMIND_URL = 'https://themastermind.hu/';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full px-6 py-12 bg-white/5 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-300">
          {t('footer_text')}{' '}
          <a
            href={THEMASTERMIND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#5bc0be] hover:text-[#7dd3fc] hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5bc0be] focus:ring-offset-2 focus:ring-offset-[#0b132b] rounded"
          >
            TheMasterMind
          </a>
        </p>
      </div>
    </footer>
  );
};
