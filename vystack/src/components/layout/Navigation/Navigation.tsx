"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";

const navigation = [
  { name: "خانه", href: "/" },
  { name: "خدمات", href: "/services" },
  { name: "نمونه کارها", href: "/portfolio" },
  { name: "درباره ما", href: "/about" },
  { name: "تماس", href: "/contact" },
  { name: "قیمت‌ها", href: "/pricing" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-soft-purple-600 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative text-3xl font-bold bg-gradient-to-r from-soft-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  VyStack
                </div>
              </div>
              <span className="text-xs font-semibold bg-gradient-to-r from-soft-purple-600 to-cyan-500 text-white px-2 py-1 rounded-full">
                Pro
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "text-soft-purple-600 dark:text-soft-purple-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-soft-purple-600 dark:hover:text-soft-purple-400"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-soft-purple-600 to-cyan-500 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="تغییر تم"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )
              ) : (
                <div className="w-5 h-5"></div>
              )}
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-soft-purple-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-soft-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              درخواست مشاوره
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="منو"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 mt-2 pt-4 pb-6">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-soft-purple-50 to-cyan-50 dark:from-soft-purple-900/30 dark:to-cyan-900/30 text-soft-purple-600 dark:text-soft-purple-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-3 rounded-full bg-gradient-to-r from-soft-purple-600 to-cyan-500 text-white font-semibold text-center"
              >
                درخواست مشاوره
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}