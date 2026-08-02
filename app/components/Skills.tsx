"use client";

import { motion } from "framer-motion";
import {
  Server,
  Database,
  Code2,
  Wrench,
  Link2,
  Brain,
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    color: "text-blue-500",
    skills: [
      "Laravel",
      "PHP",
      "REST API",
      "MVC Architecture",
      "OOP",
      "Authentication",
      "Authorization",
      "Laravel Queue",
      "Payment Gateway",
      "Third-Party APIs",
      "API Development",
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "text-green-500",
    skills: [
      "MySQL",
      "Database Design",
      "Eloquent ORM",
      "Relationships",
      "Query Optimization",
      "Indexes",
      "Migrations",
      "Seeders",
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    color: "text-pink-500",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Ajax",
      "jQuery",
      "Bootstrap",
      "Tailwind CSS",
      "ReactJS",
      "AngularJS",
      "Responsive Design",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "text-orange-500",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Composer",
      "NPM",
      "Vite",
      "VS Code",
      "Jira",
    ],
  },
  {
    title: "Integrations",
    icon: Link2,
    color: "text-cyan-500",
    skills: [
      "Stripe",
      "Google Maps API",
      "Agora",
      "Social Login",
      "Email OTP",
      "CSV Import / Export",
      "Notifications",
      "Cloudinary",
    ],
  },
  {
    title: "Currently Learning",
    icon: Brain,
    color: "text-purple-500",
    skills: [
      "AI Integration",
      "OpenAI API",
      "Node.js",
      "Express.js",
      "Next.js",
      "Advanced React",
      "System Design",
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

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            My <span className="text-blue-500">Skills</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-center text-lg text-gray-400 leading-8">
            Skilled in developing secure, scalable and high-performance web
            applications using
            <span className="text-white font-semibold">
              {" "}Laravel, PHP, MySQL, REST APIs and JavaScript
            </span>.
            Passionate about building clean backend architectures while
            continuously learning
            <span className="text-blue-400 font-semibold">
              {" "}AI Integration, Node.js and Modern Web Technologies.
            </span>
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {skillCategories.map((category, index) => {

            const Icon = category.icon;

            return (

              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition-all duration-500 hover:border-blue-500 hover:shadow-[0_20px_60px_rgba(37,99,235,.25)]"
              >

                {/* Icon */}

                <div className="flex items-center gap-4 mb-6">

                  <div className="h-14 w-14 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600 transition">

                    <Icon
                      size={28}
                      className={`${category.color} group-hover:text-white`}
                    />

                  </div>

                  <h3 className="text-2xl font-bold">
                    {category.title}
                  </h3>

                </div>

                {/* Skills */}

                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill) => (

                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="rounded-full border border-white/10 bg-[#0d1428] px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white cursor-default"
                    >
                      {skill}
                    </motion.span>

                  ))}

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}