'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext({
  theme: 'light' as Theme,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("🔍 ThemeProvider mounted")
    setMounted(true);
    
    // بارگذاری تم ذخیره شده
    const saved = localStorage.getItem('theme') as Theme;
    console.log("تم ذخیره شده در localStorage:", saved)
    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    console.log("🎨 تم تغییر کرد به:", theme)
    
    // اعمال کلاس به html
    const html = document.documentElement;
    console.log("کلاس html قبل:", html.className)
    html.classList.remove('light', 'dark');
    html.classList.add(theme);
    console.log("کلاس html بعد:", html.className)
    
    // ذخیره
    localStorage.setItem('theme', theme);
    console.log("در localStorage ذخیره شد:", theme)
  }, [theme, mounted]);

  const toggleTheme = () => {
    console.log(" toggleTheme فراخوانی شد")
    console.log("تم قبلی:", theme, "تم جدید:", theme === 'light' ? 'dark' : 'light')
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
