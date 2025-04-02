import type { Product, Taller, GalleryItem } from "./types"

// Mapeo de nombres de imágenes a rutas - Para logo y branding
export const imageMap: Record<string, string> = {
  // Logo y branding
  logo: "/Icons/Logo/Logo01.png",
  logoSmall: "/Icons/Logo/Corazon.png",

  // Imágenes de descripción
  nancyProfile: "/Fotos/profile.jpg",
  workSample: "/Fotos/Mate/IMG-20241121-WA0022.jpg",
  backgroundDescription: "/images/background-description.jpg",

  // Imagen de contacto
  contactLogo: "/images/contact-logo.jpg",
}

// Información de contacto
export const contactInfo = {
  celular: "5491135578288",
  instagram: "https://www.instagram.com/breathesmellrelax",
  email: "",
}

// Textos descriptivos
export const descriptionText1 =
  "Te cuento que fui muy afortunada al tener una abuela que me enseñó algunos puntos de crochet y bordado entre tantas otras cosas divertidas y que se que hoy me inspiran."
export const descriptionText2 = "Y hace 4 años que paso tiempo en mi espacio creando lo que resuena en mi."
export const descriptionText3 = "Y aquí encontras un poco de lo que sucede en mi escaparate 🧶🪡🧵🧘🏻‍♀🪬🛍🧸🎁🎀🎉"

// Textos descriptivos
export const talleresText = "Para que aprendas las técnicas mas divertidas"
export const productsText = "Para que los puedas tener todos en tu hogar"
export const galleryText = "Una bella muestra de mis trabajos"
export const contactText =
  "Un texto para llamar la atencion de los clientes, ofrecerles algunos servicios, asistencia, comentarios o difrentes propuestas"

// Datos de productos
export const products: Product[] = [
  {
    id: 1,
    label: "Almohadillas",
    productDescriptionGeneral:
      "Están confeccionadas a mano, rellenas de semillas, flores de lavanda y aceites esenciales; miden 38 cm de largo x 12 cm de ancho, pesan 550 grs, y están diseñadas con propósito terapéutico para tratar dolores, inflamación, contracturas y relajación, siendo ideales para usar en cualquier zona del cuerpo.",
    productDescriptionTag: "almohadillas terapéutico",
    images: [
      "/Products/Almohadilla terapeutica/IMG-20250330-WA0025.jpg",
      "/Products/Almohadilla terapeutica/IMG-20250330-WA0026.jpg",
      "/Products/Almohadilla terapeutica/IMG-20250330-WA0027.jpg",
      "/Products/Almohadilla terapeutica/IMG-20250330-WA0028.jpg",
    ],
    price: "$10.000",
  },
  {
    id: 2,
    label: "Almohadilla terapeutica",
    productDescriptionGeneral:
      "Cojines decorativos hechos a mano con telas de alta calidad y diseños únicos que añaden calidez y estilo a cualquier espacio.",
    productDescriptionTag: "decoración hogar",
    images: [
      "/Products/Almohadillas/IMG-20250103-WA0004.jpg",
      "/Products/Almohadillas/IMG-20250103-WA0005.jpg",
      "/Products/Almohadillas/IMG-20250103-WA0006.jpg",
      "/Products/Almohadillas/IMG-20250103-WA0007.jpg",
      "/Products/Almohadillas/IMG-20250103-WA0008.jpg",
      "/Products/Almohadillas/IMG-20250103-WA0009.jpg",
      "/Products/Almohadillas/IMG-20250103-WA0010.jpg",
      "/Products/Almohadillas/IMG-20250103-WA0011.jpg",
      "/Products/Almohadillas/IMG-20250103-WA0012.jpg",
      "/Products/Almohadillas/IMG-20250103-WA0013.jpg",
    ],
    price: "$8.500",
  },
]

