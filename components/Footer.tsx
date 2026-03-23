"use client"

import Link from "next/link"

export default function Footer() {
    return (
        <footer id="contact" className="relative mt-32 border-t border-white/10 bg-[#0a192f] overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

                <div className="grid md:grid-cols-3 gap-12">

                    <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Mohammad Kevin
                        </h3>
                        <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
                            Backend developer with a passion for building secure, scalable, and high-performance applications. I specialize in REST API design, clean architecture, and modern web technologies to create efficient solutions that meet user needs and industry standards.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <Link href="#about" className="hover:text-blue-400 transition">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#skills" className="hover:text-blue-400 transition">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="hover:text-blue-400 transition">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#certifications" className="hover:text-blue-400 transition">
                                    Certifications
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Connect
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <Link
                                    href="https://github.com/MohammadKevin"
                                    target="_blank"
                                    className="hover:text-blue-400 transition"
                                >
                                    GitHub
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.linkedin.com/in/muhamad-kevin-arif-rudianto-945733347/"
                                    target="_blank"
                                    className="hover:text-blue-400 transition"
                                >
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="mailto:kvn4.200581@gmail.com"
                                    className="hover:text-blue-400 transition"
                                >
                                    Email
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">

                    <p>
                        © {new Date().getFullYear()}{" "}
                        <span className="text-white font-medium">
                            Mohammad Kevin
                        </span>
                        . All rights reserved.
                    </p>

                    <p className="text-gray-500">
                        Built with{" "}
                        <span className="text-blue-400 font-medium">
                            Next.js
                        </span>{" "}
                        & Tailwind CSS
                    </p>

                </div>
            </div>
        </footer>
    )
}