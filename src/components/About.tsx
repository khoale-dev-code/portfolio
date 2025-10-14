'use client';

import Image from 'next/image';
import { assets, infoList, toolsData } from '@/data/assets';
import { GraduationCap, Award, Code2, BookOpen, TrendingUp } from 'lucide-react';

export default function About() {
  // Skills data với percentages
  const skillCategories = [
    {
      category: 'Mobile Development',
      skills: [
        { name: 'Flutter/Dart', level: 90 },
        { name: 'State Management', level: 85 },
        { name: 'UI/UX Design', level: 85 }
      ]
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'ASP.NET Core', level: 80 },
        { name: 'HTML/CSS/JS', level: 90 }
      ]
    },
    {
      category: 'Backend & Database',
      skills: [
        { name: 'RESTful API', level: 85 },
        { name: 'SQL Server', level: 80 },
        { name: 'Firebase', level: 85 }
      ]
    }
  ];

  // Achievement stats
  const achievements = [
    { icon: Code2, number: '6+', label: 'Projects Completed' },
    { icon: GraduationCap, number: '3.0', label: 'GPA Score' },
    { icon: Award, number: '0.5+', label: 'Years Experience' },
    { icon: TrendingUp, number: '100%', label: 'Commitment' }
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center py-24 px-6 bg-[#fdf9f3] dark:bg-[#11001e] transition-colors duration-300"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#92a344] dark:bg-[#677a1c]/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#fdf9f3] dark:bg-[#fdf9f3]/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">
            Introduction
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white font-outfit">
            About me
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image with decorative frame */}
          <div className="relative animate-slide-in-left">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#677a1c] to-[#fdf9f3] rounded-3xl blur opacity-20"></div> 
              
              {/* Image container */}
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                <Image
                  src={assets.user_image}
                  alt="Lê Trần Đăng Khoa"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#677a1c] to-[#fdf9f3] flex items-center justify-center">
                    <span className="text-gray-900 dark:text-[#111111] text-xl font-bold">0.5+</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Years of</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-slide-in-right space-y-8">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I am <strong className="text-gray-900 dark:text-white">Lê Trần Đăng Khoa</strong>,
              a final-year student specializing in <strong className="text-[#677a1c] dark:text-[#a5b95b]">Software Engineering </strong> 
              at HUFLIT. My passion lies in <strong className="text-[#677a1c] dark:text-[#a5b95b]">
              cross-platform development</strong>, where I leverage practical <strong className="text-[#677a1c] dark:text-[#a5b95b]">
              Full-stack experience</strong> to build robust solutions.
            </p>

            {/* Achievement Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="group p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#677a1c] dark:hover:border-[#a5b95b] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <Icon className="w-8 h-8 text-[#677a1c] dark:text-[#a5b95b] mb-2" />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
              <br /> 
           
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {infoList.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#92a344] dark:hover:border-[#677a1c] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-3 transition-transform group-hover:scale-110 duration-300">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={32}
                      height={32}
                      className="dark:hidden"
                    />
                    <Image
                      src={item.iconDark}
                      alt={item.title}
                      width={32}
                      height={32}
                      className="hidden dark:block"
                    />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fdf9f3]/10 to-[#e8e4c7]/10 dark:from-[#677a1c]/10 dark:to-[#4f6016]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
           
        {/* Skills Section */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-outfit mb-3">
              Technical Skills
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              My expertise across different development areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div 
                key={catIndex}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#677a1c] dark:hover:border-[#a5b95b] transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-[#677a1c] dark:text-[#a5b95b]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#677a1c] to-[#92a344] rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-outfit mb-3">
              Tools I use
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              Technologies and tools I work with on a daily basis
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {toolsData.map((tool, index) => (
              <div
                key={index}
                className="group relative w-20 h-20 flex items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-[#92a344] dark:hover:border-[#677a1c] transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Image
                  src={tool}
                  alt="Tool"
                  width={44}
                  height={44}
                  className="object-contain transition-transform group-hover:scale-110 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#677a1c]/20 to-[#92a344]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Goals Section */}
        <div className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-[#677a1c]/10 to-[#92a344]/10 border border-[#677a1c]/20 dark:border-[#a5b95b]/20">
          <div className="flex items-start gap-4">
            <BookOpen className="w-8 h-8 text-[#677a1c] dark:text-[#a5b95b] flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Career Goals
              </h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#677a1c] dark:text-[#a5b95b] mt-1">✓</span>
                  <span>Phát triển full-stack với focus vào Flutter cho mobile/web</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#677a1c] dark:text-[#a5b95b] mt-1">✓</span>
                  <span>Áp dụng kiến thức OOP, SOLID vào môi trường chuyên nghiệp</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#677a1c] dark:text-[#a5b95b] mt-1">✓</span>
                  <span>Đóng góp vào các dự án sáng tạo và hiệu quả với trải nghiệm người dùng tốt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="text-center">
          <a
            href="/cv.pdf" 
            download="Le_Tran_Dang_Khoa_CV.pdf"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#677a1c] text-white font-semibold shadow-lg shadow-[#677a1c]/30 hover:shadow-xl hover:shadow-[#677a1c]/40 transition-all duration-300 hover:-translate-y-1"
          >
            Download CV
            <svg
              className="w-5 h-5 group-hover:translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}