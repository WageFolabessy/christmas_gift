"use client";

import { motion } from "framer-motion";

export const ChristmasTree = ({ isDay }: { isDay: boolean }) => {
    return (
        <div className="relative h-full w-auto aspect-[2/3] z-20">
            <svg
                viewBox="0 0 200 300"
                className="w-full h-full drop-shadow-2xl overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Trunk */}
                <path d="M90 250 L110 250 L110 280 L90 280 Z" fill="#5D4037" />

                {/* Tree Layers - Animated Swaying */}
                <motion.g
                    animate={{ rotate: [0, 1, 0, -1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originX: 0.5, originY: 1 }}
                >
                    {/* Bottom Layer */}
                    <path d="M20 250 L180 250 L100 150 Z" fill="#1B5E20" />
                    <motion.circle
                        cx="40" cy="240" r="5" fill="#EF4444"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.circle
                        cx="160" cy="240" r="5" fill="#F59E0B"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                </motion.g>

                <motion.g
                    animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    style={{ originX: 0.5, originY: 1 }}
                >
                    {/* Middle Layer */}
                    <path d="M40 180 L160 180 L100 90 Z" fill="#2E7D32" />
                    <motion.circle
                        cx="60" cy="170" r="5" fill="#3B82F6"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.circle
                        cx="140" cy="170" r="5" fill="#EF4444"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }}
                    />
                    {/* Sash */}
                    <path d="M60 160 Q100 180 140 150" fill="none" stroke="#FCD34D" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
                </motion.g>

                <motion.g
                    animate={{ rotate: [0, 2, 0, -2, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    style={{ originX: 0.5, originY: 1 }}
                >
                    {/* Top Layer */}
                    <path d="M60 110 L140 110 L100 30 Z" fill="#4CAF50" />
                    <motion.circle
                        cx="80" cy="100" r="4" fill="#F59E0B"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.circle
                        cx="120" cy="100" r="4" fill="#3B82F6"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2.4, repeat: Infinity, delay: 0.6 }}
                    />
                </motion.g>

                {/* Star */}
                <motion.path
                    d="M100 10 L106 28 L125 28 L109 39 L115 57 L100 46 L85 57 L91 39 L75 28 L94 28 Z"
                    fill="#FFD700"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                        filter: ["drop-shadow(0 0 2px #FFD700)", "drop-shadow(0 0 10px #FFD700)", "drop-shadow(0 0 2px #FFD700)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originX: 0.5, originY: 0.5 }}
                />

                {/* Night Glow Overlay */}
                {!isDay && (
                    <motion.circle
                        cx="100" cy="150" r="100"
                        fill="url(#glowGradient)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                    />
                )}

                <defs>
                    <radialGradient id="glowGradient">
                        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                </defs>

            </svg>
        </div>
    );
};
