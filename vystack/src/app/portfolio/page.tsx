export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-8 gradient-text">
          VyStack
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
          طراحی و توسعه وب‌سایت حرفه‌ای با جدیدترین تکنولوژی‌ها
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-soft">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">طراحی سایت</h3>
            <p className="text-gray-600 dark:text-gray-300">سایت‌های ریسپانسیو و مدرن</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-soft">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">توسعه وب‌اپ</h3>
            <p className="text-gray-600 dark:text-gray-300">اپلیکیشن‌های وب پیشرفته</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-soft">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">سئو و مارکتینگ</h3>
            <p className="text-gray-600 dark:text-gray-300">بهبود رتبه و افزایش ترافیک</p>
          </div>
        </div>
      </div>
    </div>
  );
}