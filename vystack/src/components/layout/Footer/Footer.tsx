import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { siteConfig } from "@/lib/constants/site.config"
import { navigation } from "@/lib/constants/navigation"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">VyStack</h3>
            <p className="text-gray-400 mb-6">
              تیم تخصصی طراحی و توسعه وب با جدیدترین تکنولوژی‌های روز دنیا
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.social.instagram} target="_blank" className="hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" className="hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" className="hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.telegram} target="_blank" className="hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">لینک‌های سریع</h4>
            <ul className="space-y-3">
              {navigation.footer.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">تماس با ما</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-400 hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-400 hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-400">{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">خبرنامه</h4>
            <p className="text-gray-400 mb-4">
              از آخرین اخبار و تخفیف‌ها مطلع شوید
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="ایمیل شما"
                className="input-field bg-gray-800 border-gray-700"
              />
              <button type="submit" className="btn-primary py-2">
                عضویت
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
             {currentYear} {siteConfig.business.name}. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              حریم خصوصی
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              شرایط استفاده
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
              نقشه سایت
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
