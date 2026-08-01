"use client";

import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">
            Govind<span className="text-white">.</span>
          </h2>

          <p className="mt-2 text-gray-400">
            Laravel Backend Developer
          </p>
        </div>

        {/* Center */}
        <div className="flex gap-5">

          <a
            href="https://github.com/govindbohla"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/10 p-3 hover:bg-blue-600 transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/govind-ram-88602867"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/10 p-3 hover:bg-blue-600 transition"
          >
            <FaLinkedin size={22} />
          </a>

        </div>

        {/* Right */}
        <div className="text-center md:text-right">

          <p className="flex items-center justify-center gap-2 text-gray-400 md:justify-end">
            Made with <Heart className="text-red-500" size={18} /> using
            Next.js & Tailwind CSS
          </p>

          <p className="mt-2 text-sm text-gray-500">
            © {new Date().getFullYear()} Govind Ram. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}