import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import Loading from "../Components/Loading";
import Badge from "../Components/UI/badge";
gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const buttonRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulasi loading selesai setelah 2.5 detik untuk lebih cepat
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Handle content animations after loading is complete
  useEffect(() => {
    if (isLoading) return; // Don't run animations while loading

    // Create master timeline for coordinated entrance
    const masterTimeline = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    const ctx = gsap.context(() => {
      // First fade in the container
      masterTimeline.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.inOut" }
      );

      // Then handle text splitting and animation
      if (headingRef.current) {
        const splitText = new SplitType(headingRef.current, {
          types: "words, chars",
          tagName: "span",
        });

        // Animate the split words with better timing
        masterTimeline.from(
          splitText.words,
          {
            y: "120%",
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.06,
          },
          "-=0.4"
        ); // Overlap slightly with previous animation
      }

      // Animate the image spans
      masterTimeline.fromTo(
        ".img-span",
        {
          opacity: 0,
          scale: 0.6,
          rotation: -5,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.7,
          ease: "back.out(1.7)",
          stagger: 0.15,
        },
        "-=0.5" // Overlap with text animation
      );

      // Animate the button with a bounce effect
      masterTimeline.fromTo(
        buttonRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.1,
        },
        "-=0.2"
      );

      // Animate cards with staggered entrance
      masterTimeline.fromTo(
        ".card-img",
        {
          opacity: 0,
          y: 80,
          rotation: -2,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.3"
      );

      // Set up scroll animations for about section
      if (aboutSectionRef.current) {
        ScrollTrigger.create({
          trigger: aboutSectionRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(
              aboutSectionRef.current.children,
              {
                y: 50,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
              }
            );
          },
          once: true,
        });
      }
      
    }, containerRef);

    return () => ctx.revert();
  }, [isLoading]); // Dependency on isLoading ensures this runs after loading completes

  return (
    <div
      ref={containerRef}
      className={isLoading ? "opacity-0" : "transition-opacity duration-500"}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="container mx-auto min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-0">
              {/* Kiri: Teks dan tombol */}
              <div className="w-full md:w-[80%] px-4 md:px-10">
                <h1
                  ref={headingRef}
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-[9em] font-dongle font-black leading-21 text-black mb-8 overflow-hidden"
                >
                  Selamat datang{" "}
                  <span className="img-span inline-block align-middle mx-1">
                    <img
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60"
                      alt="cloud"
                      className="inline rounded-full w-40 sm:w-50 h-15 object-cover shadow-lg"
                    />
                  </span>{" "}
                  di
                  <br />
                  portofolio saya{" "}
                  <span className="img-span inline-block align-middle mx-1">
                    <img
                      src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=120&h=60"
                      alt="cloud2"
                      className="inline rounded-full w-30 sm:w-40 h-15 object-cover shadow-lg"
                    />
                  </span>{" "}
                  tempat
                  <br />
                  karya{" "}
                  <span className="img-span inline-block align-middle mx-1">
                    <img
                      src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=120&h=60"
                      alt="penguin"
                      className="inline rounded-full w-30 sm:w-40 h-15 object-cover shadow-lg"
                    />
                  </span>{" "}
                  kode, dan kopi
                  <br />
                  bertemu.
                </h1>
                <div ref={buttonRef} className="flex items-center gap-5 mt-8">
                  <button className="bg-blue-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md hover:bg-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Jelajahi Sekarang
                  </button>
                  <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full bg-blue-700 text-white text-xl sm:text-2xl hover:bg-blue-800 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg">
                    <span>&#8595;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative container mt-16 sm:mt-[20px] mx-auto py-8 sm:py-[10px] px-4">
            <div className="absolute gap-6 right-0 -top-[100px] sm:-top-[300px] flex items-center justify-center gap-4">
              <div className="relative top-[80px] sm:top-[120px] card-img w-[150px] sm:w-[200px] h-[250px] sm:h-[300px] min-h-[250px] sm:min-h-[300px] min-w-[150px] sm:min-w-[200px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60"
                  alt="cloud"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="card-img w-[150px] sm:w-[200px] h-[250px] sm:h-[300px] min-h-[250px] sm:min-h-[300px] min-w-[150px] sm:min-w-[200px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60"
                  alt="cloud"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              ref={aboutSectionRef}
              className="flex w-full flex-col items-center justify-center min-h-screen bg-white mt-16 sm:mt-[100px] md:mt-0"
            >
              <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Grid Foto */}
                <div className="flex items-center justify-center gap-4">
                  <div className="flex relative top-[80px] sm:top-[120px] flex-col gap-4 items-center justify-center">
                    <div className="flex left-0 w-full h-full min-w-[150px] sm:min-w-[200px] min-h-[250px] sm:min-h-[300px] max-w-[150px] sm:max-w-[200px] max-h-[350px] sm:max-h-[400px] bg-red-400">
                      <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60"
                        alt="cloud"
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex w-full h-full min-w-[150px] sm:min-w-[200px] min-h-[250px] sm:min-h-[300px] max-w-[150px] sm:max-w-[200px] max-h-[350px] sm:max-h-[400px] bg-red-400">
                      <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60"
                        alt="cloud"
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex relative flex-col gap-4 items-center justify-center">
                    <div className="flex w-full h-full min-w-[150px] sm:min-w-[200px] min-h-[250px] sm:min-h-[300px] max-w-[150px] sm:max-w-[200px] max-h-[350px] sm:max-h-[400px] bg-red-400">
                      <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60"
                        alt="cloud"
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex w-full h-full min-w-[150px] sm:min-w-[200px] min-h-[250px] sm:min-h-[300px] max-w-[150px] sm:max-w-[200px] max-h-[350px] sm:max-h-[400px] bg-red-400">
                      <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60"
                        alt="cloud"
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* Konten Teks */}
                <div>
                  <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">
                    About Natz
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Meet Natz: Your Expert in Web Development, Design & Editing
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Hai! Saya Natz, seorang kreator digital dengan keahlian di
                    bidang
                    <span className="font-semibold">
                      {" "}
                      pengembangan web, desain grafis,
                    </span>{" "}
                    dan
                    <span className="font-semibold"> video editing</span>. Saya
                    fokus pada pembuatan solusi visual dan interaktif yang{" "}
                    <span className="italic">
                      efektif, menarik, dan fungsional
                    </span>
                    untuk memenuhi berbagai kebutuhan digital.
                  </p>
                  <p className="text-gray-600">
                    Dengan pengalaman dalam berbagai proyek kreatif dan teknis,
                    saya siap membantu mewujudkan ide Anda menjadi produk
                    digital yang berdampak, mulai dari website profesional,
                    identitas visual merek, hingga konten video yang memikat.
                  </p>
                </div>
              </div>
            </div>
         
          </div>
        </>
      )}
    </div>
  );
}
