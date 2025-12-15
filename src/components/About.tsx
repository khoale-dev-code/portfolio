'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  GraduationCap, 
  Award, 
  Code2, 
  BookOpen, 
  Download,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  Users,
  Briefcase
} from 'lucide-react';
import user_image from '../public/assets/user-image.png';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredGoal, setHoveredGoal] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalInfo = {
    name: 'Lê Trần Đăng Khoa',
    title: 'Full-Stack Developer',
    location: 'TP.HCM, Việt Nam',
    bio: 'Sinh viên năm 4 Công nghệ Phần mềm tại HUFLIT, đam mê xây dựng ứng dụng web và mobile chất lượng cao với React, Flutter, ASP.NET Core.',
    gpa: '3.0/4.0',
    graduation: '2025'
  };

  const stats = [
    { number: '6+', label: 'Dự Án' },
    { number: '700+', label: 'Người Dùng' },
    { number: '500+', label: 'Giờ Lập Trình' },
    { number: '100%', label: 'Deadline' }
  ];

  const careerGoals = [
    {
      icon: Target,
      title: 'Trở Thành Full-Stack Developer',
      description: 'Thành thạo cả Frontend (React, Flutter) và Backend (ASP.NET Core, Firebase)'
    },
    {
      icon: Zap,
      title: 'Dự Án Có Impact',
      description: 'Xây dựng sản phẩm phục vụ hàng ngàn người dùng như HUFLIT Test Practice'
    },
    {
      icon: Code2,
      title: 'Cập Nhật Công Nghệ',
      description: 'Luôn học hỏi best practices và modern frameworks mới'
    }
  ];

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React 18', level: 90 },
        { name: 'Flutter/Dart', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript/TypeScript', level: 90 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'ASP.NET Core', level: 85 },
        { name: 'Firebase', level: 90 },
        { name: 'SQL Server', level: 80 },
        { name: 'RESTful API', level: 85 }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Figma', level: 80 },
        { name: 'Vercel', level: 85 },
        { name: 'Problem Solving', level: 90 }
      ]
    }
  ];

  const softSkills = [
    { title: 'Giải Quyết Vấn Đề', desc: 'Debug phức tạp, tối ưu performance' },
    { title: 'Làm Việc Nhóm', desc: 'Git collaboration, code review, feedback' },
    { title: 'Giao Tiếp', desc: 'Documentation rõ ràng, giải thích technical' },
    { title: 'Tự Chủ', desc: 'Hoàn thành dự án độc lập, đúng deadline' },
    { title: 'Sáng Tạo', desc: 'UI/UX design, user experience focused' },
    { title: 'Học Hỏi Nhanh', desc: 'Self-learning Firebase, APIs, frameworks' }
  ];

  const technologies = [
    'React', 'Flutter', 'ASP.NET Core', 'Firebase', 'SQL Server',
    'Tailwind CSS', 'TypeScript', 'Git', 'Figma', 'Vercel'
  ];

  const educationInfo = {
    university: 'Đại học Ngoại Ngữ - Tin Học TP.HCM',
    major: 'Công nghệ Phần mềm',
    gpa: '3.0/4.0',
    year: '2021 - 2025'
  };

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#677a1c]/5 dark:bg-[#677a1c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#92a344]/5 dark:bg-[#92a344]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-[#677a1c]/20 dark:border-[#92a344]/30 mb-6">
            <Briefcase size={16} className="text-[#677a1c] dark:text-[#92a344]" />
            <span className="text-sm font-semibold text-[#677a1c] dark:text-[#92a344]">GIỚI THIỆU</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Thông Tin Về Tôi
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Full-Stack Developer với passion phát triển ứng dụng web và mobile chất lượng cao
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Profile */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-lg transition-all duration-300 mb-8 group">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  {/* Animated Ring */}
                  <div className="absolute inset-0 -m-2 rounded-2xl bg-gradient-to-r from-[#677a1c] to-[#92a344] animate-pulse opacity-50"></div>
                  
                  {/* Image Container */}
                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={user_image}
                      alt="Lê Trần Đăng Khoa"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {personalInfo.name}
              </h2>

              <p className="font-semibold text-[#677a1c] dark:text-[#92a344] mb-1">
                {personalInfo.title}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                📍 {personalInfo.location}
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-200 dark:border-gray-800 pt-4">
                {personalInfo.bio}
              </p>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-lg transition-all duration-300 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={20} className="text-[#677a1c] dark:text-[#92a344]" />
                <h3 className="font-bold text-gray-900 dark:text-white">Học Vấn</h3>
              </div>

              <p className="font-semibold text-gray-900 dark:text-white mb-1">
                {educationInfo.university}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {educationInfo.major}
              </p>

              <div className="flex gap-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                <div>
                  <div className="text-2xl font-bold text-[#677a1c] dark:text-[#92a344]">
                    {educationInfo.gpa}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">GPA</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {educationInfo.year}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Thời gian</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-center shadow-sm hover:shadow-lg hover:border-[#677a1c] dark:hover:border-[#92a344] transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-[#677a1c] dark:text-[#92a344] mb-1 animate-pulse">
                    {stat.number}
                  </div>
                  <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <style jsx>{`
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
              .animate-fade-in-up {
                animation: fade-in-up 0.6s ease-out forwards;
                opacity: 0;
              }
            `}</style>
          </div>

          {/* Right Column - Goals & Download */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Career Goals */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Mục Tiêu Sự Nghiệp
            </h3>

            <div className="space-y-4 mb-8">
              {careerGoals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredGoal(index)}
                    onMouseLeave={() => setHoveredGoal(null)}
                    className={`p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg hover:border-[#677a1c] dark:hover:border-[#92a344] transition-all duration-300 cursor-pointer group hover:-translate-y-1 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-[#677a1c]/10 dark:bg-[#92a344]/10 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <Icon size={20} className="text-[#677a1c] dark:text-[#92a344]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                          {goal.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <style jsx>{`
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
              .animate-fade-in-up {
                animation: fade-in-up 0.6s ease-out forwards;
                opacity: 0;
              }
            `}</style>

            {/* Download CV */}
            <a
              href="/cv.pdf"
              download="Le_Tran_Dang_Khoa_CV.pdf"
              className="group w-full mb-8 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#677a1c] dark:bg-[#92a344] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: '450ms' }}
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Tải CV Của Tôi
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <style jsx>{`
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
              .animate-fade-in-up {
                animation: fade-in-up 0.6s ease-out forwards;
                opacity: 0;
              }
            `}</style>

            {/* Availability */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <p className="font-semibold text-gray-900 dark:text-white">Sẵn Sàng Cho Cơ Hội Mới</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Hiện đang tìm kiếm vị trí Full-Stack Developer từ tháng 06/2025
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            Kỹ Năng Kỹ Thuật
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Kinh nghiệm với các công nghệ hiện đại
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-lg hover:border-[#677a1c] dark:hover:border-[#92a344] transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-[#677a1c] dark:text-[#92a344]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#677a1c] to-[#92a344] rounded-full transition-all duration-1000 group-hover/skill:shadow-lg group-hover/skill:shadow-[#677a1c]/50"
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <style jsx>{`
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
            .animate-fade-in-up {
              animation: fade-in-up 0.6s ease-out forwards;
              opacity: 0;
            }
          `}</style>
        </div>

        {/* Technologies */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            Công Nghệ
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Các công cụ và công nghệ tôi sử dụng hàng ngày
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-[#677a1c] dark:hover:border-[#92a344] transition-all duration-300 hover:shadow-md hover:scale-110 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

          <style jsx>{`
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
            .animate-fade-in-up {
              animation: fade-in-up 0.6s ease-out forwards;
              opacity: 0;
            }
          `}</style>
        </div>

        {/* Soft Skills */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 sm:p-12 shadow-sm hover:shadow-lg transition-all duration-300">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Kỹ Năng Mềm
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-10">
            Những phẩm chất giúp tôi là một người đồng nghiệp tốt
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="p-5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#677a1c] dark:hover:border-[#92a344] transition-all duration-300 hover:shadow-md group hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#677a1c]/10 dark:bg-[#92a344]/10 flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    <CheckCircle2 size={16} className="text-[#677a1c] dark:text-[#92a344]" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                      {skill.title}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style jsx>{`
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
            .animate-fade-in-up {
              animation: fade-in-up 0.6s ease-out forwards;
              opacity: 0;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}