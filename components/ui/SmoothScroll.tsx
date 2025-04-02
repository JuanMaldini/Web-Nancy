"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // Función para manejar clics en enlaces internos
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Verificar si el elemento clicado es un enlace con hash
      if (target.tagName === "A") {
        const link = target as HTMLAnchorElement
        const href = link.getAttribute("href")

        // Solo procesar enlaces internos que comienzan con #
        if (href && href.startsWith("#")) {
          e.preventDefault()

          // Obtener el elemento de destino
          const targetId = href.substring(1)
          const targetElement = document.getElementById(targetId)

          if (targetElement) {
            // Calcular la posición de desplazamiento (con un pequeño offset)
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80

            // Realizar el desplazamiento suave
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            })
          }
        }
      }
    }

    // Agregar el event listener
    document.addEventListener("click", handleLinkClick)

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("click", handleLinkClick)
    }
  }, [])

  return null
}

