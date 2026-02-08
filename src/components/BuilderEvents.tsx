"use client";

import { useState } from "react";
import { Trophy, ExternalLink, Award, TrendingUp, Calendar, Gift, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

// Event data with correct talent.app links
const stacksEvents = [
    {
        name: "Stacks Challenge #1",
        period: "Dec 10 - Dec 14, 2025",
        rank: 18,
        totalParticipants: 195,
        reward: "83.33 STX",
        status: "completed",
        challenge: "Clarity 4 functions, smart contract usage, GitHub contributions",
        eventLink: "https://talent.app/~/earn/stacks",
    },
    {
        name: "Stacks Challenge #2",
        period: "Dec 15 - Dec 21, 2025",
        rank: 22,
        totalParticipants: 222,
        reward: "141.67 STX",
        status: "completed",
        challenge: "Hiro Chainhooks, smart contracts, GitHub contributions",
        eventLink: "https://talent.app/~/earn/stacks-challenge-2",
    },
    {
        name: "Stacks Challenge #3",
        period: "Dec 22 - Dec 30, 2025",
        rank: 34,
        totalParticipants: 265,
        reward: "120.00 STX",
        status: "completed",
        challenge: "WalletKit SDK/Reown AppKit, smart contracts, GitHub contributions",
        eventLink: "https://talent.app/~/earn/stacks-challenge-3",
    },
    {
        name: "Stacks Builder Rewards: January",
        period: "Jan 19 - Jan 31, 2026",
        rank: 28,
        totalParticipants: null,
        reward: "153.00 STX",
        status: "completed",
        challenge: "Top impactful Stacks builders",
        eventLink: "https://talent.app/~/earn/stacks-builder-rewards-jan",
    },
];

const baseEvents = [
    {
        name: "Top Base Builders: December",
        period: "Dec 1 - Dec 31, 2025",
        rank: 472,
        totalParticipants: 40617,
        reward: "<0.01 ETH",
        status: "completed",
        challenge: "Deployed contracts, Mini App rewards, GitHub contributions",
        eventLink: "https://talent.app/~/earn/base-december",
    },
    {
        name: "Top Base Builders: January",
        period: "Jan 1 - Jan 31, 2026",
        rank: 43,
        totalParticipants: 40921,
        reward: "0.02 ETH",
        status: "completed",
        challenge: "Deployed contracts, Mini App rewards, GitHub contributions",
        eventLink: "https://talent.app/~/earn/base-january",
    },
];

export default function BuilderEvents() {
    const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

    // Calculate stats dynamically
    const totalEvents = stacksEvents.length + baseEvents.length;
    const completedEvents = stacksEvents.filter(e => e.status === "completed").length + baseEvents.filter(e => e.status === "completed").length;

    const totalStxRewards = stacksEvents
        .filter(e => e.status === "completed")
        .reduce((sum, e) => sum + parseFloat(e.reward.replace(" STX", "")), 0);

    return (
        <section id="events" className="relative overflow-hidden scroll-mt-20">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center mb-12">
                    <span className="section-badge">Web3 Journey</span>
                    <h2 className="section-title">Web3 Builder Events</h2>
                    <p className="text-muted-foreground max-w-2xl mt-4">
                        Competing in blockchain builder challenges and earning recognition across Stacks and Base ecosystems
                    </p>
                </div>

                {/* Stats Overview - Compact */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    <div className="modern-card text-center p-4">
                        <div className="text-3xl font-bold text-foreground mb-1">{totalEvents}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Events</div>
                    </div>
                    <div className="modern-card text-center p-4">
                        <div className="text-3xl font-bold text-green-500 mb-1">{completedEvents}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Completed</div>
                    </div>
                    <div className="modern-card text-center p-4">
                        <div className="text-3xl font-bold bg-gradient-to-r from-accent to-orange bg-clip-text text-transparent mb-1">#18</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Best Rank</div>
                    </div>
                    <div className="modern-card text-center p-4">
                        <div className="text-3xl font-bold text-yellow-500 mb-1">{totalStxRewards.toFixed(0)}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">STX Earned</div>
                    </div>
                </div>

                {/* Filter Controls */}
                <div className="flex justify-center gap-4 mb-12">
                    {["all", "completed", "pending"].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f as any)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f
                                ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                                : "bg-background/50 text-muted-foreground hover:text-foreground hover:bg-background border border-border/50"
                                }`}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Stacks Events */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-12 mt-8">
                        <svg className="w-6 h-6 text-purple-500" viewBox="0 0 40 40" fill="currentColor">
                            <path d="M20 0L0 10v20l20 10 20-10V10L20 0zm0 5l15 7.5v15L20 35l-15-7.5v-15L20 5z" />
                        </svg>
                        <h3 className="text-xl font-bold text-foreground">Stacks Builder Challenges</h3>
                    </div>

                    <div className="space-y-4">
                        {stacksEvents
                            .filter(e => filter === "all" || e.status === filter)
                            .map((event, index) => (
                                <div key={index} className="modern-card group hover:border-purple-500/30 transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        {/* Left: Event Info */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h4 className="font-semibold text-foreground">{event.name}</h4>
                                                {event.status === "completed" ? (
                                                    <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-xs font-medium border border-green-500/20">
                                                        Completed
                                                    </span>
                                                ) : (
                                                    <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-medium border border-yellow-500/20">
                                                        Pending
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                                <Calendar className="w-3 h-3" />
                                                {event.period}
                                            </div>
                                            <p className="text-sm text-muted-foreground">{event.challenge}</p>
                                        </div>

                                        {/* Right: Stats & Button */}
                                        <div className="flex items-center gap-6">
                                            <div className="flex items-center gap-4">
                                                {event.rank ? (
                                                    <div className="text-center">
                                                        <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">#{event.rank}</div>
                                                        <div className="text-xs text-muted-foreground">Rank</div>
                                                    </div>
                                                ) : (
                                                    <div className="text-center">
                                                        <div className="text-xl font-bold text-muted-foreground/50">TBD</div>
                                                        <div className="text-xs text-muted-foreground">Rank</div>
                                                    </div>
                                                )}
                                                <div className="text-center">
                                                    <div className="text-xl font-bold text-accent">{event.reward}</div>
                                                    <div className="text-xs text-muted-foreground">Reward</div>
                                                </div>
                                            </div>
                                            <Link
                                                href={event.eventLink}
                                                target="_blank"
                                                className="btn-outline flex items-center gap-1 whitespace-nowrap"
                                            >
                                                View
                                                <ExternalLink className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Base Events */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-12 mt-8">
                        <svg className="w-6 h-6 text-blue-500" viewBox="0 0 111 111" fill="none">
                            <path d="M54.921 110.034C85.359 110.034 110.034 85.402 110.034 55.017C110.034 24.6319 85.359 0 54.921 0C26.0432 0 2.35281 22.1714 0 50.3923H72.8467V59.6416H0C2.35281 87.8625 26.0432 110.034 54.921 110.034Z" fill="currentColor" />
                        </svg>
                        <h3 className="text-xl font-bold text-foreground">Base Builder Challenges</h3>
                    </div>

                    <div className="space-y-4">
                        {baseEvents
                            .filter(e => filter === "all" || e.status === filter)
                            .map((event, index) => (
                                <div key={index} className="modern-card group hover:border-blue-500/30 transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        {/* Left: Event Info */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h4 className="font-semibold text-foreground">{event.name}</h4>
                                                {event.status === "completed" ? (
                                                    <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-xs font-medium border border-green-500/20">
                                                        Completed
                                                    </span>
                                                ) : (
                                                    <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-medium border border-yellow-500/20">
                                                        Pending
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                                <Calendar className="w-3 h-3" />
                                                {event.period}
                                            </div>
                                            <p className="text-sm text-muted-foreground">{event.challenge}</p>
                                        </div>

                                        {/* Right: Stats & Button */}
                                        <div className="flex items-center gap-6">
                                            <div className="flex items-center gap-4">
                                                {event.rank ? (
                                                    <div className="text-center">
                                                        <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">#{event.rank}</div>
                                                        <div className="text-xs text-muted-foreground">Rank</div>
                                                    </div>
                                                ) : (
                                                    <div className="text-center">
                                                        <div className="text-xl font-bold text-muted-foreground/50">TBD</div>
                                                        <div className="text-xs text-muted-foreground">Rank</div>
                                                    </div>
                                                )}
                                                <div className="text-center">
                                                    <div className="text-xl font-bold text-accent">{event.reward}</div>
                                                    <div className="text-xs text-muted-foreground">Reward</div>
                                                </div>
                                            </div>
                                            <Link
                                                href={event.eventLink}
                                                target="_blank"
                                                className="btn-outline flex items-center gap-1 whitespace-nowrap"
                                            >
                                                View
                                                <ExternalLink className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="https://talent.app/aleekhoso"
                        target="_blank"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <Trophy className="w-5 h-5" />
                        View Full Talent Profile
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
