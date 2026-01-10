import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'hu' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  hu: {
    hero_badge: 'Microsoft Student Ambassador Program',
    hero_title: 'Microsoft Diák Nagykövet — Tanulj gyorsabban, okosabban.',
    hero_subtitle: 'Válogatott Microsoft Learn modulok és gyakorlati útmutatók — egy helyen.',
    hero_cta: 'Tanulj velem',
    about_title: 'Rólam',
    about_p1: 'Amikor először találkoztam a Microsoft Learn platformmal, azonnal láttam, mekkora lehetőség rejlik benne. Azóta az a célom, hogy másoknak is megmutassam, mennyivel könnyebb és hatékonyabb lehet a tanulás a megfelelő útmutatással és közösséggel.',
    about_p2: 'Leendő Nagykövetként a gyakorlati tanulásra helyezem a hangsúlyt. Gondosan kiválasztott modulokat, projekteket és Microsoft Learn útvonalakat osztok meg, amelyek valódi készségeket adnak. Nem elmélet nélküli gyakorlat, hanem olyan tudás, amit azonnal használhatsz.',
    about_p3: 'Ha most kezdesz, vagy szeretnéd következő szintre emelni a tudásodat, itt a legjobb belépő. Csatlakozz hozzám, és fedezzük fel együtt a modern technológiák világát.',
    about_highlight_1: 'Gyakorlati tanulás',
    about_highlight_2: 'Kurált modulok',
    about_highlight_3: 'Közösség & mentorálás',
    contact_title: 'Kapcsolat',
    contact_text: 'Írj bátran, ha együttműködnél, kérdésed van, vagy csak kapcsolódnál.',
    contact_response: 'Rövid időn belül válaszolok.',
    footer_text: 'Copyright © 2026 — ',
  },
  en: {
    hero_badge: 'Microsoft Student Ambassador Program',
    hero_title: 'Microsoft Student Ambassador — Learn faster, learn smarter.',
    hero_subtitle: 'Curated Microsoft Learn modules and practical guidance — in one place.',
    hero_cta: 'Learn with me',
    about_title: 'About me',
    about_p1: 'When I first discovered the Microsoft Learn platform, I immediately saw the incredible opportunity it holds. Since then, my goal has been to show others how much easier and more effective learning can be with the right guidance and community.',
    about_p2: 'As a future Ambassador, I focus on hands-on learning. I share carefully curated modules, projects, and Microsoft Learn pathways that provide real skills. Not practice without theory, but knowledge you can use right away.',
    about_p3: 'If you\'re just starting out or want to take your knowledge to the next level, this is the best entry point. Join me and let\'s explore the world of modern technologies together.',
    about_highlight_1: 'Hands-on learning',
    about_highlight_2: 'Curated modules',
    about_highlight_3: 'Community & mentoring',
    contact_title: 'Contact',
    contact_text: 'Reach out if you want to collaborate, have a question, or just want to connect.',
    contact_response: 'I will reply as soon as possible.',
    footer_text: 'Copyright © 2026 — ',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('hu');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.hu] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
