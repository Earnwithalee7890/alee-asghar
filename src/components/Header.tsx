"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { socialLinks } from "@/lib/data";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Services" },
    { href: "#projects", label: "Work" },
    { href: "#events", label: "Events" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        // Default to dark mode if no theme is saved or if saved as dark
        if (!savedTheme || savedTheme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Calculate scroll progress
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            const scrollPercent = Number(scroll) * 100;

            setScrollProgress(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-sm" : "bg-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 w-full">


                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="nav-link">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <div className="hidden md:flex items-center gap-2">
                        <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="flex md:hidden items-center gap-2">
                        <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="icon-btn">
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-border">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-muted-foreground hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
            {/* Reading Progress Bar */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
        </header>
    );
}
