export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center gradient-bg-light relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-soft-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-soft-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-bg text-white text-sm mb-8 shadow-purple-glow">
            <span></span>
            <span>تیم تخصصی طراحی وب</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block gradient-text">
              طراحی سایت‌هایی که
            </span>
            <span className="block text-gray-900 mt-4">
              تجارت شما را متحول می‌کند
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            با استفاده از جدیدترین تکنولوژی‌های وب، سایت‌های سریع، امن و حرفه‌ای می‌سازیم که در گوگل رتبه می‌گیرند و کاربران را جذب می‌کنند.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-4 text-lg group">
              <span>مشاهده نمونه‌کارها</span>
              <span className="group-hover:translate-x-1 transition-transform"></span>
            </button>
            <button className="btn-secondary px-8 py-4 text-lg">
              دریافت مشاوره رایگان
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="gradient-text">خدمات تخصصی</span> ما
            </h2>
            <p className="section-subtitle">
              با آخرین تکنولوژی‌های روز دنیا، کسب و کار شما را به سطح جدیدی می‌بریم
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '',
                title: 'طراحی وب‌سایت',
                description: 'طراحی سایت‌های ریسپانسیو و مدرن با UX/UI حرفه‌ای',
                features: ['ریسپانسیو', 'UI/UX مدرن', 'SEO Friendly', 'Performance بالا']
              },
              {
                icon: '',
                title: 'توسعه Frontend',
                description: 'توسعه رابط کاربری با React, Next.js, TypeScript',
                features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'انیمیشن‌های پیشرفته']
              },
              {
                icon: '',
                title: 'توسعه Backend',
                description: 'توسعه سرور و API با Django, Node.js, Express',
                features: ['Django REST', 'Node.js', 'PostgreSQL', 'Authentication']
              },
              {
                icon: '',
                title: 'فروشگاه اینترنتی',
                description: 'ساخت فروشگاه‌های آنلاین با قابلیت‌های کامل',
                features: ['درگاه پرداخت', 'مدیریت محصول', 'پنل مدیریت', 'گزارش‌گیری']
              },
              {
                icon: '',
                title: 'سئو و بهینه‌سازی',
                description: 'بهبود رتبه سایت در گوگل و افزایش ترافیک',
                features: ['تحلیل کلمات کلیدی', 'بهینه‌سازی محتوا', 'لینک‌سازی', 'آنالیز رقبا']
              },
              {
                icon: '',
                title: 'پشتیبانی و نگهداری',
                description: 'پشتیبانی / و بروزرسانی مداوم',
                features: ['بروزرسانی امنیتی', 'بکاپ‌گیری', 'مانیتورینگ', 'پشتیبانی فنی']
              }
            ].map((service, index) => (
              <div key={index} className="card-hover group">
                <div className="w-16 h-16 rounded-2xl gradient-bg p-3 mb-6 text-white shadow-purple-glow">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-soft-purple-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full gradient-bg mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 text-soft-purple-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  <span>اطلاعات بیشتر</span>
                  <span className="group-hover:translate-x-1 transition-transform"></span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white relative overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="container text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              آماده شروع پروژه خود هستید؟
            </h2>
            
            <p className="text-xl mb-10 opacity-90">
              همین الان با ما تماس بگیرید و یک جلسه مشاوره رایگان دریافت کنید.
              تیم ما آماده کمک به رشد کسب و کار شماست.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-soft-purple-600 font-semibold rounded-xl hover:bg-gray-100 hover:text-soft-purple-700 text-lg shadow-2xl transform hover:-translate-y-1 transition-transform">
                <span className="flex items-center gap-2">
                  <span></span>
                  <span>تماس با ما</span>
                </span>
              </button>
              
              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/10 text-lg backdrop-blur-sm transition-all">
                مشاهده نمونه‌کارها
              </button>
            </div>
            
            {/* Features */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'مشاوره رایگان', desc: 'جلسه مشاوره رایگان  دقیقه‌ای' },
                { title: 'پشتیبانی /', desc: 'پشتیبانی دائمی حتی پس از تحویل' },
                { title: 'تضمین کیفیت', desc: 'تضمین رضایت کامل شما' },
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="opacity-90">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
