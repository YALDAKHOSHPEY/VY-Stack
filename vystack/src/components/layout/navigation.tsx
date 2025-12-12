export function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
        خانه
      </a>
      <a href="/services" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
        خدمات
      </a>
      <a href="/portfolio" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
        نمونه کارها
      </a>
      <a href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
        تماس
      </a>
    </nav>
  )
}