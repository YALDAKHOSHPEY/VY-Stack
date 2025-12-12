import { 
    Users, 
    Award, 
    Target, 
    Heart, 
    Sparkles, 
    CheckCircle,
    Clock,
    Shield,
    Globe,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Instagram,
    Twitter,
    Github
  } from "lucide-react";
  import { Card, CardBody } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge";
  import Image from "next/image";
  
  const teamMembers = [
    {
      id: 1,
      name: "علی احمدی",
      role: "مدیر فنی و مؤسس",
      bio: "متخصص Frontend با ۸ سال تجربه در React و Next.js",
      skills: ["React", "Next.js", "TypeScript", "Node.js"],
      image: "/team/1.jpg"
    },
    {
      id: 2,
      name: "سارا محمدی",
      role: "طراح UI/UX",
      bio: "متخصص طراحی رابط کاربری با سابقه کار در استارتاپ‌های بزرگ",
      skills: ["Figma", "Adobe XD", "UI Design", "UX Research"],
      image: "/team/2.jpg"
    },
    {
      id: 3,
      name: "رضا کریمی",
      role: "توسعه‌دهنده Backend",
      bio: "متخصص سیستم‌های توزیع‌شده و معماری میکروسرویس",
      skills: ["Node.js", "Python", "Docker", "AWS"],
      image: "/team/3.jpg"
    },
    {
      id: 4,
      name: "فاطمه نوروزی",
      role: "متخصص سئو",
      bio: "متخصص بهینه‌سازی موتورهای جستجو با ۵ سال تجربه",
      skills: ["SEO", "Content Marketing", "Analytics", "Growth"],
      image: "/team/4.jpg"
    }
  ];
  
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "تمرکز بر کیفیت",
      description: "کیفیت اولویت اول ماست. هر پروژه را با دقت و حرفه‌گرایی اجرا می‌کنیم."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "رضایت مشتری",
      description: "رضایت شما مهم‌ترین معیار موفقیت ماست. تا رضایت کامل شما همراهتان هستیم."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "نوآوری مستمر",
      description: "همیشه در حال یادگیری و استفاده از جدیدترین تکنولوژی‌ها هستیم."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "شفافیت",
      description: "در تمام مراحل کار، شفافیت کامل داریم و شما را در جریان پیشرفت قرار می‌دهیم."
    }
  ];
  
  export default function AboutPage() {
    return (
      <>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-pink-900/20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="primary" size="lg" icon={Sparkles}>
                  درباره ما
                </Badge>
                
                <h1 className="text-5xl md:text-6xl font-bold mt-8 mb-6">
                  <span className="text-gray-900 dark:text-white">تیم</span>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> حرفه‌ای</span>
                  <span className="text-gray-900 dark:text-white"> VyStack</span>
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  از سال ۱۳۹۹ شروع به فعالیت کرده‌ایم و با تکیه بر دانش فنی و تجربه تیم، 
                  بیش از ۵۰ پروژه موفق را به اتمام رسانده‌ایم. مأموریت ما کمک به رشد کسب‌وکارهای 
                  ایرانی با استفاده از تکنولوژی‌های روز دنیاست.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg">
                    مشاهده نمونه‌کارها
                  </Button>
                  <Button variant="outline" size="lg">
                    تماس با ما
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-90"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <Users className="w-24 h-24 mx-auto mb-6 opacity-80" />
                      <h3 className="text-3xl font-bold mb-4">تیم متخصص</h3>
                      <p className="text-xl opacity-90">طراحان و توسعه‌دهندگان حرفه‌ای</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl rotate-12 opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl -rotate-12 opacity-20"></div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Stats */}
        <section className="py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Award className="w-8 h-8" />, value: "۵+", label: "سال تجربه" },
                { icon: <Users className="w-8 h-8" />, value: "۵۰+", label: "پروژه موفق" },
                { icon: <Heart className="w-8 h-8" />, value: "۱۰۰٪", label: "رضایت مشتری" },
                { icon: <Globe className="w-8 h-8" />, value: "۱۵+", label: "کشور" }
              ].map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardBody>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center mx-auto mb-4">
                      <div className="text-purple-600 dark:text-purple-400">
                        {stat.icon}
                      </div>
                    </div>
                    
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </div>
                    
                    <div className="text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
  
        {/* Values */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                ارزش‌های <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">ما</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                اصولی که در کار حرفه‌ای خود به آن‌ها پایبند هستیم
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} hover className="text-center">
                  <CardBody>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                      <div className="text-white">
                        {value.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
  
        {/* Team */}
        <section className="py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="primary" size="lg" icon={Users}>
                تیم ما
              </Badge>
              
              <h2 className="text-4xl font-bold mt-6 mb-6">
                با <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">تخصصی‌ترین</span> تیم کار کنید
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                تیمی از متخصصان باانگیزه که عاشق حل چالش‌های پیچیده هستند
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.id} hover className="text-center">
                  <CardBody>
                    {/* Avatar */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    
                    <div className="text-cyan-600 dark:text-cyan-400 font-medium mb-4">
                      {member.role}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                      {member.bio}
                    </p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" size="sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
  
        {/* Contact Info */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-950 text-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  آماده <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">همکاری</span> با ما هستید؟
                </h2>
                
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  بیایید در مورد پروژه شما صحبت کنیم. تیم ما آماده ارائه بهترین راهکار برای کسب‌وکار شماست.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">شماره تماس</div>
                      <div className="text-lg font-semibold">۰۲۱-۱۲۳۴۵۶۷۸</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">ایمیل</div>
                      <div className="text-lg font-semibold">info@vystack.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">آدرس</div>
                      <div className="text-lg font-semibold">تهران، سعادت‌آباد</div>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-4 mt-8">
                  {[
                    { icon: <Instagram className="w-6 h-6" />, href: "#", label: "اینستاگرام" },
                    { icon: <Linkedin className="w-6 h-6" />, href: "#", label: "لینکدین" },
                    { icon: <Twitter className="w-6 h-6" />, href: "#", label: "توییتر" },
                    { icon: <Github className="w-6 h-6" />, href: "#", label: "گیت‌هاب" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label={social.label}
                    >
                      <div className="text-gray-300 hover:text-white">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardBody>
                    <h3 className="text-2xl font-bold mb-6">درخواست مشاوره</h3>
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            نام و نام خانوادگی
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                            placeholder="علی محمدی"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            شماره تماس
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          ایمیل
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                          placeholder="example@domain.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          توضیحات پروژه
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                          placeholder="در مورد پروژه خود توضیح دهید..."
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        ارسال درخواست
                      </Button>
                    </form>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }