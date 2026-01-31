"use client";

import { Trophy, ExternalLink, Award, TrendingUp, Calendar, Gift } from "lucide-react";
import Link from "next/link";

// Event data
const stacksEvents = [
    {
        name: "Stacks Challenge #1",
        period: "Dec 10 - Dec 14, 2025",
        rank: 18,
        totalParticipants: 195,
        reward: "83.33 STX",
        status: "completed",
        challenge: "Clarity 4 functions, smart contract usage, GitHub contributions",
        profileLink: "https://www.talentprotocol.com/profile/aleekhoso?event=stacks-challenge-1",
    },
    {
        name: "Stacks Challenge #2",
        period: "Dec 15 - Dec 21, 2025",
        rank: 22,
        totalParticipants: 222,
        reward: "141.67 STX",
        status: "completed",
        challenge: "Hiro Chainhooks, smart contracts, GitHub contributions",
        profileLink: "https://www.talentprotocol.com/profile/aleekhoso?event=stacks-challenge-2",
    },
    {
        name: "Stacks Challenge #3",
        period: "Dec 22 - Dec 30, 2025",
        rank: 34,
        totalParticipants: 265,
        reward: "120.00 STX",
        status: "completed",
        challenge: "WalletKit SDK/Reown AppKit, smart contracts, GitHub contributions",
        profileLink: "https://www.talentprotocol.com/profile/aleekhoso?event=stacks-challenge-3",
    },
    {
        name: "Stacks Builder Rewards: January",
        period: "Jan 19 - Jan 31, 2026",
        rank: null,
        totalParticipants: null,
        reward: "TBD",
        status: "pending",
        challenge: "Top impactful Stacks builders",
        profileLink: "https://www.talentprotocol.com/profile/aleekhoso?event=stacks-builder-rewards-jan",
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
        profileLink: "https://www.talentprotocol.com/profile/aleekhoso?event=base-december",
    },
    {
        name: "Top Base Builders: January",
        period: "Jan 1 - Jan 31, 2026",
        rank: null,
        totalParticipants: 40921,
        reward: "TBD",
        status: "pending",
        challenge: "Deployed contracts, Mini App rewards, GitHub contributions",
        profileLink: "https://www.talentprotocol.com/profile/aleekhoso?event=base-january",
    },
];

export default function BuilderEvents() {
    const totalStxRewards = stacksEvents
        .filter(e => e.status === "completed")
        .reduce((sum, e) => sum + parseFloat(e.reward.replace(" STX", "")), 0);

    return (
        <section id="events" className="relative overflow-hidden scroll-mt-20">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center mb-12">
                    <span className="section-badge">Web3 Journey</span>
                    <h2 className="section-title">Web3 Builder Events</h2>
                    <p className="text-muted-foreground max-w-2xl mt-4">
                        Participating in blockchain builder challenges and earning recognition for impactful contributions to the Web3 ecosystem.
                    </p>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="modern-card text-center group hover:border-purple-500/50 transition-colors">
                        <Trophy className="w-8 h-8 mx-auto mb-3 text-purple-500 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-bold text-foreground mb-1">6</div>
                        <div className="text-sm text-muted-foreground">Total Events</div>
                    </div>
                    <div className="modern-card text-center group hover:border-green-500/50 transition-colors">
                        <Award className="w-8 h-8 mx-auto mb-3 text-green-500 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-bold text-foreground mb-1">4</div>
                        <div className="text-sm text-muted-foreground">Completed</div>
                    </div>
                    <div className="modern-card text-center group hover:border-orange/50 transition-colors">
                        <TrendingUp className="w-8 h-8 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-bold text-foreground mb-1">#18</div>
                        <div className="text-sm text-muted-foreground">Best Rank</div>
                    </div>
                    <div className="modern-card text-center group hover:border-yellow-500/50 transition-colors">
                        <Gift className="w-8 h-8 mx-auto mb-3 text-yellow-500 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-bold text-foreground mb-1">{totalStxRewards.toFixed(0)}</div>
                        <div className="text-sm text-muted-foreground">STX Earned</div>
                    </div>
                </div>

                {/* Stacks Events */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-purple-500" viewBox="0 0 40 40" fill="currentColor">
                                <path d="M20 0L0 10v20l20 10 20-10V10L20 0zm0 5l15 7.5v15L20 35l-15-7.5v-15L20 5z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold">Stacks Builder Challenges</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stacksEvents.map((event, index) => (
                            <div key={index} className="modern-card group hover:border-purple-500/50 transition-all duration-300">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-foreground group-hover:text-purple-500 transition-colors">
                                            {event.name}
                                        </h4>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                            <Calendar className="w-4 h-4" />
                                            {event.period}
                                        </div>
                                    </div>
                                    {event.status === "completed" ? (
                                        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-semibold">
                                            Completed
                                        </span>
                                    ) : (
                                        <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-semibold animate-pulse">
                                            Pending
                                        </span>
                                    )}
                                </div>

                                {/* Stats */}
                                <div className="flex items-center gap-6 mb-4 pb-4 border-b border-border">
                                    {event.rank ? (
                                        <div>
                                            <div className="text-2xl font-bold text-purple-500">#{event.rank}</div>
                                            <div className="text-xs text-muted-foreground">Rank</div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="text-2xl font-bold text-muted-foreground">TBD</div>
                                            <div className="text-xs text-muted-foreground">Rank Pending</div>
                                        </div>
                                    )}
                                    <div>
                                        <div className="text-2xl font-bold text-accent">{event.reward}</div>
                                        <div className="text-xs text-muted-foreground">Reward</div>
                                    </div>
                                    {event.totalParticipants && (
                                        <div>
                                            <div className="text-lg font-bold text-foreground">{event.totalParticipants}</div>
                                            <div className="text-xs text-muted-foreground">Builders</div>
                                        </div>
                                    )}
                                </div>

                                {/* Challenge Details */}
                                <p className="text-sm text-muted-foreground mb-4">
                                    {event.challenge}
                                </p>

                                {/* Link */}
                                <Link
                                    href={event.profileLink}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm text-purple-500 hover:text-purple-400 transition-colors"
                                >
                                    View on Talent Protocol
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Base Events */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-500" viewBox="0 0 111 111" fill="none">
                                <path d="M54.921 110.034C85.359 110.034 110.034 85.402 110.034 55.017C110.034 24.6319 85.359 0 54.921 0C26.0432 0 2.35281 22.1714 0 50.3923H72.8467V59.6416H0C2.35281 87.8625 26.0432 110.034 54.921 110.034Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold">Base Builder Challenges</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {baseEvents.map((event, index) => (
                            <div key={index} className="modern-card group hover:border-blue-500/50 transition-all duration-300">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                                            {event.name}
                                        </h4>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                            <Calendar className="w-4 h-4" />
                                            {event.period}
                                        </div>
                                    </div>
                                    {event.status === "completed" ? (
                                        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-semibold">
                                            Completed
                                        </span>
                                    ) : (
                                        <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-semibold animate-pulse">
                                            Pending
                                        </span>
                                    )}
                                </div>

                                {/* Stats */}
                                <div className="flex items-center gap-6 mb-4 pb-4 border-b border-border">
                                    {event.rank ? (
                                        <div>
                                            <div className="text-2xl font-bold text-blue-500">#{event.rank}</div>
                                            <div className="text-xs text-muted-foreground">Rank</div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="text-2xl font-bold text-muted-foreground">TBD</div>
                                            <div className="text-xs text-muted-foreground">Rank Pending</div>
                                        </div>
                                    )}
                                    <div>
                                        <div className="text-2xl font-bold text-accent">{event.reward}</div>
                                        <div className="text-xs text-muted-foreground">Reward</div>
                                    </div>
                                    {event.totalParticipants && (
                                        <div>
                                            <div className="text-lg font-bold text-foreground">{event.totalParticipants.toLocaleString()}</div>
                                            <div className="text-xs text-muted-foreground">Builders</div>
                                        </div>
                                    )}
                                </div>

                                {/* Challenge Details */}
                                <p className="text-sm text-muted-foreground mb-4">
                                    {event.challenge}
                                </p>

                                {/* Link */}
                                <Link
                                    href={event.profileLink}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 transition-colors"
                                >
                                    View on Talent Protocol
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="https://www.talentprotocol.com/profile/aleekhoso"
                        target="_blank"
                        className="btn-outline inline-flex items-center gap-2"
                    >
                        View Full Talent Profile
                        <ExternalLink className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
