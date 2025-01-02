export const getWhatsappContactProduct = (label: string) => {
  const Celular = "5491135578288";
  const WelcomeText = `Hola Nancy, un gusto. Estaba revisando su web y me gustaría más información sobre el producto que se llama "${label}", Gracias!.`;
  const WelcomeTextF = encodeURIComponent(WelcomeText);
  return `http://wa.me/${Celular}?text=${WelcomeTextF}`;
};

export const getWhatsappContactCourse = (label: string) => {
  const Celular = "5491135578288";
  const WelcomeText = `Hola Nancy, un gusto. Estaba revisando su web y me gustaría más información sobre el curso que se llama "${label}", Gracias!.`;
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



export const getPhoneContact = () => {
  return `tel:+5491135578288`;
}




export const descriptionText1= "Te cuento que fui muy afortunada al tener una abuela que me enseñó algunos puntos de crochet y bordado entre tantas otras cosas divertidas y que SE que hoy me inspiran.";
export const descriptionText2= "Y hace 4 años que paso tiempo en mi espacio creando lo que resuena en mi.";
export const descriptionText3= "Y aquí encontras un poco de lo que sucede en mi escaparate 🧶🪡🧵🧘🏻‍♀🪬🛍🧸🎁🎀🎉";




export const cursosText = "Para que aprendas las técnicas mas divertidas";
export const productsText = "Para que los puedas tener todos en tu hogar";
export const galleryText = "Una bella muestra de mis trabajos";
export const contactText = "Un texto para llamar la atencion de los clientes, ofrecerles algunos servicios, asistencia, comentarios o difrentes propuestas";

export const faqs: { [key: string]: string } = {
  faq01A: "¿Cuál es el tiempo de entrega?",
  faq01B: "El tiempo de entrega es de 3 a 5 días hábiles.",
  faq02A: "¿Cuál es el costo de envío?",
  faq02B: "El costo de envío es de $200.",
  faq03A: "¿Cuál es la política de devolución?",
  faq03B: "La política de devolución es de 15 días.",
  faq04A: "¿Cuál es el método de pago?",
  faq04B: "El método de pago es efectivo o transferencia bancaria.",
};
