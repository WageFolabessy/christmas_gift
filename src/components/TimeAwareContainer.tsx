"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FallingPetals } from "./FallingPetals";
import { Fireflies } from "./Fireflies";
import { Moon, Sun } from "lucide-react";

export const TimeAwareContainer = ({
    displayName,
}: {
    displayName: string;
}) => {
    const [isDay, setIsDay] = useState<boolean | null>(null);

    useEffect(() => {
        const hours = new Date().getHours();
        setIsDay(hours >= 6 && hours < 18);
    }, []);

    if (isDay === null) {
        // Minimal loading state matching day theme roughly to reduce flash
        return <div className="min-h-screen w-full bg-sky-100" />;
    }

    return (
        <div className="relative min-h-screen w-full overflow-hidden font-sans">
            <AnimatePresence mode="wait">
                {isDay ? (
                    <motion.div
                        key="day"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-100 to-amber-50"
                    >
                        <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply bg-[url('/day.svg')] bg-repeat" />
                        <FallingPetals />
                    </motion.div>
                ) : (
                    <motion.div
                        key="night"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950 to-rose-950"
                    >
                        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('/night.svg')] bg-repeat" />
                        <Fireflies />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="max-w-2xl space-y-12"
                >
                    {/* Greeting */}
                    <div className={`space-y-4 ${isDay ? "text-rose-950" : "text-amber-200 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"}`}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                            Selamat Natal, <br />
                            <span className={isDay ? "text-emerald-700" : "text-amber-100"}>{displayName}</span>
                        </h1>
                    </div>

                    {/* Verse */}
                    <div className={`relative p-8 rounded-2xl backdrop-blur-sm border ${isDay ? "bg-white/40 border-white/50 text-emerald-900" : "bg-black/20 border-white/10 text-orange-50"}`}>
                        <p className="font-serif text-2xl md:text-3xl italic leading-relaxed">
                            "Cintailah sesamamu manusia seperti dirimu sendiri"
                        </p>
                        <p className="mt-4 text-sm font-semibold tracking-widest uppercase opacity-80">
                            Matius 22:39
                        </p>
                    </div>

                    {/* Manual Toggle (Optional but nice for demo) */}
                    <button
                        onClick={() => setIsDay(!isDay)}
                        className={`mt-12 p-3 z-50 rounded-full transition-all hover:scale-110 ${isDay ? "bg-white/50 text-amber-600 hover:bg-white" : "bg-white/10 text-amber-300 hover:bg-white/20"}`}
                        aria-label="Toggle theme"
                    >
                        {isDay ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                </motion.div>
            </div>
        </div>
    );
};
