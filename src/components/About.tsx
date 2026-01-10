import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { BookOpen, Users, Lightbulb } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const highlights = [
    { icon: Lightbulb, key: 'about_highlight_1' },
    { icon: BookOpen, key: 'about_highlight_2' },
    { icon: Users, key: 'about_highlight_3' },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`relative w-full px-6 py-20 md:py-32 transition-all duration-1000 ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
}

        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
    >
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 text-center mb-16">
          {t('about_title')}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* TEXT */}
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about_p1')}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about_p2')}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about_p3')}
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {highlights.map(({ icon: Icon, key }) => (
                <div
                  key={key}
                  className="
                    flex items-center gap-3 p-4 rounded-xl
                    bg-white/5 border border-white/10
                    hover:bg-white/10 transition-colors duration-300
                  "
                >
                  <Icon size={24} className="text-[#5bc0be] flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-200">
                    {t(key)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE / PLACEHOLDER */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* glow */}
              <div className="absolute inset-0 bg-[#5bc0be]/30 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <div className="aspect-[4/5] bg-white/5 relative">
                 <img
                    src="/portrait.jpg"
                    alt="Portrait"
                    className="w-full h-full object-cover"
                  />

                  {/* bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
};
