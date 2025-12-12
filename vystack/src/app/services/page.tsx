import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Search, 
  Shield, 
  Zap,
  BarChart,
  Users,
  CheckCircle,
  Clock,
  Award,
  Sparkles
} from "lucide-react";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "طراحی وب‌سایت شرکتی",
    description: "طراحی سایت‌های شرکتی حرفه‌ای با قابلیت‌های مدیریت محتوا و سئوی پیشرفته",
    features: [
      "طراحی ریسپانسیو",
      "سیستم مدیریت محتوا",
      "بهینه‌سازی سئو",
      "پنل مدیریت فارسی",
      "سرعت لود بالا",
      "امنیت پیشرفته"
    ],
    price: "از ۵,۰۰۰,۰۰۰ تومان",
    time: "۱۰-۱۵ روز کاری",
    popular: true,
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "فروشگاه اینترنتی",
    description: "ساخت فروشگاه‌های آنلاین با درگاه پرداخت، سیستم فروش و مدیریت پیشرفته",
    features: [
      "درگاه پرداخت متعدد",
      "سیستم فروش چندمرحله‌ای",
      "پنل مدیریت محصول",
      "گزارش‌گیری حرفه‌ای",
      "سیستم تخفیف",
      "پشتیبانی ۲۴/۷"
    ],
    price: "از ۱۰,۰۰۰,۰۰۰ تومان",
    time: "۲۰-۳۰ روز کاری",
    popular: false,
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "اپلیکیشن موبایل",
    description: "توسعه اپلیکیشن‌های iOS و Android با قابلیت‌های پیشرفته و UI/UX مدرن",
    features: [
      "توسعه Native/Hybrid",
      "UI/UX اختصاصی",
      "Push Notification",
      "آفلاین مود",
      "تست روی دستگاه‌ها",
      "ارسال به استورها"
    ],
    price: "از ۲۰,۰۰۰,۰۰۰ تومان",
    time: "۴۵-۶۰ روز کاری",
    popular: false,
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "سئو و بهینه‌سازی",
    description: "بهبود رتبه سایت در گوگل و افزایش ترافیک ارگانیک با استراتژی‌های روز",
    features: [
      "تحلیل کلمات کلیدی",
      "بهینه‌سازی On-Page",
      "لینک‌سازی خارجی",
      "آنالیز رقبا",
      "گزارش‌گیری ماهانه",
      "پشتیبانی مداوم"
    ],
    price: "ماهانه از ۲,۰۰۰,۰۰۰ تومان",
    time: "مشاوره رایگان",
    popular: true,
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "دیجیتال مارکتینگ",
    description: "کمپین‌های تبلیغاتی هدفمند در شبکه‌های اجتماعی و موتورهای جستجو",
    features: [
      "تبلیغات گوگل ادز",
      "تبلیغات اینستاگرام",
      "ایمیل مارکتینگ",
      "تحلیل بازار",
      "مدیریت کمپین",
      "گزارش ROI"
    ],
    price: "مشاوره رایگان",
    time: "مشاوره رایگان",
    popular: false,
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "پشتیبانی و نگهداری",
    description: "پشتیبانی دائمی سایت‌ها و اپلیکیشن‌ها با بروزرسانی‌های امنیتی و عملکردی",
    features: [
      "بروزرسانی امنیتی",
      "بکاپ روزانه",
      "مانیتورینگ ۲۴/۷",
      "پشتیبانی فنی",
      "بهینه‌سازی سرعت",
      "گزارش ماهانه"
    ],
    price: "ماهانه از ۱,۰۰۰,۰۰۰ تومان",
    time: "دائمی",
    popular: false,
    color: "from-gray-700 to-gray-900"
  }
];

const benefits = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "تضمین کیفیت",
    description: "تضمین رضایت کامل شما از کیفیت کار"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "تحویل به موقع",
    description: "تعهد به تحویل پروژه در زمان مقرر"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "پشتیبانی ۲۴/۷",
    description: "پشتیبانی دائمی حتی پس از تحویل"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "به‌روزرسانی رایگان",
    description: "به‌روزرسانی‌های امنیتی رایگان"
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-cyan-900/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" icon={Sparkles}>
              خدمات تخصصی
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mt-8 mb-6">
              <span className="text-gray-900 dark:text-white">خدمات</span>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> حرفه‌ای</span>
              <span className="text-gray-900 dark:text-white"> ما</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              با آخرین تکنولوژی‌های روز دنیا، کسب و کار شما را متحول می‌کنیم. از ایده تا اجرا، همراه شما هستیم.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                دریافت مشاوره رایگان
              </Button>
              <Button variant="outline" size="lg">
                مشاهده نمونه‌کارها
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} hover gradient className="relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge variant="warning">
                      پرطرفدار
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 text-white`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardBody>
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">قابلیت‌ها:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">هزینه</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {service.price}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">زمان</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {service.time}
                      </div>
                    </div>
                  </div>
                </CardBody>
                
                <CardFooter>
                  <Button variant="primary" className="w-full">
                    اطلاعات بیشتر
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              چرا <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">VyStack</span>؟
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              مزایای همکاری با تیم حرفه‌ای ما
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6">
                  <div className="text-cyan-600 dark:text-cyan-400">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              آماده شروع پروژه خود هستید؟
            </h2>
            
            <p className="text-xl mb-10 opacity-90">
              همین الان با ما تماس بگیرید و یک جلسه مشاوره رایگان دریافت کنید.
              تیم ما آماده کمک به رشد کسب و کار شماست.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                تماس با ما
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