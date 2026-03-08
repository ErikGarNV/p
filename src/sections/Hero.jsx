import React, { Suspense } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen bg-[#050505] flex flex-col justify-center overflow-hidden">
      <div className="absolute top-4 left-4 md:top-10 md:left-10 z-30">
        <div className="flex items-center gap-2 md:gap-4 backdrop-blur-md bg-black/20 rounded-full px-2 py-1 md:px-4 md:py-2 border border-white/10">
          <span className="w-1 h-1 md:w-2 md:h-2 bg-[#00f2ff] rounded-full animate-pulse shadow-lg shadow-[#00f2ff]/50" />
          <p className="font-mono text-[8px] md:text-[10px] text-white/80 tracking-[0.2em] md:tracking-[0.3em] uppercase">
            Duval Adrian // Portfolio v3.0 // 2026
          </p>
        </div>
      </div>

      {/* Contenedor del 3D Spline - Fondo Estético */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Suspense fallback={
          <div className="w-full h-full bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505] animate-pulse">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.1),transparent_70%)]" />
          </div>
        }>
          <spline-viewer
            url="https://prod.spline.design/gD9Zg55xZKiwb3NJ/scene.splinecode"
            events-target="global"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(2) contrast(1.2) saturate(1.1)',
              mixBlendMode: 'normal',
              transform: 'scale(1.2)',
              transformOrigin: 'center center'
            }}
          />
        </Suspense>
        {/* Overlay sutil para mejor legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />
      </div>

      {/* Tipografía de Identidad de Marca */}
      <div className="relative z-20 pointer-events-none px-6 md:px-20">
        <h1 className="flex flex-col leading-[0.8] tracking-tighter uppercase">
          <span className="text-[15vw] font-black text-white mix-blend-difference drop-shadow-2xl">
            Duval
          </span>
          <span className="text-[15vw] font-black self-end outline-text text-transparent border-white/20 drop-shadow-2xl">
            Adrian
          </span>
        </h1>
      </div>

      {/* Descripción técnica inferior */}
      <div className="absolute bottom-12 left-6 md:left-20 z-30 max-w-xs md:max-w-md">
        <p className="text-white/80 text-sm md:text-base font-light leading-relaxed border-l border-[#00f2ff] pl-6 uppercase tracking-widest backdrop-blur-sm bg-black/10 rounded-sm p-2">
          Diseñador de Sistemas & Arquitecto Full Stack.
          Expertise en HTML, Apps de alto rendimiento y lógica Python.
        </p>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Hero;
