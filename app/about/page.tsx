"use client";

import { useState } from "react";

const techDetails: Record<string, string> = {
    "Node.js":
        "JavaScript runtime for building fast and scalable server-side applications.",
    "Express.js":
        "Minimal and flexible Node.js framework for building RESTful APIs.",
    "Next.js":
        "React framework for building fullstack web applications with server-side rendering.",
    "Prisma ORM":
        "Type-safe ORM that simplifies database access and schema management.",
    "MySQL":
        "Relational database system used for structured and reliable data storage.",
    "JWT Authentication":
        "Token-based authentication method for securing APIs and managing user sessions.",
};

export default function About() {
    const [activeTech, setActiveTech] = useState<string | null>(null);

    return (
        <section className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-blue-400/80">
                About
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
                Building Reliable & Scalable Systems
            </h2>
            <p className="mt-6 text-zinc-300 leading-relaxed">
                I’m a{" "}
                <span className="font-medium text-white">
                    backend-focused developer
                </span>{" "}
                specializing in{" "}
                <span className="text-white font-medium">
                    secure REST APIs
                </span>
                , authentication systems, and scalable web architectures.
            </p>

            <p className="mt-4 text-zinc-400 leading-relaxed">
                My approach emphasizes clean code, maintainability, and
                performance-driven design with security as a foundation.
            </p>
            <div className="mt-10 h-px w-full bg-gradient-to-r from-blue-500/60 to-transparent" />

            <div className="mt-10">
                <h3 className="text-lg font-semibold text-white">
                    Core Technologies
                </h3>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    {Object.keys(techDetails).map((tech) => {
                        const isOpen = activeTech === tech;

                        return (
                            <div key={tech}>
                                <button
                                    onClick={() =>
                                        setActiveTech(isOpen ? null : tech)
                                    }
                                    className={`w-full text-left rounded-lg border px-3 py-2 transition
                    ${isOpen
                                            ? "border-blue-500 text-white"
                                            : "border-zinc-800 text-zinc-300 hover:border-blue-500/60"
                                        }`}
                                >
                                    {tech}
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300
                    ${isOpen
                                            ? "max-h-40 opacity-100 mt-2"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        {techDetails[tech]}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}