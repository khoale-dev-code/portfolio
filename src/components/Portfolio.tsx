'use client';

import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, Variants, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Calendar,
  CheckCircle,
  Layers,
  Play,
  ChevronRight,
  Code2,
  Smartphone,
  Server,
  Sparkles,
  TrendingUp,
  Star
} from 'lucide-react';

interface WorkItem {
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'full-stack';
  tech: string[];
  liveLink?: string;
  githubLink?: string;
  youtubeLink?: string;
  date: string;
  status: 'Live' | 'In Progress' | 'Production' | 'Completed';
  highlights: string[];
}

interface Category {
  id: 'all' | 'web' | 'mobile' | 'full-stack';
  name: string;
  count: number;
  icon: React.ElementType;
}

const BRAND_COLOR = '#677a1c';
const BRAND_HOVER_COLOR = '#4a5b14';

const workData: WorkItem[] = [
  {
    title: 'HUFLIT Test Practice',
    description: 'Nền tảng luyện thi Chuẩn Đầu Ra',
    category: 'web',
    tech: ['React 18', 'Firebase', 'Clerk Auth', 'Tailwind CSS', 'Vite'],
    liveLink: 'https://huflit-test.vercel.app',
    githubLink: 'https://github.com/khoale-dev-code/huflit-test',
    date: '10/2025 - 12/2025',
    status: 'Live',
    highlights: [
      '700+ người dùng hoạt động (KPI quan trọng)',
      'Text-to-Speech API với giọng nam/nữ',
      'Lighthouse Score 95+, Load time <1.5s'
    ]
  },
  {
    title: 'Hotel Booking System',
    description: 'Full-Stack Web Application',
    category: 'full-stack',
    tech: ['Flutter Web', 'ASP.NET Core 8.0', 'SQL Server', 'JWT', 'Entity Framework'],
    githubLink: 'https://github.com/khoale-dev-code/Hotel-Booking-Frontend',
    date: '2025 - Đang phát triển',
    status: 'In Progress',
    highlights: [
      'Frontend responsive với Flutter Web',
      'Backend API an toàn với ASP.NET Core 8.0',
      'Hỗ trợ multi-role authentication'
    ]
  },
  {
    title: 'Cinema Ticket Booking',
    description: 'Hệ Thống Đặt Vé Xem Phim',
    category: 'web',
    tech: ['React.js', 'Tailwind CSS', 'Vite', 'React Query', 'YouTube API'],
    liveLink: 'https://cinemakhoale.vercel.app',
    githubLink: 'https://github.com/khoale-dev-code/Cinema',
    date: '06/2025 - 08/2025',
    status: 'Live',
    highlights: [
      'Giao diện responsive đẹp mắt (Mobile First)',
      'YouTube API integration cho trailer',
      'Hệ thống chọn ghế interactive (UX focus)'
    ]
  },
  {
    title: 'SHAKE-Cafe App',
    description: 'Ứng Dụng Đặt Cà Phê',
    category: 'mobile',
    tech: ['Flutter', 'Dart', 'Firebase'],
    githubLink: 'https://github.com/khoale-dev-code/App-coffe-demo',
    date: '06/2024 - 07/2024',
    status: 'Completed',
    highlights: [
      'Cross-platform coffee ordering app (Native Feel)',
      'Firebase Backend integration',
      'Trải nghiệm người dùng mượt mà'
    ]
  },
  {
    title: 'Moc Khang Management',
    description: 'Ứng Dụng Quản Lý Bán Hàng',
    category: 'mobile',
    tech: ['Flutter', 'Dart', 'Firebase'],
    githubLink: 'https://github.com/khoale-dev-code/MocKhang_App',
    youtubeLink: 'https://www.youtube.com/watch?v=NrEKbp99000',
    date: '03/2025 - 04/2025',
    status: 'Completed',
    highlights: [
      'Ứng dụng quản lý bán hàng realtime',
      'Kết nối backend realtime (Firestore)',
      'Tính năng quản lý kho hàng'
    ]
  },
  {
    title: 'Grid Stylish E-Commerce',
    description: 'Dự Án Thực Tập - GIS Việt',
    category: 'full-stack',
    tech: ['Flutter', 'ASP.NET Core', 'SQL Server', 'Firebase', 'Figma'],
    date: '09/2024 - 11/2024',
    status: 'Production',
    highlights: [
      'Frontend: Flutter (UI responsive, cart, checkout)',
      'Backend: ASP.NET Core APIs (Microservices concept)',
      'JWT auth & role-based access control'
    ]
  }
];

