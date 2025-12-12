"use client";

import { useState } from "react";
import { Phone, Mail, MessageSquare, Calendar, Send, CheckCircle } from "lucide-react";

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-soft-purple-900 via-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-soft-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              شروع پروژه
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              آماده{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                شروع پروژه
              </span>
              {" "}خود هستید؟
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              همین الان با ما تماس بگیرید و یک جلسه مشاوره رایگان دریافت کنید.
              تیم ما آماده کمک به رشد کسب و کار شماست.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "مشاوره رایگان",
                  description: "جلسه مشاوره ۳۰ دقیقه‌ای کاملا رایگان"
                },
                {
                  icon: <Calendar className="w-6 h-6" />,
                  title: "زمان‌بندی منعطف",
                  description: "هماهنگی بر اساس زمان‌بندی شما"
                },
                {
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: "پشتیبانی ۲۴/۷",
                  description: "پشتیبانی دائمی حتی پس از تحویل"
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: "تضمین کیفیت",
                  description: "تضمین رضایت کامل شما از پروژه"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-cyan-400">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">{feature.title}</div>
                    <div className="text-gray-400">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="tel:+982112345678"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">تماس تلفنی</span>
              </a>
              
              <a
                href="mailto:info@vystack.com"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">ارسال ایمیل</span>
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">پیام شما ارسال شد!</h3>
                  <p className="text-gray-300 mb-8">
                    کارشناسان ما در سریع‌ترین زمان ممکن با شما تماس خواهند گرفت.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors"
                  >
                    ارسال پیام جدید
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-2">درخواست مشاوره رایگان</h3>
                  <p className="text-gray-400 mb-8">فرم زیر را پر کنید تا با شما تماس بگیریم.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          نام و نام خانوادگی *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                          placeholder="علی محمدی"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          ایمیل *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                          placeholder="example@domain.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        شماره تماس *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        توضیحات پروژه
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                        placeholder="در مورد پروژه خود توضیح دهید..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          در حال ارسال...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          ارسال درخواست
                        </>
                      )}
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      با ارسال این فرم، با شرایط و حریم خصوصی ما موافقت می‌کنید.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: "امن", value: "۱۰۰٪" },
                { label: "محرمانه", value: "تضمین" },
                { label: "پاسخ", value: "۲۴h" }
              ].map((badge, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{badge.value}</div>
                  <div className="text-sm text-gray-400">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}