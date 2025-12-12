import { Users, Award, Clock, CheckCircle, TrendingUp, Globe } from "lucide-react";

const stats = [
  {
    icon: <CheckCircle className="w-8 h-8" />,
    value: "۵۰+",
    label: "پروژه موفق",
    description: "پروژه‌های تحویل داده شده",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "۱۰۰٪",
    label: "رضایت مشتری",
    description: "رضایت کامل مشتریان",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: "۲۴/۷",
    label: "پشتیبانی",
    description: "پشتیبانی دائمی",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "۳۰٪",
    label: "رشد",
    description: "افزایش فروش مشتریان",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "۵+",
    label: "سال تجربه",
    description: "تجربه تخصصی",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    value: "۱۵+",
    label: "کشور",
    description: "مشتریان بین‌المللی",
    color: "from-indigo-500 to-purple-500"
  }
];

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px'
        }}></div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4 backdrop-blur-sm">
            آمار و ارقام
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ما در <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">اعداد</span> صحبت می‌کنیم
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            عملکرد و دستاوردهای تیم VyStack در طول سال‌های فعالیت
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-sm">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-white/5 group-hover:to-white/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} p-4 mb-6 mx-auto`}>
                  {stat.icon}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-30 blur"></div>
                </div>
                
                {/* Stats */}
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xl font-semibold mb-2 text-white">
                    {stat.label}
                  </div>
                  <div className="text-gray-400">
                    {stat.description}
                  </div>
                </div>
                
                {/* Animated Line */}
                <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-cyan-500 group-hover:via-blue-500 group-hover:to-purple-500 rounded-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 pt-16 border-t border-white/10">
          <h3 className="text-2xl font-bold mb-6">
            آماده همکاری با ما هستید؟
          </h3>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 font-semibold"
          >
            شروع پروژه
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}