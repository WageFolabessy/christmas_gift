"use client";

import { Music, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export const BackgroundMusic = ({
    isDay,
    isPlaying,
    onToggle
}: {
    isDay: boolean;
    isPlaying: boolean;
    onToggle: () => void;
}) => {
    return (
        <button
            onClick={onToggle}
            className={`p-3 rounded-full transition-all hover:scale-110 active:scale-95 ${isDay
                ? "bg-white/50 text-emerald-700 hover:bg-white"
                : "bg-white/10 text-amber-300 hover:bg-white/20"
                } `}
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
