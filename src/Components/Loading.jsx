import { useEffect, useRef } from "react";
import gsap from "gsap";

function Loading() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Fade in the container
    tl.fromTo(
      containerRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );
    
    // Smooth animation for dots
    gsap.to(".dot", {
      y: -8,
      stagger: 0.15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 0.5,
    });
    
    // Subtle pulsing effect for text
    gsap.to(".loading-text", {
      opacity: 0.6,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "sine.inOut",
    });
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-[9999] backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-3">
          <span className="dot w-4 h-4 bg-blue-600 rounded-full shadow-md"></span>
          <span className="dot w-4 h-4 bg-blue-600 rounded-full shadow-md"></span>
          <span className="dot w-4 h-4 bg-blue-600 rounded-full shadow-md"></span>
        </div>
        <p className="loading-text text-lg font-dongle font-bold text-blue-700">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;