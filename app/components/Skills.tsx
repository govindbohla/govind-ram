"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend",
    skills: [
      "PHP",
      "Laravel",
      "REST API",
      "OOP",
      "AI API Integration",
      "Third-Party Integration",
    ],
  },
  {
    title: "Database",
    skills: [
      "MySQL",
      "Database Design",
      "Query Optimization",
      "Migrations",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "JavaScript",
      "Ajax",
      "jQuery",
      "HTML5",
      "CSS3",
      "ReactJS",
      "AngularJS",
      "Responsive Design",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Jira",
      "Composer",
      "NPM",
      "Vite",
    ],
  },
  {
    title: "Integrations",
    skills: [
      "Stripe",
      "Google Maps API",
      "Agora",
      "Social Login",
      "Email OTP",
      "CSV Import/Export",
      "Laravel Queue",
      "Notifications",
      "AI Integration",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center">
            My <span className="text-blue-500">Skills</span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-3xl mx-auto">
            Experienced in Laravel, PHP, MySQL and modern backend technologies, with
            continuous learning in AI Integration, Node.js and intelligent application
            development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {skillCategories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,.25)] transition-all duration-300"
            >

              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-[#0d1428] border border-white/10 text-sm hover:bg-blue-600 hover:border-blue-500 transition cursor-default"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}