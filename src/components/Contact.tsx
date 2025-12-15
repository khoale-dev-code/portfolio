'use client';

import { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  Github,
  MessageCircle,
  Clock,
  CheckCircle,
  Sparkles,
  Zap,
  User,
  AtSign,
  MessageSquare,
  ArrowRight,
  Calendar,
  Globe,
  AlertCircle,
  Rocket
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isVisible, setIsVisible] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    setSubmitError('');
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitted(false);
        }, 3000);
      } else {
        let errorMessage = 'Failed to send message. Please try again.';
        
        try {
          const errorData = await response.json();
          if (errorData.message) {
            errorMessage = errorData.message;
          }
        } catch (jsonError) {
          const errorText = await response.text();
          console.error('API Error:', errorText);
        }

        setSubmitError(errorMessage);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Lekhoale30092003@gmail.com',
      link: 'mailto:Lekhoale30092003@gmail.com',
      colorFrom: '#677a1c',
      colorTo: '#92a344'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+84 383196830',
      link: 'tel:+84383196830',
      colorFrom: '#92a344',
      colorTo: '#a5b95b'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gò Vấp, TP.HCM, Vietnam',
      link: 'https://maps.google.com/?q=Go+Vap+Ho+Chi+Minh',
      colorFrom: '#4f6016',
      colorTo: '#677a1c'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'khoale-dev-code',
      link: 'https://github.com/khoale-dev-code',
      colorFrom: '#677a1c',
      colorTo: '#4f6016'
    }
  ];

  const quickFacts = [
    { icon: Clock, text: 'Usually responds within 24 hours' },
    { icon: Globe, text: 'Available for remote work' },
    { icon: MessageCircle, text: 'Open to freelance projects' },
    { icon: Zap, text: 'Quick turnaround time' }
  ];

  return (
    <section 
      id="contact" 
      className="relative min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#fdf9f3] via-[#f5f1e8] to-[#e8e4c7] dark:from-[#11001e] dark:via-[#1a0028] dark:to-[#0a0015]"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-bl from-[#92a344]/20 to-[#677a1c]/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-[#e8e4c7]/30 to-[#92a344]/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-r from-[#677a1c]/5 to-[#92a344]/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px]" />
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(103, 122, 28, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(103, 122, 28, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(103, 122, 28, 0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(103, 122, 28, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(146, 163, 68, 0.8);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .animate-slide-up {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .transition-smooth {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        input:focus, textarea:focus {
          animation: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Header */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-white/80 to-[#e8e4c7]/80 dark:from-[#677a1c]/40 dark:to-[#4f6016]/40 border-2 border-[#92a344] dark:border-[#677a1c]/50 mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-float">
            <Sparkles size={16} className="text-[#677a1c] dark:text-[#a5b95b] animate-pulse sm:w-[18px] sm:h-[18px]" />
            <span className="text-[#677a1c] dark:text-[#a5b95b] text-xs sm:text-sm font-bold tracking-wider uppercase">Let's Connect</span>
            <Sparkles size={16} className="text-[#677a1c] dark:text-[#a5b95b] animate-pulse sm:w-[18px] sm:h-[18px]" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 md:mb-8 leading-tight px-2 animate-slide-up">
            <span className="bg-gradient-to-r from-[#677a1c] via-[#92a344] to-[#677a1c] dark:from-[#a5b95b] dark:via-[#c4d47d] dark:to-[#a5b95b] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-medium px-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Have a project in mind or just want to chat? 
            <br className="hidden sm:block" />
            I'd <span className="font-bold text-[#677a1c] dark:text-[#a5b95b]">love to hear</span> from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group block p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-[#677a1c] dark:hover:border-[#a5b95b] transition-smooth hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div 
                        className="relative p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-smooth flex-shrink-0"
                        style={{
                          background: `linear-gradient(to bottom right, ${info.colorFrom}, ${info.colorTo})`
                        }}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">
                          {info.label}
                        </p>
                        <p className="text-sm sm:text-base text-gray-900 dark:text-white font-bold group-hover:text-[#677a1c] dark:group-hover:text-[#a5b95b] transition-colors duration-300 break-words">
                          {info.value}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#677a1c] dark:group-hover:text-[#a5b95b] group-hover:translate-x-2 transition-smooth flex-shrink-0" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Quick Facts */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#677a1c]/10 to-[#92a344]/10 border-2 border-[#677a1c]/20 dark:border-[#a5b95b]/20 backdrop-blur-sm hover:border-[#677a1c]/40 dark:hover:border-[#a5b95b]/40 transition-smooth hover:shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#677a1c] dark:text-[#a5b95b] animate-pulse" />
                Quick Facts
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {quickFacts.map((fact, index) => {
                  const Icon = fact.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 group hover:translate-x-1 transition-smooth">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#677a1c] dark:text-[#a5b95b] flex-shrink-0 group-hover:scale-125 transition-smooth" />
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {fact.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-green-400 transition-smooth hover:shadow-lg group cursor-pointer">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse-ring" />
                  <div className="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Available for Work
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Currently accepting new projects and opportunities
              </p>
            </div>

            {/* Discord Notification Badge */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/20 dark:border-purple-500/20 backdrop-blur-sm hover:from-indigo-500/20 hover:to-purple-500/20 hover:border-indigo-500/40 transition-smooth hover:shadow-lg group">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 rounded-lg bg-indigo-500/20 flex-shrink-0 group-hover:scale-110 transition-smooth">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-1">
                    Instant Notifications
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                    Your message will be sent instantly to my Discord for immediate attention! 🚀
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#677a1c] via-[#92a344] to-[#677a1c] rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-glow" />
              
              <form onSubmit={handleSubmit} className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-gray-200/50 dark:border-gray-700/50 group-hover:border-gray-300/80 dark:group-hover:border-gray-600/80 transition-smooth">
                {/* Success Message Overlay */}
                {isSubmitted && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl z-50 animate-slide-up">
                    <div className="text-center p-6 sm:p-8 animate-slide-up">
                      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-[#677a1c] to-[#92a344] mb-4 sm:mb-6 animate-bounce shadow-lg">
                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                        Message Sent! 🎉
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">
                        Thank you for reaching out!
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 px-4">
                        I've received your message on Discord and will respond within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-4 sm:space-y-6">
                  {/* Error Alert */}
                  {submitError && (
                    <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 flex items-start gap-2 sm:gap-3 animate-slide-up">
                      <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5 animate-bounce" />
                      <div className="flex-1">
                        <h4 className="text-xs sm:text-sm font-bold text-red-900 dark:text-red-200 mb-1">
                          Failed to Send
                        </h4>
                        <p className="text-[10px] sm:text-xs text-red-700 dark:text-red-300">
                          {submitError}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Name Field */}
                    <div className="relative group/field">
                      <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 group-hover/field:text-[#677a1c] dark:group-hover/field:text-[#a5b95b] transition-colors">
                        <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#677a1c] dark:text-[#a5b95b] group-hover/field:scale-125 transition-smooth" />
                        Your Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-lg sm:rounded-xl border-2 ${
                            errors.name 
                              ? 'border-red-500 focus:ring-red-500/50' 
                              : 'border-gray-300 dark:border-gray-700 focus:ring-[#677a1c]/50 dark:focus:ring-[#a5b95b]/50'
                          } bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-smooth hover:border-[#677a1c]/50 dark:hover:border-[#a5b95b]/50`}
                        />
                        {focusedField === 'name' && !errors.name && (
                          <div className="absolute right-3 top-3.5 sm:top-4 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        )}
                      </div>
                      {errors.name && (
                        <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-red-500 font-medium flex items-center gap-1 animate-slide-up">
                          <AlertCircle size={10} className="sm:w-3 sm:h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="relative group/field">
                      <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 group-hover/field:text-[#677a1c] dark:group-hover/field:text-[#a5b95b] transition-colors">
                        <AtSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#677a1c] dark:text-[#a5b95b] group-hover/field:scale-125 transition-smooth" />
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-lg sm:rounded-xl border-2 ${
                            errors.email 
                              ? 'border-red-500 focus:ring-red-500/50' 
                              : 'border-gray-300 dark:border-gray-700 focus:ring-[#677a1c]/50 dark:focus:ring-[#a5b95b]/50'
                          } bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-smooth hover:border-[#677a1c]/50 dark:hover:border-[#a5b95b]/50`}
                        />
                        {focusedField === 'email' && !errors.email && (
                          <div className="absolute right-3 top-3.5 sm:top-4 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        )}
                      </div>
                      {errors.email && (
                        <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-red-500 font-medium flex items-center gap-1 animate-slide-up">
                          <AlertCircle size={10} className="sm:w-3 sm:h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="relative group/field">
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 group-hover/field:text-[#677a1c] dark:group-hover/field:text-[#a5b95b] transition-colors">
                      <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#677a1c] dark:text-[#a5b95b] group-hover/field:scale-125 transition-smooth" />
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project inquiry, collaboration, etc."
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-lg sm:rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#677a1c]/50 dark:focus:ring-[#a5b95b]/50 focus:border-transparent transition-smooth hover:border-[#677a1c]/50 dark:hover:border-[#a5b95b]/50"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative group/field">
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 group-hover/field:text-[#677a1c] dark:group-hover/field:text-[#a5b95b] transition-colors">
                      <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#677a1c] dark:text-[#a5b95b] group-hover/field:scale-125 transition-smooth" />
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project, ideas, or just say hi..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-lg sm:rounded-xl border-2 ${
                        errors.message 
                          ? 'border-red-500 focus:ring-red-500/50' 
                          : 'border-gray-300 dark:border-gray-700 focus:ring-[#677a1c]/50 dark:focus:ring-[#a5b95b]/50'
                      } bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-smooth hover:border-[#677a1c]/50 dark:hover:border-[#a5b95b]/50 resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-red-500 font-medium flex items-center gap-1 animate-slide-up">
                        <AlertCircle size={10} className="sm:w-3 sm:h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 sm:pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="group relative w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#677a1c]/40 hover:scale-105 active:scale-95 transition-smooth disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#92a344] to-[#677a1c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      
                      <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                            <span className="text-sm sm:text-base">Sending to Discord...</span>
                          </>
                        ) : isSubmitted ? (
                          <>
                            <CheckCircle size={20} className="sm:w-[22px] sm:h-[22px] animate-bounce" />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={20} className="sm:w-[22px] sm:h-[22px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
                          </>
                        )}
                      </span>
                    </button>
                  </div>

                  <p className="text-[10px] sm:text-xs text-center text-gray-500 dark:text-gray-400 pt-1 sm:pt-2 flex items-center justify-center gap-1 sm:gap-2">
                    <span>🔒</span>
                    Your information is secure and will be sent via Discord webhook
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#677a1c] via-[#92a344] to-[#677a1c] rounded-2xl sm:rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-glow" />
          
          <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/90 to-[#e8e4c7]/50 dark:from-gray-800/90 dark:to-gray-900/50 backdrop-blur-xl border-2 border-[#677a1c]/30 dark:border-[#a5b95b]/30 group-hover:border-[#677a1c]/60 dark:group-hover:border-[#a5b95b]/60 text-center overflow-hidden transition-smooth hover:shadow-2xl">
            <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#677a1c]/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tl from-[#92a344]/20 to-transparent rounded-full blur-2xl" />

            <div className="relative z-10">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4 text-[#677a1c] dark:text-[#a5b95b] group-hover:scale-110 group-hover:rotate-12 transition-smooth" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 px-2">
                Prefer a Quick Call?
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
                Sometimes a conversation is better than an email. Feel free to call or schedule a meeting!
              </p>
              <a 
                href="tel:+84383196830"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white font-bold text-sm sm:text-base rounded-full hover:shadow-2xl hover:shadow-[#677a1c]/40 hover:scale-110 transition-smooth active:scale-95 group/btn"
              >
                <Phone size={18} className="sm:w-5 sm:h-5 group-hover/btn:rotate-12 transition-smooth" />
                Call: +84 383196830
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}