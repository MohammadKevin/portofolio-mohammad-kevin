export default function Certificates() {
    return (
        <section className="max-w-3xl">
            {/* Eyebrow */}
            <p className="text-xs uppercase tracking-widest text-blue-400/80">
                Certificates
            </p>

            {/* Title */}
            <h2 className="mt-2 text-3xl font-bold text-white">
                Professional Certifications
            </h2>

            <p className="mt-4 text-zinc-300 max-w-xl">
                Certifications I’ve earned to strengthen my skills in software
                development and backend engineering.
            </p>

            {/* Divider */}

            <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-500/60 to-transparent" />

            {/* Certificate Card */}
            {/*ini sert more certificate cards as needed*/}
            <div className="mt-10 space-y-6">
                <div className="rounded-xl border border-zinc-800 p-6 hover:border-blue-500/60 transition">
                    <h3 className="text-lg font-semibold text-white">
                        Belajar Dasar Pemrograman JavaScript
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                        Dicoding Indonesia · 2025
                    </p>

                    <p className="mt-3 text-sm text-zinc-300">
                        Covers JavaScript fundamentals, logic, control flow, and
                        best practices for modern web development.
                    </p>

                    <a
                        href="https://www.dicoding.com/certificates/N9ZO2170RPG5"
                        target="_blank"
                        className="mt-4 inline-block text-sm text-blue-400 hover:underline"
                    >
                        View Certificate →
                    </a>
                </div>
            </div>
        </section>
    );
}