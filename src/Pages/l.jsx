import React from "react";
import { Card} from "../Components/UI/Card";
const services = [
  {
    title: "Furnaces",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    highlight: true,
  },
  {
    title: "Central Air Conditioning",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Tankless Water Heaters",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Underfloor Heating System",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "New House Plumbing",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
  },
];

export default function LPage() {
  return (
    <div className="min-h-screen bg-[#d3cbc7] flex items-center justify-center py-8">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-6xl p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-orange-600">R</span>
            <span className="font-bold text-lg text-gray-800">RAZOR</span>
          </div>
          {/* Menu */}
          <nav className="flex gap-2 flex-1 justify-center">
            {["Plumbing", "Heating", "Cooling", "Air Quality", "Contact", "More"].map((item) => (
              <button key={item} className="px-4 py-1 rounded-full border border-gray-300 text-gray-700 text-sm hover:bg-gray-100 transition">{item}</button>
            ))}
          </nav>
          {/* CTA */}
          <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-5 py-2 rounded-full shadow transition">
            BOOK A SERVICE
            <span className="inline-block bg-gray-900 text-yellow-400 rounded-full p-1 ml-1">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M5 12h14m0 0-6-6m6 6-6 6"/></svg>
            </span>
          </button>
        </header>
        {/* Content */}
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Left: Title & Desc */}
          <div className="flex-1 min-w-[250px]">
            <div className="text-sm text-gray-500 mb-2">/ Services We Offer</div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">Certified<br/>Excellence</h1>
            <div className="text-gray-500 mb-6 max-w-xs">
              From repairs and installations to preventative maintenance, we've got you covered.<br/>
              Choose reliability, choose Razor.
            </div>
            <div className="flex gap-6 text-sm font-medium">
              <a href="#" className="text-[#b03a2e] hover:underline">View All Services</a>
              <a href="#" className="text-[#b03a2e] hover:underline">Call For Booking</a>
            </div>
          </div>
          {/* Right: Carousel */}
          <div className="flex-1 w-full">
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
              {services.map((service, idx) => (
                <Card key={service.title} title={service.title} image={service.img} description={service.description} link={service.link} highlight={service.highlight} />
              ))}
            </div>
            {/* Carousel indicator (dummy) */}
            <div className="flex justify-center mt-4 gap-1">
              {services.map((_, idx) => (
                <span key={idx} className={`w-8 h-1 rounded-full ${idx === 0 ? 'bg-gray-900' : 'bg-gray-300'}`}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
