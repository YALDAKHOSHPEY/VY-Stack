import { MessageSquare, PenTool, Code2, TestTube2, Rocket, Settings } from "lucide-react";

const processSteps = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    step: "۰۱",
    title: "مشاوره و آنالیز",
    description: "بررسی نیازهای شما و تعیین استراتژی پروژه",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    step: "۰۲",
    title: "طراحی UI/UX",
    description: "طراحی رابط کاربری و تجربه کاربری حرفه‌ای",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    step: "۰۳",
    title: "توسعه و برنامه‌نویسی",
    description: "کدنویسی با آخرین تکنولوژی‌های روز",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <TestTube2 className="w-8 h-8" />,
    step: "۰۴",
    title: "تست و کنترل کیفیت",
    description: "آزمایش کامل و رفع مشکلات احتمالی",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    step: "۰۵",
    title: "راه‌اندازی و دپلوی",
    description: "استقرار پروژه روی سرورهای پرسرعت",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    step: "۰۶",
    title: "پشتیبانی و بهینه‌سازی",
    description: "پشتیبانی دائمی و بهینه‌سازی مستمر",
    color: "from-gray-700 to-gray-900"
  }
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
            فرآیند کار
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">مراحل</span>
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"> کار</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            از ایده تا اجرا، همراه شما هستیم
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full opacity-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-white dark:border-gray-800 flex items-center justify-center text-2xl font-bold text-gray-900 dark:text-white shadow-lg z-10">
                  {step.step}
                </div>
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl group-hover:scale-105">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-4 mb-6 text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <ul className="space-y-2">
                    {[
                      "تحلیل دقیق نیازها",
                      "تعیین زمان‌بندی",
                      "برآورد هزینه",
                      "تعیین تیم اجرایی"
                    ].map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 dark:group-hover:border-gray-600/30 transition-all duration-500 pointer-events-none"></div>
                </div>
                
                {/* Connecting Dots */}
                {index < processSteps.length - 1 && (
                  <>
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 z-20"></div>
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-ping"></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow Description */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 text-center lg:text-right">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                چرا این فرآیند؟
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                تضمین کیفیت و رضایت شما
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "شفافیت کامل در تمام مراحل",
                  "گزارش‌دهی مداوم از پیشرفت کار",
                  "قابلیت تغییر در هر مرحله",
                  "تضمین رضایت کامل شما"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}