const categories: Category[] = [
  { id: 'all', name: 'Tất Cả Dự Án', count: workData.length, icon: Layers },
  { id: 'web', name: 'Web Apps', count: workData.filter(w => w.category === 'web').length, icon: Code2 },
  { id: 'mobile', name: 'Mobile Apps', count: workData.filter(w => w.category === 'mobile').length, icon: Smartphone },
  { id: 'full-stack', name: 'Full Stack', count: workData.filter(w => w.category === 'full-stack').length, icon: Server }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  },
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Live': return 'bg-emerald-100 text-emerald-700 border-emerald-300 shadow-lg shadow-emerald-100';
    case 'In Progress': return 'bg-amber-100 text-amber-700 border-amber-300 shadow-lg shadow-amber-100';
    case 'Production': return 'bg-blue-100 text-blue-700 border-blue-300 shadow-lg shadow-blue-100';
    default: return 'bg-gray-100 text-gray-600 border-gray-200';
  }
};

const getCategoryGradient = (category: string) => {
  switch (category) {
    case 'web': return 'from-blue-500 to-cyan-500';
    case 'mobile': return 'from-purple-500 to-pink-500';
    case 'full-stack': return 'from-orange-500 to-red-500';
    default: return 'from-gray-400 to-gray-500';
  }
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'mobile' | 'full-stack'>('all');
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const yHeader = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const filteredWork = useMemo(() => {
    return workData.filter(work =>
      selectedCategory === 'all' || work.category === selectedCategory
    );
  }, [selectedCategory]);



  return (
    <section
      id="portfolio"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 50%, #f3f4f6 100%)',
        fontFamily: 'Inter, sans-serif'
      }}
      ref={containerRef}
    >
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-green-300/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-300/20 to-transparent rounded-full blur-3xl"></div>
      </motion.div>

      {/* Grid Pattern */}
      <motion.div
        style={{ y: yBackground, opacity: 0.5 }}
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 0.5 }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(107, 114, 128, .1) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 114, 128, .1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          style={{ y: yHeader }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
              <Sparkles size={16} style={{ color: BRAND_COLOR }} />
            </motion.div>
            <span className="text-sm font-bold" style={{ color: BRAND_COLOR }}>DỰ ÁN TIÊU BIỂU</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-gray-900 leading-tight tracking-tight"
          >
            Các Dự Án <br />
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative inline-block"
              style={{ color: BRAND_COLOR }}
            >
              Nổi Bật
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                style={{ originX: 0 }}
              ></motion.div>
            </motion.span>
          </motion.h1>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {[
              { number: '6+', label: 'Dự Án Lớn', icon: TrendingUp },
              { number: '700+', label: 'Người Dùng Thực', icon: Star },
              { number: '95+', label: 'Lighthouse Score', icon: Sparkles }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: `0 20px 25px -5px rgba(107, 122, 28, 0.15)` }}
                  className="relative group p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Icon size={24} style={{ color: BRAND_COLOR }} className="mb-3 mx-auto" />
                    <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: BRAND_COLOR }}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const isActive = selectedCategory === category.id;
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                  }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 overflow-hidden group ${
                    isActive
                      ? 'text-white shadow-2xl'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 shadow-md'
                  }`}
                  style={{
                    backgroundColor: isActive ? BRAND_COLOR : undefined,
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: `linear-gradient(135deg, ${BRAND_COLOR}dd, ${BRAND_HOVER_COLOR}dd)` }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon size={16} className="relative z-10" />
                  <span className="relative z-10">{category.name}</span>
                  <motion.span
                    className={`ml-1 text-xs font-bold relative z-10 ${isActive ? 'text-white/90' : 'text-gray-500'}`}
                    initial={false}
                    animate={{ scale: isActive ? 1.1 : 1 }}
                  >
                    ({category.count})
                  </motion.span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredWork.map((work) => (
              <motion.div
                key={work.title}
                variants={itemVariants}
                layout
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="group h-full"
              >
                <motion.div
                  whileHover={{ y: -12 }}
                  className="h-full flex flex-col bg-white rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
                >
                  {/* Image Section */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br opacity-30 group-hover:opacity-50 transition-opacity duration-500 ${getCategoryGradient(work.category)}`}
                    ></div>

                    {/* Icon Animation */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-8xl opacity-40 group-hover:opacity-60 transition-opacity">
                        {work.category === 'web' ? '🌐' : work.category === 'mobile' ? '📱' : '⚙️'}
                      </div>
                    </motion.div>

                    {/* Top Badges */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-3 z-20">
                      <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold text-gray-700 border border-gray-200/50 shadow-lg"
                      >
                        <Calendar size={14} className="text-gray-500" />
                        {work.date}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`px-4 py-2 rounded-lg text-xs font-bold border shadow-lg ${getStatusColor(work.status)}`}
                      >
                        {work.status}
                      </motion.div>
                    </div>

                    {/* Description */}
                    <motion.div
                      className="absolute bottom-5 left-5 right-5 z-20"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <div className="bg-white/98 backdrop-blur-sm text-gray-900 px-4 py-3 rounded-xl text-sm font-bold shadow-2xl border border-gray-100/50">
                        {work.description}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-7 sm:p-8 flex flex-col">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-2xl sm:text-3xl font-black text-gray-900 mb-5"
                    >
                      {work.title}
                    </motion.h3>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2.5 mb-6">
                      {work.tech.slice(0, 4).map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.15, y: -2 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3.5 py-1.5 text-xs font-bold bg-gradient-to-r from-green-50 to-emerald-50 text-gray-700 rounded-full border transition-all duration-200 cursor-default shadow-sm hover:shadow-md"
                          style={{ borderColor: BRAND_COLOR + '40', color: BRAND_COLOR }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3.5 mb-7 flex-1">
                      {work.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                          >
                            <CheckCircle size={18} style={{ color: BRAND_COLOR }} className="flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {highlight}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                      <div className="flex gap-2">
                        {[
                          { link: work.liveLink, icon: ExternalLink, title: "Truy cập trang live" },
                          { link: work.githubLink, icon: Github, title: "Xem GitHub" },
                          { link: work.youtubeLink, icon: Play, title: "Xem demo" },
                        ].map((item, idx) => item.link && (
                          <motion.a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 shadow-md hover:shadow-lg border border-gray-200 transition-all duration-200"
                            title={item.title}
                          >
                            <item.icon size={18} />
                          </motion.a>
                        ))}
                      </div>

                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.12, rotate: 8 }}
                        whileTap={{ scale: 0.9 }}
                        className="ml-auto w-13 h-13 flex items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 hover:shadow-2xl"
                        style={{ backgroundColor: BRAND_COLOR }}
                      >
                        <ArrowUpRight size={20} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>



        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-gray-100 p-12 sm:p-16 shadow-xl bg-gradient-to-br from-white via-green-50/30 to-white">
            {/* Decorative Blobs */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-200/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-black text-gray-900 mb-5"
              >
                Thấy được điều bạn muốn?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Hãy liên hệ với tôi để thảo luận về dự án tiếp theo. Tôi sẵn sàng cho những thử thách mới.
              </motion.p>

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="inline-block"
              >
                <motion.button
                  whileHover={{ scale: 1.08, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-10 py-4 text-white font-bold rounded-xl shadow-2xl transition-all duration-300"
                  style={{ backgroundColor: BRAND_HOVER_COLOR }}
                >
                  Cùng Làm Việc Ngay
                  <ArrowUpRight size={20} />
                </motion.button>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}