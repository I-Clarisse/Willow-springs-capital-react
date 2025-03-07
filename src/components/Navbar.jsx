import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
      setIsOpen(false); // Close menu on click
    }
  };

  return (
    <nav className={`fixed w-full z-20 py-3 transition-all duration-300 ${scrolled ? "bg-white text-black shadow-md" : "text-white"}`}>
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <img src={scrolled ? "/images/logo_white_background.jpg" : "/images/visible.png"} alt="Logo" className="h-12" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black dark:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 flex-grow justify-center">
          <a href="#home" onClick={(e) => smoothScroll(e, "#home")} className="hover:text-gray-300">Home</a>
          <a href="#identity" onClick={(e) => smoothScroll(e, "#identity")} className="hover:text-gray-300">Identity</a>
          <a href="#soul" onClick={(e) => smoothScroll(e, "#soul")} className="hover:text-gray-300">Soul</a>
          <a href="#gifts" onClick={(e) => smoothScroll(e, "#gifts")} className="hover:text-gray-300">Gifts</a>
          <a href="#inspiration" onClick={(e) => smoothScroll(e, "#inspiration")} className="hover:text-gray-300">Inspiration</a>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Link to="/contact" className={`inline-flex text-xs items-center px-4 py-2.5 rounded-full border transition duration-300 ${scrolled ? "text-black border-black hover:bg-gray-200" : "text-white border-white hover:bg-gray-800"}`}>Contact Us</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col space-y-4 text-black">
          <a href="#home" onClick={(e) => smoothScroll(e, "#home")} className="hover:text-gray-700">Home</a>
          <a href="#identity" onClick={(e) => smoothScroll(e, "#identity")} className="hover:text-gray-700">Identity</a>
          <a href="#soul" onClick={(e) => smoothScroll(e, "#soul")} className="hover:text-gray-700">Soul</a>
          <a href="#gifts" onClick={(e) => smoothScroll(e, "#gifts")} className="hover:text-gray-700">Gifts</a>
          <a href="#inspiration" onClick={(e) => smoothScroll(e, "#inspiration")} className="hover:text-gray-700">Inspiration</a>
          <Link to="/contact" className="block text-center text-blue-600 hover:text-blue-800">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
