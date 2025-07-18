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
  Award,
  Truck,
  Clock,
  Users,
  Phone,
  User,
  ShoppingCart,
} from "lucide-react"

import HeroSearch from "./components/hero-search"
import ImageCarousel from "./components/image-carousel"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function CatalogPage() {
  // MOCK DATA ( замените на реальные данные / состояние)
  const cartItems = [
    { id: 1, name: "Унитаз «Комфорт»", quantity: 1, price: 8500, image: "/simple-white-toilet.png" },
    { id: 4, name: "Смеситель «Грань»", quantity: 2, price: 4200, image: "/chrome-bathroom-faucet.png" },
    { id: 7, name: "Зеркало «Аура»", quantity: 1, price: 6800, image: "/ornate-gold-mirror.png" },
  ]
  const cartTotal = cartItems.reduce((t, i) => t + i.price * i.quantity, 0)

  const navLinks = [
    { name: "О компании", href: "/about" },
    { name: "Бренды", href: "/brands" },
    { name: "Доставка", href: "/delivery" },
    { name: "Гарантия", href: "/warranty" },
    { name: "Оплата", href: "/payment" },
    { name: "Сертификаты", href: "/certificates" },
    { name: "Контакты", href: "/contacts" },
  ]

  const advantages = [
    { id: 1, title: "Гарантия качества", description: "Только проверенные бренды", icon: Award },
    { id: 2, title: "Быстрая доставка", description: "По всей России", icon: Truck },
    { id: 3, title: "Опыт работы", description: "Более 15 лет на рынке", icon: Clock },
    { id: 4, title: "Профессионалы", description: "Команда экспертов", icon: Users },
  ]

  const categories = [
    { id: 1, name: "Унитазы\nБиде", icon: Home, productCount: 156, image: "/categories/toilets-bidets.png" },
    { id: 2, name: "Ванные\nРаковины", icon: Droplets, productCount: 89, image: "/categories/sinks.png" },
    { id: 3, name: "Ванны\nДуши", icon: Bath, productCount: 124, image: "/categories/baths-showers.png" },
    { id: 4, name: "Краны\nСмесители", icon: Wrench, productCount: 203, image: "/categories/faucets-mixers.png" },
    { id: 5, name: "Душевые\nСистемы", icon: Waves, productCount: 67, image: "/categories/shower-systems.png" },
    { id: 6, name: "Ванные\nАксессуары", icon: Sparkles, productCount: 145, image: "/categories/accessories.png" },
    { id: 7, name: "Ванные\nТумбы", icon: Package, productCount: 78, image: "/categories/vanities.png" },
    { id: 8, name: "Ванные\nЗеркала", icon: Circle, productCount: 92, image: "/categories/mirrors.png" },
    { id: 9, name: "Ванное\nОсвещение", icon: Lightbulb, productCount: 134, image: "/categories/lighting.png" },
    { id: 10, name: "Полотенце\nСушители", icon: Zap, productCount: 156, image: "/categories/towel-warmers.png" },
    { id: 11, name: "Мыльные\nДозаторы", icon: Spray, productCount: 87, image: "/categories/dispensers.png" },
    { id: 12, name: "Унитазные\nСиденья", icon: Disc, productCount: 65, image: "/categories/toilet-seats.png" },
    { id: 13, name: "Сливные\nСистемы", icon: Filter, productCount: 123, image: "/categories/drains.png" },
    { id: 14, name: "Ванная\nПлитка", icon: Grid3x3, productCount: 289, image: "/categories/tiles.png" },
    { id: 15, name: "Водные\nНагреватели", icon: Flame, productCount: 45, image: "/categories/water-heaters.png" },
    { id: 16, name: "Ванные\nВентиляторы", icon: Fan, productCount: 67, image: "/categories/fans.png" },
    { id: 17, name: "Безопасные\nПоручни", icon: Shield, productCount: 89, image: "/categories/grab-bars.png" },
    { id: 18, name: "Душевые\nДвери", icon: DoorOpen, productCount: 112, image: "/categories/shower-doors.png" },
    { id: 19, name: "Ванные\nШкафы", icon: Archive, productCount: 156, image: "/categories/cabinets.png" },
    { id: 20, name: "Инструменты\nСантехника", icon: Settings, productCount: 234, image: "/categories/tools.png" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* ────── Top Navigation ────── */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Логотип" width={40} height={40} />
            <span className="text-xl font-bold text-gray-800">Большой мастер</span>
          </Link>

          {/* Center links */}
          <nav className="hidden md:flex gap-4 lg:gap-6">
            {navLinks.map((l) => (
              <Link key={l.name} href={l.href} className="text-sm font-medium text-gray-600 hover:text-primary">
                {l.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+78005553535"
              className="flex items-center gap-2 font-semibold text-gray-700 hover:text-primary"
            >
              <Phone className="h-4 w-4" />8 (800) 555-35-35
            </a>

            <div className="h-6 w-px bg-gray-200" />

            {/* Profile */}
            <Link href="/profile" className="text-gray-600 hover:text-primary">
              <User className="h-6 w-6" />
              <span className="sr-only">Профиль</span>
            </Link>

            {/* Cart with hover card */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href="/cart" className="relative flex items-center gap-2 text-gray-600 hover:text-primary">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="text-sm font-semibold">
                    {new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB" }).format(cartTotal)}
                  </span>
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </HoverCardTrigger>

              <HoverCardContent className="w-80" sideOffset={10}>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">Корзина</h4>
                    <span className="text-sm text-muted-foreground">{cartItems.length} товар(а)</span>
                  </div>

                  <Separator />

                  {cartItems.length ? (
                    <>
                      <div className="flex max-h-64 flex-col gap-4 overflow-y-auto pr-2">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={48}
                                height={48}
                                className="rounded-md object-cover"
                              />
                              <div>
                                <p className="text-sm font-medium">{item.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {item.quantity} ×{" "}
                                  {new Intl.NumberFormat("ru-RU", {
                                    style: "currency",
                                    currency: "RUB",
                                    minimumFractionDigits: 0,
                                  }).format(item.price)}
                                </p>
                              </div>
                            </div>
                            <p className="text-sm font-semibold">
                              {new Intl.NumberFormat("ru-RU", {
                                style: "currency",
                                currency: "RUB",
                                minimumFractionDigits: 0,
                              }).format(item.price * item.quantity)}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Separator />

                      <div className="flex justify-between text-base font-semibold">
                        <span>Итого:</span>
                        <span>
                          {new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB" }).format(cartTotal)}
                        </span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button asChild className="w-full">
                          <Link href="/cart">Перейти в корзину</Link>
                        </Button>
                        <Button variant="outline" className="w-full bg-transparent">
                          Быстрый заказ
                        </Button>
                      </div>
                    </>
                  ) : (
                    <p className="py-8 text-center text-muted-foreground">Ваша корзина пуста</p>
                  )}
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </header>

      {/* ────── Hero Section ────── */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white px-4 py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Каталог
            <span className="block text-primary">Сантехники</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">Найдите идеальную сантехнику для вашего дома</p>
          <HeroSearch />
        </div>
      </section>

      {/* ────── Advantages ────── */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => {
            const Icon = a.icon
            return (
              <div key={a.id} className="group flex flex-col items-center p-6 text-center transition">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-xl group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Icon
                    className="h-10 w-10 text-gray-600 transition-colors group-hover:text-primary"
                    strokeWidth={1}
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{a.title}</h3>
                <p className="text-sm text-gray-600">{a.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ────── Image Carousel Section ────── */}
      <section className="mx-auto max-w-7xl px-4">
        <ImageCarousel />
      </section>

      {/* ────── Categories Grid ────── */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Каталог</h2>
          <p className="text-gray-600">***</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Decorative gradient */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70 bg-gradient-to-br from-primary/7 via-white to-gray-300/7" />

                {/* Image */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <Image
                    src={cat.image || "/placeholder.svg"}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Floating icon */}
                  <div className="absolute top-4 right-4 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Card content */}
                <div className="relative p-3">
                  <div className="mb-1 flex min-h-[60px] items-start justify-between">
                    <h3 className="whitespace-pre-line text-lg font-bold leading-tight transition-colors duration-300 group-hover:text-primary">
                      {cat.name}
                    </h3>
                    <ArrowRight className="h-5 w-5 flex-shrink-0 translate-x-0 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {cat.productCount} товаров
                    </span>
                    <div className="origin-left h-0.5 w-8 scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ────── CTA ────── */}
      <section className="bg-gradient-to-r from-primary to-primary/80 px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Нужна помощь в выборе?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
            Наши эксперты помогут найти идеальные решения для вашего проекта
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-3 font-semibold text-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-xl">
              Связаться с экспертом
            </button>
            <button className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-primary">
              Посмотреть каталог
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
