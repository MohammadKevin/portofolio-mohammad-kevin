export default function Contact() {
    return (
        <section className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-blue-400/80">
                Contact
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
                Let’s Work Together
            </h2>

            <p className="mt-4 text-zinc-300 leading-relaxed">
                Interested in collaborating, freelance work, or discussing a project?
                I’m always open to new opportunities and conversations.
            </p>

            <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-500/60 to-transparent" />

            <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3 text-zinc-300">
                    <span className="text-blue-400">📧</span>
                    <a
                        href="mailto:kvn4.200581@gmail.com"
                        className="hover:text-white transition"
                    >
                        kvn4.200581@gmail.com
                    </a>
                </li>

                <li className="flex items-center gap-3 text-zinc-300">
                    <span className="text-blue-400">💻</span>
                    <a
                        href="https://github.com/MohammadKevin"
                        target="_blank"
                        className="hover:text-white transition"
                    >
                        github.com/MohammadKevin
                    </a>
                </li>

                <li className="flex items-center gap-3 text-zinc-300">
                    <span className="text-blue-400">💬</span>
                    <a
                        href="https://wa.me/6282131588846"
                        target="_blank"
                        className="hover:text-white transition"
                    >
                        +62 821-3158-8846
                    </a>
                </li>
            </ul>
        </section>
    );
}