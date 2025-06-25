import React, { useEffect, useState } from "react";
import holi from "../assets/Image/Portfolio/Holi.png";
import design from "../assets/Image/Portfolio/design.png";
import zapad from "../assets/Image/Portfolio/ZapAd.png";
import render from "../assets/Image/Portfolio/render.png";

const images = [holi, design, zapad, render];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-[80vh] overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="w-screen h-[80vh] object-contain"
          />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
