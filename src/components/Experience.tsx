import { experience } from "@/lib/data";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="relative overflow-hidden bg-grid">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center mb-8">
                    <span className="section-badge">Experience</span>
                    <h2 className="section-title">
                        Work History
                    </h2>
                </div>

                {/* Timeline */}
                <div className="space-y-6">
                    {experience.map((job, index) => (
                        <div key={index} className="modern-card">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                                <h3 className="text-xl font-semibold text-foreground">
                                    {job.role}
                                </h3>
                                <span className="badge">
                                    <Calendar className="w-4 h-4" />
                                    {job.period}
                                </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mb-5">
                                <span className="font-medium text-accent">{job.company}</span>
                                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <MapPin className="w-4 h-4" />
                                    {job.location}
                                </span>
                            </div>

                            <ul className="space-y-2">
                                {job.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
