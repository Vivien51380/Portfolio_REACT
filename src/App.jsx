import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import FAQs from './sections/faqs/FAQs';
import Floatingnav from './sections/floatingnav/Floatingnav';
import Footer from './sections/footer/Footer';
import Header from './sections/header/Header';
import Navbar from './sections/navbar/Navbar';
import Portfolio from './sections/portfolio/Portfolio';
import Services from './sections/services/Services';
import Testimonials from './sections/testimonials/Testimonials';


const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Floatingnav />
    </main>
  )
};

export default App;