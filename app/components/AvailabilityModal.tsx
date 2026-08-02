"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function AvailabilityModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const SHOW_AFTER = 1000;
    const EXPIRE_TIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    const lastShown = localStorage.getItem("availability-popup");

    if (
      !lastShown ||
      Date.now() - Number(lastShown) > EXPIRE_TIME
    ) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem(
          "availability-popup",
          Date.now().toString()
        );
      }, SHOW_AFTER);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", close);

    return () =>
      window.removeEventListener("keydown", close);
  }, []);

  if (!open) return null;

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: .85,
              y: 60,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: .9,
            }}
            transition={{
              duration: .35,
            }}
            onClick={(e) => e.stopPropagation()}
            className="group relative w-full max-w-3xl overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#071321] via-[#0B1220] to-[#111827] shadow-[0_30px_80px_rgba(37,99,235,.25)]"
          >

            {/* Glow */}

            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* Close */}

            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:bg-red-500"
            >
              <X size={20} />
            </button>

            <div className="relative z-10 max-h-[90vh] overflow-y-auto p-6 md:p-10">

              {/* Badge */}

              <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-400">
                🟢 Available for Immediate Joining
              </span>

              {/* Heading */}

              <h2 className="mt-6 text-3xl font-bold md:text-5xl">
                Laravel Backend Developer
              </h2>

              <p className="mt-3 text-xl text-blue-400">
                Building Scalable Web Applications & REST APIs
              </p>

              <p className="mt-6 max-w-2xl leading-8 text-gray-300">
                Passionate Laravel Backend Developer with
                <span className="font-semibold text-white">
                  {" "}3 Years 7 Months
                </span>
                {" "}of experience building secure,
                scalable and high-performance web
                applications using Laravel, PHP,
                MySQL and modern web technologies.
              </p>

              {/* Information */}

              <div className="mt-10 grid gap-5 md:grid-cols-2">

                <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5 transition hover:border-blue-500">

                  <Briefcase className="mb-3 text-blue-400" />

                  <p className="text-sm text-gray-400">
                    Experience
                  </p>

                  <h4 className="mt-1 text-lg font-semibold">
                    3 Years 7 Months
                  </h4>

                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5 transition hover:border-blue-500">

                  <MapPin className="mb-3 text-blue-400" />

                  <p className="text-sm text-gray-400">
                    Location
                  </p>

                  <h4 className="mt-1 text-lg font-semibold">
                    Jaipur, Rajasthan
                  </h4>

                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5 transition hover:border-blue-500">

                  <Phone className="mb-3 text-blue-400" />

                  <p className="text-sm text-gray-400">
                    Phone
                  </p>

                  <a
                    href="tel:+919529024816"
                    className="font-semibold hover:text-blue-400"
                  >
                    +91 9529024816
                  </a>

                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5 transition hover:border-blue-500">

                  <Mail className="mb-3 text-blue-400" />

                  <p className="text-sm text-gray-400">
                    Email
                  </p>

                  <a
                    href="mailto:grgovind1992@gmail.com"
                    className="break-all font-semibold hover:text-blue-400"
                  >
                    grgovind1992@gmail.com
                  </a>

                </div>

              </div>

              {/* Skills */}

              <h3 className="mt-10 text-2xl font-semibold">
                Core Skills
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">

                {[
                  "Laravel",
                  "PHP",
                  "MySQL",
                  "REST API",
                  "ReactJS",
                  "AngularJS",
                  "JavaScript",
                  "Git",
                  "Docker",
                  "Stripe",
                  "Google Maps API",
                  "AI Integration",
                  "Node.js",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
                            {/* Social Links */}

              <div className="mt-10">

                <h3 className="text-2xl font-semibold">
                  Connect With Me
                </h3>

                <div className="mt-5 flex flex-wrap gap-4">

                  <a
                    href="https://linkedin.com/in/govind-ram-88602867"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-[#0077B5] px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <FaLinkedin size={20} />
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/govindbohla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-[#24292F] px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <FaGithub size={20} />
                    GitHub
                  </a>

                </div>

              </div>

              {/* CTA */}

              <div className="mt-12 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-cyan-600/10 p-8">

                <h3 className="text-2xl font-bold">
                  🚀 Let's Build Something Amazing Together
                </h3>

                <p className="mt-4 leading-8 text-gray-300">
                  I am actively looking for Full-Time, Remote, Hybrid,
                  Freelance and Contract opportunities as a Laravel Backend
                  Developer. If you're hiring or have an exciting project,
                  I'd love to discuss how I can contribute to your team.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
                  >
                    <Download size={20} />
                    Download Resume
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-xl border border-blue-500 bg-blue-500/10 px-6 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white"
                  >
                    Contact Me
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );
}