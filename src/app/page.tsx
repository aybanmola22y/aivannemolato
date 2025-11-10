'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  const fullText = 'Turning imagination into functional design.';
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { text: 'HOME', href: '#home' },
    { text: 'ABOUT ME', href: '#aboutme' },
    { text: 'SKILLS', href: '#skills' },
    { text: 'PROJECTS', href: '#projects' },
    { text: 'CONTACT', href: '#contact' }
  ];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText(fullText.slice(0, index + 1));
      }

      if (!isDeleting && index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setIndex(0);
        return;
      }

      setIndex((prev) =>
        isDeleting ? prev - 1 : Math.min(prev + 1, fullText.length)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, fullText]);

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const smoothScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Header - Floating */}
      <header className={`hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        scrolled 
          ? darkMode 
            ? 'bg-[#0f172a]/95 backdrop-blur-lg border border-white/20 shadow-lg' 
            : 'bg-white/95 backdrop-blur-lg border border-black/20 shadow-lg'
          : darkMode
            ? 'bg-[#0f172a]/80 backdrop-blur-md border border-white/10'
            : 'bg-white/80 backdrop-blur-md border border-black/10'
      }`}>
        <div className="flex items-center px-6 py-3">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`font-bold text-lg mr-8 ${darkMode ? 'text-white' : 'text-black'}`}
          >
            JAM
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-6 mr-8"
          >
            {menuItems.map((item, idx) => (
              <motion.button
                key={idx}
                onClick={() => smoothScrollTo(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-black'
                } group`}
              >
                {item.text}
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-0.5 ${
                    darkMode ? 'bg-white' : 'bg-black'
                  } transition-all duration-300 group-hover:w-full`}
                ></span>
              </motion.button>
            ))}
          </motion.nav>

          {/* Theme Toggle */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                : 'bg-gray-100/50 hover:bg-gray-200/50'
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-yellow-400" />
            ) : (
              <Moon className="w-4 h-4 text-blue-600" />
            )}
          </motion.button>
        </div>
      </header>

      {/* Mobile Header - Full Width */}
      <header className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-[#0f172a]/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
            : 'bg-white/95 backdrop-blur-lg border-b border-black/10 shadow-lg'
          : darkMode
            ? 'bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5'
            : 'bg-white/80 backdrop-blur-md border-b border-black/5'
      }`}>
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-black'}`}
          >
            JAM
          </motion.div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700' 
                  : 'bg-gray-100/50 hover:bg-gray-200/50 border border-gray-300'
              }`}
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600" />
              )}
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700' 
                  : 'bg-gray-100/50 hover:bg-gray-200/50 border border-gray-300'
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={`absolute right-0 top-0 h-full w-64 ${
                darkMode ? 'bg-[#1e293b]' : 'bg-white'
              } shadow-xl pt-20`}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col px-6 py-4">
                {menuItems.map((item, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      smoothScrollTo(item.href);
                      handleMenuItemClick();
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`py-4 text-lg font-medium transition duration-300 text-left ${
                      darkMode
                        ? 'text-gray-300 hover:text-white border-b border-gray-700'
                        : 'text-gray-700 hover:text-black border-b border-gray-300'
                    }`}
                  >
                    {item.text}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main
        id="home"
        className={`${
          darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'
        } min-h-screen flex flex-col items-center justify-center px-4 relative transition-colors duration-500 pt-20 md:pt-4`}
      >
        {/* Centered Content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-wide mb-4 ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            John Aivanne Molato
          </motion.div>

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-extrabold leading-none"
          >
            PORTFOLIO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className={`mt-4 text-sm sm:text-base md:text-xl font-mono px-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </motion.p>
        </div>
      </main>
      
      <AboutMe darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
}
