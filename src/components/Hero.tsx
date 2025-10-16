'use client';

import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/data/assets';
import { ArrowRight, Download, Github, Mail, Linkedin, FileText, Code2, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = () => {
    setIsDownloading(true);
    // Simulate download - Replace with your actual CV file path
    const link = document.createElement('a');
    link.href = '/cv/Khoa_Le_CV.pdf'; // Đặt file CV vào folder public/cv/
    link.download = 'Khoa_Le_Full_Stack_Developer_CV.pdf';
    link.click();
    
    setTimeout(() => setIsDownloading(false), 2000);
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/khoale-dev-code', 
      label: 'GitHub',
      color: 'hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900'
    },
    { 
      icon: Mail, 
      href: 'mailto:Lekhoale30092003@gmail.com', 
      label: 'Email',
      color: 'hover:bg-red-500 hover:text-white'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/your-profile', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600 hover:text-white'
    }
  ];

  const stats = [
    { value: '6+', label: 'Projects' },
    { value: '0.5+', label: 'Years' },
    { value: '10+', label: 'Technologies' }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-[#fdf9f3] dark:bg-[#11001e] transition-colors duration-300"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#677a1c]/10 dark:bg-[#f1e0bf]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#92a344]/10 dark:bg-[#677a1c]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#677a1c]/5 to-[#92a344]/5 dark:from-[#f1e0bf]/3 dark:to-[#677a1c]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image with Decorative Ring */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="relative group">
              {/* Outer decorative rings */}
              <div className="absolute inset-0 -m-4 bg-gradient-to-r from-[#677a1c] to-[#92a344] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute inset-0 -m-2 bg-gradient-to-r from-[#677a1c] to-[#92a344] rounded-full animate-spin-slow opacity-20"></div>
              
              {/* Profile Image */}
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl ring-4 ring-[#677a1c]/20 dark:ring-[#f1e0bf]/20 group-hover:ring-[#677a1c]/40 dark:group-hover:ring-[#f1e0bf]/40 transition-all duration-300">
                <Image
                  src={assets.profile_img}
                  alt="Khoa Le"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-2 right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg flex items-center gap-1.5 animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Available
              </div>
            </div>
          </div>

          {/* Greeting with Animation */}
          <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in-up">
            <span className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-medium">
              Hi! I'm <span className="text-[#677a1c] dark:text-[#f1e0bf] font-bold">Khoa Le</span>
            </span>
            <span className="text-3xl animate-wave">👋</span>
          </div>

          {/* Main Headline with Gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
            <span className="bg-gradient-to-r from-[#677a1c] via-[#92a344] to-[#677a1c] bg-clip-text text-transparent animate-gradient">
              Full-Stack Developer
            </span>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Sparkles className="text-[#677a1c] dark:text-[#f1e0bf]" size={24} />
              <span className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-normal">
                Mobile & Web Specialist
              </span>
            </div>
          </h1>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 animate-fade-in-up delay-200">
            {['Flutter', 'React.js', 'ASP.NET', 'Node.js'].map((tech, idx) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-[#677a1c]/20 dark:border-[#f1e0bf]/20 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-[#677a1c] dark:hover:border-[#f1e0bf] transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Sinh viên năm cuối ngành <span className="font-semibold text-[#677a1c] dark:text-[#f1e0bf]">Công nghệ Phần mềm</span> tại Đại học HUFLIT, 
            đam mê và có kinh nghiệm phát triển <span className="font-semibold">Full-stack đa nền tảng</span>. 
            Chuyên về phát triển ứng dụng di động/web với Flutter/Dart và React.js, 
            đồng thời thành thạo xây dựng Backend bằng ASP.NET Core và Node.js/Express.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in-up delay-400">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-[#677a1c] dark:text-[#f1e0bf] mb-1 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-500">
            <Link
              href="#contact"
              className="group relative bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#677a1c]/30 hover:shadow-xl hover:shadow-[#677a1c]/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Connect with me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#92a344] to-[#677a1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="group relative border-2 border-[#677a1c] dark:border-[#f1e0bf] text-[#677a1c] dark:text-[#f1e0bf] px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#677a1c] hover:text-white dark:hover:bg-[#f1e0bf] dark:hover:text-gray-900 transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  Downloading...
                </>
              ) : (
                <>
                  <Download size={18} className="group-hover:animate-bounce" />
                  Download CV
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12 animate-fade-in-up delay-600">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 animate-fade-in-up delay-700">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
              Scroll to explore
            </span>
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-[#677a1c] dark:text-[#f1e0bf]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-15deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
          display: inline-block;
          transform-origin: 70% 70%;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}