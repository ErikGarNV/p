import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-[#050505] text-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter opacity-10 absolute -left-10 select-none">
            DUVAL
          </h2>
          <div className="relative z-10 mt-10">
            <p className="text-[#00f2ff] font-mono text-sm tracking-widest uppercase mb-4">04 — Contacto</p>
            <h3 className="text-4xl md:text-6xl font-light leading-tight">¿Tienes una visión?<br/>Yo tengo el código.</h3>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-12 justify-end">
          <div className="group cursor-pointer">
            <p className="text-xs uppercase text-white/40 mb-2">Email</p>
            <a href="mailto:duvaladrian@gmail.com" className="text-2xl md:text-4xl hover:text-[#00f2ff] transition-colors duration-500 font-light">
              duvaladrian@gmail.com
            </a>
          </div>

          <div>
            <p className="text-xs uppercase text-white/40 mb-6">Conectar</p>
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/duval_dubai/" className="social-link-new hover:pl-4 transition-all duration-300">Instagram</a>
              <a href="https://github.com/DuvalAdrian" className="social-link-new hover:pl-4 transition-all duration-300">Github</a>
              <a href="https://www.linkedin.com/in/duval-rojas-05a5b0372/" className="social-link-new hover:pl-4 transition-all duration-300">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .social-link-new {
          font-size: 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 10px;
          display: block;
        }
      `}</style>
    </section>
  );
};

export default Contact;
