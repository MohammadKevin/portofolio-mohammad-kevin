import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <section className="max-w-5xl">
            <p className="text-xs uppercase tracking-widest text-blue-400/80">
                Work
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
                Selected Projects
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-300">
                A curated selection of projects showcasing my experience in
                building <span className="text-white font-medium">secure backend systems</span>{" "}
                and scalable fullstack web applications.
            </p>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-500/60 to-transparent" />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
                <ProjectCard
                    title="Secure REST API"
                    tech="Node.js · Express · Prisma · JWT · MySQL"
                    description="Role-based authentication system with secure CRUD operations and scalable API architecture."
                />

                <ProjectCard
                    title="Admin Dashboard"
                    tech="Next.js · Tailwind CSS · Protected Routes"
                    description="Admin dashboard with authentication, clean UI, and a maintainable project structure."
                />

                <ProjectCard
                    title="Authentication System"
                    tech="JWT · bcrypt · REST API"
                    description="Complete authentication flow including login, registration, token refresh, and secure password hashing."
                />

                <ProjectCard
                    title="Portfolio Website"
                    tech="Next.js · TypeScript · Tailwind CSS"
                    description="Personal portfolio designed to present projects, skills, and experience with a modern UI."
                />
            </div>
        </section>
    );
}