"use client"

import Image from "next/image"

export default function Home() {
  const projects = [
    {
      title: "Kos Hunter – Booking System",
      desc: "Modern boarding house booking system with authentication, room management, booking history, and secure REST API integration.",
      tech: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
      image: "/image1.png",
    },
    {
      title: "REST API Architecture",
      desc: "Scalable RESTful API with JWT authentication and clean architecture implementation for high performance systems.",
      tech: ["Node.js", "Express.js", "JWT"],
      image: "/image1.png",
    },
    {
      title: "Admin Dashboard System",
      desc: "Admin dashboard with analytics, role management, and real-time API integration.",
      tech: ["Next.js", "Tailwind", "API Integration"],
      image: "/image1.png",
    },
  ]

  const certificates = [
    {
      title: "Backend Development Certification",
      issuer: "Dicoding Indonesia",
      description:
        "Comprehensive backend development course covering API design, database management, authentication, and security best practices.",
      year: "2024",
      image: "/image1.png",
    },
    {
      title: "JavaScript Programming Mastery",
      issuer: "Udemy",
      description:
        "Advanced JavaScript concepts including asynchronous programming, ES6+, clean coding patterns, and real-world project implementation.",
      year: "2023",
      image: "/image1.png",
    },
    {
      title: "Fullstack Web Development",
      issuer: "Online Course Platform",
      description:
        "End-to-end fullstack development covering frontend frameworks, backend architecture, REST APIs, and database integration.",
      year: "2024",
      image: "/image1.png",
    },
  ]

  return (
    <>
      <section id="home" className="w-full pt-28 pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-xs uppercase tracking-[6px] text-blue-400 font-semibold mb-6">
              Welcome to my world
            </p>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Mohammad Kevin
              </span>{" "}
              👋
            </h1>

            <h2 className="mt-6 text-lg md:text-xl text-gray-300 font-medium">
              Backend & Fullstack Developer
            </h2>

            <p className="mt-6 text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I build{" "}
              <span className="text-blue-300 font-medium">
                secure, scalable REST APIs
              </span>{" "}
              and modern web applications with strong focus on clean architecture
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

              <div className="relative w-[320px] h-[320px] md:w-[360px] md:h-[360px] rounded-full p-[6px] bg-gradient-to-tr from-blue-500 via-blue-400 to-cyan-400 shadow-2xl shadow-blue-500/30">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0a192f]">
                  <Image
                    src="/image1.png"
                    alt="Mohammad Kevin"
                    fill
                    priority
                    className="object-cover scale-105 group-hover:scale-110 transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[5px] text-blue-400 font-semibold mb-4">
            About Me
          </p>

          <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
            I am a passionate Backend & Fullstack Developer experienced in designing and developing robust web applications. I enjoy transforming complex technical requirements into scalable and maintainable systems.
          </p>

          <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
            With strong expertise in API architecture, database design, and modern frontend frameworks, I aim to deliver high-quality digital products that are secure, efficient, and user-focused.
          </p>
        </div>
      </section>

      <section id="skills" className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
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
              items={["React.js", "Next.js", "Tailwind CSS", "Responsive UI Design"]}
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
            <h2 className="text-3xl md:text-4xl font-bold">
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
            <h2 className="text-3xl md:text-4xl font-bold">
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