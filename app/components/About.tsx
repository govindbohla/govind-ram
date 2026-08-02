"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "3.7+",
    title: "Years Experience",
  },
  {
    number: "10+",
    title: "Projects Delivered",
  },
  {
    number: "12+",
    title: "Technologies",
  },
  {
    number: "AI",
    title: "Learning AI, Node.js & React",
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

        <p className="text-center text-gray-400 mt-8 max-w-4xl mx-auto text-lg leading-8">
          I'm a <span className="font-semibold text-white">Laravel Backend Developer</span> with{" "}
          <span className="font-semibold text-blue-400">3 years 7 months</span> of professional
          experience building secure, scalable, and high-performance web applications.
          I specialize in <span className="font-semibold text-white">Laravel, PHP, MySQL, RESTful APIs, and third-party integrations</span>,
          with hands-on experience in CRM systems, educational platforms, and e-commerce
          solutions. Passionate about clean architecture, performance optimization, and
          continuously expanding my expertise in <span className="font-semibold text-white">AI Integration, Node.js, and ReactJS</span> to build next-generation web applications.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {stats.map((item) => (

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              key={item.title}
              className="group rounded-3xl border border-slate-700 text-center bg-[#0B1220] p-8 transition-all duration-500 hover:border-blue-500 hover:shadow-[0_25px_60px_rgba(37,99,235,.20)]"
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