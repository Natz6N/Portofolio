// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useMediaQuery } from "react-responsive";
// import Loading from "../Components/Loading";

// gsap.registerPlugin(ScrollTrigger);

// export default function About() {
//   const containerRef = useRef(null);
//   const headingRef = useRef(null);
//   const skillsRef = useRef(null);
//   const projectsRef = useRef(null);
//   const testimonialsRef = useRef(null);
//   const aboutMeRef = useRef(null);
//   const [isLoading, setIsLoading] = useState(true);
  
//   const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (isLoading) return;

//     const ctx = gsap.context(() => {
//       // Fade in the container
//       gsap.fromTo(
//         containerRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 0.8, ease: "power2.inOut" }
//       );

//       // Animate the heading
//       if (headingRef.current) {
//         gsap.fromTo(
//           headingRef.current.children,
//           { y: 50, opacity: 0 },
//           { 
//             y: 0, 
//             opacity: 1, 
//             duration: 0.8, 
//             stagger: 0.1, 
//             ease: "power2.out" 
//           }
//         );
//       }

//       // About Me section animation
//       if (aboutMeRef.current) {
//         ScrollTrigger.create({
//           trigger: aboutMeRef.current,
//           start: "top 80%",
//           onEnter: () => {
//             gsap.fromTo(
//               aboutMeRef.current.children,
//               { y: 50, opacity: 0 },
//               { 
//                 y: 0, 
//                 opacity: 1, 
//                 duration: 0.8, 
//                 stagger: 0.15, 
//                 ease: "power2.out" 
//               }
//             );
//           },
//           once: true,
//         });
//       }

//       // Skills section animation
//       if (skillsRef.current) {
//         ScrollTrigger.create({
//           trigger: skillsRef.current,
//           start: "top 80%",
//           onEnter: () => {
//             gsap.fromTo(
//               ".skill-card",
//               { y: 50, opacity: 0 },
//               { 
//                 y: 0, 
//                 opacity: 1, 
//                 duration: 0.6, 
//                 stagger: 0.1, 
//                 ease: "power2.out" 
//               }
//             );
//           },
//           once: true,
//         });
//       }

//       // Projects section animation
//       if (projectsRef.current) {
//         ScrollTrigger.create({
//           trigger: projectsRef.current,
//           start: "top 80%",
//           onEnter: () => {
//             gsap.fromTo(
//               ".project-card",
//               { y: 50, opacity: 0 },
//               { 
//                 y: 0, 
//                 opacity: 1, 
//                 duration: 0.6, 
//                 stagger: 0.15, 
//                 ease: "power2.out" 
//               }
//             );
//           },
//           once: true,
//         });
//       }

//       // Testimonials section animation
//       if (testimonialsRef.current) {
//         ScrollTrigger.create({
//           trigger: testimonialsRef.current,
//           start: "top 80%",
//           onEnter: () => {
//             gsap.fromTo(
//               testimonialsRef.current.querySelectorAll('.bg-white'),
//               { y: 50, opacity: 0 },
//               { 
//                 y: 0, 
//                 opacity: 1, 
//                 duration: 0.7, 
//                 stagger: 0.2, 
//                 ease: "power2.out" 
//               }
//             );
//           },
//           once: true,
//         });
//       }
//     }, containerRef);

//     return () => ctx.revert();
//   }, [isLoading]);

//   const skills = [
//     {
//       title: "Web Development",
//       description: "Expert in React, Next.js, Vue.js, and modern JavaScript frameworks",
//       icon: "💻",
//       color: "bg-blue-500"
//     },
//     {
//       title: "UI/UX Design",
//       description: "Creating intuitive and beautiful user interfaces with Figma and Adobe XD",
//       icon: "🎨",
//       color: "bg-purple-500"
//     },
//     {
//       title: "Backend Development",
//       description: "Node.js, Express, MongoDB, and SQL database management",
//       icon: "⚙️",
//       color: "bg-green-500"
//     },
//     {
//       title: "Mobile Development",
//       description: "React Native and Flutter for cross-platform mobile applications",
//       icon: "📱",
//       color: "bg-orange-500"
//     },
//     {
//       title: "Video Editing",
//       description: "Professional video editing with Adobe Premiere Pro and After Effects",
//       icon: "🎬",
//       color: "bg-red-500"
//     },
//     {
//       title: "Digital Marketing",
//       description: "SEO optimization, social media strategy, and content creation",
//       icon: "📈",
//       color: "bg-yellow-500"
//     }
//   ];

