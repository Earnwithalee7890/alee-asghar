import { education } from "@/lib/data";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="relative overflow-hidden">
            {/* Decorative elements */}
            <div className="decor-blob decor-blob-orange w-96 h-96 -bottom-20 -left-20 opacity-30" />
            <div className="decor-circle decor-circle-peach w-32 h-32 top-10 right-10 animate-pulse-soft opacity-40 block" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center mb-8">
                    <span className="section-badge">Education</span>
                    <h2 className="section-title">
                        Academic Background
                    </h2>
                </div>

                {/* Cards */}
                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <div key={index} className="modern-card">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                                <h3 className="text-xl font-semibold text-foreground">
                                    {edu.degree}
                                </h3>
                                <span className="badge">
                                    <Calendar className="w-4 h-4" />
                                    {edu.period}
                                </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                <span className="font-medium text-accent">{edu.institution}</span>
                                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <MapPin className="w-4 h-4" />
                                    {edu.location}
                                </span>
                            </div>

                            {edu.details && (
                                <p className="text-muted-foreground mb-3">{edu.details}</p>
                            )}

                            {edu.grade && (
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-lg text-sm">
                                    <Award className="w-4 h-4 text-accent" />
                                    <span className="font-medium">{edu.grade}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
