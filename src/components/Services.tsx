'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  Server,
  Palette,
  Zap,
  Shield,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Layout,
  Terminal,
  ClipboardList,
  Code2,
  Sparkles,
  TrendingUp,
  Layers
} from 'lucide-react';
import React from 'react';

interface ServiceDetail {
  focus: string;
  features: string[];
  stack: string[];
}

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  role: string;
  desc: string;
  details: ServiceDetail;
  accent: string;
  bgAccent: string;
  gradient: string;
  gradientBg: string;
}

interface ProcessStep {
  title: string;
  desc: string;
  icon: React.ElementType;
}

const BRAND_COLOR = '#677a1c';
const BRAND_HOVER_COLOR = '#4a5b14';

const services: ServiceItem[] = [
  {
    id: 'web',
    icon: Layout,
    title: 'Web Development',
    role: 'Full-stack Developer',
    desc: 'Phát triển website hiện đại với hiệu năng cao (High Performance) và tối ưu SEO.',
    details: {
      focus: 'Scalability & Performance',
      features: ['Single Page Apps (SPA)', 'Server Side Rendering (SSR)', 'PWA Ready', 'Web Vitals Optimization'],
      stack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit']
    },
    accent: 'text-blue-600',
    bgAccent: 'bg-blue-50',
    gradient: 'from-blue-600 to-blue-400',
    gradientBg: 'from-blue-50 to-blue-100/50'
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Apps',
    role: 'Cross-platform Developer',
    desc: 'Xây dựng ứng dụng di động đa nền tảng (iOS/Android) với trải nghiệm Native.',
    details: {
      focus: 'User Experience & Stability',
      features: ['Cross-platform (iOS/Android)', 'State Management', 'Offline Mode', 'App Store Deployment'],
      stack: ['Flutter', 'Dart', 'Firebase', 'RESTful API', 'BloC']
    },
    accent: 'text-purple-600',
    bgAccent: 'bg-purple-50',
    gradient: 'from-purple-600 to-purple-400',
    gradientBg: 'from-purple-50 to-purple-100/50'
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend System',
    role: 'Backend Developer',
    desc: 'Thiết kế kiến trúc hệ thống, API và cơ sở dữ liệu bảo mật, chịu tải tốt.',
    details: {
      focus: 'Security & Architecture',
      features: ['RESTful API Design', 'Authentication (JWT/OAuth)', 'Database Design', 'Cloud Deployment'],
      stack: ['Node.js', 'ASP.NET Core', 'PostgreSQL', 'Docker', 'Redis']
    },
    accent: 'text-emerald-600',
    bgAccent: 'bg-emerald-50',
    gradient: 'from-emerald-600 to-emerald-400',
    gradientBg: 'from-emerald-50 to-emerald-100/50'
  },
  {
    id: 'uiux',
    icon: Palette,
    title: 'UI/UX Design',
    role: 'Product Designer',
    desc: 'Thiết kế giao diện người dùng trực quan, tập trung vào trải nghiệm và tương tác.',
    details: {
      focus: 'Visual & Interaction',
      features: ['User Flow & Wireframe', 'Interactive Prototyping', 'Design System', 'Accessibility (WCAG)'],
      stack: ['Figma', 'Adobe XD', 'Sketch', 'CSS Animation']
    },
    accent: 'text-rose-600',
    bgAccent: 'bg-rose-50',
    gradient: 'from-rose-600 to-rose-400',
    gradientBg: 'from-rose-50 to-rose-100/50'
  }
];

