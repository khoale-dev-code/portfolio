'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6 bg-[#fdf9f3] dark:bg-[#11001e] transition-colors duration-300">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-[#677a1c] dark:text-[#a5b95b] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Let's Connect
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-2xl dark:shadow-[#677a1c]/5 border border-gray-200 dark:border-gray-800 animate-slide-in-up backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-[#677a1c]/50 dark:focus:ring-[#a5b95b]/50 focus:border-transparent
                  transition-all duration-300 hover:border-[#677a1c]/50 dark:hover:border-[#a5b95b]/50"
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-[#677a1c]/50 dark:focus:ring-[#a5b95b]/50 focus:border-transparent
                  transition-all duration-300 hover:border-[#677a1c]/50 dark:hover:border-[#a5b95b]/50"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={7}
                className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-[#677a1c]/50 dark:focus:ring-[#a5b95b]/50 focus:border-transparent
                transition-all duration-300 hover:border-[#677a1c]/50 dark:hover:border-[#a5b95b]/50 resize-none"
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitted}
                className="group relative px-10 py-4 bg-gradient-to-r from-[#677a1c] to-[#8a9e2a] text-white rounded-full font-semibold text-lg
                hover:shadow-2xl hover:shadow-[#677a1c]/30 hover:scale-105 active:scale-95
                transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none
                overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#8a9e2a] to-[#677a1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitted ? (
                    <>
                      <Send size={20} className="animate-bounce" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Divider with decorative element */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#fdf9f3] dark:bg-[#11001e] px-6 text-sm text-gray-500 dark:text-gray-400">
              OR
            </span>
          </div>
        </div>

        {/* Direct Contact */}
        <div className="text-center space-y-6">
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
            Prefer to reach out directly?
          </p>
          <a
            href="mailto:Lekhoale30092003@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-100 dark:bg-gray-900/50 rounded-2xl
            hover:bg-gradient-to-r hover:from-[#677a1c]/10 hover:to-[#8a9e2a]/10 
            dark:hover:from-[#677a1c]/20 dark:hover:to-[#8a9e2a]/20
            border border-gray-200 dark:border-gray-800 hover:border-[#677a1c]/30 dark:hover:border-[#a5b95b]/30
            transition-all duration-300 hover:shadow-lg hover:shadow-[#677a1c]/10"
          >
            <Mail size={24} className="text-[#677a1c] dark:text-[#a5b95b] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-[#677a1c] dark:group-hover:text-[#a5b95b] transition-colors">
              Lekhoale30092003@gmail.com
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}