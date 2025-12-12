import "./globals.css";
import type { Metadata } from "next";

// متادیتاهای SEO
export const metadata: Metadata = {
  title: {
    default: "VyStack | طراحی و توسعه وب‌سایت حرفه‌ای",
    template: "%s | VyStack"
  },
  description: "تیم تخصصی VyStack - طراحی سایت، توسعه وب‌اپلیکیشن، سئو و دیجیتال مارکتینگ با جدیدترین تکنولوژی‌ها",
  keywords: ["طراحی سایت", "توسعه وب", "سئو", "دیجیتال مارکتینگ", "وب‌اپلیکیشن"],
  authors: [{ name: "VyStack Team" }],
  creator: "VyStack",
  publisher: "VyStack",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vystack.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://vystack.com",
    title: "VyStack | طراحی و توسعه وب‌سایت حرفه‌ای",
    description: "تیم تخصصی VyStack - طراحی سایت، توسعه وب‌اپلیکیشن، سئو و دیجیتال مارکتینگ",
    siteName: "VyStack",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VyStack | طراحی وب حرفه‌ای",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VyStack | طراحی و توسعه وب‌سایت حرفه‌ای",
    description: "تیم تخصصی VyStack - طراحی سایت، توسعه وب‌اپلیکیشن، سئو و دیجیتال مارکتینگ",
    images: ["/og-image.png"],
    creator: "@vystack",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "VyStack",
              "alternateName": "وی‌استک",
              "url": "https://vystack.com",
              "description": "طراحی و توسعه وب‌سایت حرفه‌ای",
              "publisher": {
                "@type": "Organization",
                "name": "VyStack",
              }
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900 min-h-screen font-sans">
        {/* Simple Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold gradient-text">
                VyStack
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="/" className="text-gray-700 hover:text-purple-600">خانه</a>
                <a href="/services" className="text-gray-700 hover:text-purple-600">خدمات</a>
                <a href="/portfolio" className="text-gray-700 hover:text-purple-600">نمونه کارها</a>
                <a href="/contact" className="text-gray-700 hover:text-purple-600">تماس</a>
              </nav>
              <a href="/contact" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:shadow-lg">
                مشاوره رایگان
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Simple Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-12 text-center">
            <div className="text-2xl font-bold gradient-text mb-4">VyStack</div>
            <p className="text-gray-400 mb-8">تیم تخصصی طراحی و توسعه وب</p>
            <div className="border-t border-gray-800 mt-8 pt-8 text-gray-500 text-sm">
              © {new Date().getFullYear()} VyStack. تمامی حقوق محفوظ است.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}