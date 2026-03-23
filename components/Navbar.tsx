"use client"

import { useState } from "react"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="h-[70px] sticky top-0 z-50 backdrop-blur-xl bg-[#0a192f]/80 border-b border-white/10">
            <div className="w-full h-full px-6 md:px-12 flex items-center justify-between">
                <h1 className="text-[26px] font-semibold tracking-tight flex items-baseline gap-1">
                    <span className="text-[25px] text-blue-400">Mohammad</span>
                    <span className="text-[24px] text-white/80">Kevin</span>
                </h1>

                <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-zinc-300">
                    <Link href="/" className="hover:text-blue-400 transition">Home</Link>
                    <Link href="#about" className="hover:text-blue-400 transition">About</Link>
                    <Link href="#skills" className="hover:text-blue-400 transition">Skills</Link>
                    <Link href="#projects" className="hover:text-blue-400 transition">Projects</Link>
                    <Link href="#certifications" className="hover:text-blue-400 transition">Certificates</Link>
                    <Link
                        href="#contact"
                        className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition text-white shadow-lg shadow-blue-500/30"
                    >
                        Contact
                    </Link>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiX className="w-6 h-6 text-white" /> : <HiMenu className="w-6 h-6 text-white" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#0a192f]/95 w-full absolute top-[70px] left-0 flex flex-col items-center gap-6 py-6 text-zinc-300 text-lg">
                    <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition">Home</Link>
                    <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition">About</Link>
                    <Link href="#skills" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition">Skills</Link>
                    <Link href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition">Projects</Link>
                    <Link href="#certifications" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition">Certificates</Link>
                    <Link
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition text-white shadow-lg shadow-blue-500/30"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    )
}