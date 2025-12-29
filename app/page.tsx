export default function Home() {
  return (
    <section className="mt-32 max-w-3xl">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight glow">
        Backend & Fullstack <br />
        <span className="text-blue-400">Developer</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-zinc-300">
        I build{" "}
        <span className="font-medium text-white">secure</span> and{" "}
        <span className="font-medium text-white">scalable</span> web applications
        with modern backend technologies.
      </p>
      <p className="mt-3 text-sm text-zinc-400">
        Node.js · Express · Prisma · REST API · Next.js
      </p>
      <div className="mt-8 h-[2px] w-24 rounded bg-blue-500/70" />
      <div className="mt-10 flex flex-wrap gap-4">
        <a href="/projects" className="btn-primary">
          View Projects
        </a>
        <a href="/contact" className="btn-outline">
          Contact Me
        </a>
      </div>
    </section>
  );
}