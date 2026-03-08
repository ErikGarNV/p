import React, { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef(null);
  const menuContentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuContentRef.current, {
        clipPath: "circle(150% at 90% 10%)",
        duration: 1.2,
        ease: "expo.inOut",
      });
      gsap.from(".nav-item", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power4.out",
        delay: 0.4,
      });
    } else {
      gsap.to(menuContentRef.current, {
        clipPath: "circle(0% at 90% 10%)",
        duration: 1,
        ease: "expo.inOut",
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Barra Superior Flotante */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 md:px-12 flex justify-end items-center pointer-events-none">
        <div className="flex items-center gap-8 pointer-events-auto">
          <button
            onClick={toggleMenu}
            className="flex items-center gap-4 group"
          >
            <span className="text-[10px] font-mono text-white/50 tracking-[0.3em] uppercase group-hover:text-[#00f2ff] transition-colors">
              {isOpen ? "Cerrar" : "Menú"}
            </span>
            <div className="relative w-10 h-[2px] bg-white group-hover:bg-[#00f2ff] transition-all">
              <div className={`absolute w-full h-full bg-inherit transition-transform duration-300 ${isOpen ? "rotate-45" : "-translate-y-2"}`} />
              <div className={`absolute w-full h-full bg-inherit transition-transform duration-300 ${isOpen ? "-rotate-45" : "translate-y-2"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Overlay del Menú Pantalla Completa */}
      <div
        ref={menuContentRef}
        className="fixed inset-0 z-[90] bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-center px-10 md:px-24"
        style={{ clipPath: "circle(0% at 90% 10%)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            {/* Logo D.A solo visible en el menú */}
            <a href="/" className="text-white font-black text-4xl md:text-6xl tracking-tighter uppercase mb-12">
              D<span className="text-[#00f2ff]">.</span>A
            </a>
            <p className="font-mono text-[#00f2ff] text-xs tracking-[0.5em] uppercase mb-8">Navegación</p>
            {["home", "about", "services", "projects", "contact"].map((item, i) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                onClick={toggleMenu}
                className="nav-item text-[12vw] md:text-[6vw] font-black uppercase leading-[0.9] text-white hover:text-[#00f2ff] transition-colors cursor-pointer inline-block"
              >
                <span className="text-sm font-mono mr-4 text-white/20">0{i + 1}</span>
                {item === "home" ? "Inicio" : item}
              </Link>
            ))}
          </div>

          <div className="flex flex-col justify-end mt-20 lg:mt-0 lg:pl-20 border-l border-white/10">
            <div className="mb-12 nav-item">
              <p className="font-mono text-white/30 text-xs uppercase tracking-widest mb-4">Contacto</p>
              <a href="mailto:duvaladrian@gmail.com" className="text-xl md:text-2xl text-white hover:text-[#00f2ff]">
                duvaladrian@gmail.com
              </a>
            </div>

            <div className="nav-item">
              <p className="font-mono text-white/30 text-xs uppercase tracking-widest mb-4">Social</p>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                <a href="https://www.instagram.com/duval_dubai/" className="hover:text-[#00f2ff] transition-colors uppercase text-sm tracking-widest">Instagram</a>
                <a href="https://github.com/DuvalAdrian" className="hover:text-[#00f2ff] transition-colors uppercase text-sm tracking-widest">Github</a>
                <a href="https://www.linkedin.com/in/duval-rojas-05a5b0372/" className="hover:text-[#00f2ff] transition-colors uppercase text-sm tracking-widest">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;