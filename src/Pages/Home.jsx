import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const skills = [
  { name: "React", color: "bg-blue-50 text-blue-700" },
  { name: "JavaScript", color: "bg-yellow-50 text-yellow-700" },
  { name: "Node.js", color: "bg-green-50 text-green-700" },
  { name: "Tailwind CSS", color: "bg-cyan-50 text-cyan-700" },
  { name: "HTML & CSS", color: "bg-pink-50 text-pink-700" },
  { name: "TypeScript", color: "bg-indigo-50 text-indigo-700" },
  { name: "Express.js", color: "bg-gray-50 text-gray-700" },
  { name: "MongoDB", color: "bg-green-100 text-green-800" },
  { name: "Figma", color: "bg-purple-50 text-purple-700" },
  { name: "Git", color: "bg-orange-50 text-orange-700" },
];

const projects = [
  {
    title: "Task Manager App",
    desc: "Aplikasi web untuk manajemen tugas harian dengan React, Firebase, dan drag-and-drop.",
    link: "#",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    tags: ["React", "Firebase", "Productivity"],
  },
  {
    title: "Personal Portfolio",
    desc: "Website portofolio interaktif dengan animasi modern dan responsif.",
    link: "#",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    tags: ["React", "Tailwind", "Portfolio"],
  },
  {
    title: "E-Commerce Store",
    desc: "Toko online sederhana dengan fitur keranjang, checkout, dan autentikasi.",
    link: "#",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    tags: ["React", "Node.js", "E-Commerce"],
  },
  {
    title: "Blog Platform",
    desc: "Platform blog dengan markdown editor, komentar, dan dashboard admin.",
    link: "#",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    tags: ["Node.js", "MongoDB", "Blog"],
  },
  {
    title: "UI Kit Library",
    desc: "Kumpulan komponen UI reusable untuk proyek React.",
    link: "#",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    tags: ["React", "UI/UX", "Library"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-6 border-2 border-gray-200 object-cover"
          />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Hi, Saya Nama Anda
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Web Developer | UI/UX Enthusiast | Tech Learner
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.slice(0, 3).map((skill) => (
              <span
                key={skill.name}
                className={`px-3 py-1 rounded-full text-sm font-medium ${skill.color}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Saya seorang web developer yang bersemangat membangun aplikasi
            modern dengan React, JavaScript, dan teknologi web lainnya. Fokus
            saya adalah menciptakan solusi yang elegan dan efisien.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Pengalaman dalam pengembangan aplikasi web end-to-end.</li>
            <li>Terus belajar teknologi terbaru di dunia web.</li>
            <li>Terampil dalam kolaborasi tim dan alur kerja agile.</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`px-4 py-2 rounded-full text-sm font-medium ${skill.color}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section (Carousel) */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 text-center">
            Projects
          </h2>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <a
                  href={project.link}
                  className="block bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 line-clamp-3">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Contact
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-2">
                Email:{" "}
                <a
                  href="mailto:emailanda@email.com"
                  className="text-blue-600 hover:underline"
                >
                  emailanda@email.com
                </a>
              </p>
              <p className="text-gray-600 mb-2">
                LinkedIn:{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  linkedin.com/in/username
                </a>
              </p>
              <p className="text-gray-600">
                Instagram:{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  @username
                </a>
              </p>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nama"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Pesan"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                rows={4}
              ></textarea>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Kirim Pesan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
          html, body { scroll-behavior: smooth; }
          .swiper-button-prev, .swiper-button-next {
            color: #3b82f6;
            width: 40px;
            height: 40px;
          }
          .swiper-pagination-bullet-active { background: #3b82f6; }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          @media (max-width: 640px) {
            .swiper-button-prev, .swiper-button-next { display: none; }
          }
        `}</style>
    </div>
  );
}
