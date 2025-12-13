import { personalInfo, socialLinks } from "@/lib/data";
import { Send, Github, Twitter, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <span className="section-badge">Contact</span>
                    <h2 className="section-title">
                        Let's work together
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                        Open to opportunities and collaborations. Feel free to reach out!
                    </p>

                    {/* Social & CTA */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex gap-3">
                            <Link href={socialLinks.github} target="_blank" className="icon-btn">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href={socialLinks.twitter} target="_blank" className="icon-btn">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>

                        <a
                            href="mailto:aliasghar789078906@gmail.com?subject=Let's Connect"
                            className="btn-dark"
                        >
                            <Send className="w-4 h-4" />
                            Send Message
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
