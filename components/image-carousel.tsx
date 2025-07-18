"use client"

import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"

const banners = [
  {
    id: 1,
    image: "/banners/banner-1.png",
    title: "Роскошь в каждой детали",
    subtitle: "Откройте для себя наши премиальные коллекции ванн",
    buttonText: "Смотреть коллекцию",
    href: "/category/baths",
  },
  {
    id: 2,
    image: "/banners/banner-2.png",
    title: "Стиль и функциональность",
    subtitle: "Современные смесители для вашей идеальной кухни",
    buttonText: "Выбрать смеситель",
    href: "/category/faucets",
  },
  {
    id: 3,
    image: "/banners/banner-3.png",
    title: "Комплексные решения",
    subtitle: "Все для ванной комнаты в едином стиле",
    buttonText: "Подобрать комплект",
    href: "/category/sets",
  },
]

export default function ImageCarousel() {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem key={banner.id}>
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl">
              <Image
                src={banner.image || "/placeholder.svg"}
                alt={banner.title}
                fill
                className="object-cover"
                priority={banner.id === 1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
                <h2 className="text-3xl md:text-5xl font-bold text-shadow-lg mb-4">{banner.title}</h2>
                <p className="text-lg md:text-xl max-w-2xl mb-8 text-shadow">{banner.subtitle}</p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href={banner.href}>{banner.buttonText}</Link>
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious className="left-4 bg-white/80 hover:bg-white text-primary" />
        <CarouselNext className="right-4 bg-white/80 hover:bg-white text-primary" />
      </div>
    </Carousel>
  )
}
