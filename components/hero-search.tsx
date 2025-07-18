"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

// Mock data for products
const allProducts = [
  {
    id: 1,
    name: "Унитаз-компакт 'Комфорт'",
    description: "Классический дизайн, двойной смыв",
    image: "/simple-white-toilet.png",
  },
  {
    id: 2,
    name: "Раковина 'Элеганс'",
    description: "Подвесная, керамическая, 60 см",
    image: "/kitchen-sink-cluttered.png",
  },
  {
    id: 3,
    name: "Ванна акриловая 'Оазис'",
    description: "Прямоугольная, 170x75 см",
    image: "/clawfoot-bathtub.png",
  },
  {
    id: 4,
    name: "Смеситель для ванны 'Грань'",
    description: "Хром, однорычажный, с душем",
    image: "/chrome-bathroom-faucet.png",
  },
  {
    id: 5,
    name: "Душевая система 'Тропики'",
    description: "С термостатом и верхним душем",
    image: "/modern-bathroom-shower.png",
  },
  {
    id: 6,
    name: "Тумба под раковину 'Лофт'",
    description: "Подвесная, с двумя ящиками",
    image: "/ornate-vanity-mirror.png",
  },
  {
    id: 7,
    name: "Зеркало с подсветкой 'Аура'",
    description: "LED-подсветка, сенсорное управление",
    image: "/ornate-gold-mirror.png",
  },
  {
    id: 8,
    name: "Полотенцесушитель 'Зебра'",
    description: "Водяной, нержавеющая сталь",
    image: "/placeholder-xjz44.png",
  },
  {
    id: 9,
    name: "Инсталляция для унитаза 'Стена'",
    description: "Скрытый монтаж, надежная рама",
    image: "/installation-system.png",
  },
  {
    id: 10,
    name: "Смеситель для кухни 'Шеф'",
    description: "Выдвижной излив, два режима",
    image: "/modern-kitchen-faucet.png",
  },
  {
    id: 11,
    name: "Биде подвесное 'Рио'",
    description: "Компактное и гигиеничное решение",
    image: "/modern-bathroom-bidet.png",
  },
  {
    id: 12,
    name: "Душевой поддон 'Камень'",
    description: "Искусственный мрамор, 90x90 см",
    image: "/placeholder.svg?height=50&width=50",
  },
]

export default function HeroSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<typeof allProducts>([])
  const [isFocused, setIsFocused] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.length > 1) {
      const filteredResults = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filteredResults)
    } else {
      setResults([])
    }
  }, [query])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [searchRef])

  const showDropdown = isFocused && results.length > 0

  return (
    <>
      {isFocused && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30" onClick={() => setIsFocused(false)} />
      )}
      <div ref={searchRef} className="relative max-w-2xl mx-auto z-40">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg w-full">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Поиск по товарам..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            className="bg-transparent focus:outline-none text-gray-800 placeholder-gray-500 w-full"
          />
          <Link href={`/search?q=${query}`} passHref>
            <button className="bg-primary text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors">
              Найти
            </button>
          </Link>
        </div>

        {showDropdown && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <ul className="max-h-[400px] overflow-y-auto divide-y divide-gray-100">
              {results.slice(0, 7).map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/product/${product.id}`}
                    className="flex items-center gap-4 p-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsFocused(false)}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={50}
                      height={50}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-grow">
                      <p className="font-semibold text-gray-800">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
              {results.length > 7 && (
                <li>
                  <Link
                    href={`/search?q=${query}`}
                    className="block text-center p-3 text-sm font-semibold text-primary hover:bg-gray-50"
                    onClick={() => setIsFocused(false)}
                  >
                    Показать все результаты ({results.length})
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}
