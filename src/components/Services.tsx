'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets, serviceData } from '@/data/assets';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Smartphone, 
  Palette, 
  Server,
  Zap,
  Target,
  TrendingUp,
  Award,
  Clock,
  Users,
  Star
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced service highlights with metrics
  const serviceHighlights = [
    {
      icon: Code2,
      title: 'Web Development',
      tagline: 'Building Modern Web Experiences',
      features: [
        'Lightning-fast React.js & Next.js applications',
        'Seamless RESTful API Integration',
        'Robust ASP.NET Core Backend Architecture',
        'Advanced Performance Optimization'
      ],
      metrics: {
        projects: '3+',
        satisfaction: '100%',
        avgTime: '4-6 weeks'
      },
      tech: ['React.js', 'Next.js', 'ASP.NET Core', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      tagline: 'Cross-Platform Excellence',
      features: [
        'Native-like Flutter/Dart applications',
        'Advanced State Management (Bloc, Provider)',
        'Real-time Firebase Integration',
        'Offline-first Architecture for reliability'
      ],
      metrics: {
        projects: '4+',
        satisfaction: '100%',
        avgTime: '6-8 weeks'
      },
      tech: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      tagline: 'Crafting Delightful Experiences',
      features: [
        'User-centered Design Methodology',
        'Micro-interactions & Smooth Animations',
        'Responsive & Adaptive Layouts',
        'Complete Design System Implementation'
      ],
      metrics: {
        projects: 'All',
        satisfaction: '100%',
        avgTime: '2-3 weeks'
      },
      tech: ['Figma', 'Framer Motion', 'CSS Animations'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      tagline: 'Scalable & Secure APIs',
      features: [
        'RESTful API Development with best practices',
        'Secure JWT Authentication & Authorization',
        'Optimized Database Design (SQL/NoSQL)',
        'Clean Architecture & SOLID Principles'
      ],
      metrics: {
        projects: '5+',
        satisfaction: '100%',
        avgTime: '3-5 weeks'
      },
      tech: ['ASP.NET Core', 'Node.js', 'SQL Server', 'MongoDB'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // Enhanced work process
  const workProcess = [
    { 
      step: '01', 
      title: 'Discovery & Research', 
      description: 'Deep dive into requirements, goals, and target audience',
      icon: Target,
      duration: '1-2 days'
    },
    { 
      step: '02', 
      title: 'Strategic Planning', 
      description: 'Detailed roadmap, tech stack selection, and timeline',
      icon: TrendingUp,
      duration: '2-3 days'
    },
    { 
      step: '03', 
      title: 'Agile Development', 
      description: 'Iterative development with regular updates and feedback',
      icon: Zap,
      duration: 'Main phase'
    },
    { 
      step: '04', 
      title: 'Quality Assurance', 
      description: 'Comprehensive testing, optimization, and refinement',
      icon: Award,
      duration: '3-5 days'
    },
    { 
      step: '05', 
      title: 'Launch & Support', 
      description: 'Smooth deployment with ongoing maintenance',
      icon: Users,
      duration: 'Continuous'
    }
  ];

  // Key achievements
  const achievements = [
    { icon: Award, value: '6+', label: 'Projects Completed' },
    { icon: Star, value: '100%', label: 'Client Satisfaction' },
    { icon: Clock, value: '500+', label: 'Hours Coded' },
    { icon: Users, value: '500+', label: 'Users Supported' }
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#fdf9f3] via-[#f5f1e8] to-[#e8e4c7] dark:from-[#11001e] dark:via-[#1a0028] dark:to-[#0a0015]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-[#92a344]/30 to-[#677a1c]/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-[#e8e4c7]/40 to-[#92a344]/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#677a1c]/10 to-[#92a344]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Hero Header with Animation */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-white/80 to-[#e8e4c7]/80 dark:from-[#677a1c]/40 dark:to-[#4f6016]/40 border-2 border-[#92a344] dark:border-[#677a1c]/50 mb-8 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Sparkles size={20} className="text-[#677a1c] dark:text-[#a5b95b] animate-pulse" />
            <span className="text-[#677a1c] dark:text-[#a5b95b] text-sm font-bold tracking-wider uppercase">Professional Services</span>
            <Sparkles size={20} className="text-[#677a1c] dark:text-[#a5b95b] animate-pulse" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#677a1c] via-[#92a344] to-[#677a1c] dark:from-[#a5b95b] dark:via-[#c4d47d] dark:to-[#a5b95b] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Transforming Ideas
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#4f6016] via-[#677a1c] to-[#92a344] dark:from-[#c4d47d] dark:via-[#a5b95b] dark:to-[#99aa44] bg-clip-text text-transparent">
              Into Digital Reality
            </span>
          </h1>
          
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-medium mb-8">
            Full-Stack Developer specializing in 
            <span className="font-bold text-[#677a1c] dark:text-[#a5b95b]"> Flutter</span>, 
            <span className="font-bold text-[#677a1c] dark:text-[#a5b95b]"> React.js</span>, and 
            <span className="font-bold text-[#677a1c] dark:text-[#a5b95b]"> ASP.NET Core</span>
            <br />
            Building scalable, performant, and beautiful applications
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-2 border-[#92a344]/30 dark:border-[#677a1c]/30 hover:border-[#677a1c] dark:hover:border-[#a5b95b] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#677a1c]/5 to-[#92a344]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon className="w-8 h-8 mx-auto mb-3 text-[#677a1c] dark:text-[#a5b95b] group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl sm:text-4xl font-bold text-[#677a1c] dark:text-[#a5b95b] mb-1">{achievement.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Services Grid - Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="group relative h-full overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer transform hover:scale-105 hover:-rotate-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/50 dark:from-gray-800/90 dark:via-gray-800/70 dark:to-gray-800/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl group-hover:border-[#677a1c] dark:group-hover:border-[#a5b95b] transition-all duration-700" />
              
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#677a1c]/0 via-[#92a344]/0 to-[#677a1c]/0 group-hover:from-[#677a1c]/10 group-hover:via-[#92a344]/5 group-hover:to-[#677a1c]/10 rounded-3xl transition-all duration-700" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Icon with animated background */}
                <div className="relative mb-6 inline-flex self-start">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#677a1c] to-[#92a344] rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative p-5 rounded-2xl bg-gradient-to-br from-[#e8e4c7] to-[#d2cfae] dark:from-[#677a1c]/60 dark:to-[#4f6016]/60 group-hover:scale-110 transition-transform duration-700 shadow-xl">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={56}
                      height={56}
                      className="w-14 h-14 group-hover:rotate-12 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-[#677a1c] dark:group-hover:text-[#a5b95b] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6 text-gray-600 dark:text-gray-400 flex-grow">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 font-bold text-[#677a1c] dark:text-[#a5b95b] group-hover:gap-4 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#92a344]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>

        {/* Interactive Service Details */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Deep Dive Into
              <span className="bg-gradient-to-r from-[#677a1c] to-[#92a344] dark:from-[#a5b95b] dark:to-[#c4d47d] bg-clip-text text-transparent"> Services</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
              Explore detailed breakdown of each service offering
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`group flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all duration-300 ${
                    activeService === index
                      ? 'bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white shadow-2xl scale-105'
                      : 'bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <Icon size={20} className={activeService === index ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'} />
                  <span className="hidden sm:inline">{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Details */}
          <div className="relative">
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    activeService === index 
                      ? 'opacity-100 scale-100 relative' 
                      : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/80 to-[#e8e4c7]/30 dark:from-gray-800/80 dark:to-gray-900/50 backdrop-blur-xl border-2 border-[#92a344]/30 dark:border-[#677a1c]/30 shadow-2xl overflow-hidden">
                    {/* Animated background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`} />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#677a1c]/10 to-transparent rounded-bl-full" />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                        <div className="flex items-start gap-5">
                          <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-xl`}>
                            <Icon size={36} />
                          </div>
                          <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                              {service.title}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                              {service.tagline}
                            </p>
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="flex flex-wrap gap-3">
                          <div className="px-4 py-2 rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-[#677a1c]/20">
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Projects</div>
                            <div className="text-xl font-bold text-[#677a1c] dark:text-[#a5b95b]">{service.metrics.projects}</div>
                          </div>
                          <div className="px-4 py-2 rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-[#677a1c]/20">
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Satisfaction</div>
                            <div className="text-xl font-bold text-[#677a1c] dark:text-[#a5b95b]">{service.metrics.satisfaction}</div>
                          </div>
                          <div className="px-4 py-2 rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-[#677a1c]/20">
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Timeline</div>
                            <div className="text-sm font-bold text-[#677a1c] dark:text-[#a5b95b]">{service.metrics.avgTime}</div>
                          </div>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {service.features.map((feature, fIndex) => (
                          <div 
                            key={fIndex}
                            className="flex items-start gap-4 p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 border border-transparent hover:border-[#677a1c]/30"
                          >
                            <CheckCircle2 size={24} className="text-[#677a1c] dark:text-[#a5b95b] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="pt-6 border-t-2 border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 mb-4">
                          <Zap size={20} className="text-[#677a1c] dark:text-[#a5b95b]" />
                          <p className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                            Technology Stack
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {service.tech.map((tech, tIndex) => (
                            <span 
                              key={tIndex}
                              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white font-bold text-sm shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Work Process Timeline - Enhanced */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Development
              <span className="bg-gradient-to-r from-[#677a1c] to-[#92a344] dark:from-[#a5b95b] dark:to-[#c4d47d] bg-clip-text text-transparent"> Workflow</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
              A proven process that delivers exceptional results every time
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {workProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <div 
                  key={index}
                  className="relative group"
                >
                  {/* Connecting line */}
                  {index < workProcess.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-[#677a1c] via-[#92a344] to-[#677a1c] opacity-20 group-hover:opacity-40 transition-opacity duration-300 z-0">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
                    </div>
                  )}

                  <div className="relative bg-gradient-to-br from-white/80 to-[#e8e4c7]/30 dark:from-gray-800/80 dark:to-gray-900/50 backdrop-blur-xl p-6 rounded-3xl border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-[#677a1c] dark:hover:border-[#a5b95b] transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 group overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#677a1c]/0 to-[#92a344]/0 group-hover:from-[#677a1c]/10 group-hover:to-[#92a344]/10 rounded-3xl transition-all duration-500" />
                    
                    {/* Step badge */}
                    <div className="relative z-10">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#677a1c] to-[#92a344] text-white font-bold text-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        {process.step}
                      </div>
                      
                      {/* Icon */}
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-xl bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-[#677a1c] dark:text-[#a5b95b]" />
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center group-hover:text-[#677a1c] dark:group-hover:text-[#a5b95b] transition-colors duration-300">
                        {process.title}
                      </h4>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3 leading-relaxed">
                        {process.description}
                      </p>

                      <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#677a1c] dark:text-[#a5b95b]">
                        <Clock size={14} />
                        <span>{process.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Premium CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#677a1c] via-[#92a344] to-[#677a1c] rounded-3xl blur-2xl opacity-20 animate-pulse-slow" />
          
          <div className="relative text-center p-12 sm:p-16 rounded-3xl bg-gradient-to-br from-white/90 to-[#e8e4c7]/50 dark:from-gray-800/90 dark:to-gray-900/50 backdrop-blur-xl border-2 border-[#677a1c]/30 dark:border-[#a5b95b]/30 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#677a1c]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#92a344]/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white font-bold mb-8 shadow-xl animate-pulse">
                <Sparkles size={20} />
                <span>Let's Create Something Amazing</span>
                <Sparkles size={20} />
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Ready to Start Your
                <br />
                <span className="bg-gradient-to-r from-[#677a1c] via-[#92a344] to-[#677a1c] dark:from-[#a5b95b] dark:via-[#c4d47d] dark:to-[#a5b95b] bg-clip-text text-transparent">
                  Next Project?
                </span>
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-10 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                Let's collaborate to bring your ideas to life with <span className="font-bold text-[#677a1c] dark:text-[#a5b95b]">clean</span>, 
                <span className="font-bold text-[#677a1c] dark:text-[#a5b95b]"> efficient</span>, and 
                <span className="font-bold text-[#677a1c] dark:text-[#a5b95b]"> scalable</span> solutions
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Link href="#portfolio">
                  <button className="group relative px-10 py-5 bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white font-bold rounded-full overflow-hidden shadow-2xl hover:shadow-[#677a1c]/50 transition-all duration-500 hover:scale-110 w-full sm:w-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#92a344] to-[#677a1c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative flex items-center gap-3 justify-center">
                      <Award size={20} />
                      View My Portfolio
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                </Link>
                
                <Link href="#contact">
                  <button className="group relative px-10 py-5 bg-white dark:bg-gray-800 text-[#677a1c] dark:text-[#a5b95b] font-bold rounded-full border-3 border-[#677a1c] dark:border-[#a5b95b] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 w-full sm:w-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#677a1c] to-[#92a344] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative flex items-center gap-3 justify-center group-hover:text-white transition-colors duration-500">
                      <Sparkles size={20} />
                      Get In Touch
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#677a1c] dark:text-[#a5b95b]" />
                  <span className="font-medium">Fast Response Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#677a1c] dark:text-[#a5b95b]" />
                  <span className="font-medium">Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#677a1c] dark:text-[#a5b95b]" />
                  <span className="font-medium">Ongoing Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for gradient animation */}
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