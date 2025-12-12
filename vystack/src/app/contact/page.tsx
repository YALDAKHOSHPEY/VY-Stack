"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  Calendar,
  Users,
  Shield
} from "lucide-react";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "تلفن تماس",
    details: ["۰۲۱-۱۲۳۴۵۶۷۸", "۰۹۱۲۳۴۵۶۷۸۹"],
    description: "شنبه تا پنجشنبه، ۹ صبح تا ۶ عصر",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "ایمیل",
    details: ["info@vystack.com", "support@vystack.com"],
    description: "پاسخگویی در کمتر از ۲۴ ساعت",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "آدرس",
    details: ["تهران، سعادت‌آباد", "برج نگار، طبقه ۸"],
    description: "امکان جلسه حضوری",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "ساعات کاری",
    details: ["شنبه تا پنجشنبه", "۹:۰۰ تا ۱۸:۰۰"],
    description: "جمعه‌ها پاسخگوی تماس تلفنی هستیم",
    color: "from-orange-500 to-amber-500"
  }
];

const faqs = [
  {
    question: "زمان تحویل پروژه چقدر است؟",
    answer: "زمان تحویل بستگی به پیچیدگی پروژه دارد. معمولاً پروژه‌های طراحی سایت ۱۰-۲۰ روز کاری و پروژه‌های اپلیکیشن ۳۰-۶۰ روز کاری زمان نیاز دارند."
  },
  {
    question: "هزینه طراحی سایت چقدر است؟",
    answer: "هزینه بر اساس نیازهای پروژه محاسبه می‌شود. بعد از جلسه مشاوره رایگان، برآورد دقیق هزینه را ارائه می‌دهیم."
  },
  {
    question: "آیا پس از تحویل پشتیبانی دارید؟",
    answer: "بله، برای تمام پروژه‌ها ۳ ماه پشتیبانی رایگان و پس از آن پشتیبانی با هزینه ماهانه ارائه می‌دهیم."
  },
  {
    question: "چگونه پروژه را شروع کنیم؟",
    answer: "کافیست از طریق فرم تماس با ما در ارتباط باشید یا با شماره تلفن تماس بگیرید. جلسه مشاوره رایگان ترتیب می‌دهیم."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        subject: "", 
        message: "" 
      });
      
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
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" icon={MessageSquare}>
              تماس با ما
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mt-8 mb-6">
              <span className="text-gray-900 dark:text-white">در</span>
              <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent"> ارتباط</span>
              <span className="text-gray-900 dark:text-white"> باشید</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              آماده پاسخگویی به سوالات شما هستیم. بیایید در مورد پروژه شما صحبت کنیم.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} hover className="text-center">
                <CardBody>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center mx-auto mb-6`}>
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {info.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-gray-700 dark:text-gray-300 font-medium">
                        {detail}
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {info.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card className="border-gray-200 dark:border-gray-700">
                <CardBody>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      پیام بفرستید
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      فرم زیر را پر کنید تا در اسرع وقت با شما تماس بگیریم.
                    </p>
                  </div>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">پیام شما ارسال شد!</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-8">
                        کارشناسان ما در سریع‌ترین زمان ممکن با شما تماس خواهند گرفت.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                      >
                        ارسال پیام جدید
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            نام و نام خانوادگی *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                            placeholder="علی محمدی"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            شماره تماس *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          ایمیل *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                          placeholder="example@domain.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          موضوع
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                          placeholder="موضوع پیام"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          پیام شما *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                          placeholder="پیام خود را اینجا بنویسید..."
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full"
                        icon={Send}
                      >
                        {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
                      </Button>
                    </form>
                  )}
                </CardBody>
              </Card>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <CardBody className="p-0">
                  <div className="h-64 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-bold">دفتر مرکزی VyStack</h3>
                      <p className="opacity-90 mt-2">تهران، سعادت‌آباد</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardBody>
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                    اقدامات سریع
                  </h3>
                  
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" icon={Calendar}>
                      رزرو جلسه مشاوره
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" icon={MessageSquare}>
                      چت آنلاین
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" icon={Users}>
                      درخواست همکاری
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" icon={Shield}>
                      گزارش مشکل
                    </Button>
                  </div>
                </CardBody>
              </Card>

              {/* FAQ Preview */}
              <Card>
                <CardBody>
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                    سوالات متداول
                  </h3>
                  
                  <div className="space-y-4">
                    {faqs.slice(0, 2).map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                        <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                          {faq.question}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                    
                    <Button variant="ghost" className="w-full justify-center mt-4">
                      مشاهده همه سوالات
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-500 text-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              منتظر چه هستید؟
            </h2>
            
            <p className="text-xl mb-10 opacity-90">
              همین امروز با ما تماس بگیرید و یک قدم به موفقیت کسب‌وکار خود نزدیک‌تر شوید.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Phone className="w-5 h-5 ml-2" />
                تماس تلفنی
              </Button>
              
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Calendar className="w-5 h-5 ml-2" />
                رزرو جلسه
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}