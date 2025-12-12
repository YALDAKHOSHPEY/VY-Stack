import { 
    CheckCircle, 
    XCircle, 
    Star, 
    Zap, 
    Users, 
    Globe,
    Shield,
    Cloud,
    Bell,
    Headphones,
    TrendingUp,
    Rocket
  } from "lucide-react";
  import { Card, CardBody, CardFooter } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge";
  import { useState } from "react";
  
  const pricingPlans = [
    {
      name: "استارتر",
      description: "مناسب برای کسب‌وکارهای نوپا",
      price: "۵,۰۰۰,۰۰۰",
      period: "تومان",
      features: [
        { text: "طراحی ۵ صفحه", included: true },
        { text: "ریسپانسیو", included: true },
        { text: "سیستم مدیریت محتوا", included: true },
        { text: "سئوی پایه", included: true },
        { text: "پشتیبانی ۳ ماهه", included: true },
        { text: "نمونه کار اختصاصی", included: false },
        { text: "بهینه‌سازی سرعت", included: false },
        { text: "گواهی SSL رایگان", included: false }
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "پیشرفته",
      description: "مناسب برای کسب‌وکارهای در حال رشد",
      price: "۱۰,۰۰۰,۰۰۰",
      period: "تومان",
      features: [
        { text: "طراحی ۱۰ صفحه", included: true },
        { text: "ریسپانسیو", included: true },
        { text: "سیستم مدیریت محتوا", included: true },
        { text: "سئوی پیشرفته", included: true },
        { text: "پشتیبانی ۶ ماهه", included: true },
        { text: "نمونه کار اختصاصی", included: true },
        { text: "بهینه‌سازی سرعت", included: true },
        { text: "گواهی SSL رایگان", included: false }
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "حرفه‌ای",
      description: "مناسب برای شرکت‌های بزرگ",
      price: "۲۰,۰۰۰,۰۰۰",
      period: "تومان",
      features: [
        { text: "طراحی نامحدود صفحات", included: true },
        { text: "ریسپانسیو", included: true },
        { text: "سیستم مدیریت محتوا", included: true },
        { text: "سئوی کامل", included: true },
        { text: "پشتیبانی ۱۲ ماهه", included: true },
        { text: "نمونه کار اختصاصی", included: true },
        { text: "بهینه‌سازی سرعت", included: true },
        { text: "گواهی SSL رایگان", included: true }
      ],
      popular: false,
      color: "from-orange-500 to-amber-500"
    }
  ];
  
  const additionalServices = [
    {
      name: "اپلیکیشن موبایل",
      description: "توسعه اپلیکیشن iOS و Android",
      price: "از ۱۵,۰۰۰,۰۰۰ تومان",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      name: "دیجیتال مارکتینگ",
      description: "کمپین‌های تبلیغاتی هدفمند",
      price: "مشاوره رایگان",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      name: "پشتیبانی ماهانه",
      description: "نگهداری و به‌روزرسانی سایت",
      price: "ماهانه از ۱,۰۰۰,۰۰۰ تومان",
      icon: <Headphones className="w-8 h-8" />
    },
    {
      name: "میزبانی و هاستینگ",
      description: "سرورهای پرسرعت و امن",
      price: "سالانه از ۲,۰۰۰,۰۰۰ تومان",
      icon: <Cloud className="w-8 h-8" />
    }
  ];
  
  const faqs = [
    {
      question: "آیا قیمت‌ها ثابت است؟",
      answer: "قیمت‌ها بسته به نیازهای خاص پروژه ممکن است تغییر کنند. بعد از جلسه مشاوره، قیمت دقیق ارائه می‌شود."
    },
    {
      question: "آیا امکان پرداخت اقساطی وجود دارد؟",
      answer: "بله، برای پروژه‌های بزرگ امکان پرداخت در دو یا سه مرحله وجود دارد."
    },
    {
      question: "چه مدت زمان برای تحویل نیاز است؟",
      answer: "بسته به پلن انتخاب شده، از ۱۰ روز تا ۳۰ روز کاری زمان نیاز است."
    },
    {
      question: "آیا پس از تحویل آموزش می‌دهید؟",
      answer: "بله، یک جلسه آموزش رایگان برای کار با سیستم مدیریت محتوا برگزار می‌کنیم."
    }
  ];
  
  export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(false);
  
    return (
      <>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-emerald-900/20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="primary" size="lg" icon={Star}>
                قیمت‌گذاری
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mt-8 mb-6">
                <span className="text-gray-900 dark:text-white">پلن‌های</span>
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent"> قیمت‌گذاری</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                پلن‌های متنوع برای نیازهای مختلف کسب‌وکارها. قیمت شفاف و بدون هزینه‌های پنهان.
              </p>
              
              {/* Billing Toggle */}
              <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 mb-10">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${!isAnnual ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  پرداخت ماهانه
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${isAnnual ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  پرداخت سالانه
                  <Badge variant="warning" size="sm" className="mr-2">
                    %۲۰ تخفیف
                  </Badge>
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* Pricing Plans */}
        <section className="py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  hover 
                  className={`relative ${plan.popular ? 'border-2 border-purple-500 dark:border-purple-400 shadow-2xl shadow-purple-500/20' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge variant="warning" icon={Star}>
                        پرفروش
                      </Badge>
                    </div>
                  )}
                  
                  <CardBody>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {plan.description}
                      </p>
                    </div>
                    
                    {/* Price */}
                    <div className="text-center mb-8">
                      <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                        {isAnnual ? 
                          `${Math.floor(parseInt(plan.price.replace(/,/g, '')) * 0.8).toLocaleString()}` : 
                          plan.price
                        }
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {plan.period}
                        {isAnnual && (
                          <span className="text-green-500 dark:text-green-400 text-sm mr-2">
                            %۲۰ تخفیف
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          {feature.included ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-gray-400" />
                          )}
                          <span className={`${feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400'}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                  
                  <CardFooter>
                    <Button 
                      variant={plan.popular ? "primary" : "outline"} 
                      className="w-full"
                      icon={Rocket}
                    >
                      انتخاب پلن
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
  
        {/* Additional Services */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                خدمات <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">اضافی</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                خدمات تخصصی که می‌توانند به پروژه شما اضافه شوند
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} hover className="text-center">
                  <CardBody>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6">
                      <div className="text-cyan-600 dark:text-cyan-400">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                      {service.price}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
  
        {/* FAQ */}
        <section className="py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                سوالات <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">متداول</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                پاسخ به سوالات پرتکرار درباره خدمات و قیمت‌گذاری
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index} hover>
                  <CardBody>
                    <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
            
            {/* Still have questions */}
            <div className="text-center mt-16">
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-cyan-200 dark:border-cyan-800">
                <CardBody>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    هنوز سوالی دارید؟
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    کارشناسان ما آماده پاسخگویی به سوالات شما هستند.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button>
                      تماس با پشتیبانی
                    </Button>
                    <Button variant="outline">
                      مشاهده تمام سوالات
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                پلن مناسب خود را انتخاب کنید
              </h2>
              
              <p className="text-xl mb-10 opacity-90">
                همین امروز شروع کنید و وبسایت حرفه‌ای خود را داشته باشید.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  دریافت مشاوره رایگان
                </Button>
                
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  مشاهده نمونه‌کارها
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }