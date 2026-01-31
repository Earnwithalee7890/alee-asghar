"use client";

import Link from "next/link";
import { Heart, Github, Twitter, Linkedin, Mail, MapPin, ArrowUp } from "lucide-react";
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
        <footer id="contact" className="border-t border-border/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Contact Info */}
                <div className="py-8 flex flex-col items-center gap-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                        Get in Touch
                    </h4>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
                        >
                            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>{personalInfo.email}</span>
                        </a>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 text-accent" />
                            {personalInfo.location}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* Bottom Section */}
                <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        <Link
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link
                            href={socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn"
                            aria-label="Twitter"
                        >
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link
                            href={socialLinks.farcaster}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn"
                            aria-label="Farcaster"
                        >
                            <FarcasterIcon />
                        </Link>
                        <Link
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>© {currentYear} Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                        <span>by Ali Asghar</span>
                    </div>

                    {/* Scroll to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="icon-btn"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
