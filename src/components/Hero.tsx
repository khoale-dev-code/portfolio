'use client';

import Image from 'next/image';
import { assets } from '@/data/assets';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto w-full text-center animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-lg">
            <Image
              src={assets.profile_img}
              alt="Khoa Le"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Greeting */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="text-gray-600 dark:text-gray-400 text-lg">Hi! I'm Khoa Le</span>
          <span className="text-2xl">👋</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Intern Developer
          
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
         Tôi là Lê Trần Đăng Khoa 
        <br />Sinh viên năm cuối ngành Công nghệ Phần mềm tại Đại học HUFLIT, đam mê và có kinh nghiệm phát triển Full-stack đa nền tảng. Tôi chuyên về phát triển ứng dụng di động/web với Flutter/Dart và React.js, đồng thời thành thạo xây dựng Backend bằng ASP.NET Core và Node.js/Express.  
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Connect with me
            <ArrowRight size={18} />
          </button>
          <button className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Download size={18} />
            My resume
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center animate-bounce">
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-400"
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
    </section>
  );
}