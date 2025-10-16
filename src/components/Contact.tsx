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
  AlertCircle
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
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#fdf9f3] via-[#f5f1e8] to-[#e8e4c7] dark:from-[#11001e] dark:via-[#1a0028] dark:to-[#0a0015]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#92a344]/20 to-[#677a1c]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#e8e4c7]/30 to-[#92a344]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#677a1c]/5 to-[#92a344]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-white/80 to-[#e8e4c7]/80 dark:from-[#677a1c]/40 dark:to-[#4f6016]/40 border-2 border-[#92a344] dark:border-[#677a1c]/50 mb-8 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Sparkles size={18} className="text-[#677a1c] dark:text-[#a5b95b] animate-pulse" />
            <span className="text-[#677a1c] dark:text-[#a5b95b] text-sm font-bold tracking-wider uppercase">Let's Connect</span>
            <Sparkles size={18} className="text-[#677a1c] dark:text-[#a5b95b] animate-pulse" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#677a1c] via-[#92a344] to-[#677a1c] dark:from-[#a5b95b] dark:via-[#c4d47d] dark:to-[#a5b95b] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
            Have a project in mind or just want to chat? 
            <br className="hidden sm:block" />
            I'd <span className="font-bold text-[#677a1c] dark:text-[#a5b95b]">love to hear</span> from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group block p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-[#677a1c] dark:hover:border-[#a5b95b] transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="relative p-4 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                        style={{
                          background: `linear-gradient(to bottom right, ${info.colorFrom}, ${info.colorTo})`
                        }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">
                          {info.label}
                        </p>
                        <p className="text-gray-900 dark:text-white font-bold group-hover:text-[#677a1c] dark:group-hover:text-[#a5b95b] transition-colors duration-300 break-words">
                          {info.value}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#677a1c] dark:group-hover:text-[#a5b95b] group-hover:translate-x-2 transition-all duration-300 flex-shrink-0" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Quick Facts */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#677a1c]/10 to-[#92a344]/10 border-2 border-[#677a1c]/20 dark:border-[#a5b95b]/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#677a1c] dark:text-[#a5b95b]" />
                Quick Facts
              </h3>
              <div className="space-y-3">
                {quickFacts.map((fact, index) => {
                  const Icon = fact.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-[#677a1c] dark:text-[#a5b95b] flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {fact.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  Available for Work
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Currently accepting new projects and opportunities
              </p>
            </div>

            {/* Discord Notification Badge */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/20 dark:border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/20">
                  <MessageCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                    Instant Notifications
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Your message will be sent instantly to my Discord for immediate attention! 🚀
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#677a1c] via-[#92a344] to-[#677a1c] rounded-3xl blur-xl opacity-20 transition-opacity duration-500" />
              
              <form onSubmit={handleSubmit} className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-gray-200/50 dark:border-gray-700/50">
                {/* Success Message Overlay */}
                {isSubmitted && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl z-50">
                    <div className="text-center p-8">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#677a1c] to-[#92a344] mb-6 animate-bounce">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Message Sent! 🎉
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
                        Thank you for reaching out!
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        I've received your message on Discord and will respond within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Error Alert */}
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-red-900 dark:text-red-200 mb-1">
                          Failed to Send
                        </h4>
                        <p className="text-xs text-red-700 dark:text-red-300">
                          {submitError}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                        <User className="w-4 h-4 text-[#677a1c] dark:text-[#a5b95b]" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-xl border-2 ${
                          errors.name 
                            ? 'border-red-500 focus:ring-red-500/50' 
                            : 'border-gray-300 dark:border-gray-700 focus:ring-[#677a1c]/50 dark:focus:ring-[#a5b95b]/50'
                        } bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:border-[#677a1c]/50 dark:hover:border-[#a5b95b]/50`}
                      />
                      {errors.name && (
                        <p className="mt-2 text-xs text-red-500 font-medium flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                        <AtSign className="w-4 h-4 text-[#677a1c] dark:text-[#a5b95b]" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-xl border-2 ${
                          errors.email 
                            ? 'border-red-500 focus:ring-red-500/50' 
                            : 'border-gray-300 dark:border-gray-700 focus:ring-[#677a1c]/50 dark:focus:ring-[#a5b95b]/50'
                        } bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:border-[#677a1c]/50 dark:hover:border-[#a5b95b]/50`}
                      />
                      {errors.email && (
                        <p className="mt-2 text-xs text-red-500 font-medium flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                      <MessageSquare className="w-4 h-4 text-[#677a1c] dark:text-[#a5b95b]" />
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project inquiry, collaboration, etc."
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#677a1c]/50 dark:focus:ring-[#a5b95b]/50 focus:border-transparent transition-all duration-300 hover:border-[#677a1c]/50 dark:hover:border-[#a5b95b]/50"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                      <MessageCircle className="w-4 h-4 text-[#677a1c] dark:text-[#a5b95b]" />
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project, ideas, or just say hi..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-5 py-4 rounded-xl border-2 ${
                        errors.message 
                          ? 'border-red-500 focus:ring-red-500/50' 
                          : 'border-gray-300 dark:border-gray-700 focus:ring-[#677a1c]/50 dark:focus:ring-[#a5b95b]/50'
                      } bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 hover:border-[#677a1c]/50 dark:hover:border-[#a5b95b]/50 resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-2 text-xs text-red-500 font-medium flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="group relative w-full px-8 py-5 bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-[#677a1c]/40 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#92a344] to-[#677a1c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      
                      <span className="relative flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending to Discord...
                          </>
                        ) : isSubmitted ? (
                          <>
                            <CheckCircle size={22} />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </button>
                  </div>

                  <p className="text-xs text-center text-gray-500 dark:text-gray-400 pt-2 flex items-center justify-center gap-2">
                    <span>🔒</span>
                    Your information is secure and will be sent via Discord webhook
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#677a1c] via-[#92a344] to-[#677a1c] rounded-3xl blur-2xl opacity-20 animate-pulse-slow" />
          
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white/90 to-[#e8e4c7]/50 dark:from-gray-800/90 dark:to-gray-900/50 backdrop-blur-xl border-2 border-[#677a1c]/30 dark:border-[#a5b95b]/30 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#677a1c]/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#92a344]/20 to-transparent rounded-full blur-2xl" />

            <div className="relative z-10">
              <Calendar className="w-10 h-10 mx-auto mb-4 text-[#677a1c] dark:text-[#a5b95b]" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Prefer a Quick Call?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Sometimes a conversation is better than an email. Feel free to call or schedule a meeting!
              </p>
              <a 
                href="tel:+84383196830"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#677a1c] to-[#92a344] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[#677a1c]/40 hover:scale-110 transition-all duration-300"
              >
                <Phone size={20} />
                Call: +84 383196830
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}