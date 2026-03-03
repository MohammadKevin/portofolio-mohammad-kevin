"use client"

import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="h-[70px] sticky top-0 z-50 backdrop-blur-xl bg-[#0a192f]/80 border-b border-white/10">
            <div className="w-full h-full px-12 flex items-center justify-between">

                <h1 className="text-[26px] font-semibold tracking-tight flex items-baseline gap-1">
                    <span className="text-blue-400">Kevin</span>
                    <span className="text-[18px] text-white/80">.exe</span>
                </h1>

                <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-zinc-300">
                    <Link href="/" className="hover:text-blue-400 transition">
                        Home
                    </Link>

                    <Link href="#about" className="hover:text-blue-400 transition">
                        About
                    </Link>

                    <Link href="#skills" className="hover:text-blue-400 transition">
                        Skills
                    </Link>

                    <Link href="#projects" className="hover:text-blue-400 transition">
                        Projects
                    </Link>

                    <Link href="#certifications" className="hover:text-blue-400 transition">
                        Certificates
                    </Link>

                    <Link
                        href="#contact"
                        className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition text-white shadow-lg shadow-blue-500/30"
                    >
                        Contact
                    </Link>
                </div>

            </div>
        </nav>
    )
}