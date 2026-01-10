import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, Linkedin } from 'lucide-react';

const CONTACT_EMAIL = 'ambassador@themastermind.hu';
const LINKEDIN_URL = 'https://www.linkedin.com/in/b%C3%A9la-zolt%C3%A1n-kov%C3%A1cs-617988386/';

export const Contact = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative w-full px-6 py-20 md:py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <div className="border border-gray-200 rounded-3xl p-12 md:p-16 bg-white shadow-xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('contact_title')}
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            {t('contact_text')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
            >
              <Mail size={20} />
              <span>{CONTACT_EMAIL}</span>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-xl border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <p className="text-sm text-gray-500">
            {t('contact_response')}
          </p>
        </div>

        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </section>
  );
};
