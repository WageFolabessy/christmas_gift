"use client";

import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export const BackgroundMusic = ({ isDay }: { isDay: boolean }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio("/music/music.mp3");
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;

        // Attempt auto-play
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    setIsPlaying(true);
                })
                .catch(() => {
                    // Auto-play prevented, waiting for user interaction
                    setIsPlaying(false);
                });
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <button
            onClick={togglePlay}
            className={`p-3 rounded-full transition-all hover:scale-110 active:scale-95 ${isDay
                ? "bg-white/50 text-emerald-700 hover:bg-white"
                : "bg-white/10 text-amber-300 hover:bg-white/20"
                }`}
            aria-label={isPlaying ? "Mute music" : "Play music"}
        >
            {isPlaying ? (
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    <Music size={20} />
                </motion.div>
            ) : (
                <VolumeX size={20} />
            )}
        </button>
    );
};
