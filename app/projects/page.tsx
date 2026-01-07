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
                    title="Admin Dashboard Fullstack"
                    tech="Next.js · Node.js · Express · Prisma · JWT · MySQL"
                    description="Fullstack admin dashboard dengan sistem autentikasi berbasis role, REST API aman, dan halaman admin yang diproteksi."
                />

                <ProjectCard
                    title="Portfolio Website"
                    tech="Next.js · TypeScript · Tailwind CSS"
                    description="Website portofolio pribadi untuk menampilkan profil, skill, dan project dengan desain modern dan responsif."
                />

                <ProjectCard
                    title="Attendance System"
                    tech="Web App · Database · CRUD"
                    description="Sistem presensi digital untuk mencatat kehadiran pengguna secara otomatis dan terstruktur."
                />

                <ProjectCard
                    title="Store Management System"
                    tech="Web App · CRUD · Database"
                    description="Aplikasi manajemen toko sederhana untuk pengelolaan produk dan pencatatan transaksi UMKM."
                />

                <ProjectCard
                    title="Voice Command Project"
                    tech="Python · Voice Recognition"
                    description="Project eksperimen Python berbasis voice command untuk interaksi dan otomatisasi sederhana."
                />

            </div>
        </section>
    );
}