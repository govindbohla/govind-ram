"use client";

import { useEffect, useState } from "react";
import { X, Briefcase, MapPin, Phone, Mail } from "lucide-react";


export default function AvailabilityModal() {
  const [open, setOpen] = useState(false);
  

  useEffect(() => {
  const SHOW_AFTER = 800;
  const EXPIRE_TIME = 24 * 60 * 60 * 1000; // 24 hours

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-5">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#08111f] border border-blue-500/30 p-8 shadow-2xl">

        <button
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5"
        >
          <X />
        </button>

        <span className="rounded-full bg-green-600 px-4 py-2 text-sm">
          🟢 Immediate Joiner
        </span>

        <h2 className="mt-6 text-4xl font-bold">
          Laravel Backend Developer
        </h2>

        <p className="mt-5 text-gray-300 leading-7">
          I'm currently available for immediate joining and open to
          Full-time, Remote and On-site opportunities.
        </p>

        <div className="mt-8 space-y-4">

          <div className="flex gap-3">
            <Briefcase className="text-blue-500" />
            <span>3.5+ Years Experience</span>
          </div>

          <div className="flex gap-3">
            <MapPin className="text-blue-500" />
            <span>Jaipur, Rajasthan</span>
          </div>

          <div className="flex gap-3">
            <Phone className="text-blue-500" />
            <a href="tel:+919529024816">
              +91 9529024816
            </a>
          </div>

          <div className="flex gap-3">
            <Mail className="text-blue-500" />
            <a href="mailto:grgovind1992@gmail.com">
              grgovind1992@gmail.com
            </a>
          </div>

        </div>

        <div className="mt-8">

          <h3 className="text-xl font-semibold text-blue-400">
            Core Skills
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">

            {[
              "Laravel",
              "PHP",
              "MySQL",
              "REST API",
              "ReactJS",
              "AngularJS",
              "Git",
              "Docker",
              "Third Party Integration",
              "AI Integration (Learning)",
              "Node.js (Learning)"
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-600/20 border border-blue-500 px-3 py-2 text-sm"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        <div className="mt-10 flex gap-4">

          <a
            href="/resume.pdf"
            download
            className="rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-700"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-xl border border-blue-500 px-6 py-3 hover:bg-blue-600"
          >
            Contact Me
          </a>

        </div>

      </div>
    </div>
  );
}