// Datos de talleres
export const talleres: Taller[] = [
  {
    id: 1,
    label: "Creamos con nuestras manos",
    tallerDescriptionTag: "manual textil decoración",
    tallerDescriptionGeneral:
      "Con diversos elementos dispuestos en la mesa y una guía, realizamos nuestro propio diseño; yo te muestro y enseño mi técnica, te acompaño en el proceso; son talleres presenciales de 3 horas y, al finalizar la labor, sientes satisfacción y tu creatividad se despierta para más.",
    images: [
      "/Talleres Presenciales/TallerPresencial_IMG_01.jpg",
      "/Talleres Presenciales/TallerPresencial_IMG_02.jpg",
      "/Talleres Presenciales/TallerPresencial_IMG_03.jpg",
      "/Talleres Presenciales/TallerPresencial_IMG_04.jpg",
      "/Talleres Presenciales/TallerPresencial_IMG_06.jpg",
      "/Talleres Presenciales/TallerPresencial_IMG_07.jpg",
      "/Talleres Presenciales/TallerPresencial_IMG_08.jpg",
      "/Talleres Presenciales/TallerPresencial_IMG_09.jpg",
      "/Talleres Presenciales/TallerPresencial_IMG_10.jpg",
    ],

    videos: [
      "/Talleres Presenciales/TallerPresencial_VID_01.mp4",
      "/Talleres Presenciales/TallerPresencial_VID_02.mp4",
      "/Talleres Presenciales/TallerPresencial_VID_03.mp4",
      "/Talleres Presenciales/TallerPresencial_VID_04.mp4",
      "/Talleres Presenciales/TallerPresencial_VID_05.mp4",
      "/Talleres Presenciales/TallerPresencial_VID_06.mp4",
      "/Talleres Presenciales/TallerPresencial_VID_07.mp4",
      "/Talleres Presenciales/TallerPresencial_VID_08.mp4",
      "/Talleres Presenciales/TallerPresencial_VID_09.mp4",
      "/Talleres Presenciales/TallerPresencial_VID_10.mp4",
      "/Talleres Presenciales/TallerPresencial_VID_11.mp4",
      "/Talleres Presenciales/TallerPresencial_VID_12.mp4",
      "/Talleres Presenciales/TallerPresencial_VID_13.mp4",
      "/Talleres Presenciales/TallerPresencial_VID_14.mp4",
    ], // Video de ejemplo

    price: "$10.000 ARS",
  },
]

export const galleryItems: GalleryItem[] = [
  { id: 3, image: "/Fotos/Galeria/IMG-20241121-WA0016.jpg", category: "productos" },
  { id: 5, image: "/Fotos/Galeria/IMG-20241121-WA0019.jpg", category: "productos" },
  { id: 6, image: "/Fotos/Galeria/IMG-20241121-WA0027.jpg", category: "talleres" },
  { id: 7, image: "/Fotos/Galeria/IMG-20241121-WA0028.jpg", category: "productos" },
  { id: 8, image: "/Fotos/Galeria/IMG-20241121-WA0029.jpg", category: "talleres" },
  { id: 9, image: "/Fotos/Galeria/IMG-20241121-WA0030.jpg", category: "productos" },
  { id: 10, image: "/Fotos/Galeria/IMG-20241121-WA0033.jpg", category: "talleres" },
  { id: 11, image: "/Fotos/Galeria/IMG-20241121-WA0034.jpg", category: "productos" },
  { id: 12, image: "/Fotos/Galeria/IMG-20241121-WA0035.jpg", category: "talleres" },
  { id: 13, image: "/Fotos/Galeria/IMG-20241121-WA0036.jpg", category: "productos" },
  { id: 14, image: "/Fotos/Galeria/IMG-20241121-WA0037.jpg", category: "talleres" },
  { id: 15, image: "/Fotos/Galeria/IMG-20241121-WA0041.jpg", category: "productos" },
  { id: 16, image: "/Fotos/Galeria/IMG-20241121-WA0042.jpg", category: "talleres" },
  { id: 17, image: "/Fotos/Galeria/IMG-20241121-WA0063.jpg", category: "productos" },
  { id: 18, image: "/Fotos/Galeria/IMG-20241121-WA0064.jpg", category: "talleres" },
  { id: 19, image: "/Fotos/Galeria/IMG-20241121-WA0070.jpg", category: "productos" },
  { id: 20, image: "/Fotos/Galeria/IMG-20241121-WA0076.jpg", category: "talleres" },
  { id: 21, image: "/Fotos/Galeria/IMG-20241121-WA0077.jpg", category: "productos" },
  { id: 22, image: "/Fotos/Galeria/IMG-20241121-WA0083.jpg", category: "talleres" },
  { id: 23, image: "/Fotos/Galeria/IMG-20241121-WA0084.jpg", category: "productos" },
]

// Preguntas frecuentes
export const faqsData = {
  faq01A: "¿Cuál es el tiempo de entrega?",
  faq01B: "El tiempo de entrega es de 3 a 5 días hábiles.",
  faq02A: "¿Cuál es el costo de envío?",
  faq02B: "El costo de envío es de $200.",
  faq03A: "¿Cuál es la política de devolución?",
  faq03B: "La política de devolución es de 15 días.",
  faq04A: "¿Cuál es el método de pago?",
  faq04B: "El método de pago es efectivo o transferencia bancaria.",
}

