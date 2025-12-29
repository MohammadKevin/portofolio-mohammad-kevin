"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b border-zinc-800">
            <div className="mx-auto max-w-6xl py-8 flex items-center justify-between">
                <h1 className="pl-4 text-2xl font-bold text-blue-400">
                    Kevin<span className="text-white">.dev</span>
                </h1>
                <div className="pr-4 flex items-center gap-8 text-base">
                    <Link href="/" className="hover:text-blue-400 transition">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-blue-400 transition">
                        About
                    </Link>
                    <Link href="/projects" className="hover:text-blue-400 transition">
                        Projects
                    </Link>
                    <Link href="/certificates" className="hover:text-blue-400 transition">
                        Certificates
                    </Link>

                    <Link href="/contact" className="hover:text-blue-400 transition">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}