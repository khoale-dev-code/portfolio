'use client';

import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Github, Calendar, Zap } from 'lucide-react';
import Image from 'next/image';
import { workData } from '@/data/assets';

export default function Portfolio() {
  const [visibleItems, setVisibleItems] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web App' },
    { id: 'mobile', name: 'Mobile App' },
    { id: 'backend', name: 'Backend' }
  ];

  const filteredWork = workData.filter(work => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'web') return work.description.includes('Web');
    if (selectedCategory === 'mobile') return work.description.includes('Mobile');
    if (selectedCategory === 'backend') return work.description.includes('Backend');
    return true;
  });

  const handleShowMore = () => {
    setVisibleItems((prev) => Math.min(prev + 4, filteredWork.length));
  };

  // Function to handle card click
  const handleCardClick = (link: string | undefined) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="portfolio" 
      className="relative min-h-screen flex items-center py-24 px-6 bg-[#fdf9f3] dark:bg-[#11001e] transition-colors duration-300"
    >
      {/* Decorative Background: Chuyển Pink/Purple sang Xanh rêu/Trắng kem */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#92a344] dark:bg-[#677a1c]/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#fdf9f3] dark:bg-[#fdf9f3]/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 font-medium">
            My portfolio
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-outfit">
            My latest work
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore my collection of <span className="font-semibold text-[#677a1c] dark:text-[#a5b95b]">6+ projects</span> showcasing
            full-stack development with Flutter, React.js, and ASP.NET Core
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setVisibleItems(4);
              }}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category.id
                  // Active state: Gradient Xanh rêu
                  ? 'bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white shadow-lg shadow-[#677a1c]/30'
                  // Inactive state: Hover Xanh rêu
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#92a344] dark:hover:border-[#677a1c]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredWork.slice(0, visibleItems).map((work, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(work.link)}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-900">
                <Image
                  src={work.bgImage}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay with gradient (giữ nguyên để giữ độ tương phản) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Date Badge */}
                {work.date && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Calendar size={14} className="text-[#677a1c] dark:text-[#a5b95b]" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{work.date}</span>
                  </div>
                )}

                {/* Quick Links */}
                <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {work.link && (
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      // External Link: Hover Xanh rêu
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:bg-[#677a1c] hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {work.link && work.link.includes('github') && (
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      // Github Link: Hover Xanh rêu nhạt
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:bg-[#92a344] hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title & Description */}
                <div className="mb-4">
                  {/* Title: Hover Xanh rêu */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#677a1c] dark:group-hover:text-[#a5b95b] transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {work.description}
                  </p>
                </div>

                {/* Tech Stack (Giữ nguyên, màu xám trung tính) */}
                {work.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                {work.highlights && (
                  <div className="space-y-2 mb-4">
                    {work.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        {/* Zap Icon: Màu Xanh rêu */}
                        <Zap size={14} className="text-[#677a1c] dark:text-[#a5b95b] flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    View Details
                  </span>
                  {/* Arrow Button: Gradient Xanh rêu */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#677a1c] to-[#92a344] flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect: Chuyển Pink/Purple sang Xanh rêu */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#677a1c]/0 to-[#92a344]/0 group-hover:from-[#677a1c]/5 group-hover:to-[#92a344]/5 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
          {/* Projects Completed: Màu Xanh rêu */}
          <div className="text-center">
            <div className="text-3xl font-bold text-[#677a1c] dark:text-[#a5b95b] mb-1">6+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          {/* Test Users: Màu Xanh rêu nhạt */}
          <div className="text-center">
            <div className="text-3xl font-bold text-[#92a344] dark:text-[#c4d47d] mb-1">100+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Test Users</div>
          </div>
          {/* Years Experience: Màu Xanh rêu đậm */}
          <div className="text-center">
            <div className="text-3xl font-bold text-[#4f6016] dark:text-[#92a344] mb-1">0.5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          {/* Technologies: Màu Xanh rêu trung bình */}
          <div className="text-center">
            <div className="text-3xl font-bold text-[#a5b95b] dark:text-[#d2d9b6] mb-1">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
        </div>

        {/* Show More Button (Đã sửa màu nếu bạn quyết định bỏ comment) */}
        {/*
        {visibleItems < filteredWork.length && (
          <div className="flex justify-center">
            <button
              onClick={handleShowMore}
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white font-semibold shadow-lg shadow-[#677a1c]/30 hover:shadow-xl hover:shadow-[#677a1c]/40 transition-all duration-300 hover:-translate-y-1"
            >
              Show more projects
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}
        */}
      
        {/* No Results Message */}
        {filteredWork.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category
            </p>
          </div>
        )}
      </div>
    </section>
  );
}