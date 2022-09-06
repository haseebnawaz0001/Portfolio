import './App.css';
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Experience from './components/experience/Experience'
import Testimonial from './components/testimonial/Testimonial'
import Nav from './components/navbar/Nav'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    {/* <Testimonial /> */}
    <Contact />
    <Footer />
    </>
  );
}

export default App;
