"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  const phone = "919529024816";

  const message =
    "Hi Govind,%0A%0AI reviewed your portfolio and would like to connect regarding a Laravel Backend Developer position.%0A%0ARegards,";

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 group"
    >
      {/* Tooltip - Desktop only */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-xs text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 hidden md:block">
        💬 Chat on WhatsApp
      </span>

      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full animate-ping bg-green-500 opacity-20"></span>

      {/* Button */}
      <div className="relative flex h-14 w-14 md:h-15 md:w-15 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50">
        <FaWhatsapp className="text-white text-3xl md:text-[30px]" />
      </div>
    </a>
  );
}