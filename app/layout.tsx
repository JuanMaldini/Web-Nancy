import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"

// Importar el componente SmoothScroll
import SmoothScroll from "@/components/ui/SmoothScroll"

export const metadata: Metadata = {
  title: "Nancy Web",
  description: "Breathe Smell Relax - Productos artesanales y talleres",
}

// Modificar la función RootLayout para incluir el componente SmoothScroll
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}

