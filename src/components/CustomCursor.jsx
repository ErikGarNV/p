import { useEffect, useRef } from "react";
import gsap from "gsap";

export const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
    >
      <div className="w-8 h-8 rounded-full border border-white mix-blend-difference -ml-4 -mt-4" />
    </div>
  );
};