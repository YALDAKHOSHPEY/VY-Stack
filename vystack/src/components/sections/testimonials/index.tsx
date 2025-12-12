"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "علی محمدی",
    role: "مدیرعامل شرکت تکنولوژی",
    content: "کار با تیم VyStack تجربه فوق‌العاده‌ای بود. سایت ما نه تنها زیبا و مدرن شد، بلکه رتبه گوگل‌مان هم ۴۰ درصد بهبود پیدا کرد. پشتیبانی عالی و حرفه‌ای.",
    rating: 5,
    project: "وبسایت شرکتی",
    image: "/testimonials/1.jpg"
  },
  {
    id: 2,
    name: "فاطمه کریمی",
    role: "مدیر فروشگاه آنلاین",
    content: "فروشگاه آنلاین ما بعد از طراحی توسط VyStack، رشد ۳ برابری فروش داشت. سیستم مدیریت محتوای عالی و پنل کاربری بسیار کاربرپسند.",
    rating: 5,
    project: "فروشگاه اینترنتی",
    image: "/testimonials/2.jpg"
  },
  {
    id: 3,
    name: "رضا احمدی",
    role: "استارتاپ فناوری",
    content: "تیم بسیار متعهد و با تجربه. پروژه ما را در زمان مقرر و با کیفیت عالی تحویل دادند. همکاری مداوم با این تیم را توصیه می‌کنم.",
    rating: 4,
    project: "اپلیکیشن موبایل",
    image: "/testimonials/3.jpg"
  },
  {
    id: 4,
    name: "سارا نوروزی",
    role: "مدیر بازاریابی",
    content: "سایت جدید ما کاملا مطابق با برندینگ شرکت طراحی شد. سرعت لود بالا و ریسپانسیو بودن سایت تأثیر زیادی روی جذب مشتری داشت.",
    rating: 5,
    project: "پرتال سازمانی",
    image: "/testimonials/4.jpg"
  },
  {
    id: 5,
    name: "محمد جعفری",
    role: "کارآفرین",
    content: "از مشاوره اولیه تا تحویل پروژه، تمام مراحل بسیار حرفه‌ای مدیریت شد. تیم VyStack واقعا به رشد کسب‌وکار ما کمک کرد.",
    rating: 5,
    project: "پلتفرم آموزشی",
    image: "/testimonials/5.jpg"
  },
  {
    id: 6,
    name: "نازنین رحیمی",
    role: "مدیر رسانه",
    content: "طراحی خلاقانه و کدنویسی تمیز. سایت ما اکنون در تمام دستگاه‌ها به بهترین شکل نمایش داده می‌شود. رضایت کامل دارم.",
    rating: 4,
    project: "سایت خبری",
    image: "/testimonials/6.jpg"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">
            نظرات مشتریان
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">رضایت</span>
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"> مشتریان</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            آنچه مشتریان ما درباره همکاری با VyStack می‌گویند
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -right-4 md:-right-12 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
            aria-label="نظر قبلی"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -left-4 md:-left-12 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
            aria-label="نظر بعدی"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
                    {/* Quote Icon */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 flex items-center justify-center mb-8">
                      <Quote className="w-8 h-8 text-amber-500 dark:text-amber-400" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-300 text-gray-300 dark:fill-gray-700 dark:text-gray-700'}`}
                        />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">
                          {testimonial.role}
                        </div>
                        <div className="text-amber-600 dark:text-amber-400 text-sm font-medium mt-1">
                          {testimonial.project}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-gradient-to-r from-amber-500 to-orange-500 w-8' : 'bg-gray-300 dark:bg-gray-700'}`}
              aria-label={`برو به نظر ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "۱۰۰+", label: "مشتری راضی" },
            { value: "۹۸٪", label: "رضایت کلی" },
            { value: "۴.۹", label: "میانگین امتیاز" },
            { value: "۸۵٪", label: "مشتریان دائمی" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}