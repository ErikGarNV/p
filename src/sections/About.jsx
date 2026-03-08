import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Apasionado por la arquitectura limpia
    Construyo soluciones escalables y de alto rendimiento
    desde prototipo hasta producción`;
  const aboutText = `Consigo la mejor calidad al construir ecosistemas digitales de alto impacto—desde interfaces Three.js que desafían la web plana hasta backends robustos en Python. No solo escribo código; esculpo experiencias sensoriales donde el diseño pixel-perfect se encuentra con la ingeniería de datos.

Mi stack de ejecución:

Web & Mobile: React, GSAP y arquitecturas escalables.

Visual & Motion: Modelado 3D en Blender, animación y edición de video profesional.

Data Ops: Automatización con Macros Excel y gestión de bases de datos.

Cuando no estoy en producción:

⚡️ Open-source: Liberando experimentos tácticos o rompiendo límites en el código.

🧗 Escalada: Resolviendo problemas de lógica con apuestas reales en la roca.

🎸 Hardcore Focus: Tocando acordes mientras los pipelines de CI confirman que todo es estable.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Codifica con propósito, Construido para escalar"}
        title={"Sobre mí"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpg"
          alt="man"
          className="w-full lg:w-1/2 rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
