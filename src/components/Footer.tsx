"use client";

import Link from "next/link";
import { Heart, Github, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp, Code2, Coffee } from "lucide-react";
import { socialLinks, personalInfo } from "@/lib/data";

// Farcaster Icon
const FarcasterIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.24 5.37H5.76a.9.9 0 0 0-.9.9v11.46a.9.9 0 0 0 .9.9h12.48a.9.9 0 0 0 .9-.9V6.27a.9.9 0 0 0-.9-.9zM12 15.47a3.47 3.47 0 1 1 0-6.94 3.47 3.47 0 0 1 0 6.94z" />
    </svg>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background border-t border-border/50">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-orange bg-clip-text text-transparent mb-4">
                            Ali Asghar
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            Crafting exceptional digital experiences with Web3 technology and modern web development.
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                            <Coffee className="w-4 h-4 text-accent" />
                            <span>Open to opportunities</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                            Quick Links
                        </h4>
                        <nav className="flex flex-col gap-3">
                            {[
                                { name: 'About', href: '#about' },
                                { name: 'Projects', href: '#projects' },
                                { name: 'Skills', href: '#skills' },
                                { name: 'Experience', href: '#experience' },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-right">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                            Get in Touch
                        </h4>
                        <div className="flex flex-col gap-3 items-center md:items-end">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
                            >
                                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span className="truncate max-w-[200px]">{personalInfo.email}</span>
                            </a>
                            <a
                                href={`tel:${personalInfo.phone}`}
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
                            >
                                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                {personalInfo.phone}
                            </a>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 text-accent" />
                                {personalInfo.location}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* Bottom Section */}
                <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        <Link
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-3 rounded-lg bg-muted/50 border border-border hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:text-gray-400"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                GitHub
                            </span>
                        </Link>
                        <Link
                            href={socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-3 rounded-lg bg-muted/50 border border-border hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:text-blue-400"
                            aria-label="Twitter"
                        >
                            <Twitter className="w-5 h-5" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Twitter
                            </span>
                        </Link>
                        <Link
                            href={socialLinks.farcaster}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-3 rounded-lg bg-muted/50 border border-border hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:text-purple-400"
                            aria-label="Farcaster"
                        >
                            <FarcasterIcon />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Farcaster
                            </span>
                        </Link>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-3 rounded-lg bg-muted/50 border border-border hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:text-blue-600"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                LinkedIn
                            </span>
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Code2 className="w-4 h-4 text-accent" />
                        <span>© {currentYear} Crafted with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                        <span>by Ali Asghar</span>
                    </div>

                    {/* Scroll to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="group p-3 rounded-lg bg-accent text-white hover:bg-accent-dark transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-accent/20"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* Tech Badge */}
                <div className="pb-4 text-center">
                    <p className="text-xs text-muted-foreground/60">
                        Built with Next.js, TypeScript & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
