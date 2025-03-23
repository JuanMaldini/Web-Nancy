export const getWhatsappContact = () => {
  const Celular = "5491135578288"
  const ContactText = `Hola Nancy, espero que se encuentre bien. Me estoy contactando desde la página web.`
  const ContactTextF = encodeURIComponent(ContactText)
  return `http://wa.me/${Celular}?text=${ContactTextF}`
}

export const InstagramLink = "https://www.instagram.com/breathesmellrelax"

export const getPhoneContact = () => {
  return `tel:+5491135578288`
}

