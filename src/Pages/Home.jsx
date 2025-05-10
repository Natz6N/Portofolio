import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Wait for DOM to be fully loaded before animations
    const ctx = gsap.context(() => {

      // Then handle text splitting and animation
      if (headingRef.current) {
        const splitText = new SplitType(headingRef.current, {
          types: 'words, chars',
          tagName: 'span'
        });

        // Animate the split words
        gsap.from(splitText.words, {
          y: '100%',
          opacity: 0,
          duration: 0.5,
          ease: 'power1.out',
          stagger: 0.1,
        });
      }
      // First animate the image spans
      gsap.fromTo(
        ".img-span",
        { 
          opacity: 0, 
          scale: 0.8 
        },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          ease: "back.out(1.7)", 
          stagger: 0.2,
          delay: 0.3 // Slight delay to ensure DOM is ready
        }
      );

      // Set up scroll trigger for the about section
      gsap.fromTo(
        "#about",
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    }, containerRef); // Scope all animations to container

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="container mx-auto min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-0">
          {/* Kiri: Teks dan tombol */}
          <div className="w-full md:w-[80%] px-4 md:px-10">
            <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-[9em] font-dongle font-black leading-21 text-black mb-6">
              Selamat datang{" "}
              <span className="img-span inline-block align-middle mx-1">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60"
                  alt="cloud"
                  className="inline rounded-full w-50 h-15 object-cover"
                />
              </span>{" "}
              di
              <br />
              portofolio saya{" "}
              <span className="img-span inline-block align-middle mx-1">
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=120&h=60"
                  alt="cloud2"
                  className="inline rounded-full w-40 h-15 object-cover"
                />
              </span>{" "}
              tempat
              <br />
              karya{" "}
              <span className="img-span inline-block align-middle mx-1">
                <img
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=120&h=60"
                  alt="penguin"
                  className="inline rounded-full w-40 h-15 object-cover"
                />
              </span>{" "}
              kode, dan kopi
              <br />
              bertemu.
            </h1>
            <div className="flex items-center gap-4 mt-8">
              <button className="bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-blue-800 transition-all">
                Jelajahi Sekarang
              </button>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-700 text-white text-2xl hover:bg-blue-800 transition-all cursor-pointer">
                <span>&#8595;</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Tentang Saya</h2>
            <p className="text-lg text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className="text-lg text-gray-700">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-80 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=600"
                alt="Landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}