//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "A full-featured online shopping platform with payment integration and inventory management",
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=400",
//       tags: ["React", "Node.js", "MongoDB", "Stripe"]
//     },
//     {
//       title: "Social Media Dashboard",
//       description: "Analytics dashboard for social media managers with real-time data visualization",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400",
//       tags: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"]
//     },
//     {
//       title: "Mobile Fitness App",
//       description: "Workout tracking and nutrition planning app with personalized recommendations",
//       image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&h=400",
//       tags: ["React Native", "Redux", "Node.js", "MongoDB"]
//     },
//     {
//       title: "Corporate Website Redesign",
//       description: "Complete redesign of a corporate website focusing on user experience and performance",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400",
//       tags: ["Next.js", "GSAP", "Tailwind CSS", "Headless CMS"]
//     }
//   ];

//   return (
//     <div
//       ref={containerRef}
//       className={isLoading ? "opacity-0" : "transition-opacity duration-500"}
//     >
//       {isLoading ? (
//         <Loading />
//       ) : (
//         <div className="bg-white">
//           {/* Hero Section */}
//           <div className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
//             <div className="container mx-auto px-4 md:px-8">
//               <div ref={headingRef} className="max-w-4xl mx-auto text-center">
//                 <p className="text-blue-600 font-semibold tracking-wider mb-3">ABOUT ME</p>
//                 <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//                   Passionate Developer, Designer & Creative Thinker
//                 </h1>
//                 <p className="text-lg md:text-xl text-gray-600 mb-8">
//                   Turning ideas into digital reality with code, design, and a cup of coffee
//                 </p>
//                 <div className="flex justify-center gap-4">
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
//                     Download Resume
//                   </button>
//                   <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
//                     Contact Me
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             {/* Decorative elements */}
//             <div className="hidden md:block absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50"></div>
//             <div className="hidden md:block absolute bottom-10 right-20 w-32 h-32 bg-blue-300 rounded-full opacity-30"></div>
//             <div className="hidden md:block absolute top-40 right-40 w-16 h-16 bg-yellow-200 rounded-full opacity-40"></div>
//           </div>

//           {/* About Me Section */}
//           <div ref={aboutMeRef} className="container mx-auto px-4 md:px-8 py-16 md:py-24">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               <div className="relative">
//                 <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
//                   <img 
//                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=1000" 
//                     alt="Natz" 
//                     className="w-full h-auto object-cover"
//                   />
//                 </div>
//                 {/* Background decorative elements */}
//                 <div className="absolute -top-4 -left-4 w-full h-full bg-blue-200 rounded-lg -z-10"></div>
//                 <div className="absolute -bottom-4 -right-4 w-full h-full bg-yellow-200 rounded-lg -z-20"></div>
//               </div>
              
//               <div>
//                 <p className="text-blue-600 font-semibold tracking-wider mb-3">MY STORY</p>
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Who is Natz?</h2>
//                 <p className="text-gray-700 mb-4">
//                   I'm a passionate full-stack developer and designer with over 5 years of experience creating digital experiences that users love. My journey began with a simple HTML page and has evolved into building complex web applications and mobile solutions.
//                 </p>
//                 <p className="text-gray-700 mb-4">
//                   Based in Indonesia, I combine technical expertise with creative thinking to solve complex problems. I believe in clean code, intuitive design, and the power of technology to transform ideas into reality.
//                 </p>
//                 <p className="text-gray-700 mb-6">
//                   When I'm not coding, you can find me exploring new coffee shops, capturing moments through photography, or contributing to open-source projects.
//                 </p>
                
//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div>
//                     <h3 className="font-bold text-lg mb-2">Education</h3>
//                     <p className="text-gray-600">Computer Science, University of Indonesia</p>
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg mb-2">Experience</h3>
//                     <p className="text-gray-600">5+ years in web & mobile development</p>
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg mb-2">Location</h3>
//                     <p className="text-gray-600">Jakarta, Indonesia</p>
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg mb-2">Languages</h3>
//                     <p className="text-gray-600">English, Indonesian</p>
//                   </div>
//                 </div>
                
