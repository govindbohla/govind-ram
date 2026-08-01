"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaLaravel, FaPhp, FaReact,FaGitAlt,FaDocker } from "react-icons/fa";
import { SiMysql,SiJira,
  SiPostman, } from "react-icons/si";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-[#050816] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-20 lg:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
        >
          <p className="text-blue-400 font-semibold uppercase tracking-[4px]">
            Laravel Backend Developer
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">Govind Ram</span>
          </h1>

          <p className="mt-8 text-gray-300 leading-8 text-lg">
            Laravel Backend Developer with <strong>3+ years</strong> of
            experience building scalable web applications, REST APIs,
            CRM systems, Educational Platforms and E-Commerce solutions
            using Laravel, PHP and MySQL.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="rounded-full bg-blue-600 px-7 py-3 font-medium hover:bg-blue-700 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="rounded-full border border-blue-500 px-7 py-3 font-medium hover:bg-blue-600 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social */}
          <div className="mt-10 flex gap-5 text-2xl">
            <a
              href="https://github.com/govindbohla"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/govind-ram-88602867"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:grgovind1992@gmail.com"
              className="hover:text-blue-400"
            >
              <Mail size={26} />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-500">3+</h3>
              <p className="mt-2 text-sm text-gray-400">Years</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-500">7+</h3>
              <p className="mt-2 text-sm text-gray-400">Projects</p>
            </div>

            {/* <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-500">80+</h3>
              <p className="mt-2 text-sm text-gray-400">REST APIs</p>
            </div> */}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          className="relative flex justify-center"
        >
          <Image
              src="/images/new-profile.png"
               alt="Govind Ram"
              width={420}
              height={420}
              priority
              className="rounded-full border-4 border-blue-500 shadow-2xl"
            />

          {/* Floating Tech Stack */}

          {/* <div className="absolute top-8 -left-8 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10 shadow-lg">
            <FaLaravel className="inline mr-2 text-red-500 text-xl" />
            Laravel
          </div>

          <div className="absolute top-1/4 -right-8 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10 shadow-lg">
            <FaPhp className="inline mr-2 text-indigo-400 text-xl" />
            PHP
          </div>

          <div className="absolute top-1/2 -left-10 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10 shadow-lg">
            <SiMysql className="inline mr-2 text-blue-400 text-xl" />
            MySQL
          </div>

          <div className="absolute bottom-28 -right-8 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10 shadow-lg">
            <FaReact className="inline mr-2 text-cyan-400 text-xl" />
            ReactJS
          </div>

          <div className="absolute bottom-6 -left-6 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10 shadow-lg">
            ⚡ REST API
          </div>

          <div className="absolute top-16 right-20 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10 shadow-lg">
            🧩 OOP
          </div>

          <div className="absolute bottom-14 right-24 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10 shadow-lg">
            🌐 JavaScript
          </div>

          <div className="absolute top-1/2 right-28 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10 shadow-lg">
            🗄️ Database
          </div>

          <div className="absolute bottom-1/3 -left-8 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10 shadow-lg">
            🔄 Git
          </div>

          <div className="absolute top-32 left-20 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10 shadow-lg">
            🐳 Docker
          </div>

          <div className="absolute bottom-4 right-12 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10 shadow-lg">
            🤖 AI API
          </div>

          <div className="absolute top-40 -right-10 rounded-full bg-white/10 px-4 py-2 backdrop-blur border border-white/10 shadow-lg">
            🌐 Third-Party Integration
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}