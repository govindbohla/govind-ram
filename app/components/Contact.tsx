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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-5xl font-bold">
            Let's <span className="text-blue-500">Connect</span>
          </h2>

          <p className="mt-5 text-center text-gray-400 max-w-3xl mx-auto">
            I'm currently open to Laravel Backend Developer opportunities,
            freelance work and exciting software projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg p-8"
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
                className="rounded-xl bg-blue-600 px-5 py-3 flex items-center gap-2 hover:bg-blue-700 transition"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

              <a
                href="https://github.com/govindbohla"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-gray-700 px-5 py-3 flex items-center gap-2 hover:bg-gray-800 transition"
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-xl bg-green-600 px-5 py-3 flex items-center gap-2 hover:bg-green-700 transition"
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
            className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 flex flex-col justify-center"
          >

            <h3 className="text-4xl font-bold">
              Looking for a Laravel Developer?
            </h3>

            <p className="mt-6 text-lg leading-8">

              I have professional experience developing

              • Laravel Applications

              • REST APIs

              • CRM Systems

              • E-Commerce Platforms

              • Educational Platforms

              • Payment Gateway Integration

              • Third Party APIs

              • Queue Jobs

              • Database Design

              • Performance Optimization

            </p>

            <a
              href="mailto:grgovind1992@gmail.com"
              className="mt-10 inline-block w-fit rounded-full bg-white px-8 py-4 text-black font-semibold hover:bg-gray-200 transition"
            >
              Hire Me
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}