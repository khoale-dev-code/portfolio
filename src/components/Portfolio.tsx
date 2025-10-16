'use client';

import { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Github, 
  Calendar, 
  Zap,
  Star,
  TrendingUp,
  Award,
  Code,
  Sparkles,
  Filter,
  Eye,
  Users,
  Clock,
  CheckCircle,
  Layers
} from 'lucide-react';
import Image from 'next/image';
import { workData } from '@/data/assets';

export default function Portfolio() {
  const [visibleItems, setVisibleItems] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Projects', icon: Layers, count: workData.length },
    { id: 'web', name: 'Web Apps', icon: Code, count: workData.filter(w => w.description.includes('Web')).length },
    { id: 'mobile', name: 'Mobile Apps', icon: Zap, count: workData.filter(w => w.description.includes('Mobile')).length },
    { id: 'backend', name: 'Backend', icon: Award, count: workData.filter(w => w.description.includes('Backend')).length }
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

  const handleCardClick = (link: string | undefined) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  // Portfolio statistics
  const stats = [
    { 
      icon: Award, 
      value: '6+', 
      label: 'Projects Completed',
      color: 'from-[#677a1c] to-[#92a344]'
    },
    { 
      icon: Users, 
      value: '500+', 
      label: 'Users Supported',
      color: 'from-[#92a344] to-[#a5b95b]'
    },
    { 
      icon: Clock, 
      value: '500+', 
      label: 'Hours Coded',
      color: 'from-[#4f6016] to-[#677a1c]'
    },
    { 
      icon: Star, 
      value: '100%', 
      label: 'Success Rate',
      color: 'from-[#677a1c] to-[#4f6016]'
    }
  ];

  return (
    <section 
      id="portfolio" 
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#fdf9f3] via-[#f5f1e8] to-[#e8e4c7] dark:from-[#11001e] dark:via-[#1a0028] dark:to-[#0a0015]"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#92a344]/30 to-[#677a1c]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#e8e4c7]/40 to-[#92a344]/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-[#677a1c]/10 to-[#92a344]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        {/* Spotlight effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#677a1c]/5 to-transparent blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-white/80 to-[#e8e4c7]/80 dark:from-[#677a1c]/40 dark:to-[#4f6016]/40 border-2 border-[#92a344] dark:border-[#677a1c]/50 mb-8 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Sparkles size={18} className="text-[#677a1c] dark:text-[#a5b95b] animate-pulse" />
            <span className="text-[#677a1c] dark:text-[#a5b95b] text-sm font-bold tracking-wider uppercase">Portfolio Showcase</span>
            <Sparkles size={18} className="text-[#677a1c] dark:text-[#a5b95b] animate-pulse" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#4f6016] via-[#677a1c] to-[#92a344] dark:from-[#a5b95b] dark:via-[#c4d47d] dark:to-[#99aa44] bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#677a1c] via-[#92a344] to-[#677a1c] dark:from-[#c4d47d] dark:via-[#a5b95b] dark:to-[#c4d47d] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Projects
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-medium mb-12">
            Explore my collection of 
            <span className="font-bold text-[#677a1c] dark:text-[#a5b95b]"> 6+ innovative projects</span> showcasing
            <br className="hidden sm:block" />
            full-stack expertise with 
            <span className="font-bold text-[#677a1c] dark:text-[#a5b95b]"> Flutter</span>, 
            <span className="font-bold text-[#677a1c] dark:text-[#a5b95b]"> React.js</span>, and 
            <span className="font-bold text-[#677a1c] dark:text-[#a5b95b]"> ASP.NET Core</span>
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-[#677a1c] dark:hover:border-[#a5b95b] transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <Icon className="w-8 h-8 mx-auto mb-3 text-[#677a1c] dark:text-[#a5b95b] group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                  <div className="text-3xl sm:text-4xl font-bold text-[#677a1c] dark:text-[#a5b95b] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Category Filter */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Filter size={20} className="text-[#677a1c] dark:text-[#a5b95b]" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Filter Projects</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setVisibleItems(4);
                  }}
                  className={`group relative flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-500 overflow-hidden ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white shadow-2xl scale-105'
                      : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-[#677a1c] dark:hover:border-[#a5b95b] backdrop-blur-sm hover:scale-105 hover:shadow-xl'
                  }`}
                >
                  {/* Animated background for inactive state */}
                  {selectedCategory !== category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#677a1c]/0 to-[#92a344]/0 group-hover:from-[#677a1c]/10 group-hover:to-[#92a344]/10 transition-all duration-500" />
                  )}
                  
                  <Icon size={18} className={selectedCategory === category.id ? 'animate-pulse' : 'group-hover:scale-110 transition-transform duration-300'} />
                  <span className="relative z-10">{category.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    selectedCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-[#677a1c]/10 dark:bg-[#a5b95b]/10 text-[#677a1c] dark:text-[#a5b95b]'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Premium Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredWork.slice(0, visibleItems).map((work, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleCardClick(work.link)}
              className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-3 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glass morphism container */}
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl group-hover:border-[#677a1c] dark:group-hover:border-[#a5b95b] transition-all duration-700">
                
                {/* Image Container with Enhanced Effects */}
                <div className="relative h-80 overflow-hidden">
                  {/* Image */}
                  <Image
                    src={work.bgImage}
                    alt={work.title}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2"
                  />
                  
                  {/* Multi-layer gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#677a1c]/20 via-transparent to-[#92a344]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
                  </div>

                  {/* Top Bar - Date & Links */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    {/* Date Badge */}
                    {work.date && (
                      <div className="flex items-center gap-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                        <Calendar size={16} className="text-[#677a1c] dark:text-[#a5b95b]" />
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{work.date}</span>
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                      {work.link && (
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md hover:bg-[#677a1c] hover:scale-110 transition-all duration-300 shadow-lg border border-gray-200/50 dark:border-gray-700/50 group/link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} className="text-gray-700 dark:text-gray-300 group-hover/link:text-white transition-colors" />
                        </a>
                      )}
                      {work.link && work.link.includes('github') && (
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md hover:bg-[#92a344] hover:scale-110 transition-all duration-300 shadow-lg border border-gray-200/50 dark:border-gray-700/50 group/link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} className="text-gray-700 dark:text-gray-300 group-hover/link:text-white transition-colors" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bottom Badge - Category */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
                    <div className="bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm">
                      {work.description}
                    </div>
                    
                    {/* View indicator */}
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Eye size={14} className="text-white" />
                      <span className="text-xs font-bold text-white">View</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#677a1c] dark:group-hover:text-[#a5b95b] transition-colors duration-300">
                    {work.title}
                  </h3>

                  {/* Tech Stack Tags */}
                  {work.tech && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {work.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:scale-110 transition-transform duration-300 border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Key Highlights */}
                  {work.highlights && (
                    <div className="space-y-3 mb-6">
                      {work.highlights.slice(0, 3).map((highlight, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-[#677a1c]/5 to-[#92a344]/5 hover:from-[#677a1c]/10 hover:to-[#92a344]/10 transition-all duration-300"
                        >
                          <CheckCircle size={18} className="text-[#677a1c] dark:text-[#a5b95b] flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Footer */}
                  <div className="flex items-center justify-between pt-6 border-t-2 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#677a1c] dark:bg-[#a5b95b] animate-pulse" />
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                        Click to explore
                      </span>
                    </div>
                    
                    {/* Animated Arrow Button */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#677a1c] to-[#92a344] rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#677a1c] to-[#92a344] flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-125 group-hover:rotate-45 transition-all duration-500">
                        <ArrowUpRight size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#677a1c]/0 via-[#92a344]/0 to-[#677a1c]/0 group-hover:from-[#677a1c]/5 group-hover:via-[#92a344]/5 group-hover:to-[#677a1c]/5 rounded-3xl transition-all duration-700 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Show More Button */}
        {visibleItems < filteredWork.length && (
          <div className="flex justify-center mb-16">
            <button
              onClick={handleShowMore}
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white font-bold shadow-2xl shadow-[#677a1c]/30 hover:shadow-[#677a1c]/50 transition-all duration-500 hover:scale-110 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#92a344] to-[#677a1c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="relative z-10">Load More Projects</span>
              <TrendingUp size={20} className="relative z-10 group-hover:translate-y-0.5 group-hover:scale-125 transition-all duration-300" />
            </button>
          </div>
        )}

        {/* No Results State */}
        {filteredWork.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#677a1c]/20 to-[#92a344]/20 mb-6">
              <Filter size={32} className="text-[#677a1c] dark:text-[#a5b95b]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              No Projects Found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Try selecting a different category filter
            </p>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="relative mt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#677a1c] via-[#92a344] to-[#677a1c] rounded-3xl blur-3xl opacity-20 animate-pulse-slow" />
          
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white/90 to-[#e8e4c7]/50 dark:from-gray-800/90 dark:to-gray-900/50 backdrop-blur-xl border-2 border-[#677a1c]/30 dark:border-[#a5b95b]/30 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#677a1c]/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#92a344]/20 to-transparent rounded-full blur-2xl" />

            <div className="relative z-10">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-[#677a1c] dark:text-[#a5b95b] animate-pulse" />
              
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Like What You See?
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help bring your next project to life with the same level of quality and dedication
              </p>

              <a href="#contact">
                <button className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white font-bold shadow-2xl hover:shadow-[#677a1c]/50 transition-all duration-500 hover:scale-110 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#92a344] to-[#677a1c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10">Let's Work Together</span>
                  <ArrowUpRight size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}