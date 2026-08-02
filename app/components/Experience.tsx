"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "2M Infotech Pvt. Ltd.",
    role: "Laravel Backend Developer",
    period: "Apr 2024 – Present",
    location: "Jaipur, Rajasthan",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "AngularJS",
      "ReactJS",
      "REST API",
    ],
    projects: [
      "Vocational Training Hub",
      "Aim For",
    ],
    achievements: [
      "Designed and developed scalable role-based educational platforms.",
      "Built RESTful APIs and reusable backend modules.",
      "Implemented Ticket Management, Chat, and Notification systems.",
      "Optimized database queries and application performance.",
      "Integrated Laravel Queues, Jobs, and scheduled tasks.",
      "Collaborated with frontend teams using AngularJS and ReactJS.",
    ],
  },

  {
    company: "ABJIMA IT Consulting Pvt. Ltd.",
    role: "Laravel Backend Developer",
    period: "Sep 2022 – Mar 2024",
    location: "Jaipur, Rajasthan",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "Stripe",
      "Google Maps API",
      "Agora",
    ],
    projects: [
      "Sahlbuy E-Commerce",
      "DilKeBaat",
      "Tra-Email",
      "Saathi App",
    ],
    achievements: [
      "Developed secure backend systems for multiple client projects.",
      "Integrated Stripe Payment Gateway and third-party APIs.",
      "Created scalable RESTful APIs for mobile and web applications.",
      "Implemented Google Maps API, Agora Video Calling, and Social Login.",
      "Developed CSV Import/Export and Bulk Email modules.",
      "Improved application performance through MySQL query optimization.",
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

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-400">
            Over <span className="font-semibold text-white">3 Years 7 Months</span> of professional experience
            building scalable <span className="text-blue-400">Laravel applications, RESTful APIs, CRM systems,
            SaaS platforms, and e-commerce solutions</span>, delivering clean architecture,
            optimized performance, and reliable backend systems.
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

              <div className="group rounded-3xl border border-slate-700 bg-[#0B1220] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(37,99,235,.20)]">

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
                       className="rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-600 hover:text-white"
                      >
                        {project}
                      </span>
                    ))}

                  </div>

                </div>
                <div className="mt-6">
                  <h5 className="mb-3 font-semibold text-blue-300">
                    Tech Stack
                  </h5>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-gray-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                      >
                        {tech}
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