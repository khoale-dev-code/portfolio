'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Show button after scrolling 300px
      setIsVisible(scrollTop > 300);
      
      // Update scroll progress for circular progress indicator
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    
    // Initial check
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 group transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      aria-label="Scroll to top"
      title="Back to top"
    >
      {/* Main Button */}
      <div className="relative">
        {/* Circular Progress Ring */}
        <svg 
          className="absolute inset-0 -rotate-90 w-14 h-14" 
          viewBox="0 0 56 56"
        >
          {/* Background Circle */}
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-200 dark:text-gray-700"
          />
          {/* Progress Circle */}
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 26}`}
            strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
            className="transition-all duration-300"
          />
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#677a1c" />
              <stop offset="100%" stopColor="#92a344" />
            </linearGradient>
          </defs>
        </svg>

        {/* Button Content */}
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#677a1c] to-[#92a344] shadow-lg shadow-[#677a1c]/30 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#677a1c]/40 group-hover:scale-110 group-active:scale-95">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#677a1c] to-[#92a344] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
          
          {/* Icon */}
          <ArrowUp 
            size={22} 
            className="text-white relative z-10 transition-transform duration-300 group-hover:-translate-y-1" 
            strokeWidth={2.5}
          />
        </div>

        {/* Ripple Effect on Hover */}
        <div className="absolute inset-0 rounded-full border-2 border-[#677a1c]/20 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"></div>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Back to top
        <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 dark:bg-white transform rotate-45 -mt-1"></div>
      </div>
    </button>
  );
}