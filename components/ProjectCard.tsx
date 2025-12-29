type ProjectCardProps = {
    title: string;
    tech: string;
    description: string;
    href?: string;
};

export default function ProjectCard({
    title,
    tech,
    description,
    href,
}: ProjectCardProps) {
    const Wrapper = href ? "a" : "div";
    return (
    <Wrapper
        href={href}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        className="
            group block rounded-xl border border-zinc-800 p-6
            transition-all duration-300
            hover:-translate-y-1hover:border-blue-500
            hover:shadow-lg hover:shadow-blue-500/10
        "
    >
        <h3 className="text-xl font-bold text-blue-400 group-hover:underline underline-offset-4">
        {title}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">
            {tech}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            {description}
        </p>

        {href && (
            <span className="mt-4 inline-block text-xs font-medium text-blue-400 opacity-0 transition group-hover:opacity-100">
            View project →
            </span>
        )}
        </Wrapper>
    );
}