'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Giả định file này nằm ở '@/data/assets'
import { assets } from '@/data/assets'; 
import { Menu, X, Moon, Sun, ChevronRight } from 'lucide-react';

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

    // Logic xử lý cuộn trang (Active Section)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Thêm 'contact' vào đây để nút 'Let\'s Connect' cũng được theo dõi
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
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#fdf9f3]/95 dark:bg-[#11001e]/95 backdrop-blur-lg shadow-lg border-b border-[#f1e0bf]/20 dark:border-[#677a1c]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="#home" 
            className="group flex items-center gap-3 relative"
            onClick={() => handleLinkClick('home')}
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#677a1c]/20 dark:ring-[#f1e0bf]/20 group-hover:ring-[#677a1c] dark:group-hover:ring-[#f1e0bf] transition-all duration-300">
              {/* Sử dụng logo dynamic dựa trên dark mode */}
              <Image
                src={isDark ? assets.logo_dark : assets.logo}
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-[#677a1c] dark:text-[#f1e0bf] tracking-tight">
                Portfolio
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 -mt-1">
                Full-Stack Developer
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full px-2 py-2 border border-[#f1e0bf]/30 dark:border-[#677a1c]/30">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-white bg-gradient-to-r from-[#677a1c] to-[#92a344] shadow-lg shadow-[#677a1c]/30'
                    : 'text-gray-700 dark:text-gray-300 hover:text-[#677a1c] dark:hover:text-[#f1e0bf]'
                }`}
              >
                {link.name}
                {/* Hiệu ứng gradient nền khi active */}
                {activeSection === link.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#677a1c] to-[#92a344] opacity-20 blur-lg"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative p-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-[#f1e0bf]/30 dark:border-[#677a1c]/30 hover:border-[#677a1c] dark:hover:border-[#f1e0bf] transition-all duration-300 group"
              aria-label="Toggle dark mode"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <div className="relative w-5 h-5">
                <Sun 
                  size={20} 
                  className={`absolute inset-0 text-[#677a1c] transition-all duration-500 ${
                    isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <Moon 
                  size={20} 
                  className={`absolute inset-0 text-[#f1e0bf] transition-all duration-500 ${
                    isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  }`}
                />
              </div>
            </button>

            {/* Connect Button - Desktop (Scroll to Contact) */}
            <Link
              href="#contact"
              onClick={() => handleLinkClick('contact')}
              className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-[#677a1c]/30 hover:shadow-xl hover:shadow-[#677a1c]/40 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Let's Connect
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-[#f1e0bf]/30 dark:border-[#677a1c]/30 hover:border-[#677a1c] dark:hover:border-[#f1e0bf] transition-all duration-300"
            >
              {isMenuOpen ? (
                <X size={20} className="text-[#677a1c] dark:text-[#f1e0bf]" />
              ) : (
                <Menu size={20} className="text-[#677a1c] dark:text-[#f1e0bf]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-[#f1e0bf]/20 dark:border-[#677a1c]/20 shadow-xl">
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`block px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-[#f1e0bf]/30 dark:hover:bg-[#677a1c]/20'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  <ChevronRight 
                    size={16} 
                    className={`transition-transform ${
                      activeSection === link.id ? 'translate-x-1' : ''
                    }`}
                  />
                </div>
              </Link>
            ))}
            
            {/* Mobile Connect Button */}
            <Link
              href="#contact"
              onClick={() => handleLinkClick('contact')}
              className="w-full mt-4 bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-[#677a1c]/30 hover:shadow-xl hover:shadow-[#677a1c]/40 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Let's Connect
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}