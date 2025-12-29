"use client";

import Link from "next/link";

export default function Footer() {
return (
    <footer className="mt-24 border-t border-zinc-800 py-10 text-center text-xs text-zinc-400">
        <p>
            © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">
            Mohammad Kevin
        </span>
        . Built with{" "}
        <span className="text-blue-400">
            Next.js
        </span>
        </p>
        <div className="mt-4 flex justify-center gap-6">
        <Link
            href="https://github.com/username"
            className="hover:text-blue-400 transition"
            target="_blank"
        >
            GitHub
        </Link>
        <Link
            href="https://linkedin.com/in/username"
            className="hover:text-blue-400 transition"
            target="_blank"
        >
            LinkedIn
        </Link>
        <Link
            href="mailto:your@email.com"
            className="hover:text-blue-400 transition"
        >
            Email
        </Link>
        </div>
        </footer>
    );
}
