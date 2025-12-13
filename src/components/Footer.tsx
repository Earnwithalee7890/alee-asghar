import Link from "next/link";
import { Heart, Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { socialLinks, personalInfo } from "@/lib/data";

// Farcaster Icon
const FarcasterIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.24 5.37H5.76a.9.9 0 0 0-.9.9v11.46a.9.9 0 0 0 .9.9h12.48a.9.9 0 0 0 .9-.9V6.27a.9.9 0 0 0-.9-.9zM12 15.47a3.47 3.47 0 1 1 0-6.94 3.47 3.47 0 0 1 0 6.94z" />
    </svg>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="py-8 border-t border-border scroll-mt-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid opacity-30 -z-10" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Contact Info */}
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                        <a href="mailto:aliasghar789078906@gmail.com" className="flex items-center gap-1 hover:text-accent transition-colors">
                            <Mail className="w-4 h-4" />
                            aliasghar789078906@gmail.com
                        </a>
                        <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {personalInfo.location}
                        </span>
                    </div>

                    {/* Social & Copyright */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Link href={socialLinks.github} target="_blank" className="icon-btn w-8 h-8">
                                <Github className="w-4 h-4" />
                            </Link>
                            <Link href={socialLinks.twitter} target="_blank" className="icon-btn w-8 h-8">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href={socialLinks.farcaster} target="_blank" className="icon-btn w-8 h-8">
                                <FarcasterIcon />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="icon-btn w-8 h-8">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <span>© {currentYear} Made with</span>
                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                            <span>by alee asghar</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
