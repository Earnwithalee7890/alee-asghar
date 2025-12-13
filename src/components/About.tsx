import { aboutMe, languages } from "@/lib/data";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden">
            {/* Decorative elements */}
            <div className="decor-circle decor-circle-orange w-48 h-48 -top-12 right-10 animate-pulse-soft hidden lg:block" />
            <div className="decor-circle decor-circle-peach w-32 h-32 bottom-20 -left-8 animate-float hidden lg:block" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <div className="relative fade-in">
                        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-muted">
                            <Image
                                src="/profile.png"
                                alt="Ali Asghar"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="fade-in" style={{ animationDelay: '0.2s' }}>
                        <span className="section-badge">Hello I'm</span>
                        <h2 className="section-title">
                            Ali Asghar,
                            <br />
                            <span className="text-accent">Developer</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Based in Pakistan
                        </p>

                        <div className="space-y-4 text-muted-foreground mb-8">
                            {aboutMe.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Languages */}
                        <div className="flex flex-wrap gap-2">
                            {languages.map((lang, index) => (
                                <span key={index} className="skill-tag">
                                    {lang.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
