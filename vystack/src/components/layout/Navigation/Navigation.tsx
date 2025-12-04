"use client"

import Link from "next/link"
import { navigation } from "@/lib/constants/navigation"

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigation.main.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
