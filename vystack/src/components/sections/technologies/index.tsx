import { 
    Code, 
    Database, 
    Smartphone, 
    Cloud, 
    Shield, 
    Zap,
    Cpu,
    Layers
  } from "lucide-react";
  
  const technologies = {
    frontend: [
      { name: "Next.js", color: "bg-black text-white", icon: "⚡", level: "تخصصی" },
      { name: "React", color: "bg-blue-500 text-white", icon: "⚛", level: "تخصصی" },
      { name: "TypeScript", color: "bg-blue-600 text-white", icon: "TS", level: "تخصصی" },
      { name: "Tailwind CSS", color: "bg-cyan-500 text-white", icon: "TW", level: "تخصصی" },
      { name: "Redux", color: "bg-purple-600 text-white", icon: "🔄", level: "متوسط" },
      { name: "Framer Motion", color: "bg-pink-600 text-white", icon: "🎬", level: "متوسط" }
    ],
    backend: [
      { name: "Node.js", color: "bg-green-600 text-white", icon: "🟢", level: "تخصصی" },
      { name: "Django", color: "bg-emerald-700 text-white", icon: "🐍", level: "تخصصی" },
      { name: "PostgreSQL", color: "bg-blue-700 text-white", icon: "🐘", level: "تخصصی" },
      { name: "MongoDB", color: "bg-green-700 text-white", icon: "🍃", level: "متوسط" },
      { name: "Redis", color: "bg-red-600 text-white", icon: "🔴", level: "متوسط" },
      { name: "Docker", color: "bg-blue-800 text-white", icon: "🐳", level: "متوسط" }
    ],
    mobile: [
      { name: "React Native", color: "bg-blue-400 text-white", icon: "📱", level: "متوسط" },
      { name: "Flutter", color: "bg-cyan-600 text-white", icon: "🦋", level: "مقدماتی" },
      { name: "iOS", color: "bg-gray-800 text-white", icon: "🍎", level: "مقدماتی" },
      { name: "Android", color: "bg-green-500 text-white", icon: "🤖", level: "مقدماتی" }
    ],
    devops: [
      { name: "AWS", color: "bg-orange-500 text-white", icon: "☁", level: "متوسط" },
      { name: "Vercel", color: "bg-black text-white", icon: "▲", level: "تخصصی" },
      { name: "Git", color: "bg-orange-600 text-white", icon: "📦", level: "تخصصی" },
      { name: "CI/CD", color: "bg-purple-500 text-white", icon: "⚙", level: "متوسط" }
    ]
  };
  
  export function TechnologiesSection() {
    return (
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4 backdrop-blur-sm">
              تکنولوژی‌ها
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              با <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">تکنولوژی‌های روز</span> کار می‌کنیم
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              از آخرین ابزارها و فریمورک‌ها برای ساخت بهترین محصولات استفاده می‌کنیم
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Categories */}
            <div className="space-y-8">
              {[
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Frontend Development",
                  description: "توسعه رابط کاربری مدرن و تعاملی",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Backend Development",
                  description: "توسعه سرور و API‌های امن و مقیاس‌پذیر",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Mobile Development",
                  description: "توسعه اپلیکیشن‌های موبایل",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Cloud className="w-8 h-8" />,
                  title: "DevOps & Deployment",
                  description: "استقرار و مدیریت سرورها",
                  color: "from-orange-500 to-amber-500"
                }
              ].map((category, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-3 text-white`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>تخصص</span>
                      <span>۹۵٪</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 group-hover:w-full"
                        style={{ width: '95%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Right Column - Technologies Grid */}
            <div>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-8 text-center">تکنولوژی‌های مورد استفاده</h3>
                
                <div className="space-y-8">
                  {Object.entries(technologies).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="text-lg font-semibold mb-4 text-gray-300 capitalize">
                        {category === 'frontend' ? 'فرانت‌اند' : 
                         category === 'backend' ? 'بک‌اند' : 
                         category === 'mobile' ? 'موبایل' : 'دواپس'}
                      </h4>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {items.map((tech, index) => (
                          <div
                            key={index}
                            className="group relative"
                          >
                            <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                              <div className="flex items-center gap-3 mb-2">
                                <div className={`w-10 h-10 rounded-lg ${tech.color} flex items-center justify-center font-bold text-lg`}>
                                  {tech.icon}
                                </div>
                                <div>
                                  <div className="font-semibold">{tech.name}</div>
                                  <div className="text-xs text-gray-400">{tech.level}</div>
                                </div>
                              </div>
                              
                              {/* Hover Effect */}
                              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Technology Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { icon: <Zap className="w-6 h-6" />, label: "سرعت توسعه", value: "۴۰٪+" },
                  { icon: <Shield className="w-6 h-6" />, label: "امنیت", value: "۱۰۰٪" },
                  { icon: <Cpu className="w-6 h-6" />, label: "کارایی", value: "۹۵٪+" },
                  { icon: <Layers className="w-6 h-6" />, label: "مقیاس‌پذیری", value: "۹۰٪+" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                    <div className="text-blue-400 mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }