import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Linkedin, Github, Twitter } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        {/* Hello Badge */}
                        <p className="badge mb-4 fade-in" style={{ animationDelay: '0.1s' }}>
                            Hello, I'm <span className="text-accent">👋</span>
                        </p>

                        {/* Name with yellow circle */}
                        <div className="relative">
                            {/* Yellow circle behind the A */}
                            <div className="absolute top-6 left-12 sm:top-8 sm:left-16 w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full z-0" />
                            <h1 className="relative z-10 text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 fade-in" style={{ animationDelay: '0.2s' }}>
                                Ali
                                <br />
                                Asghar
                            </h1>
                        </div>

                        {/* Title */}
                        <p className="text-lg text-muted-foreground mb-8 fade-in" style={{ animationDelay: '0.3s' }}>
                            {personalInfo.title}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3 mb-12 fade-in" style={{ animationDelay: '0.4s' }}>
                            <Link href="#contact" className="btn-dark">
                                Let's Talk
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                            <Link href="#projects" className="btn-outline">
                                My Work
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Stats & Social */}
                        <div className="flex items-center gap-8 fade-in" style={{ animationDelay: '0.5s' }}>
                            {/* Stats */}
                            <div>
                                <div className="stat-number">3+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-2">
                                <Link href={socialLinks.github} target="_blank" className="icon-btn">
                                    <Github className="w-5 h-5" />
                                </Link>
                                <Link href={socialLinks.twitter} target="_blank" className="icon-btn">
                                    <Twitter className="w-5 h-5" />
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" className="icon-btn">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="order-1 lg:order-2 flex justify-center fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="relative">
                            {/* Signature text behind */}
                            <div className="absolute -top-4 right-0 z-0 text-6xl sm:text-7xl lg:text-8xl font-bold text-muted opacity-20 select-none" style={{ fontFamily: 'cursive' }}>
                                Ali
                            </div>

                            {/* Orange decorative shape */}
                            <div className="absolute -top-4 right-0 w-40 h-40 sm:w-48 sm:h-48 bg-orange rounded-full opacity-80 z-0" />
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-peach rounded-full opacity-60 z-0" />

                            {/* Profile Image */}
                            <div className="relative z-10 w-72 h-[400px] sm:w-80 sm:h-[450px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/profile.png"
                                    alt="Ali Asghar"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                            </div>

                            {/* Floating Contact Badge */}
                            <div className="absolute -bottom-4 -right-4 z-20 bg-accent text-dark px-4 py-3 rounded-full flex items-center gap-2 shadow-lg">
                                <span className="text-sm font-semibold">Contact Me</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
