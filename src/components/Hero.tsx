"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Linkedin, Github, Twitter, Bug } from "lucide-react";
import { personalInfo, socialLinks, aboutMe } from "@/lib/data";
import Game from "./Game";

export default function Hero() {
    const [showGame, setShowGame] = useState(false);

    return (
        <section className="min-h-screen flex items-center relative overflow-hidden pt-16 bg-gradient-to-br from-background via-muted/20 to-background">
            {/* Background Decorations */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1 flex flex-col items-start text-left">
                        {/* Hello Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 fade-in shadow-sm hover:shadow-md transition-all duration-300" style={{ animationDelay: '0.1s' }}>
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                            </span>
                            <span className="text-sm font-semibold text-accent-dark">Open to Work</span>
                        </div>

                        {/* Name with creative typography */}
                        <div className="relative mb-6">
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-foreground fade-in leading-[1.1]" style={{ animationDelay: '0.2s' }}>
                                Ali
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange relative">
                                    Asghar
                                    <div className="absolute -bottom-2 left-0 w-1/3 h-2 bg-accent rounded-full opacity-50"></div>
                                </span>
                            </h1>
                            {/* Decorative element */}
                            <div className="absolute -top-8 -left-8 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl animate-pulse-soft pointer-events-none" />
                        </div>

                        {/* Title & Bio */}
                        <h2 className="text-xl sm:text-2xl font-medium text-foreground/80 mb-6 fade-in flex items-center gap-3" style={{ animationDelay: '0.3s' }}>
                            <span className="h-0.5 w-8 bg-accent inline-block"></span>
                            {personalInfo.title}
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed fade-in border-l-4 border-muted pl-6" style={{ animationDelay: '0.4s' }}>
                            {personalInfo.summary}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mb-12 fade-in" style={{ animationDelay: '0.5s' }}>
                            <Link href="#contact" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-foreground px-8 font-medium text-background transition-all duration-300 hover:bg-foreground/90 hover:scale-105 shadow-lg hover:shadow-xl">
                                <span className="mr-2">Let's Talk</span>
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                            <Link href="#projects" className="group inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-8 font-medium shadow-sm transition-all hover:bg-accent hover:text-white hover:border-accent hover:scale-105">
                                <span className="mr-2">View Work</span>
                                <div className="w-2 h-2 rounded-full bg-green-500 group-hover:bg-white transition-colors"></div>
                            </Link>
                        </div>

                        {/* Stats & Social */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 fade-in w-full border-t border-border pt-8" style={{ animationDelay: '0.6s' }}>
                            {/* Stats */}
                            <div className="flex items-center gap-4">
                                <span className="text-4xl font-bold text-foreground">4+</span>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Years of</span>
                                    <span className="text-sm font-bold text-accent">Excellence</span>
                                </div>
                            </div>

                            <div className="hidden sm:block h-10 w-[1px] bg-border"></div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3">
                                {[
                                    { href: socialLinks.github, icon: Github, label: "GitHub" },
                                    { href: socialLinks.twitter, icon: Twitter, label: "Twitter" },
                                    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                                ].map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        className="group p-3 rounded-full bg-background border border-border shadow-sm hover:shadow-md hover:border-accent hover:bg-accent hover:text-white transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Profile Image & Game Trigger */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative fade-in" style={{ animationDelay: '0.4s' }}>
                        <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                            {/* Animated Background Shapes */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-orange rounded-[2rem] opacity-20 rotate-3 animate-pulse-soft"></div>
                            <div className="absolute inset-0 bg-foreground/5 rounded-[2rem] -rotate-3 transform translate-y-2"></div>

                            {/* Profile Image Container */}
                            <div className="relative h-full w-full rounded-[1.8rem] overflow-hidden shadow-2xl border-4 border-background group">
                                <Image
                                    src="/profile.png"
                                    alt="Ali Asghar"
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    priority
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white transform translate-y-2 opacity-90 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="font-medium text-sm">Currently mastering</p>
                                    <p className="font-bold text-lg text-accent">Solidity & Clarity</p>
                                </div>
                            </div>

                            {/* Game Trigger Button - "Shocking" Element */}
                            <div className="absolute -bottom-8 -right-4 z-20 animate-bounce">
                                <button
                                    onClick={() => setShowGame(true)}
                                    className="relative group flex items-center justify-center p-4 bg-red-500 text-white rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-110"
                                    title="Smash Bugs!"
                                >
                                    <Bug className="w-8 h-8 animate-pulse" />
                                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></span>

                                    {/* Tooltip */}
                                    <span className="absolute right-full mr-4 px-3 py-1 bg-dark text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        Defeat the Bugs!
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Game Modal */}
            {showGame && <Game onClose={() => setShowGame(false)} />}
        </section>
    );
}
