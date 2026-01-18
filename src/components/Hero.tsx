import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const CTA_URL = 'https://learn.microsoft.com/hu-hu/plans/5pdotqt4dqgpyz?sharingId=800A9978FE2F57AE&wt.mc_id=studentamb_494422';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <div className="border border-gray-200 rounded-3xl p-12 md:p-16 lg:p-20 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-500">
          <div className="flex flex-col items-center text-center space-y-8 animate-fade-up">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
              <span className="text-xs md:text-sm font-semibold tracking-wider text-blue-700 uppercase">
                {t('hero_badge')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight max-w-4xl animate-reveal">
              {t('hero_title')}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed animate-fade-up-delay">
              {t('hero_subtitle')}
            </p>

            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 mt-6 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 animate-fade-up-delay-2"
            >
              {t('hero_cta')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>

        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};
