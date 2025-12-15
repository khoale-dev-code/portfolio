'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { assets } from '@/data/assets';
import { Menu, X, Moon, Sun, ChevronRight, Sparkles } from 'lucide-react';

const BRAND_COLOR = '#677a1c';
const BRAND_HOVER_COLOR = '#4a5b14';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Logic Dark Mode
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDark(true);
      document.body.classList.add('dark');
    } else if (savedMode === 'false') {
      setIsDark(false);
      document.body.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      document.body.classList.toggle('dark', prefersDark);
    }

    // Logic xử lý cuộn trang
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('darkMode', String(newMode));
    document.body.classList.toggle('dark', newMode);
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About me', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'My work', href: '#portfolio', id: 'portfolio' },
  ];

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? `bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-xl border-b`
          : 'bg-transparent'
      }`}
      style={{
        borderColor: isScrolled ? `${BRAND_COLOR}20` : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="#home" 
            className="group flex items-center gap-3 relative"
            onClick={() => handleLinkClick('home')}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative w-12 h-12 rounded-full overflow-hidden ring-2 transition-all duration-300"
              style={{
                '--tw-ring-color': `${BRAND_COLOR}40`,
              } as any}
            >
              <Image
                src={isDark ? assets.logo_dark : assets.logo}
                alt="Logo"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="hidden sm:block">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-lg font-bold tracking-tight"
                style={{ color: BRAND_COLOR }}
              >
                Portfolio
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xs text-gray-600 dark:text-gray-400 -mt-1"
              >
                Full-Stack Developer
              </motion.div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden lg:flex items-center gap-2 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-full px-2 py-2 border"
            style={{ borderColor: `${BRAND_COLOR}20` } as any}
          >
            {navLinks.map((link, idx) => (
              <motion.div key={link.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + idx * 0.1 }}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                    const element = document.getElementById(link.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  style={{
                    backgroundColor: activeSection === link.id ? BRAND_COLOR : 'transparent'
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2.5 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border transition-all duration-300 hover:shadow-lg"
              style={{ borderColor: `${BRAND_COLOR}30` } as any}
              aria-label="Toggle dark mode"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-5 h-5">
                  <motion.div
                    initial={{ opacity: 1, rotate: 0 }}
                    animate={{ opacity: isDark ? 0 : 1, rotate: isDark ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Sun size={20} style={{ color: BRAND_COLOR }} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: isDark ? 1 : 0, rotate: isDark ? 0 : -90 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Moon size={20} className="text-yellow-300" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.button>

            {/* Connect Button - Desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden lg:block"
            >
              <Link href="#contact" onClick={(e) => {
                e.preventDefault();
                handleLinkClick('contact');
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <motion.button
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-lg transition-all duration-300"
                  style={{
                    backgroundColor: BRAND_COLOR,
                    boxShadow: `0 10px 25px -5px ${BRAND_COLOR}60`
                  } as any}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="hidden group-hover:block"
                  >
                    <Sparkles size={16} />
                  </motion.div>
                  Let's Connect
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ChevronRight size={16} />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2.5 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border transition-all duration-300 hover:shadow-lg"
              style={{ borderColor: `${BRAND_COLOR}30` } as any}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X size={20} style={{ color: BRAND_COLOR }} />
                ) : (
                  <Menu size={20} style={{ color: BRAND_COLOR }} />
                )}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden"
      >
        <div className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t"
          style={{ borderColor: `${BRAND_COLOR}20` } as any}>
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                    const element = document.getElementById(link.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`block px-5 py-3 rounded-xl font-bold transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  style={{
                    backgroundColor: activeSection === link.id ? BRAND_COLOR : 'transparent'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    <motion.div
                      animate={activeSection === link.id ? { x: 4 } : { x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight size={16} />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
            
            {/* Mobile Connect Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: navLinks.length * 0.08 + 0.1 }}
              className="w-full mt-6"
            >
              <Link
                href="#contact"
                onClick={() => handleLinkClick('contact')}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-white py-3.5 rounded-xl text-sm font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: BRAND_COLOR,
                    boxShadow: `0 10px 25px -5px ${BRAND_COLOR}60`
                  } as any}
                >
                  Let's Connect
                  <ChevronRight size={16} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}