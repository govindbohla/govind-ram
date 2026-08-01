"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "3.5+",
    title: "Years Experience",
  },
  {
    number: "10+",
    title: "Projects",
  },
  {
    number: "12+",
    title: "Technologies",
  },
  {
    number: "2026",
    title: "Learning AI , Node.js & ReactJS",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-center"
        >
          About Me
        </motion.h2>

        <p className="text-center text-gray-400 mt-8 max-w-3xl mx-auto leading-8">
        I am a Laravel Backend Developer with 3.5+ years of professional
        experience building scalable web applications, CRM systems,
        e-commerce platforms and backend solutions using Laravel, PHP and
        MySQL. I am currently expanding my expertise in AI Integration and
        Node.js to build modern intelligent applications.
      </p>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {stats.map((item) => (

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              key={item.title}
              className="rounded-3xl p-8 bg-white/5 border border-white/10 text-center"
            >

              <h3 className="text-5xl font-bold text-blue-500">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}   