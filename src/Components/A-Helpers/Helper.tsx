
export const getWhatsappContactProduct = (label: string) => {
  const Celular = "5491135578288";
  const WelcomeText = `Hola Nancy, un gusto. Estaba revisando su web y me gustaría más información sobre el producto que se llama "${label}", Gracias!.`;
  const WelcomeTextF = encodeURIComponent(WelcomeText);

  return `http://wa.me/${Celular}?text=${WelcomeTextF}`;
};

export const getWhatsappContact = () => {
  const Celular = "5491135578288";
  const ContactText = `Hola Nancy, espero que se encuentre bien. Me estoy contactando desde la página web.`;
  const ContactTextF = encodeURIComponent(ContactText);

  return `http://wa.me/${Celular}?text=${ContactTextF}`;
}

export const InstagramLink = "https://www.instagram.com/breathesmellrelax";
export const EmailLink = "";
// export const EmailLink = "mailto:juan.maldini@outlook.com"