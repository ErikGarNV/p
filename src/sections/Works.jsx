import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants"; 
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const previewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const text = `Proyectos destacados que han sido meticulosamente
    elaborados con pasión para impulsar
    resultados e impacto.`;

  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#project-row", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#works-container",
        start: "top 70%",
      },
    });
  });

  const handleMouseMove = (e) => {
    moveX.current(e.clientX);
    moveY.current(e.clientY);
  };

  const handleMouseEnter = (index) => {
    setCurrentIndex(index);
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    setCurrentIndex(null);
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleLinkClick = (e, href) => {
    if (href === "#privado") {
      e.preventDefault();
      alert("Servicio privado. Por favor, hablar con los dueños para solicitar acceso.");
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-[#050505] text-white py-20 relative overflow-hidden">
      <AnimatedHeaderSection
        subTitle={"Ingeniería y Diseño"}
        title={"Proyectos"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div id="works-container" className="container mx-auto px-6 md:px-12 mt-20 flex flex-col">
        {/* Línea superior */}
        <div className="w-full h-px bg-white/20 mb-8" />

        {projects.map((project, index) => (
          <a
            id="project-row"
            key={project.id}
            href={project.href}
            target={project.href !== "#privado" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            onClick={(e) => handleLinkClick(e, project.href)}
            className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-16 border-b border-white/10 cursor-pointer hover:bg-white/[0.02] transition-colors duration-500 gap-6 md:gap-0"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Título y Número */}
            <div className="flex items-start gap-4 lg:gap-6 md:w-[40%] shrink-0 pr-4">
              <span className="font-mono text-xs text-[#00f2ff] mt-2 shrink-0">
                0{index + 1}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.9] transition-colors duration-500 group-hover:text-[#00f2ff] break-words">
                {project.name}
              </h2>
            </div>

            {/* Descripción */}
            <div className="md:w-[35%] shrink-0 px-0 md:px-8">
              <p className="text-white/60 text-sm md:text-base font-light leading-relaxed text-balance">
                {project.description}
              </p>
            </div>

            {/* Frameworks / Tecnologías */}
            <div className="md:w-[20%] flex flex-wrap gap-2 shrink-0">
              {project.frameworks.map((framework) => (
                <span
                  key={framework.id}
                  className="px-3 py-1 text-xs font-mono uppercase border border-white/20 rounded-full text-white/80"
                >
                  {framework.name}
                </span>
              ))}
            </div>

            {/* Icono de enlace */}
            <div className="hidden md:flex justify-end md:w-[5%] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.href === "#privado" ? (
                <Icon icon="mdi:lock-outline" className="text-3xl text-white/50" />
              ) : (
                <Icon icon="mdi:arrow-top-right" className="text-4xl text-[#00f2ff]" />
              )}
            </div>

            {/* Versión Mobile: Imagen inferior */}
            <div className="w-full mt-4 md:hidden h-[250px] overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover grayscale brightness-75"
              />
            </div>
          </a>
        ))}
      </div>

      {/* Imagen flotante interactiva para Desktop */}
      <div
        ref={previewRef}
        className="fixed top-0 left-0 z-50 pointer-events-none hidden md:block w-[400px] h-[300px] overflow-hidden rounded-lg shadow-2xl opacity-0 transform -translate-x-1/2 -translate-y-1/2"
      >
        {currentIndex !== null && (
          <img
            src={projects[currentIndex].image}
            alt="preview"
            className="w-full h-full object-cover object-center scale-110"
          />
        )}
      </div>
    </section>
  );
};

export default Works;