//                 <div className="flex gap-4">
//                   <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1 15h-2v-6h2v6zm-1-7a1 1 0 100-2 1 1 0 000 2zm8 7h-2v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h-2v-6h2v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5v2.7z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Skills Section */}
//           <div ref={skillsRef} className="bg-gray-50 py-16 md:py-24">
//             <div className="container mx-auto px-4 md:px-8">
//               <div className="text-center max-w-3xl mx-auto mb-16">
//                 <p className="text-blue-600 font-semibold tracking-wider mb-3">MY EXPERTISE</p>
//                 <h2 className="text-3xl md:text-5xl font-bold mb-6">Skills & Capabilities</h2>
//                 <p className="text-gray-600">
//                   With a diverse skill set spanning development, design, and digital marketing, 
//                   I bring a holistic approach to every project.
//                 </p>
//               </div>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {skills.map((skill, index) => (
//                   <div 
//                     key={index} 
//                     className={`skill-card rounded-xl p-6 shadow-lg border border-gray-100 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isDesktop ? 'opacity-0' : ''}`}
//                   >
//                     <div className={`w-14 h-14 rounded-lg ${skill.color} text-white flex items-center justify-center text-2xl mb-4`}>
//                       {skill.icon}
//                     </div>
//                     <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
//                     <p className="text-gray-600">{skill.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Popular Projects Section */}
//           <div ref={projectsRef} className="py-16 md:py-24">
//             <div className="container mx-auto px-4 md:px-8">
//               <div className="text-center max-w-3xl mx-auto mb-16">
//                 <p className="text-blue-600 font-semibold tracking-wider mb-3">FEATURED WORK</p>
//                 <h2 className="text-3xl md:text-5xl font-bold mb-6">Popular Projects</h2>
//                 <p className="text-gray-600">
//                   A selection of my most impactful projects that showcase my skills and approach to problem-solving.
//                 </p>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {projects.map((project, index) => (
//                   <div 
//                     key={index} 
//                     className={`project-card group rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl ${isDesktop ? 'opacity-0' : ''}`}
//                   >
//                     <div className="relative overflow-hidden h-64">
//                       <img 
//                         src={project.image} 
//                         alt={project.title} 
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//                         <div className="p-6">
//                           <h3 className="text-white text-xl font-bold">{project.title}</h3>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <h3 className="text-xl font-bold mb-3">{project.title}</h3>
//                       <p className="text-gray-600 mb-4">{project.description}</p>
//                       <div className="flex flex-wrap gap-2">
//                         {project.tags.map((tag, tagIndex) => (
//                           <span 
//                             key={tagIndex} 
//                             className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="text-center mt-12">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
//                   View All Projects
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Testimonials Section */}
//           <div ref={testimonialsRef} className="bg-blue-50 py-16 md:py-24">
//             <div className="container mx-auto px-4 md:px-8">
//               <div className="text-center max-w-3xl mx-auto mb-16">
//                 <p className="text-blue-600 font-semibold tracking-wider mb-3">WHAT CLIENTS SAY</p>
//                 <h2 className="text-3xl md:text-5xl font-bold mb-6">Testimonials</h2>
//                 <p className="text-gray-600">
//                   Don't just take my word for it - hear what my clients have to say about working with me.
//                 </p>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <div className="bg-white p-8 rounded-xl shadow-lg">
//                   <div className="flex items-center mb-4">
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                   </div>
//                   <p className="text-gray-600 italic mb-6">
//                     "Working with Natz was a game-changer for our business. His technical expertise combined with creative vision delivered a website that exceeded our expectations."
//                   </p>
//                   <div className="flex items-center">
//                     <img 
//                       src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&h=60" 
//                       alt="Client" 
//                       className="w-12 h-12 rounded-full object-cover mr-4"
//                     />
//                     <div>
//                       <h4 className="font-bold">Sarah Johnson</h4>
//                       <p className="text-gray-500 text-sm">CEO, TechStart</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="bg-white p-8 rounded-xl shadow-lg">
//                   <div className="flex items-center mb-4">
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                   </div>
//                   <p className="text-gray-600 italic mb-6">
//                     "Natz has an incredible eye for design and a deep understanding of user experience. He transformed our outdated website into a modern, functional platform that our customers love."
//                   </p>
//                   <div className="flex items-center">
//                     <img 
//                       src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&h=60" 
//                       alt="Client" 
//                       className="w-12 h-12 rounded-full object-cover mr-4"
//                     />
//                     <div>
//                       <h4 className="font-bold">Michael Rodriguez</h4>
//                       <p className="text-gray-500 text-sm">Marketing Director, Innovate Inc</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="bg-white p-8 rounded-xl shadow-lg">
//                   <div className="flex items-center mb-4">
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                   </div>
//                   <p className="text-gray-600 italic mb-6">
//                     "I've worked with many developers, but Natz stands out for his attention to detail and commitment to quality. He doesn't just build websites - he creates solutions that drive business results."
//                   </p>
//                   <div className="flex items-center">
//                     <img 
//                       src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=60&h=60" 
//                       alt="Client" 
//                       className="w-12 h-12 rounded-full object-cover mr-4"
//                     />
//                     <div>
//                       <h4 className="font-bold">Emily Chen</h4>
//                       <p className="text-gray-500 text-sm">Founder, DesignHub</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Testimonials Section */}
//           <div ref={testimonialsRef} className="bg-gray-50 py-16 md:py-24">
//             <div className="container mx-auto px-4 md:px-8">
//               <div className="text-center max-w-3xl mx-auto mb-16">
//                 <p className="text-blue-600 font-semibold tracking-wider mb-3">CLIENT TESTIMONIALS</p>
//                 <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
//                 <p className="text-gray-600">
//                   Hear from our valued clients who have experienced the excellence of our services.
//                 </p>
//               </div>
//               {/* You can add testimonial cards here if needed */}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


