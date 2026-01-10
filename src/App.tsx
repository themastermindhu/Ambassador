import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-hidden text-gray-100">
        {/* 🌌 GLOBAL BACKGROUND */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[#0b132b]" />

          <div
            className="absolute inset-0 bg-repeat opacity-[0.07]"
            style={{
              backgroundImage: "url('/dark-pattern.jpg')",
              backgroundSize: "600px 600px",
            }}
          />

          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#0b132b]/70 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto flex justify-end">
            <LanguageToggle />
          </div>
        </nav>

        {/* CONTENT */}
        <div className="pt-20">
          <Hero />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