const processSteps: ProcessStep[] = [
  { title: 'Research', desc: 'Phân tích yêu cầu & Lập kế hoạch', icon: ClipboardList },
  { title: 'Develop', desc: 'Lập trình & Kiểm thử liên tục', icon: Code2 },
  { title: 'Deploy', desc: 'Triển khai & Tối ưu hiệu năng', icon: Rocket },
  { title: 'Support', desc: 'Bảo trì & Nâng cấp hệ thống', icon: Shield },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: any = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  },
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentService = services[activeTab];

  return (
    <section 
      id="services"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 50%, #f3f4f6 100%)',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-br from-green-300/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-tr from-blue-300/20 to-transparent rounded-full blur-3xl"></div>
      </motion.div>

      {/* Grid Pattern */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'linear-gradient(rgba(107, 114, 128, .1) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 114, 128, .1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 mb-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
              <Sparkles size={16} style={{ color: BRAND_COLOR }} />
            </motion.div>
            <span className="text-sm font-bold" style={{ color: BRAND_COLOR }}>NĂNG LỰC & DỊCH VỤ</span>
          </motion.div>
          
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 text-gray-900 leading-tight tracking-tight"
          >
            Tôi Làm Gì <br />
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative inline-block"
              style={{ color: BRAND_COLOR }}
            >
              Cho Bạn
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1.5 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                style={{ originX: 0, background: `linear-gradient(to right, ${BRAND_COLOR}, #4a5b14)` }}
              ></motion.div>
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Kết hợp tư duy kỹ thuật logic với sự tỉ mỉ trong thiết kế để tạo ra các sản phẩm kỹ thuật số hoàn chỉnh, từ ý tưởng đến triển khai thực tế.
          </motion.p>
        </motion.div>

        {/* Services Grid and Details Layout */}
        <div className="grid lg:grid-cols-12 gap-10 mb-24">
          
          {/* Left Column: Service List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {services.map((service, index) => {
              const isActive = activeTab === index;
              const Icon = service.icon;

              return (
                <motion.button
                  key={service.id}
                  variants={itemVariants}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ x: 8, boxShadow: `0 20px 40px -5px ${BRAND_COLOR}40` }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative p-6 rounded-2xl border-2 text-left transition-all duration-300 overflow-hidden ${
                    isActive 
                      ? `bg-white border-[${BRAND_COLOR}] shadow-2xl scale-[1.02]` 
                      : 'bg-white border-gray-100 hover:border-gray-200 shadow-md hover:shadow-lg'
                  }`}
                  style={{
                    borderColor: isActive ? BRAND_COLOR : undefined,
                  }}
                  role="tab"
                  aria-pressed={isActive}
                  aria-label={`Select ${service.title} service`}
                >
                  {/* Background Gradient */}
                  {isActive && (
                    <motion.div
                      layoutId="activeService"
                      className="absolute inset-0 opacity-5"
                      style={{ background: `linear-gradient(135deg, ${BRAND_COLOR}, #4a5b14)` }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-3.5 rounded-xl flex-shrink-0 transition-all duration-300 ${
                        isActive 
                          ? 'text-white shadow-lg' 
                          : 'text-white shadow-md'
                      }`}
                      style={{
                        backgroundColor: isActive ? BRAND_COLOR : '#9ca3af',
                      }}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg mb-1.5 ${isActive ? 'text-gray-900' : 'text-gray-800'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm line-clamp-2 ${isActive ? 'text-gray-700' : 'text-gray-600'}`}>
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="arrow"
                      className="absolute right-5 top-1/2 -translate-y-1/2 hidden lg:block"
                    >
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight style={{ color: BRAND_COLOR }} size={22} />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Right Column: Detail Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="h-full bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden flex flex-col hover:shadow-3xl transition-shadow duration-300"
              >
                {/* Card Header */}
                <motion.div
                  className={`p-8 sm:p-10 border-b border-gray-100 bg-gradient-to-r`}
                  style={{
                    background: `linear-gradient(135deg, rgba(103, 122, 28, 0.05), rgba(103, 122, 28, 0.02))`
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 border"
                    style={{
                      backgroundColor: `${BRAND_COLOR}15`,
                      borderColor: `${BRAND_COLOR}30`,
                      color: BRAND_COLOR
                    }}
                  >
                    {currentService.role}
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black text-gray-900 mb-3"
                  >
                    {currentService.details.focus}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 leading-relaxed"
                  >
                    Sử dụng các công nghệ mới nhất để đảm bảo sản phẩm hoạt động ổn định và dễ dàng mở rộng.
                  </motion.p>
                </motion.div>

                {/* Card Body */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <h4 className="flex items-center gap-3 font-bold text-gray-900 mb-5 text-lg">
                      <motion.div
                        animate={{ rotate: [0, 20, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Zap style={{ color: BRAND_COLOR }} size={22} />
                      </motion.div>
                      Tính năng chính
                    </h4>
                    <motion.ul
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid sm:grid-cols-2 gap-3.5 mb-10"
                    >
                      {currentService.details.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          variants={itemVariants}
                          className="flex items-center gap-3 text-gray-800 text-sm font-semibold"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                          >
                            <CheckCircle2 style={{ color: BRAND_COLOR }} className="w-5 h-5 flex-shrink-0" />
                          </motion.div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <h4 className="flex items-center gap-3 font-bold text-gray-900 mb-5 text-lg">
                      <Terminal style={{ color: BRAND_COLOR }} size={22} />
                      Tech Stack
                    </h4>
                    <motion.div
                      className="flex flex-wrap gap-2.5"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {currentService.details.stack.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          variants={itemVariants}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className="px-4 py-2 rounded-lg text-sm font-bold border transition-all duration-200 cursor-default shadow-sm hover:shadow-md"
                          style={{
                            backgroundColor: `${BRAND_COLOR}10`,
                            borderColor: `${BRAND_COLOR}30`,
                            color: BRAND_COLOR
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Work Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 sm:p-16 border border-gray-100 shadow-xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-black text-gray-900 mb-4"
            >
              Quy Trình <span style={{ color: BRAND_COLOR }}>Làm Việc</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              Rõ ràng, Minh bạch và Hiệu quả
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Line Connector */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden md:block absolute top-12 left-0 w-full h-1.5 rounded-full"
              style={{
                background: `linear-gradient(to right, ${BRAND_COLOR}, #4a5b14)`,
                originX: 0
              }}
            />
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="relative z-10 text-center group"
                  >
                    {/* Desktop: Circular Layout */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-28 h-28 mx-auto mb-6 relative hidden md:flex md:items-center md:justify-center"
                    >
                      {/* Outer Circle */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 }}
                        className="absolute inset-0 rounded-full border-4 border-gray-100 flex items-center justify-center bg-white shadow-lg group-hover:border-gray-200 transition-colors"
                      >
                        {/* Inner Circle */}
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${BRAND_COLOR}, #4a5b14)`,
                            color: 'white'
                          }}
                        >
                          <Icon size={32} />
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Mobile: Square Layout */}
                    <motion.div
                      className="md:hidden mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="inline-flex items-center justify-center p-4 rounded-xl"
                        style={{
                          background: `linear-gradient(135deg, ${BRAND_COLOR}, #4a5b14)`,
                          color: 'white'
                        }}
                      >
                        <Icon size={28} />
                      </div>
                    </motion.div>

                    {/* Step Number */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.1 }}
                      className="mb-3"
                    >
                      <span
                        className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2"
                        style={{
                          backgroundColor: `${BRAND_COLOR}15`,
                          borderColor: `${BRAND_COLOR}30`,
                          color: BRAND_COLOR,
                          border: '1px solid'
                        }}
                      >
                        Step {idx + 1}
                      </span>
                      <h3 className="font-bold text-gray-900 text-xl">{step.title}</h3>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.2 }}
                      className="text-sm text-gray-700 px-2 leading-relaxed font-medium"
                    >
                      {step.desc}
                    </motion.p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              className="px-10 py-4 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl flex items-center gap-2 mx-auto text-lg"
              style={{
                backgroundColor: BRAND_COLOR,
                boxShadow: `0 15px 35px -5px ${BRAND_COLOR}60`
              }}
              whileHover={{
                y: -4,
                boxShadow: `0 20px 45px -5px ${BRAND_COLOR}80`
              }}
            >
              Liên hệ phỏng vấn
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}