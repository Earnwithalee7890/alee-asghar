import { projects } from "@/lib/data";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden">
            {/* Decorative elements */}
            <div className="decor-circle decor-circle-peach w-40 h-40 top-20 -right-10 animate-float opacity-20 hidden lg:block" />
            <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-accent rounded-full opacity-10 hidden lg:block" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center mb-8">
                    <span className="section-badge">Portfolio</span>
                    <h2 className="section-title">
                        Featured Work
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="modern-card group">
                            {/* Project Header */}
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                    {project.githubUrl && (
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="icon-btn"
                                        >
                                            <Github className="w-4 h-4" />
                                        </Link>
                                    )}
                                    {project.liveUrl && (
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            className="icon-btn"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="skill-tag text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More */}
                <div className="text-center mt-10">
                    <Link href={projects[0]?.githubUrl || "#"} target="_blank" className="btn-outline">
                        View All Projects
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
