import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";

// متادیتاهای SEO
export const metadata: Metadata = {
  title: "VyStack | طراحی و توسعه وبسایت حرفهای",
  description: "تیم تخصصی VyStack - طراحی سایت توسعه وباپلیکیشن، سئو و دیجیتال مارکتینگ",
  keywords: ["طراحی سایت", "توسعه وب", "سئو", "دیجیتال مارکتینگ", "React", "Next.js"],
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
    title: "VyStack | طراحی و توسعه وبسایت حرفهای",
    description: "تیم تخصصی VyStack - طراحی سایت توسعه وباپلیکیشن سئو و دیجیتال مارکتینگ",
    siteName: "VyStack",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VyStack | طراحی وب حرفهای",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VyStack | طراحی و توسعه وبسایت حرفهای",
    description: "تیم تخصصی VyStack - طراحی سایت توسعه وباپلیکیشن سئو و دیجیتال مارکتینگ",
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
    <html lang="fa" dir="rtl" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "VyStack",
              "alternateName": "ویاستک",
              "url": "https://vystack.com",
              "description": "طراحی و توسعه وبسایت حرفهای",
              "publisher": {
                "@type": "Organization",
                "name": "VyStack",
              }
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground min-h-screen font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
