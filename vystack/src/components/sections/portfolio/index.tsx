import { ExternalLink, Github, Eye } from "lucide-react";

const portfolioItems = [
  {
    title: "فروشگاه اینترنتی مد",
    category: "تجارت الکترونیک",
    description: "فروشگاه آنلاین پوشاک با پنل مدیریت پیشرفته",
    image: "/portfolio/fashion-store.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    liveUrl: "https://fashion-store.com",
    githubUrl: "https://github.com/vystack/fashion-store",
    featured: true
  },
  {
    title: "پلتفرم آموزش آنلاین",
    category: "آموزش",
    description: "سیستم مدیریت آموزش با ویدئو و آزمون‌های تعاملی",
    image: "/portfolio/learning-platform.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://learn-platform.com",
    githubUrl: "https://github.com/vystack/learn-platform",
    featured: true
  },
  {
    title: "سایت شرکتی تکنولوژی",
    category: "شرکتی",
    description: "وبسایت شرکتی با طراحی مدرن و بخش بلاگ",
    image: "/portfolio/tech-company.jpg",
    technologies: ["Next.js", "Sanity CMS", "Framer Motion"],
    liveUrl: "https://tech-company.com",
    githubUrl: "https://github.com/vystack/tech-company",
    featured: false
  },
  {
    title: "اپلیکیشن مدیریت پروژه",
    category: "پروژه‌ای",
    description: "ابزار مدیریت کارهای تیمی با زمان‌بندی",
    image: "/portfolio/project-management.jpg",
    technologies: ["React", "Redux", "Firebase", "Chart.js"],
    liveUrl: "https://project-app.com",
    githubUrl: "https://github.com/vystack/project-app",
    featured: false
  },
  {
    title: "پرتال پزشکی",
    category: "سلامت",
    description: "سیستم نوبت‌دهی و مدیریت پرونده پزشکی",
    image: "/portfolio/medical-portal.jpg",
    technologies: ["Django", "PostgreSQL", "Redis", "Docker"],
    liveUrl: "https://medical-portal.com",
    githubUrl: "https://github.com/vystack/medical-portal",
    featured: true
  },
  {
    title: "وبلاگ فناوری",
    category: "بلاگ",
    description: "پلتفرم انتشار محتوا با سیستم کامنت‌گذاری",
    image: "/portfolio/tech-blog.jpg",
    technologies: ["Next.js", "GraphQL", "Prisma", "AWS"],
    liveUrl: "https://tech-blog.com",
    githubUrl: "https://github.com/vystack/tech-blog",
    featured: false
  }
];

export function PortfolioShowcase() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-4">
            نمونه‌کارها
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">پروژه‌های</span>
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"> موفق</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            نمونه‌هایی از کارهای اجرا شده توسط تیم VyStack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl ${item.featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{item.title.charAt(0)}</div>
                    <div className="text-sm opacity-90">{item.category}</div>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex gap-2">
                      {item.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-black/50 text-white text-xs rounded-md backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-colors"
                        aria-label="مشاهده آنلاین"
                      >
                        <Eye className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-colors"
                        aria-label="مشاهده کد"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-1">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  {item.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-medium rounded-full">
                      ویژه
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {item.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    مشاهده آنلاین
                  </a>
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    مشاهده کد
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-medium"
          >
            مشاهده تمام نمونه‌کارها
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}