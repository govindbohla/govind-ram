"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Lock,
  CheckCircle2,
  Building2,
} from "lucide-react";

const projects = [
  {
    emoji: "🎓",
    title: "Vocational Training Hub",
    subtitle: "Learning Management System (LMS)",
    company: "2M Infotech Pvt. Ltd.",
    role: "Laravel Backend Developer",
    duration: "2025 - 2026",
    description:
      "Developed a scalable education platform with role-based access, course management, bundles, ticketing, internal chat, notifications, and secure REST APIs.",
    live: "https://vocationaltraininghub.com",
    tech: [
      "Laravel",
      "AngularJS",
      "PHP",
      "MySQL",
      "REST API",
      "Bootstrap",
      "Queue",
    ],
    highlights: [
      "10K+ Users Supported",
      "Role Based Access",
      "REST APIs",
      "Queue Jobs",
    ],
    features: [
      "Course Management",
      "Bundle Management",
      "Ticket Management",
      "Internal Chat",
      "Notifications",
      "Queue Jobs",
      "Artisan Commands",
    ],
  },

  {
    emoji: "🏆",
    title: "Aim For",
    subtitle: "Sports Coaching Platform",
    company: "2M Infotech Pvt. Ltd.",
    role: "Laravel Backend Developer",
    duration: "2025",
    description:
      "Built a modern sports coaching platform with player tracking, assessments, authentication, and reporting.",
    live: "https://aim-for.com",
    tech: [
      "Laravel",
      "ReactJS",
      "REST API",
      "MySQL",
    ],
    highlights: [
      "Player Management",
      "Coach Dashboard",
      "Assessment Module",
    ],
    features: [
      "Authentication",
      "Coach Dashboard",
      "Assessment Module",
      "Player Management",
      "Performance Reports",
    ],
  },

  {
    emoji: "🛒",
    title: "Mohally (Sahlbuy)",
    subtitle: "Multi Vendor E-Commerce",
    company: "ABJIMA IT Consulting Pvt. Ltd.",
    role: "Laravel Backend Developer",
    duration: "2023",
    description:
      "Developed a scalable e-commerce platform with payment integration, product management, and order processing.",
    live: "https://sahlbuy.com",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "Stripe",
      "JavaScript",
    ],
    highlights: [
      "Stripe Payment",
      "Inventory",
      "Order System",
    ],
    features: [
      "Product Management",
      "Categories",
      "Coupons",
      "Checkout",
      "Inventory",
      "Admin Panel",
    ],
  },

  {
    emoji: "💕",
    title: "DilKeBaat",
    subtitle: "Dating Application",
    company: "ABJIMA IT Consulting Pvt. Ltd.",
    role: "Laravel Backend Developer",
    duration: "2023",
    description:
      "Designed and developed REST APIs for a dating application with social login, location search, and real-time communication.",
    live: "",
    tech: [
      "Laravel",
      "REST API",
      "Google Maps API",
      "Agora",
    ],
    highlights: [
      "35+ APIs",
      "Google Login",
      "Live Chat",
    ],
    features: [
      "REST APIs",
      "Social Login",
      "Location Search",
      "Live Chat",
      "Profile Management",
    ],
  },

  {
    emoji: "📧",
    title: "Tra Email",
    subtitle: "Bulk Email Management",
    company: "ABJIMA IT Consulting Pvt. Ltd.",
    role: "Laravel Backend Developer",
    duration: "2023",
    description:
      "Created a bulk email platform supporting CSV import/export, queues, attachments, and background processing.",
    live: "",
    tech: [
      "Laravel",
      "Queue",
      "CSV",
      "MySQL",
    ],
    highlights: [
      "Bulk Email",
      "Queue",
      "CSV",
    ],
    features: [
      "Bulk Email",
      "CSV Import",
      "CSV Export",
      "Queue Processing",
      "Admin Panel",
    ],
  },

  {
    emoji: "✈️",
    title: "Saathi App",
    subtitle: "Travel Booking Platform",
    company: "ABJIMA IT Consulting Pvt. Ltd.",
    role: "Laravel Backend Developer",
    duration: "2022",
    description:
      "Developed backend APIs and booking management for a travel platform with Google Maps and OTP authentication.",
    live: "",
    tech: [
      "Laravel",
      "REST API",
      "Google Maps API",
      "MySQL",
    ],
    highlights: [
      "OTP Login",
      "Google Maps",
      "REST APIs",
    ],
    features: [
      "Travel Booking",
      "OTP Authentication",
      "REST APIs",
      "Google Maps",
      "Admin Panel",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-400">
            Enterprise-grade applications developed using
            <span className="font-semibold text-white">
              {" "}Laravel, PHP, MySQL, REST APIs, ReactJS & AngularJS
            </span>
            , delivering scalable, secure and high-performance business solutions.
          </p>

        </motion.div>

        {/* Project Grid */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-slate-700 bg-[#0B1220] p-8 transition-all duration-500 hover:border-blue-500 hover:shadow-[0_25px_60px_rgba(37,99,235,.20)]"
            >

              {/* Project Emoji */}

              <div className="mb-6 text-6xl">
                {project.emoji}
              </div>

              {/* Title */}

              <h3 className="text-3xl font-bold">
                {project.title}
              </h3>

              <p className="mt-2 text-blue-400 font-medium">
                {project.subtitle}
              </p>

              {/* Description */}

              <p className="mt-5 leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Company */}

              <div className="mt-6 flex items-center gap-3 text-gray-300">

                <Building2
                  size={18}
                  className="text-blue-400"
                />

                <span>{project.company}</span>

              </div>

              {/* Role & Duration */}

              <div className="mt-6 flex flex-wrap gap-3">

                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                  👨‍💻 {project.role}
                </span>

                <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-300">
                  📅 {project.duration}
                </span>

              </div>

              {/* Tech */}

              <div className="mt-8">

                <h4 className="mb-4 font-semibold text-white">
                  Tech Stack
                </h4>

                <div className="flex flex-wrap gap-3">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 transition hover:bg-blue-600 hover:text-white"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

              {/* Highlights */}

              <div className="mt-8">

                <h4 className="mb-4 font-semibold text-white">
                  Highlights
                </h4>

                <div className="flex flex-wrap gap-3">

                  {project.highlights.map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-2 text-sm text-green-300"
                    >
                      ✅ {item}
                    </span>

                  ))}

                </div>

              </div>

              {/* Features */}

              <div className="mt-8">

                <h4 className="mb-5 text-lg font-semibold text-white">
                  Key Features
                </h4>

                <div className="grid gap-3 sm:grid-cols-2">

                  {project.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 p-3"
                    >

                      <CheckCircle2
                        size={18}
                        className="text-green-400"
                      />

                      <span className="text-gray-300">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                {project.live ? (

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
                  >
                    <ExternalLink size={18} />
                    Live Website
                  </a>

                ) : (

                  <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 text-gray-400">
                    <ExternalLink size={18} />
                    Private Project
                  </div>

                )}

                <div className="flex items-center justify-center gap-2 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-6 py-3 text-yellow-300">
                  <Lock size={18} />
                  NDA / Private Repository
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}