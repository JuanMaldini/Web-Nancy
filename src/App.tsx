import './App.css'
import Navbar from './Components/Navbar'
import Description from './Components/Description';
import ProductsArea from './Components/Products/ProductsArea';
import GalleryArea from './Components/Gallery/GalleryArea';
import Contact from './Components/Contact';
import Faq from './Components/Faq';
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <Navbar />
      <Description />
      <ProductsArea />
      <GalleryArea />
      <Contact />
      <Faq />
      <Footer />
    </>
  )
}

export default App
