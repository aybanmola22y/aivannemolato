'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


export default function Home() {
  const fullText = 'Aspiring Front-end Developer & Manual QA Tester';
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { text: 'HOME', href: '#home' },
    { text: 'ABOUT ME', href: '#aboutme' },
    { text: 'SKILLS', href: '#skills' },
    { text: 'PROJECTS', href: '#projects' },
    { text: 'CONTACT', href: '#contact' }
  ];

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

  return (
    <>
      <main
        id="home"
        className={`${
          darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'
        } min-h-screen flex flex-col items-center justify-center px-4 relative transition-colors duration-500`}
      >
        {/* Desktop Header */}
        <header className={`hidden md:block absolute top-0 w-full z-50 border-b backdrop-blur-md ${
          darkMode
            ? 'bg-[#0f172a]/80 border-white/10'
            : 'bg-white/80 border-black/10'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center gap-6 text-base"
            >
              {menuItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 py-1 transition duration-300 ease-in-out ${
                    darkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  <span
                    className={`absolute left-0 bottom-0 w-0 h-[2px] ${
                      darkMode ? 'bg-white' : 'bg-black'
                    } transition-all duration-300 hover:w-full`}
                  ></span>
                  {item.text}
                </motion.a>
              ))}
            </motion.nav>
          </div>
        </header>

        {/* Mobile Header */}
        <header
          className={`md:hidden fixed top-0 left-0 right-0 z-50 px-4 py-3 border-b ${
            darkMode
              ? 'bg-[#0f172a]/90 border-white/10'
              : 'bg-white/90 border-black/10'
          }`}
        >
          <div className="flex justify-between items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-gray-400 hover:scale-110 transition duration-300"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full border border-gray-400 hover:scale-110 transition duration-300"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
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
                    <motion.a
                      key={idx}
                      href={item.href}
                      onClick={handleMenuItemClick}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`py-4 text-lg font-medium transition duration-300 ${
                        darkMode
                          ? 'text-gray-300 hover:text-white border-b border-gray-700'
                          : 'text-gray-700 hover:text-black border-b border-gray-300'
                      }`}
                    >
                      {item.text}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:flex absolute top-20 w-full justify-center py-4 z-40">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-400 hover:scale-110 transition duration-300"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </div>

        {/* Centered Content */}
        <div className="text-center mt-20 md:mt-32">
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

        {/* Scroll Down Symbol */}
        <motion.a
          href="#aboutme"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute bottom-8 text-2xl md:text-3xl transform rotate-90 ${
            darkMode ? 'text-white' : 'text-black'
          }`}
        >
          &gt;
        </motion.a>
      </main>
       <Skills darkMode={darkMode} />
       <Projects darkMode={darkMode} />
       <Contact darkMode={darkMode} />
    </>
  );
}
