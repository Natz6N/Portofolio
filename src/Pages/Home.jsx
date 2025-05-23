import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import Loading from "../Components/Loading";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Project A",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project A",
    link: "https://example.com/project-a",
  },
  {
    title: "Project B",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project B",
    link: "https://example.com/project-b",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
  {
    title: "Project C",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
];
const faqData = [
  {
    question: "Apa keahlian utama Natz dalam pengembangan web?",
    answer:
      "Natz memiliki keahlian dalam pengembangan web, desain grafis, dan video editing, dengan fokus pada solusi visual dan interaktif yang efektif, menarik, dan fungsional.",
  },
  {
    question:
      "Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek web?",
    answer:
      "Waktu penyelesaian proyek web bervariasi tergantung pada kompleksitas proyek. Proyek sederhana dapat diselesaikan dalam beberapa minggu, sementara proyek yang lebih kompleks mungkin memerlukan beberapa bulan.",
  },
  {
    question:
      "Apakah Natz menyediakan layanan konsultasi untuk proyek digital?",
    answer:
      "Ya, Natz menyediakan layanan konsultasi untuk membantu Anda merencanakan dan mengembangkan proyek digital yang sesuai dengan kebutuhan Anda.",
  },
  {
    question: "Bagaimana cara Natz memastikan kualitas desain grafis?",
    answer:
      "Natz memastikan kualitas desain grafis dengan mengutamakan kreativitas, fungsionalitas, dan estetika dalam setiap proyek, serta berkolaborasi erat dengan klien untuk memenuhi harapan mereka.",
  },
  {
    question: "Apakah Natz menawarkan pelatihan untuk penggunaan alat digital?",
    answer:
      "Ya, Natz menawarkan pelatihan untuk memastikan tim Anda dapat bekerja secara efektif dengan alat digital yang digunakan dalam proyek.",
  },
  {
    question: "Bagaimana cara memulai proyek dengan Natz?",
    answer:
      "Untuk memulai proyek dengan Natz, Anda dapat menghubungi kami melalui formulir kontak di situs web kami atau menjadwalkan panggilan konsultasi gratis.",
  },
];
export default function Home() {
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const buttonRef = useRef(null);
  const projectSectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  // const isDesktopTwo = useMediaQuery({ query: "(min-width: 1104px)" });
  
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
    
    let ctx;
    let masterTimeline;

    // Tunggu beberapa ms untuk memastikan DOM elements sudah di-render
    const animationDelay = setTimeout(() => {
      // Create master timeline for coordinated entrance
      masterTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      ctx = gsap.context(() => {
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
        if (buttonRef.current && buttonRef.current.children) {
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
        }

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

        // Set up scroll animations for project section
        if (projectSectionRef.current) {
          ScrollTrigger.create({
            trigger: projectSectionRef.current,
            start: "top 75%",
            onEnter: () => {
              gsap.fromTo(
                projectSectionRef.current.querySelector("h1"),
                {
                  x: -100,
                  opacity: 0,
                },
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: "power2.out",
                }
              );

              gsap.fromTo(
                projectSectionRef.current.querySelector("p"),
                {
                  x: 100,
                  opacity: 0,
                },
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: "power2.out",
                  delay: 0.2,
                }
              );

              gsap.fromTo(
                projectSectionRef.current.querySelectorAll(".swiper-container"),
                {
                  y: 50,
                  opacity: 0,
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1,
                  stagger: 0.3,
                  ease: "power2.out",
                  delay: 0.4,
                }
              );
            },
            once: true,
          });
        }

        // Set up scroll animations for FAQ section
        if (faqSectionRef.current) {
          ScrollTrigger.create({
            trigger: faqSectionRef.current,
            start: "top 80%",
            onEnter: () => {
              gsap.fromTo(
                faqSectionRef.current.querySelector(".text-center"),
                {
                  y: 50,
                  opacity: 0,
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: "power2.out",
                }
              );

              gsap.fromTo(
                faqSectionRef.current.querySelectorAll(".border-b"),
                {
                  y: 30,
                  opacity: 0,
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.5,
                  stagger: 0.1,
                  ease: "power1.out",
                  delay: 0.3,
                }
              );
            },
            once: true,
          });
        }

        // Set up scroll animations for contact section
        if (contactSectionRef.current) {
          ScrollTrigger.create({
            trigger: contactSectionRef.current,
            start: "top 85%",
            onEnter: () => {
              gsap.fromTo(
                contactSectionRef.current.querySelector(".container"),
                {
                  scale: 0.9,
                  opacity: 0,
                },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 0.8,
                  ease: "back.out(1.2)",
                }
              );

              gsap.fromTo(
                contactSectionRef.current.querySelector("h1"),
                {
                  y: -30,
                  opacity: 0,
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  ease: "power2.out", 
                  delay: 0.3,
                }
              );

              gsap.fromTo(
                contactSectionRef.current.querySelector("p"),
                {
                  y: 30,
                  opacity: 0,
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  ease: "power2.out",
                  delay: 0.5,
                }
              );

              gsap.fromTo(
                contactSectionRef.current.querySelector("button"),
                {
                  y: 20,
                  opacity: 0,
                  scale: 0.8,
                },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.5,
                  ease: "back.out(1.7)",
                  delay: 0.7,
                }
              );
            },
            once: true,
          });
        }
      }, containerRef);
    }, 100); // Berikan sedikit delay untuk memastikan DOM sudah siap

    return () => {
      clearTimeout(animationDelay);
      if (ctx) ctx.revert();
      if (masterTimeline) masterTimeline.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [isLoading]); // Dependency on isLoading ensures this runs after loading completes

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <Loading />
      ) : (
        <div
          ref={containerRef}
          className="transition-opacity duration-500"
        >
          <div className="container mx-auto min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-0">
              {/* Kiri: Teks dan tombol */}
              <div className="w-full md:w-[80%] px-4 md:px-10">
                <h1
                  ref={headingRef}
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-[5em] xl:text-[7em] 2xl:text-[9em] font-dongle font-black lg:leading-17 xl:leading-21 text-black mb-8 overflow-hidden"
                >
                  Selamat datang{" "}
                  {isDesktop && (
                    <span className="img-span inline-block align-middle mx-1">
                      <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&h=60"
                        alt="cloud"
                        className="inline rounded-full w-40 h-9 xl:w-50 xl:h-15 object-cover shadow-lg"
                      />
                    </span>
                  )}{" "}
                  di
                  <br />
                  portofolio saya{" "}
                  {isDesktop && (
                    <span className="img-span inline-block align-middle mx-1">
                      <img
                        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=120&h=60"
                        alt="cloud2"
                        className="inline rounded-full w-30 h-9 xl:w-40 xl:h-15 object-cover shadow-lg"
                      />
                    </span>
                  )}{" "}
                  tempat
                  <br />
                  karya{" "}
                  {isDesktop && (
                    <span className="img-span inline-block align-middle mx-1">
                      <img
                        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=120&h=60"
                        alt="penguin"
                        className="inline rounded-full w-30 h-9 xl:w-40 xl:h-15 object-cover shadow-lg"
                      />
                    </span>
                  )}{" "}
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
            {isDesktop && (
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
            )}
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
          <div ref={projectSectionRef} className="w-full flex flex-col items-center justify-center px-4 py-16 bg-white overflow-hidden">
            <div className="flex items-center justify-between container mx-auto w-full">
              <h1 className="text-[5rem] font-dongle font-bold">PROJECT</h1>
              <p className="text-gray-400 uppercase tracking-widest text-sm mb-2 max-w-[500px] text-end">
                <span className="text-gray-600">
                  Beberapa proyek pilihan yang mencerminkan keahlian saya dalam
                  web development, desain grafis, dan video editing.
                </span>
              </p>
            </div>
            {/* Carousel Container */}
            <div className="flex flex-col space-y-10 w-full max-w-full">
              {/* Carousel 1: Kanan ke kiri */}
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1.5}
                breakpoints={{
                  640: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 3.5 },
                }}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  reverseDirection: false,
                }}
                speed={3000}
                grabCursor={true}
                className="w-full"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={`top-${index}`}>
                    <div className="relative group w-full min-w-[300px] aspect-video overflow-hidden rounded-2xl shadow-lg bg-neutral-900">
                      {/* Thumbnail */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />

                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <h3 className="text-2xl font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition"
                        >
                          🎬 Lihat Proyek
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Carousel 2: Kiri ke kanan */}
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1.5}
                breakpoints={{
                  640: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 3.5 },
                }}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                speed={3000}
                grabCursor={true}
                className="w-full"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={`bottom-${index}`}>
                    <div className="relative group w-full min-w-[300px] aspect-video overflow-hidden rounded-2xl shadow-lg bg-neutral-900">
                      {/* Thumbnail */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />

                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <h3 className="text-2xl font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition"
                        >
                          🎬 Lihat Proyek
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div ref={faqSectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <div className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-2">
                FAQ
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                You've got questions, we've got{" "}
                <span className="text-blue-600">answers</span>
              </h1>
            </div>

            {/* FAQ Accordion */}
            <div className="mb-20">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 cursor-pointer"
                >
                  <div
                    className="flex justify-between items-center py-6 w-full text-left"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="text-lg md:text-xl font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="ml-6 flex-shrink-0">
                      {openIndex === index ? (
                        <svg
                          className="h-6 w-6 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-96 opacity-100 pb-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div ref={contactSectionRef} className="flex items-center justify-center mt-16">
            <div className="container flex items-center justify-center min-h-[400px] bg-gray-900 rounded-[40px] flex-col">
              <h1 className="text-4xl font-bold text-white leading-tight mb-4">
                Mari Berkolaborasi
              </h1>
              <p className="text-gray-300 mb-4 text-center max-w-[800px]">
                Punya pertanyaan atau ingin bekerja sama? Saya siap membantu
                mewujudkan visi digital Anda menjadi kenyataan. Isi formulir di
                bawah ini dengan detail proyek Anda, dan saya akan menghubungi
                Anda segera untuk mendiskusikan bagaimana kita dapat
                berkolaborasi untuk menciptakan solusi yang sesuai dengan
                kebutuhan dan tujuan Anda. Mari kita bangun sesuatu yang luar
                biasa bersama!
              </p>
              <button className="bg-blue-500 text-white p-2 rounded-[10px]">
                Hubungi Saya
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
