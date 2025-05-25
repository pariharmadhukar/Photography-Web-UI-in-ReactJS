import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from './assets/image.png';


export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 
        ${
          isScrolled ? "bg-white shadow-md backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className={`text-3xl font-bold font-playfair transition-colors duration-300 cursor-pointer 
              ${
                isScrolled
                  ? "text-black hover:text-gray-700"
                  : "text-white hover:text-gray-300"
              }`}
        >
        <img
              src={logo}
              alt="Logo"
              className="w-20 h-9 rounded-full bold"
            />

        </Link>

        <div className="hidden md:flex space-x-10 text-lg font-medium">
          {["My Work", "Gallery", "Testimonials", "Contact"].map((item) => {
            const target = item.toLowerCase() === "my work" ? "work" : item.toLowerCase();

            return (
              <Link
                key={item}
                to={target}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="active"
                className={`cursor-pointer transition duration-300 ${
                  isScrolled
                    ? "text-black hover:text-gray-700"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
