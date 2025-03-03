import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed w-full z-10 py-2 transition-all duration-200 ${scrolled ? "bg-white text-black shadow-md" : "text-white"}`}>
        <div className="container mx-auto flex items-center justify-between px-12">
          {/* Logo */}
          <div className="flex items-center">
            <img src={scrolled ? "/images/logo_white_background.jpg" : "/images/visible.png"} alt="Logo" className="h-12 mr-4" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 justify-center flex-grow">
            <Link to="/" className={`nav-link hover:text-gray-300 ${window.location.pathname === "/" ? "font-bold text-white" : ""}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link hover:text-gray-300 ${window.location.pathname === "/about" ? "font-bold text-white" : ""}`}>
              About Us
            </Link>
            <a href="/#what-we-offer" className="nav-link hover:text-gray-300">Services</a>
            <a href="/#projects" className="nav-link hover:text-gray-300">Projects</a>
          </div>

          {/* Contact Button */}
          <div className="ml-auto hidden md:block">
            <Link to="/contact" className={`inline-flex text-xs items-center px-4 py-2.5 rounded-full border contact-btn transition duration-300 ${scrolled ? "text-black border-black hover:bg-gray-200" : "text-white border-white hover:bg-gray-800"}`}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-16 right-0 w-80 h-full bg-white p-4 transition-transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="space-y-4 text-black font-medium">
          <li><Link to="/" className="block py-3 hover:text-gray-600">Home</Link></li>
          <li><Link to="/about" className="block py-3 hover:text-gray-600">About Us</Link></li>
          <li><a href="/#what-we-offer" className="block py-3 hover:text-gray-600">Services</a></li>
          <li><a href="/#projects" className="block py-3 hover:text-gray-600">Projects</a></li>
          <li><Link to="/contact" className="block py-3 hover:text-gray-600">Contact Us</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
