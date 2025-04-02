"use client"

import Navbar from "@/components/layout/Navbar"
import Description from "@/components/sections/descripcion/Description"
import TallerArea from "@/components/sections/talleres/TallerArea"
import ProductsArea from "@/components/sections/productos/ProductsArea"
import GalleryArea from "@/components/sections/galeria/GalleryArea"
import Contact from "@/components/sections/contacto/Contact"
import Faq from "@/components/sections/faq/Faq"
import Footer from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <Description />
      <TallerArea />
      <ProductsArea />
      <GalleryArea />
      <Contact />
      <Faq />
      <Footer />
    </main>
  )
}

