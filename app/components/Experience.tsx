"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "2M Infotech Pvt. Ltd.",
    role: "Laravel Developer",
    period: "April 2024 – June 2026",
    location: "Jaipur, Rajasthan",
    projects: [
      "Vocational Training Hub (Laravel + AngularJS)",
      "Aim For (Laravel + ReactJS)",
    ],
    achievements: [
      "Developed role-based education platform with courses, bundles and user management.",
      "Built Ticket Management, Chat and Notification systems.",
      "Implemented Laravel Jobs, Queues and Artisan Commands.",
      "Developed REST APIs and reusable backend modules.",
      "Worked with ReactJS and AngularJS frontend integration.",
    ],
  },
  {
    company: "ABJIMA IT Consulting Pvt. Ltd.",
    role: "Laravel Developer",
    period: "September 2022 – March 2024",
    location: "Jaipur, Rajasthan",
    projects: [
      "Sahlbuy (E-Commerce)",
      "DilKeBaat",
      "Tra-Email",
      "Saathi App",
    ],
    achievements: [
      "Developed complete E-Commerce backend.",
      "Integrated Stripe Payment Gateway.",
      "Developed REST APIs.",
      "Integrated Google Maps API and Agora.",
      "Created Bulk Email and CSV Import/Export modules.",
      "Optimized MySQL queries and application performance.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#08111f] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl font-bold text-center">
            Work <span className="text-blue-500">Experience</span>
          </h2>

          <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
            My professional journey as a Laravel Backend Developer,
            building scalable web applications and REST APIs.
          </p>
        </motion.div>

        <div className="relative mt-20">

          {/* Timeline */}

          <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-600 hidden md:block" />

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * .2 }}
              className="relative md:pl-20 mb-16"
            >

              <div className="hidden md:flex absolute left-0 top-2 w-12 h-12 rounded-full bg-blue-600 items-center justify-center">
                <Briefcase />
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">

                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>

                <h4 className="text-blue-400 text-lg mt-1">
                  {exp.company}
                </h4>

                <div className="flex flex-wrap gap-6 text-gray-400 text-sm mt-4">

                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    {exp.period}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {exp.location}
                  </div>

                </div>

                <div className="mt-6">

                  <h5 className="font-semibold text-blue-300 mb-3">
                    Projects
                  </h5>

                  <div className="flex flex-wrap gap-3">

                    {exp.projects.map((project) => (
                      <span
                        key={project}
                        className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500"
                      >
                        {project}
                      </span>
                    ))}

                  </div>

                </div>

                <ul className="mt-8 space-y-3">

                  {exp.achievements.map((item) => (

                    <li
                      key={item}
                      className="flex gap-3 text-gray-300"
                    >
                      <span className="text-blue-400">✔</span>
                      {item}
                    </li>

                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}