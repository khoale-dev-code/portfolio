'use client';

import { assets } from '@/data/assets';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react'; // Bỏ Twitter nếu không dùng

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Thông tin liên kết xã hội thực tế của bạn từ CV
  const socialLinks = [
    { icon: Github, href: 'https://github.com/khoale-dev-code', label: 'GitHub' }, // Lấy từ CV
    { icon: Linkedin, href: '#', label: 'LinkedIn' }, // Giữ placeholder, bạn nên thêm link thật
    { icon: Mail, href: 'mailto:Lekhoale30092003@gmail.com', label: 'Email' }, // Lấy từ CV
    // Bỏ Twitter vì không có trong CV/không cần thiết
  ];

  const footerLinks = [
    { name: 'Terms of Services', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Connect with me', href: '#contact' },
  ];

  return (
    // Thay đổi màu nền footer (nhạt hơn nền chính)
    <footer className="bg-[#fdf9f3] dark:bg-gray-950 border-t border-gray-300 dark:border-gray-800 py-12 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-300 dark:border-gray-800">
          
          {/* Brand */}
          <div>
            <Link href="#home" className="inline-flex items-center gap-2 mb-4">
              <Image
                src={assets.logo}
                alt="Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              {/* Thay đổi tên thương hiệu */}
              <span className="text-lg font-bold text-gray-900 dark:text-white">Lê Trần Đăng Khoa</span>
            </Link>
            {/* Cập nhật mô tả cá nhân */}
            <p className="text-gray-700 dark:text-gray-400 text-sm">
              Intern Developer, chuyên sâu Full-stack (Flutter, React.js, ASP.NET Core) tại TP.HCM, Việt Nam.
            </p>
          </div>

          {/* Quick Links (Giữ nguyên cấu trúc) */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  // Hover màu xanh rêu
                  className="block text-gray-700 dark:text-gray-400 hover:text-[#677a1c] dark:hover:text-[#a5b95b] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Thay đổi màu nền/hover icon sang tông xanh rêu
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 
                  hover:bg-[#677a1c] dark:hover:bg-[#a5b95b] hover:text-white dark:hover:text-gray-900 
                  transition-colors hover:scale-105 duration-300" // Thêm hiệu ứng scale
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Cập nhật Copyright */}
          <p className="text-gray-700 dark:text-gray-400 text-sm">
            © {currentYear} Lê Trần Đăng Khoa. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                // Hover màu xanh rêu
                className="text-gray-700 dark:text-gray-400 hover:text-[#677a1c] dark:hover:text-[#a5b95b] text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}