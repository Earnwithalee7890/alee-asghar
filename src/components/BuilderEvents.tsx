"use client";

import { Trophy, ExternalLink, Award, TrendingUp, Calendar, Gift, ArrowRight } from "lucide-react";
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
        rank: null,
        totalParticipants: null,
        reward: "TBD",
        status: "pending",
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
        rank: null,
        totalParticipants: 40921,
        reward: "TBD",
        status: "pending",
        challenge: "Deployed contracts, Mini App rewards, GitHub contributions",
        eventLink: "https://talent.app/~/earn/base-january",
    },
];

export default function BuilderEvents() {
    const totalStxRewards = stacksEvents
        .filter(e => e.status === "completed")
        .reduce((sum, e) => sum + parseFloat(e.reward.replace(" STX", "")), 0);

    return (
        <section id="events" className="relative overflow-hidden scroll-mt-20 bg-gradient-to-b from-background via-muted/5 to-background">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-soft" style={{ animationDelay: '1s' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <span className="section-badge">Web3 Journey</span>
                    <h2 className="section-title">Web3 Builder Events</h2>
                    <p className="text-muted-foreground max-w-2xl mt-4 text-lg">
                        Participating in blockchain builder challenges and earning recognition for impactful contributions to the Web3 ecosystem.
                    </p>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
                    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                        <Trophy className="w-8 h-8 mb-3 text-purple-500 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">6</div>
                        <div className="text-sm text-muted-foreground">Total Events</div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                        <Award className="w-8 h-8 mb-3 text-green-500 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">4</div>
                        <div className="text-sm text-muted-foreground">Completed</div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-orange/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange/10">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                        <TrendingUp className="w-8 h-8 mb-3 text-accent group-hover:scale-110 transition-transform" />
                        <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">#18</div>
                        <div className="text-sm text-muted-foreground">Best Rank</div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                        <Gift className="w-8 h-8 mb-3 text-yellow-500 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{totalStxRewards.toFixed(0)}</div>
                        <div className="text-sm text-muted-foreground">STX Earned</div>
                    </div>
                </div>

                {/* Stacks Events */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center border border-purple-500/20">
                            <svg className="w-7 h-7 text-purple-500" viewBox="0 0 40 40" fill="currentColor">
                                <path d="M20 0L0 10v20l20 10 20-10V10L20 0zm0 5l15 7.5v15L20 35l-15-7.5v-15L20 5z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-foreground">Stacks Builder Challenges</h3>
                            <p className="text-sm text-muted-foreground">Bitcoin L2 smart contract development</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stacksEvents.map((event, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5">
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-purple-500 transition-colors">
                                                {event.name}
                                            </h4>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Calendar className="w-4 h-4" />
                                                {event.period}
                                            </div>
                                        </div>
                                        {event.status === "completed" ? (
                                            <span className="px-3 py-1.5 rounded-full bg-green-500/10 text-green-500 text-xs font-semibold border border-green-500/20">
                                                ✓ Completed
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-semibold border border-yellow-500/20 animate-pulse">
                                                ⏳ Pending
                                            </span>
                                        )}
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center gap-6 mb-4">
                                        {event.rank ? (
                                            <div>
                                                <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                                    #{event.rank}
                                                </div>
                                                <div className="text-xs text-muted-foreground">Rank</div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div className="text-2xl font-bold text-muted-foreground">TBD</div>
                                                <div className="text-xs text-muted-foreground">Rank</div>
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
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {event.challenge}
                                    </p>

                                    {/* Link Button */}
                                    <Link
                                        href={event.eventLink}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-500 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-sm font-medium group/btn"
                                    >
                                        View Event Details
                                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Base Events */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center border border-blue-500/20">
                            <svg className="w-7 h-7 text-blue-500" viewBox="0 0 111 111" fill="none">
                                <path d="M54.921 110.034C85.359 110.034 110.034 85.402 110.034 55.017C110.034 24.6319 85.359 0 54.921 0C26.0432 0 2.35281 22.1714 0 50.3923H72.8467V59.6416H0C2.35281 87.8625 26.0432 110.034 54.921 110.034Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-foreground">Base Builder Challenges</h3>
                            <p className="text-sm text-muted-foreground">Ethereum L2 ecosystem development</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {baseEvents.map((event, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-500 transition-colors">
                                                {event.name}
                                            </h4>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Calendar className="w-4 h-4" />
                                                {event.period}
                                            </div>
                                        </div>
                                        {event.status === "completed" ? (
                                            <span className="px-3 py-1.5 rounded-full bg-green-500/10 text-green-500 text-xs font-semibold border border-green-500/20">
                                                ✓ Completed
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-semibold border border-yellow-500/20 animate-pulse">
                                                ⏳ Pending
                                            </span>
                                        )}
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center gap-6 mb-4">
                                        {event.rank ? (
                                            <div>
                                                <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                                    #{event.rank}
                                                </div>
                                                <div className="text-xs text-muted-foreground">Rank</div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div className="text-2xl font-bold text-muted-foreground">TBD</div>
                                                <div className="text-xs text-muted-foreground">Rank</div>
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
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {event.challenge}
                                    </p>

                                    {/* Link Button */}
                                    <Link
                                        href={event.eventLink}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 text-sm font-medium group/btn"
                                    >
                                        View Event Details
                                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA - View Full Profile */}
                <div className="text-center">
                    <Link
                        href="https://talent.app/aleekhoso"
                        target="_blank"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                    >
                        <Trophy className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        View Full Talent Profile
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-sm text-muted-foreground mt-4">
                        See detailed stats, leaderboard rankings, and all achievements
                    </p>
                </div>
            </div>
        </section>
    );
}
