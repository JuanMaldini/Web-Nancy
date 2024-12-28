import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar/Navbar";
import Description from "./Components/Description/Description";
import CursosArea from "./Components/Cursos/CursosArea";
import ProductsArea from "./Components/Products/ProductsArea";
import GalleryArea from "./Components/Gallery/GalleryArea";
import Contact from "./Components/Contact/Contact";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar/>
      <Description/>
      <CursosArea/>
      <ProductsArea/>
      <GalleryArea/>
      <Contact/>
      <Faq />
      <Footer/>
    </>
  );
}

