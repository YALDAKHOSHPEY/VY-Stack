import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="container">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex items-center">
                <div className="text-3xl font-bold gradient-text">
                  VyStack
                </div>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-gray-700 hover:text-soft-purple-600 font-medium transition-colors">
                  خانه
                </a>
                <a href="/services" className="text-gray-700 hover:text-soft-purple-600 font-medium transition-colors">
                  خدمات
                </a>
                <a href="/portfolio" className="text-gray-700 hover:text-soft-purple-600 font-medium transition-colors">
                  نمونه کارها
                </a>
                <a href="/pricing" className="text-gray-700 hover:text-soft-purple-600 font-medium transition-colors">
                  قیمت‌ها
                </a>
                <a href="/contact" className="text-gray-700 hover:text-soft-purple-600 font-medium transition-colors">
                  تماس
                </a>
              </nav>

              {/* CTA Button */}
              <button className="btn-primary px-6">
                درخواست مشاوره
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-soft-purple-900 to-gray-900 text-white">
          <div className="container section-padding">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="text-2xl font-bold text-white mb-4">VyStack</div>
                <p className="text-gray-400 mb-6">
                  تیم تخصصی طراحی و توسعه وب با جدیدترین تکنولوژی‌ها
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"></a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">لینک‌های سریع</h4>
                <ul className="space-y-3">
                  <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">خدمات ما</a></li>
                  <li><a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">نمونه کارها</a></li>
                  <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">درباره ما</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">تماس با ما</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-6">خدمات</h4>
                <ul className="space-y-3">
                  <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">طراحی سایت</span></li>
                  <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">توسعه وب</span></li>
                  <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">سئو</span></li>
                  <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">پشتیبانی</span></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold mb-6">تماس</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 text-soft-purple-400"></div>
                    <span className="text-gray-400">  </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 text-soft-purple-400"></div>
                    <span className="text-gray-400">info@vystack.com</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                  VyStack. تمامی حقوق محفوظ است.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
