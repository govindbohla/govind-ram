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
    subtitle: "Education Management Platform",
    company: "2M Infotech",
    live: "https://vocationaltraininghub.com",
    tech: [
      "Laravel",
      "AngularJS",
      "MySQL",
      "REST API",
      "Bootstrap",
      "Queue",
    ],
    features: [
      "Role Based System",
      "Course Management",
      "Bundle Management",
      "Ticket Management",
      "Internal Chat",
      "Notifications",
      "Artisan Commands",
      "Queue Jobs",
    ],
  },
  {
    emoji: "🏆",
    title: "Aim For",
    subtitle: "Sports Coaching Platform",
    company: "2M Infotech",
    live: "https://aim-for.com",
    tech: [
      "Laravel",
      "ReactJS",
      "MySQL",
      "REST API",
    ],
    features: [
      "Coach Dashboard",
      "Assessment Module",
      "Player Management",
      "Team Management",
      "Performance Reports",
      "Authentication",
    ],
  },
  {
    emoji: "🛒",
    title: "Mohally (Sahlbuy)",
    subtitle: "E-Commerce Platform",
    company: "ABJIMA IT Consulting",
    live: "https://sahlbuy.com",
    tech: [
      "Laravel",
      "MySQL",
      "Stripe",
      "JavaScript",
    ],
    features: [
      "Product Management",
      "Categories",
      "Coupons",
      "Inventory",
      "Checkout",
      "Admin Panel",
      "Order Management",
    ],
  },
  {
    emoji: "💕",
    title: "DilKeBaat",
    subtitle: "Dating Application",
    company: "ABJIMA IT Consulting",
    live: "",
    tech: [
      "Laravel",
      "REST API",
      "Google Maps API",
      "Agora",
    ],
    features: [
      "35+ REST APIs",
      "Google Login",
      "Facebook Login",
      "Location Search",
      "Live Chat",
      "Profile Management",
    ],
  },
  {
    emoji: "📧",
    title: "Tra Email",
    subtitle: "Bulk Email Platform",
    company: "ABJIMA IT Consulting",
    live: "",
    tech: [
      "Laravel",
      "Queue",
      "CSV",
      "MySQL",
    ],
    features: [
      "Bulk Email",
      "CSV Import",
      "CSV Export",
      "Attachments",
      "Queue Processing",
      "Admin Panel",
    ],
  },
  {
    emoji: "✈️",
    title: "Saathi App",
    subtitle: "Travel Platform",
    company: "ABJIMA IT Consulting",
    live: "",
    tech: [
      "Laravel",
      "MySQL",
      "Google Maps API",
      "REST API",
    ],
    features: [
      "Travel Booking",
      "OTP Authentication",
      "REST APIs",
      "Admin Panel",
      "Google Maps",
      "User Management",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-5xl font-bold">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-gray-400 text-lg">
            Real-world Laravel applications built during my professional
            experience in education, e-commerce, travel, dating and CRM
            platforms.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.25)]"
            >

              <div className="mb-6 text-6xl">
                {project.emoji}
              </div>

              <h3 className="text-3xl font-bold">
                {project.title}
              </h3>

              <p className="mt-2 text-blue-400">
                {project.subtitle}
              </p>

              <div className="mt-4 flex items-center gap-2 text-gray-400">
                <Building2 size={18} />
                {project.company}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold text-blue-300">
                  Key Features
                </h4>

                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-green-400"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-700"
                  >
                    <ExternalLink size={18} />
                    Live Website
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-800 px-5 py-3 text-gray-400">
                    <ExternalLink size={18} />
                    Not Public
                  </span>
                )}

                <span className="inline-flex items-center gap-2 rounded-xl border border-yellow-600 bg-yellow-500/10 px-5 py-3 text-yellow-300">
                  <Lock size={18} />
                  Private Repository
                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}