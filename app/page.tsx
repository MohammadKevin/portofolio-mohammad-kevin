"use client"

import Image from "next/image"

export default function Home() {
  const projects = [
    {
      title: "Kos Hunter – Booking System",
      desc: "Modern boarding house booking system with authentication, room management, booking history, and secure REST API integration.",
      tech: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
      image: "/kost-hunter.png",
    },
    {
      title: "mini E-commerce Platform",
      desc: "Full-featured e-commerce platform with product management, shopping cart, user authentication, and secure payment integration.",
      tech: ["Node.js", "Express.js", "JWT", "MySQL"],
      image: "/3.png",
    },
    {
      title: "Laundry Management System",
      desc: "Comprehensive laundry management system with order tracking, inventory management, user authentication, and REST API integration.",
      tech: ["Next.js", "Tailwind", "API Integration"],
      image: "/laundry-go.png",
    },
  ]

  const certificates = [
    {
      title: "Introduction to Financial Literacy",
      issuer: "Dicoding Indonesia",
      description:
        "Completed a course on financial literacy covering budgeting, personal finance management, saving strategies, and basic financial planning concepts.",
      year: "2025",
      image: "/certificate-dicoding.png",
    },
    {
      title: "Top 10 – Future Founders League 2026",
      issuer: "Forum Bisnis Cendekia",
      description:
        "Ranked Top 10 in the national Future Founders League 2026 Business Model Canvas competition, showcasing strong capabilities in problem-solving, business modeling, and startup strategy development.",
      year: "2026",
      image: "/certificate1.png",
    },
    {
      title: "Certificate Not Available",
      issuer: "Unknown",
      description:
        "Certification data is currently not available or has not been uploaded yet.",
      year: "-",
      status: "Not Found",
      image: "/image1.png",
    },
  ]

  return (
    <>
      <section id="home" className="w-full pt-28 pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-xs uppercase tracking-[6px] text-blue-400 font-semibold mb-6">
              Welcome to my Portfolio
            </p>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Mohammad Kevin
              </span>{" "}
              👋
            </h1>

            <h2 className="mt-6 text-lg md:text-xl text-gray-300 font-medium">
              Backend <span className="text-[#3b8cd8]">Developer</span>
            </h2>

            <p className="mt-6 text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I build{" "}
              <span className="text-blue-300 font-medium">
                secure, scalable REST APIs
              </span>{" "}
              and modern with strong focus on clean architecture
              and performance optimization.
            </p>

            <div className="mt-10 flex flex-wrap gap-5 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-xl text-white font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                View Projects
              </button>

              <button className="px-8 py-3 border border-white/20 hover:bg-white/5 transition rounded-xl text-white font-medium text-sm backdrop-blur-md">
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-3xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full p-[6px] bg-gradient-to-tr from-blue-500 via-blue-400 to-cyan-400 shadow-2xl shadow-blue-500/30">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#335992]">
                  <Image
                    src="/my.png"
                    alt="Mohammad Kevin"
                    fill
                    priority
                    className="object-cover scale-100 group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-500">
              About Me
            </h2>
            <p className="text-gray-400 mt-4 max-w-3xl text-[18px] leading-relaxed">
              I&apos;m a passionate backend developer with some experience in the frontend space, with a strong focus on building secure, scalable, and high-performance applications. With expertise in REST API design, clean architecture, and modern web technologies, I strive to create efficient solutions that meet user needs and industry standards.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Technologies and tools I use to design, develop, and deploy scalable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <SkillCard
              title="Backend"
              items={["Node.js", "Express.js", "NestJS", "Prisma ORM", "REST API Design"]}
            />
            <SkillCard
              title="Frontend"
              items={["React.js", "Next.js", "Tailwind CSS", "Responsive UI Design", "API Integration", "Authentication & Authorization", "HTML & CSS"]}
            />
            <SkillCard
              title="Tools & Others"
              items={["PostgreSQL", "Git & GitHub", "Docker", "Clean Architecture"]}
            />
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500">
              Featured Projects
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Selected projects that demonstrate my expertise in backend systems and fullstack development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/40 transition group"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="w-full py-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500">
              Certifications
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Professional certifications that strengthen my technical foundation and industry readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/40 transition group"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 mt-3">
                    {cert.issuer}
                  </p>

                  <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  <p className="text-gray-500 text-sm mt-4">
                    {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/40 transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-400">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}