"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FallingPetals } from "./FallingPetals";
import { Fireflies } from "./Fireflies";
import { Moon, Sun } from "lucide-react";
import { ChristmasTree } from "./ChristmasTree";
import { BackgroundMusic } from "./BackgroundMusic";

export const TimeAwareContainer = ({
    displayName,
}: {
    displayName: string;
}) => {
    const [isDay, setIsDay] = useState<boolean | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const hours = new Date().getHours();
        // eslint-disable-next-line
        setIsDay(hours >= 6 && hours < 18);

        // Pre-load audio
        audioRef.current = new Audio("/music/music.mp3");
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    // Play on first interaction logic
    const isAttemptingPlay = useRef(false);

    useEffect(() => {
        const enableAudio = () => {
            if (audioRef.current && audioRef.current.paused && !isAttemptingPlay.current) {
                isAttemptingPlay.current = true;

                audioRef.current.play()
                    .then(() => {
                        setIsPlaying(true);
                        // Only remove listeners if play was successful
                        window.removeEventListener('click', enableAudio);
                        window.removeEventListener('keydown', enableAudio);
                        window.removeEventListener('touchstart', enableAudio);
                        window.removeEventListener('touchend', enableAudio);
                        window.removeEventListener('touchmove', enableAudio);
                        window.removeEventListener('scroll', enableAudio);
                    })
                    .catch((e) => {
                        console.log("Audio resume failed (retrying on next input):", e);
                        isAttemptingPlay.current = false;
                    });
            }
        };

        window.addEventListener('click', enableAudio);
        window.addEventListener('keydown', enableAudio);
        window.addEventListener('touchstart', enableAudio);
        window.addEventListener('touchend', enableAudio);
        window.addEventListener('touchmove', enableAudio);
        window.addEventListener('scroll', enableAudio);

        return () => {
            window.removeEventListener('click', enableAudio);
            window.removeEventListener('keydown', enableAudio);
            window.removeEventListener('touchstart', enableAudio);
            window.removeEventListener('touchend', enableAudio);
            window.removeEventListener('touchmove', enableAudio);
            window.removeEventListener('scroll', enableAudio);
        };
    }, []);

    const toggleMusic = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    if (isDay === null) {
        return <div className="h-dvh w-full bg-sky-100" />;
    }

    return (
        <div className="relative h-dvh w-full overflow-hidden font-sans">

            <AnimatePresence mode="wait">
                {isDay ? (
                    <motion.div
                        key="day"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-linear-to-b from-sky-300 via-sky-100 to-amber-50"
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
                        className="absolute inset-0 bg-linear-to-b from-slate-950 via-indigo-950 to-rose-950"
                    >
                        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('/night.svg')] bg-repeat" />
                        <Fireflies />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-10 flex h-dvh flex-col items-center py-6 px-4 text-center">

                {/* 1. Header Section (Greeting) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className={`flex-none mb-4 ${isDay ? "text-rose-950" : "text-amber-200 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"}`}
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Selamat Natal,
                    </h1>
                    <div className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isDay ? "text-emerald-700" : "text-amber-100"}`}>
                        {displayName}
                    </div>
                </motion.div>

                {/* 2. Christmas Tree */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="flex-1 w-full min-h-0 flex items-center justify-center my-2"
                >
                    <div className="relative w-full h-full max-w-75 flex items-center justify-center">
                        <ChristmasTree isDay={!!isDay} />
                    </div>
                </motion.div>

                {/* 3. Verse Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className={`
                        flex-none max-w-lg p-4 rounded-2xl backdrop-blur-sm border transition-colors duration-1000 mb-4
                        ${isDay ? "bg-white/40 border-white/50 text-emerald-900" : "bg-black/20 border-white/10 text-orange-50"}
                    `}
                >
                    <p className="font-serif text-base md:text-xl italic leading-relaxed">
                        &quot;Cintailah sesamamu manusia seperti dirimu sendiri&quot;
                    </p>
                    <p className="mt-2 text-xs font-semibold tracking-widest uppercase opacity-80">
                        Matius 22:39
                    </p>
                </motion.div>

                {/* 4. Footer Section (Controls) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 1 }}
                    className="flex-none flex items-center gap-4"
                >
                    <BackgroundMusic isDay={!!isDay} isPlaying={isPlaying} onToggle={toggleMusic} />

                    <button
                        onClick={() => setIsDay(!isDay)}
                        className={`p-3 rounded-full transition-all hover:scale-110 active:scale-95 ${isDay ? "bg-white/50 text-amber-600 hover:bg-white" : "bg-white/10 text-amber-300 hover:bg-white/20"}`}
                        aria-label="Toggle theme"
                    >
                        {isDay ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </motion.div>

            </div>
        </div>
    );
};
