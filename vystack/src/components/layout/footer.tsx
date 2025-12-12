export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} VyStack. تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
  )
}