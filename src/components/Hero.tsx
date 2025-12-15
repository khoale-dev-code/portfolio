'use client';

import Image from 'next/image';
import { ArrowRight, Download, Github, Mail, Linkedin, Sparkles, Code2, Zap, Rocket } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import user_image from '../public/assets/user-image.png';

const BRAND_COLOR = '#677a1c';
const BRAND_HOVER_COLOR = '#4a5b14';

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    try {
      setIsDownloading(true);
      const response = await fetch('/cv.pdf');
      if (!response.ok) throw new Error('Failed to download CV');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Lê_Trần_Đăng_Khoa_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setTimeout(() => setIsDownloading(false), 1500);
    } catch (error) {
      console.error('Download error:', error);
      setIsDownloading(false);
      alert('Không thể tải CV. Vui lòng thử lại!');
    }
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
      href: 'https://linkedin.com/in/khoale-dev', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600 hover:text-white'
    }
  ];

  const stats = [
    { value: '6+', label: 'Dự Án Hoàn Thành', icon: '🎯' },
    { value: '1+', label: 'Năm Kinh Nghiệm', icon: '⚡' },
    { value: '10+', label: 'Công Nghệ', icon: '🔧' }
  ];

  const techStack = ['React.js', 'Flutter', 'ASP.NET', 'Firebase'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 50%, #f3f4f6 100%)',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      {/* Animated Background Blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <motion.div
          animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-green-300/20 to-transparent rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{ x: [0, -20, 20, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{ scale: [1, 1.1, 0.95, 1], opacity: [0.3, 0.5, 0.3, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-300/20 to-blue-300/20 rounded-full blur-3xl"
        ></motion.div>

        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(107, 114, 128, .08) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 114, 128, .08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.5
        }}></div>
      </motion.div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center space-y-8"
        >
          
          {/* Badge - Available */}
          <motion.div variants={itemVariants} className="inline-block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-lg border shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${BRAND_COLOR}10, #92a34410)`,
                borderColor: `${BRAND_COLOR}40`
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              ></motion.span>
              <span className="text-sm font-bold" style={{ color: BRAND_COLOR }}>
                Sẵn sàng cho các cơ hội mới
              </span>
            </motion.div>
          </motion.div>

          {/* Profile Image with Advanced Animations */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* Animated Gradient Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-2 rounded-full p-[3px] group-hover:animate-pulse"
                style={{
                  background: `linear-gradient(to right, ${BRAND_COLOR}, #92a344, ${BRAND_COLOR})`,
                  backgroundSize: '200% 200%'
                }}
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
              </motion.div>

              {/* Outer Glow */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 -m-4 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to right, ${BRAND_COLOR}/30, #92a344/30)`
                }}
              ></motion.div>

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl"
                style={{
                  boxShadow: `0 0 30px ${BRAND_COLOR}40, inset 0 0 20px ${BRAND_COLOR}20`
                }}
              >
                <Image
                  src={user_image}
                  alt="Khoa Le Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Status Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-4 -right-2 text-white text-xs px-4 py-2.5 rounded-full font-bold shadow-lg flex items-center gap-1.5"
                style={{
                  background: `linear-gradient(135deg, ${BRAND_COLOR}, #92a344)`
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-white rounded-full"
                ></motion.span>
                Online
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300">
                Xin chào! Tôi là
              </span>
              <motion.span
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-lg sm:text-xl font-black"
                style={{ color: BRAND_COLOR }}
              >
                Khoa Lê
              </motion.span>
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-2xl sm:text-3xl inline-block origin-[70%_70%]"
              >
                👋
              </motion.span>
            </div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                <motion.span
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="block bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent"
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Lập Trình Viên
                </motion.span>
                <span className="block mt-2" style={{ color: BRAND_COLOR }}>
                  Full-Stack
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center justify-center gap-3 mt-6"
            >
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity }}>
                <Sparkles style={{ color: BRAND_COLOR }} size={28} />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-800 dark:text-gray-200">
                Chuyên Gia Mobile & Web
              </h2>
            </motion.div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2.5"
          >
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + idx * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <div className="group relative">
                  <div
                    className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to right, ${BRAND_COLOR}/30, #92a344/30)`
                    }}
                  ></div>
                  <span
                    className="relative px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all duration-300 block group-hover:shadow-lg group-hover:border-opacity-100"
                    style={{
                      background: 'white',
                      borderColor: `${BRAND_COLOR}40`,
                      color: BRAND_COLOR
                    }}
                  >
                    {tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-700 dark:text-gray-300 text-base sm:text-lg lg:text-lg max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Sinh viên năm cuối <span className="font-bold" style={{ color: BRAND_COLOR }}>Công Nghệ Phần Mềm</span> tại HUFLIT, 
            với <span className="font-bold">1+ năm kinh nghiệm</span> xây dựng ứng dụng full-stack. 
            Chuyên về <span className="font-bold" style={{ color: BRAND_COLOR }}>Flutter/React</span> phía frontend và 
            <span className="font-bold" style={{ color: BRAND_COLOR }}> ASP.NET Core</span> phía backend.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 mt-10"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.15, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group p-5 sm:p-7 rounded-2xl border shadow-lg transition-all duration-300 text-center"
                style={{
                  background: 'white',
                  borderColor: `${BRAND_COLOR}20`,
                  boxShadow: `0 4px 20px ${BRAND_COLOR}10`
                }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2" style={{ color: BRAND_COLOR }}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                className="relative px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold flex items-center justify-center gap-2 text-white shadow-xl transition-all duration-300 text-sm sm:text-base"
                style={{
                  background: `linear-gradient(135deg, ${BRAND_COLOR}, #92a344)`,
                  boxShadow: `0 15px 35px -5px ${BRAND_COLOR}60`
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Kết Nối Cùng Tôi
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={18} />
                  </motion.div>
                </span>
              </motion.button>
            </motion.a>

            <motion.button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold flex items-center justify-center gap-2 border-2 transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                borderColor: BRAND_COLOR,
                color: BRAND_COLOR
              }}
            >
              {isDownloading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                  ></motion.div>
                  <span>Đang tải...</span>
                </>
              ) : (
                <>
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <Download size={18} />
                  </motion.div>
                  <span>Tải CV</span>
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex justify-center gap-4 mt-12"
          >
            {socialLinks.map((social, idx) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + idx * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`group relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 transition-all duration-300 ${social.color}`}
                aria-label={social.label}
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ background: 'currentColor' }}></div>
                <social.icon size={22} className="relative z-10" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="flex flex-col items-center gap-3 mt-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">
              Cuộn xuống để khám phá
            </span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: BRAND_COLOR }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}