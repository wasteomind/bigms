"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Bath,
  Droplets,
  Wrench,
  Sparkles,
  Home,
  Waves,
  Package,
  Circle,
  Lightbulb,
  Zap,
  SprayCanIcon as Spray,
  Disc,
  Filter,
  Grid3x3,
  Flame,
  Fan,
  Shield,
  DoorOpen,
  Archive,
  Settings,
} from "lucide-react"

export default function Component() {
  const categories = [
    {
      id: 1,
      name: "Унитазы\nБиде",
      description: "Modern and efficient toilet solutions",
      icon: Home,
      productCount: 156,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      name: "Ванные\nРаковины",
      description: "Elegant washbasins and vanity units",
      icon: Droplets,
      productCount: 89,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      name: "Ванны\nДуши",
      description: "Luxurious bathing experiences",
      icon: Bath,
      productCount: 124,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      name: "Краны\nСмесители",
      description: "Premium water control solutions",
      icon: Wrench,
      productCount: 203,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      name: "Душевые\nСистемы",
      description: "Complete shower solutions",
      icon: Waves,
      productCount: 67,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      name: "Ванные\nАксессуары",
      description: "Essential bathroom accessories",
      icon: Sparkles,
      productCount: 145,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 7,
      name: "Ванные\nТумбы",
      description: "Storage and style combined",
      icon: Package,
      productCount: 78,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 8,
      name: "Ванные\nЗеркала",
      description: "Reflective elegance for bathrooms",
      icon: Circle,
      productCount: 92,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 9,
      name: "Ванное\nОсвещение",
      description: "Illuminate your bathroom space",
      icon: Lightbulb,
      productCount: 134,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 10,
      name: "Полотенце\nСушители",
      description: "Heated towel solutions",
      icon: Zap,
      productCount: 156,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 11,
      name: "Мыльные\nДозаторы",
      description: "Hygienic hand care solutions",
      icon: Spray,
      productCount: 87,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 12,
      name: "Унитазные\nСиденья",
      description: "Comfort and hygiene combined",
      icon: Disc,
      productCount: 65,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 13,
      name: "Сливные\nСистемы",
      description: "Efficient water drainage",
      icon: Filter,
      productCount: 123,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 14,
      name: "Ванная\nПлитка",
      description: "Beautiful wall and floor tiles",
      icon: Grid3x3,
      productCount: 289,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 15,
      name: "Водные\nНагреватели",
      description: "Instant hot water solutions",
      icon: Flame,
      productCount: 45,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 16,
      name: "Ванные\nВентиляторы",
      description: "Ventilation and air circulation",
      icon: Fan,
      productCount: 67,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 17,
      name: "Безопасные\nПоручни",
      description: "Safety and accessibility",
      icon: Shield,
      productCount: 89,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 18,
      name: "Душевые\nДвери",
      description: "Glass enclosure solutions",
      icon: DoorOpen,
      productCount: 112,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 19,
      name: "Ванные\nШкафы",
      description: "Storage and organization",
      icon: Archive,
      productCount: 156,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 20,
      name: "Сантехнические\nИнструменты",
      description: "Professional installation tools",
      icon: Settings,
      productCount: 234,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Каталог
            <span className="block text-primary">Сантехники</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">Найдите идеальную сантехнику для вашего дома</p>
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-gray-700 font-medium">Гарантия качества</span>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Каталог</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">***</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/7 via-white to-gray-300/7 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-3 flex flex-col justify-between">
                  <div className="flex items-start justify-between mb-1 min-h-[60px]">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 whitespace-pre-line leading-tight">
                      {category.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                      {category.productCount} товаров
                    </span>

                    {/* Animated Border */}
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/14 via-gray-400/14 to-gray-300/14 opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Нужна помощь в выборе?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Наши эксперты помогут найти идеальные решения для вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Связаться с экспертом
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
              Посмотреть каталог
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
