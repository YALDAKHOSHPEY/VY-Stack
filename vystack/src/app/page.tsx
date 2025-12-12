import { 
  Sparkles, 
  ArrowLeft, 
  Code, 
  Palette, 
  ShoppingCart, 
  Search, 
  Shield,
  Zap,
  Globe,
  Smartphone,
  BarChart,
  Users,
  CheckCircle,
  Phone,
  Calendar,
  Award,
  Clock,
  Star,
  ChevronLeft
} from "lucide-react";
import { ServiceCard } from "@/components/sections/services";
import { PortfolioShowcase } from "@/components/sections/portfolio";
import { StatsSection } from "@/components/sections/stats";
import { ProcessSection } from "@/components/sections/process";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { TechnologiesSection } from "@/components/sections/technologies";
import { CTASection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-soft-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-soft-purple-900/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-soft-purple-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px'
          }}></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-soft-purple-500/10 to-cyan-500/10 border border-soft-purple-500/20 dark:border-soft-purple-400/20 text-soft-purple-600 dark:text-soft-purple-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>تیم تخصصی طراحی و توسعه وب</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
              <span className="block bg-gradient-to-r from-soft-purple-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                طراحی سایت‌هایی
              </span>
              <span className="block mt-4 text-gray-900 dark:text-white">
                که <span className="relative inline-block">
                  تجارت شما
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-soft-purple-500 to-cyan-500 rounded-full"></span>
                </span> را متحول می‌کند
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              با استفاده از جدیدترین تکنولوژی‌های وب، سایت‌های سریع، امن و حرفه‌ای می‌سازیم که 
              <span className="font-semibold text-soft-purple-600 dark:text-soft-purple-400"> در گوگل رتبه می‌گیرند</span> و 
              <span className="font-semibold text-cyan-600 dark:text-cyan-400"> کاربران را جذب می‌کنند</span>.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-soft-purple-600 to-cyan-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-soft-purple-500/30 transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  مشاهده نمونه‌کارها
                  <ChevronLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/40 transition-colors"></div>
              </button>
              
              <button className="group px-8 py-4 rounded-2xl border-2 border-soft-purple-500/30 dark:border-soft-purple-400/30 text-soft-purple-600 dark:text-soft-purple-400 font-semibold text-lg hover:border-soft-purple-500 dark:hover:border-soft-purple-400 hover:bg-soft-purple-50 dark:hover:bg-soft-purple-900/20 transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  دریافت مشاوره رایگان
                </span>
              </button>
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { value: '۵۰+', label: 'پروژه موفق', icon: <CheckCircle className="w-5 h-5" /> },
                { value: '۱۰۰%', label: 'رضایت مشتری', icon: <Star className="w-5 h-5" /> },
                { value: '۲۴/۷', label: 'پشتیبانی', icon: <Clock className="w-5 h-5" /> },
                { value: '۵+', label: 'سال تجربه', icon: <Award className="w-5 h-5" /> },
              ].map((stat, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-soft-purple-500">{stat.icon}</div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-soft-purple-100 dark:bg-soft-purple-900/30 text-soft-purple-600 dark:text-soft-purple-400 text-sm font-medium mb-4">
              خدمات ما
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">خدمات تخصصی</span>
              <span className="bg-gradient-to-r from-soft-purple-600 to-cyan-500 bg-clip-text text-transparent"> ما</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              با آخرین تکنولوژی‌های روز دنیا، کسب و کار شما را به سطح جدیدی می‌بریم
            </p>
          </div>
          
          <ServiceCard />
        </div>
      </section>

      {/* Portfolio Showcase */}
      <PortfolioShowcase />

      {/* Process Section */}
      <ProcessSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}