"use client";

import { useState, useEffect, useRef } from "react";
import { Bug, X, Play, Trophy, Timer } from "lucide-react";

interface GameProps {
    onClose: () => void;
}

interface BugItem {
    id: number;
    x: number;
    y: number;
    rotation: number;
}

export default function Game({ onClose }: GameProps) {
    const [gameState, setGameState] = useState<"start" | "playing" | "end">("start");
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);
    const [bugs, setBugs] = useState<BugItem[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Start Game
    const startGame = () => {
        setGameState("playing");
        setScore(0);
        setTimeLeft(15);
        setBugs([]);
        spawnBug();

        // Game Timer
        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    endGame();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    // End Game
    const endGame = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setGameState("end");
    };

    // Spawn a new bug
    const spawnBug = () => {
        if (gameState === "end") return;

        const id = Date.now();
        const x = Math.random() * 80 + 10; // 10% to 90%
        const y = Math.random() * 80 + 10; // 10% to 90%
        const rotation = Math.random() * 360;

        setBugs((prev) => [...prev, { id, x, y, rotation }]);

        // Auto-spawn more bugs if cleared
        if (bugs.length < 3) {
            setTimeout(spawnBug, Math.random() * 500 + 200);
        }
    };

    // Smash Bug
    const smashBug = (id: number) => {
        setScore((prev) => prev + 1);
        setBugs((prev) => prev.filter((bug) => bug.id !== id));

        // Play sound or vibration here if desired
        if (navigator.vibrate) navigator.vibrate(50);

        // Spawn new ones
        spawnBug();
        if (Math.random() > 0.5) spawnBug();
    };

    useEffect(() => {
        if (gameState === "playing" && bugs.length === 0) {
            spawnBug();
        }
    }, [bugs, gameState]);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
            <div className="relative w-full max-w-lg bg-card border border-border rounded-2xl p-6 shadow-2xl overflow-hidden max-h-[80vh] flex flex-col">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 z-10">
                    <div className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-accent" />
                        <span className="font-bold text-xl">{score}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Timer className={`w-5 h-5 ${timeLeft < 5 ? 'text-red-500 animate-pulse' : 'text-foreground'}`} />
                        <span className={`font-bold text-xl ${timeLeft < 5 ? 'text-red-500' : ''}`}>{timeLeft}s</span>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Game Area */}
                <div
                    ref={containerRef}
                    className="relative w-full aspect-square bg-muted/30 rounded-xl overflow-hidden border border-border/50 select-none cursor-crosshair"
                >
                    {gameState === "start" && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20 bg-background/80 backdrop-blur-sm">
                            <Bug className="w-16 h-16 text-accent mb-4 animate-bounce" />
                            <h2 className="text-3xl font-bold mb-2">Bug Smasher</h2>
                            <p className="text-muted-foreground mb-6">Smash as many bugs as you can in 15 seconds! They are infesting your profile.</p>
                            <button onClick={startGame} className="btn-dark text-lg px-8 py-4">
                                <Play className="w-5 h-5 mr-2" /> Start Game
                            </button>
                        </div>
                    )}

                    {gameState === "end" && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20 bg-background/90 backdrop-blur-md">
                            <Trophy className="w-20 h-20 text-yellow-400 mb-4 animate-pulse" />
                            <h2 className="text-4xl font-bold mb-2">Game Over!</h2>
                            <p className="text-2xl text-foreground mb-6">Score: <span className="text-accent font-bold">{score}</span></p>
                            <div className="flex gap-4">
                                <button onClick={startGame} className="btn-dark">
                                    Play Again
                                </button>
                                <button onClick={onClose} className="btn-outline">
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    {gameState === "playing" && bugs.map((bug) => (
                        <button
                            key={bug.id}
                            onClick={() => smashBug(bug.id)}
                            className="absolute p-2 transition-transform active:scale-90 hover:scale-110 group"
                            style={{
                                left: `${bug.x}%`,
                                top: `${bug.y}%`,
                                transform: `translate(-50%, -50%) rotate(${bug.rotation}deg)`,
                            }}
                        >
                            <Bug className="w-8 h-8 text-red-500 fill-red-500/20 drop-shadow-lg animate-pulse" />
                            <div className="absolute inset-0 bg-red-500/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
