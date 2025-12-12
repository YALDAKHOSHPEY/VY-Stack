export function ServiceCard() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">خدمت {i}</h3>
            <p className="text-gray-600 dark:text-gray-300">توضیحات خدمت {i}</p>
          </div>
        ))}
      </div>
    );
  }