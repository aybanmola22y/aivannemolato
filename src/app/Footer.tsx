import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: 'https://www.facebook.com/xxxayban',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.435-3.396-1.129-.99-.725-1.691-1.823-1.691-3.052 0-1.297.435-2.448 1.129-3.396.725-.99 1.823-1.691 3.052-1.691 1.297 0 2.448.435 3.396 1.129.99.725 1.691 1.823 1.691 3.052 0 1.297-.435 2.448-1.129 3.396-.725.99-1.823 1.691-3.052 1.691zm7.592-9.404c-.297 0-.565-.109-.783-.327-.218-.218-.327-.486-.327-.783s.109-.565.327-.783c.218-.218.486-.327.783-.327s.565.109.783.327c.218.218.327.486.327.783s-.109.565-.327.783c-.218.218-.486.327-.783.327z"/>
          <path d="M12 7.378c-2.552 0-4.622 2.069-4.622 4.622S9.448 16.622 12 16.622s4.622-2.069 4.622-4.622S14.552 7.378 12 7.378zm0 7.622c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
        </svg>
      ),
      href: 'https://www.instagram.com/_whotfisayban/',
      color: 'hover:text-pink-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/aybanmola22y', // Replace with your actual GitHub profile
      color: 'hover:text-gray-300'
    }
  ];

  return (
    <footer
      className={`${
        darkMode ? 'bg-[#0f172a] text-white border-white/10' : 'bg-white text-black border-black/10'
      } border-t transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Name */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-lg font-semibold ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            TheAivanneEffect
          </motion.h3>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    darkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-black'
                  } ${social.color}`}
                  aria-label={`Visit ${social.name} profile`}
                >
                  <IconComponent className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            © {currentYear} John Aivanne Molato. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}