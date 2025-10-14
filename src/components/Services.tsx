'use client';

import Image from 'next/image';
import { assets, serviceData } from '@/data/assets';
import { ArrowRight, Sparkles, CheckCircle2, Code2, Smartphone, Palette, Server } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  // Service highlights - Chi tiết về từng dịch vụ
  const serviceHighlights = [
    {
      icon: Code2,
      title: 'Web Development',
      features: [
        'Responsive Design with React.js & Next.js',
        'RESTful API Integration',
        'ASP.NET Core Backend',
        'Performance Optimization'
      ],
      projects: '3+ Projects',
      tech: ['React.js', 'ASP.NET Core', 'Tailwind CSS']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      features: [
        'Cross-platform with Flutter/Dart',
        'State Management (Bloc, Provider)',
        'Firebase Integration',
        'Offline-first Architecture'
      ],
      projects: '4+ Projects',
      tech: ['Flutter', 'Dart', 'Firebase']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      features: [
        'User-centered Design',
        'Smooth Animations & Interactions',
        'Responsive Layouts',
        'Design System Implementation'
      ],
      projects: 'All Projects',
      tech: ['Figma', 'Framer Motion', 'CSS']
    },
    {
      icon: Server,
      title: 'Backend Development',
      features: [
        'RESTful API Development',
        'JWT Authentication',
        'Database Design (SQL/NoSQL)',
        'Clean Architecture'
      ],
      projects: '5+ Projects',
      tech: ['ASP.NET Core', 'Node.js', 'SQL Server']
    }
  ];

  // Process/Workflow
  const workProcess = [
    { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
    { step: '02', title: 'Planning', description: 'Creating detailed project roadmap' },
    { step: '03', title: 'Development', description: 'Building with best practices' },
    { step: '04', title: 'Testing', description: 'Quality assurance and optimization' },
    { step: '05', title: 'Deployment', description: 'Launch and ongoing support' }
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center py-24 px-6 overflow-hidden bg-[#fdf9f3] dark:bg-[#11001e]"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#92a344]/20 dark:bg-[#677a1c]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e8e4c7]/30 dark:bg-[#4f6016]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#fdf9f3]/40 dark:bg-[#677a1c]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#fdf9f3] to-[#e8e4c7] dark:from-[#677a1c]/40 dark:to-[#4f6016]/40 border border-[#92a344] dark:border-[#677a1c]/50 mb-6">
            <Sparkles size={16} className="text-[#677a1c] dark:text-[#a5b95b]" />
            <span className="text-[#677a1c] dark:text-[#a5b95b] text-sm font-semibold">What I Offer</span>          
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#677a1c] via-[#000000] to-[#677a1c] dark:from-[#99aa44] dark:via-[#cccccc] dark:to-[#99aa44] bg-clip-text text-transparent">
              My Services
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Specialized in <span className="font-semibold text-[#677a1c] dark:text-[#a5b95b]">Full-Stack Development</span> with 
            focus on <span className="font-semibold text-[#677a1c] dark:text-[#a5b95b]">Flutter</span>, 
            <span className="font-semibold text-[#677a1c] dark:text-[#a5b95b]"> React.js</span>, and 
            <span className="font-semibold text-[#677a1c] dark:text-[#a5b95b]"> ASP.NET Core</span>
          </p>
        </div>

        {/* Services Grid - Simple Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="group relative h-full p-8 rounded-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 
              hover:border-[#92a344] dark:hover:border-[#677a1c]/50 
              hover:shadow-2xl hover:shadow-[#677a1c]/10 dark:hover:shadow-[#677a1c]/20"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none 
              bg-gradient-to-br from-[#fdf9f3]/5 to-[#e8e4c7]/5 dark:from-[#677a1c]/10 dark:to-[#4f6016]/10" />

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity 
              bg-gradient-to-bl from-[#92a344] to-[#677a1c] rounded-bl-full blur-2xl" />

              {/* Content wrapper */}
              <div className="relative z-10">
                {/* Icon Background */}
                <div className="mb-6 inline-flex p-4 rounded-xl transition-all duration-500 
                bg-gradient-to-br from-[#fdf9f3] to-[#e8e4c7] dark:from-[#677a1c]/40 dark:to-[#4f6016]/40 
                group-hover:from-[#e8e4c7] group-hover:to-[#d2cfae] dark:group-hover:from-[#677a1c]/60 dark:group-hover:to-[#4f6016]/60">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl md:text-xl font-bold mb-3 transition-colors duration-500 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6 transition-colors duration-500 text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                <div className="inline-flex items-center gap-2 font-semibold group/link transition-all duration-500 
                text-[#677a1c] dark:text-[#a5b95b] group-hover:text-[#4f6016] dark:group-hover:text-[#c4d47d]">
                  Explore more
                  <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Service Details
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              What you get with each service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#677a1c] dark:hover:border-[#a5b95b] transition-all duration-300 hover:shadow-xl"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#677a1c] to-[#92a344] text-white">
                      <Icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="px-3 py-1 rounded-full bg-[#677a1c]/10 dark:bg-[#a5b95b]/10 text-[#677a1c] dark:text-[#a5b95b] font-medium">
                          {service.projects}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#677a1c] dark:text-[#a5b95b] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">
                      Tech Stack:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((tech, tIndex) => (
                        <span 
                          key={tIndex}
                          className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Work Process Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How I Work
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              My development process for every project
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {workProcess.map((process, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Connecting line (hidden on last item) */}
                {index < workProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#677a1c] to-[#92a344] opacity-30" />
                )}

                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#677a1c] dark:hover:border-[#a5b95b] transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                  {/* Step number */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#677a1c] to-[#92a344] text-white font-bold text-xl flex items-center justify-center">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {process.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-[#677a1c]/10 to-[#92a344]/10 border border-[#677a1c]/20 dark:border-[#a5b95b]/20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with clean, efficient, and scalable solutions
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#portfolio">
              <button className="px-8 py-4 bg-[#677a1c] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#677a1c]/40 transition-all duration-300 hover:scale-105">
                View Portfolio
              </button>
            </Link>
            <Link href="#contact">
              <button className="px-8 py-4 bg-white dark:bg-gray-800 text-[#677a1c] dark:text-[#a5b95b] font-semibold rounded-full border-2 border-[#677a1c] dark:border-[#a5b95b] hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}