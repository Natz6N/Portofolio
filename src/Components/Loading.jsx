import { useEffect, useRef } from "react";
import gsap from "gsap";

function Loading() {
  const loadingRef = useRef(null);
  const dotsRef = useRef(null);
  const textRef = useRef(null);
  
  useEffect(() => {
    // Pastikan elemen sudah di-render
    if (!loadingRef.current || !dotsRef.current || !textRef.current) return;
    
    const ctx = gsap.context(() => {
      const masterTimeline = gsap.timeline();
      
      // Initial entrance animation
      masterTimeline
        .fromTo(
          loadingRef.current, 
          { opacity: 0 }, 
          { opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(
          ".dot", 
          { scale: 0, opacity: 0 }, 
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.6, 
            stagger: 0.1, 
            ease: "back.out(1.7)" 
          },
          "-=0.4"
        )
        .fromTo(
          ".loading-text", 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
      
      // Continuous animations - simpan referensi untuk cleanup
      const dotsAnimation = gsap.to(".dot", {
        y: -10,
        scale: 1.1,
        stagger: 0.15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 0.6,
      });
      
      // Rotating color effect for dots
      const dot1Animation = gsap.to(".dot:nth-child(1)", {
        backgroundColor: "#4338ca", // indigo-700
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
      
      const dot2Animation = gsap.to(".dot:nth-child(2)", {
        backgroundColor: "#2563eb", // blue-600
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
        delay: 0.3,
      });
      
      const dot3Animation = gsap.to(".dot:nth-child(3)", {
        backgroundColor: "#0891b2", // cyan-600
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
        delay: 0.6,
      });
      
      // Text animation
      const textAnimation = gsap.to(".loading-text", {
        opacity: 0.7,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "sine.inOut",
      });
      
      // Subtle rotation for the entire loader
      const containerAnimation = gsap.to(".loader-container", {
        rotation: 5,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });
      
      // Pastikan semua animasi dibersihkan saat komponen unmount
      return () => {
        dotsAnimation.kill();
        dot1Animation.kill();
        dot2Animation.kill();
        dot3Animation.kill();
        textAnimation.kill();
        containerAnimation.kill();
        masterTimeline.kill();
      };
    });
    
    return () => ctx.revert(); // Clean up all animations
  }, []);

  return (
    <div 
      ref={loadingRef} 
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-white to-blue-50 z-[9999] backdrop-blur-md"
    >
      <div className="loader-container flex flex-col items-center gap-5 p-8 rounded-2xl bg-white bg-opacity-60 shadow-lg backdrop-blur-sm transform">
        <div ref={dotsRef} className="flex gap-4">
          <span className="dot w-5 h-5 bg-blue-600 rounded-full shadow-lg"></span>
          <span className="dot w-5 h-5 bg-blue-600 rounded-full shadow-lg"></span>
          <span className="dot w-5 h-5 bg-blue-600 rounded-full shadow-lg"></span>
        </div>
        <p ref={textRef} className="loading-text text-xl font-dongle font-bold text-blue-800 tracking-wider">
          Memuat Konten...
        </p>
      </div>
    </div>
  );
}

export default Loading;