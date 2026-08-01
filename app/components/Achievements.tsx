"use client";

import { motion } from "framer-motion";
import {
    Award,
    Briefcase,
    Code,
    Database,
    Globe,
    Server,
} from "lucide-react";

const achievements = [
    {
        icon: <Briefcase size={34} />,
        title: "3+ Years",
        subtitle: "Professional Experience",
    },
    {
        icon: <Code size={34} />,
        title: "80+",
        subtitle: "REST APIs",
    },
    {
        icon: <Database size={34} />,
        title: "15+",
        subtitle: "Projects",
    },
    {
        icon: <Server size={34} />,
        title: "Laravel",
        subtitle: "Backend Expert",
    },
    {
        icon: <Globe size={34} />,
        title: "Third Party",
        subtitle: "API Integration",
    },
    {
        icon: <Award size={34} />,
        title: "Clean Code",
        subtitle: "Best Practices",
    },
];

export default function Achievements() {
    return (
        <section
            id="achievements"
            className="py-28 bg-[#050816] text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center">
                    Achievements
                </h2>

                <p className="text-center text-gray-400 mt-5">
                    Highlights of my professional journey.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

                    {achievements.map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            className="rounded-3xl bg-white/5 border border-white/10 p-8"
                        >

                            <div className="text-blue-500">
                                {item.icon}
                            </div>

                            <h3 className="text-3xl font-bold mt-5">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 mt-3">
                                {item.subtitle}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}