import { skills } from "@/lib/data";
import { Smartphone, Palette, Globe, Code, Fingerprint, MousePointer, ArrowUpRight, Briefcase } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
    "Services": <Briefcase className="w-5 h-5" />,
    "Frontend Development": <Globe className="w-5 h-5" />,
    "Backend & Data": <Code className="w-5 h-5" />,
    "Web3 & Blockchain": <Fingerprint className="w-5 h-5" />,
    "Tools & Others": <MousePointer className="w-5 h-5" />,
};

export default function Skills() {
    return (
        <section id="skills" className="relative overflow-hidden bg-dots">
            {/* Decorative elements */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl -z-10" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <span className="section-badge">Services</span>
                        <h2 className="section-title">
                            My specialties
                        </h2>
                    </div>
                    <div className="flex items-end">
                        <p className="text-muted-foreground">
                            Building production-ready web applications and blockchain solutions.
                            Passionate about solving complex problems with clean code.
                        </p>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div key={category} className="service-card">
                            <div className="service-card-icon">
                                {categoryIcons[category] || <Code className="w-5 h-5" />}
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-1">{category}</h3>
                                <p className="text-sm text-muted-foreground">{items.slice(0, 3).join(", ")}</p>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-muted-foreground mt-auto" />
                        </div>
                    ))}

                    {/* Contact Card */}
                    <div className="contact-card sm:col-span-2 lg:col-span-1 lg:row-span-2">
                        <span className="text-sm text-gray-400 uppercase tracking-wide mb-2">Say Hello!</span>
                        <a
                            href="mailto:aliasghar789078906@gmail.com"
                            className="text-xl font-semibold text-white hover:text-accent transition-colors"
                        >
                            aliasghar789078906@gmail.com
                        </a>
                        <ArrowUpRight className="w-6 h-6 text-white mt-4" />
                    </div>
                </div>
            </div>
        </section>
    );
}
