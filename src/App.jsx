import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Contact />
  </>
);

const AboutPage = () => <About />;
const ServicesPage = () => <Services />;
const PortfolioPage = () => <Portfolio />;
const ContactPage = () => <Contact />;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
