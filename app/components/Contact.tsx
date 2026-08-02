"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050816] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

       <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-medium text-green-400">
              🟢 Available for Immediate Joining
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Let's <span className="text-blue-500">Work Together</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Looking for a passionate
              <span className="font-semibold text-white">
                {" "}Laravel Backend Developer
              </span>
              ? I'm available for
              <span className="text-blue-400 font-semibold">
                {" "}Full-time, Remote, Freelance
              </span>
               and exciting software development opportunities.
            </p>

          </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-700 bg-[#0B1220] p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-500 hover:shadow-[0_20px_60px_rgba(37,99,235,.20)]"
          >

            <h3 className="text-3xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-8 mt-10">

              <a
                href="mailto:grgovind1992@gmail.com"
                className="flex gap-5 items-center hover:text-blue-400 transition"
              >
                <Mail className="text-blue-500" />

                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <p>
                    grgovind1992@gmail.com
                  </p>
                </div>

              </a>

              <a
                href="tel:+919529024816"
                className="flex gap-5 items-center hover:text-blue-400 transition"
              >

                <Phone className="text-blue-500" />

                <div>
                  <p className="text-gray-400 text-sm">
                    Phone
                  </p>

                  <p>
                    +91 9529024816
                  </p>

                </div>

              </a>

              <div className="flex gap-5 items-center">

                <MapPin className="text-blue-500" />

                <div>
                  <p className="text-gray-400 text-sm">
                    Location
                  </p>

                  <p>
                    Jaipur, Rajasthan, India
                  </p>
                </div>

              </div>

            </div>

            <div className="flex gap-4 mt-12 flex-wrap">

              <a
                href="https://linkedin.com/in/govind-ram-88602867"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#0077B5] px-5 py-3 font-medium transition hover:scale-105"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

              <a
                href="https://github.com/govindbohla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#24292F] px-5 py-3 font-medium transition hover:scale-105"
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-medium transition hover:scale-105 hover:bg-green-700"
              >
                <Download size={20} />
                Resume
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-10 flex flex-col justify-center shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_30px_80px_rgba(59,130,246,.45)]"
          >

            <h3 className="text-4xl font-bold">
              Looking for a Laravel Developer?
            </h3>

            <p className="mt-6 text-lg leading-8 text-white/90">
              I specialize in building scalable, secure and high-performance web applications using Laravel and modern backend technologies.

              ✔ Laravel Web Applications

              ✔ RESTful APIs

              ✔ CRM & ERP Solutions

              ✔ SaaS Platforms

              ✔ Educational Portals

              ✔ E-Commerce Systems

              ✔ Payment Gateway Integration

              ✔ Third-Party API Integration

              ✔ Authentication & Authorization

              ✔ Queue Jobs & Background Processing

              ✔ Database Design & Optimization

              ✔ Performance Optimization
            </p>

            <a
              href="mailto:grgovind1992@gmail.com"
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-110 hover:bg-yellow-300 hover:shadow-2xl"
            >
              🚀 Hire Me
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}