import { useState } from "react";
import { Link } from "react-router-dom";
function Card({ title, image, description, link, highlight }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key={title}
      className="min-w-[200px] h-full max-h-[300px] max-w-[200px] bg-gray-100 rounded-xl overflow-hidden shadow relative group"
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-gray-800 font-semibold text-sm">{title}</span>
        <span
          className={`ml-2 rounded-full p-1 ${
            highlight
              ? "bg-yellow-400 text-gray-900"
              : "bg-gray-900 text-yellow-400"
          } group-hover:scale-110 transition`}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M5 12h14m0 0-6-6m6 6-6 6"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

function CardV2({ title, image, description, link }) {
  return (
    <Link
      href={link}
      className="flex items-center relative min-w-[200px] min-h-[300px] max-w-[200px] max-h-[300px] justify-center group"
    >
      <div className="card-wrapper w-[200px] h-[300px] relative overflow-hidden">
        <img src={image} alt={description} className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-end px-4 py-4 justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white font-bold">{title}</p>
        </div>
      </div>
      <div className="absolute w-[50px] h-[50px] rounded-full bottom-0 mb-[10px] right-[5px] bg-gray-800 group-hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center">
        <svg
          className="w-[24px] h-[24px] transform -rotate-[45deg] text-white"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="M5 12h14m0 0-6-6m6 6-6 6"
          />
        </svg>
      </div>
    </Link>
  );
}

export { Card, CardV2 };
