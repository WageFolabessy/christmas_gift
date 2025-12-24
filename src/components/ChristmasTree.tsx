"use client";

import { motion } from "framer-motion";

export const ChristmasTree = ({ isDay }: { isDay: boolean }) => {
    return (
        <div className="relative h-full w-auto aspect-[2/3] z-20 overflow-visible">
            {/* Glow Backing */}
            {!isDay && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-500/20 blur-[60px] rounded-full pointer-events-none" />
            )}

            <svg
                viewBox="0 0 400 600"
                className="w-full h-full overflow-visible drop-shadow-xl"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4e342e" />
                        <stop offset="50%" stopColor="#795548" />
                        <stop offset="100%" stopColor="#3e2723" />
                    </linearGradient>

                    <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1b5e20" />
                        <stop offset="50%" stopColor="#2e7d32" />
                        <stop offset="100%" stopColor="#144217" />
                    </linearGradient>

                    <radialGradient id="starGradient">
                        <stop offset="0%" stopColor="#fff" />
                        <stop offset="50%" stopColor="#ffd700" />
                        <stop offset="100%" stopColor="#f59e0b" />
                    </radialGradient>

                    <radialGradient id="sunGradient">
                        <stop offset="0%" stopColor="#fff" />
                        <stop offset="30%" stopColor="#fcd34d" />
                        <stop offset="100%" stopColor="#f97316" />
                    </radialGradient>

                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Shadow Base */}
                <ellipse cx="200" cy="560" rx="100" ry="20" fill="#000" opacity="0.3" filter="url(#glow)" />

                {/* TRUNK */}
                <path d="M180 500 L220 500 L225 560 L175 560 Z" fill="url(#trunkGradient)" />

                {/* === LAYER 1 (BOTTOM) === */}
                <motion.g
                    style={{ originX: 0.5, originY: 0 }}
                    animate={{ rotate: [0, 1, 0, -1, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <path d="M40 500 L360 500 L200 300 Z" fill="url(#branchGradient)" />
                    {/* Texture/Shadow */}
                    <path d="M100 500 L200 300 L300 500 Z" fill="#000" opacity="0.1" />

                    {/* Garland L1 */}
                    <path d="M80 470 Q200 550 320 450" fill="none" stroke="#fbbf24" strokeWidth="3" strokeDasharray="5 5" opacity="0.7" filter={!isDay ? "url(#glow)" : ""} />

                    {/* Orn L1 */}
                    <circle cx="90" cy="480" r="8" fill="#e11d48"><animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" /></circle>
                    <circle cx="310" cy="460" r="8" fill="#3b82f6"><animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" /></circle>
                    <circle cx="200" cy="480" r="10" fill="#f59e0b" filter={!isDay ? "url(#glow)" : ""}><animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" /></circle>
                    <circle cx="150" cy="430" r="7" fill="#8b5cf6"><animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" /></circle>
                    <circle cx="250" cy="430" r="7" fill="#e11d48"><animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" /></circle>
                </motion.g>


                {/* === LAYER 2 (MIDDLE) === */}
                <motion.g
                    style={{ originX: 0.5, originY: 1 }}
                    animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                    <path d="M80 360 L320 360 L200 180 Z" fill="url(#branchGradient)" />
                    <path d="M140 360 L200 180 L260 360 Z" fill="#000" opacity="0.1" />

                    {/* Garland L2 */}
                    <path d="M120 340 Q200 400 280 320" fill="none" stroke="#fbbf24" strokeWidth="3" strokeDasharray="5 5" opacity="0.7" filter={!isDay ? "url(#glow)" : ""} />

                    {/* Orn L2 */}
                    <circle cx="100" cy="350" r="8" fill="#3b82f6"><animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite" /></circle>
                    <circle cx="300" cy="350" r="8" fill="#e11d48"><animate attributeName="opacity" values="0.8;1;0.8" dur="2.2s" repeatCount="indefinite" /></circle>
                    <circle cx="200" cy="340" r="9" fill="#f59e0b" filter={!isDay ? "url(#glow)" : ""}><animate attributeName="opacity" values="0.8;1;0.8" dur="1.2s" repeatCount="indefinite" /></circle>
                    <circle cx="160" cy="280" r="6" fill="#14b8a6"><animate attributeName="opacity" values="0.8;1;0.8" dur="2.8s" repeatCount="indefinite" /></circle>
                    <circle cx="240" cy="280" r="6" fill="#8b5cf6"><animate attributeName="opacity" values="0.8;1;0.8" dur="2.4s" repeatCount="indefinite" /></circle>
                </motion.g>

                {/* === LAYER 3 (TOP) === */}
                <motion.g
                    style={{ originX: 0.5, originY: 1 }}
                    animate={{ rotate: [0, 2, 0, -2, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                >
                    <path d="M120 220 L280 220 L200 60 Z" fill="url(#branchGradient)" />
                    <path d="M170 220 L200 60 L230 220 Z" fill="#000" opacity="0.1" />

                    {/* Garland L3 */}
                    <path d="M140 200 Q200 240 260 180" fill="none" stroke="#fbbf24" strokeWidth="3" strokeDasharray="5 5" opacity="0.7" filter={!isDay ? "url(#glow)" : ""} />

                    {/* Orn L3 */}
                    <circle cx="130" cy="210" r="7" fill="#e11d48"><animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" /></circle>
                    <circle cx="270" cy="210" r="7" fill="#3b82f6"><animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" /></circle>
                    <circle cx="200" cy="200" r="8" fill="#f59e0b" filter={!isDay ? "url(#glow)" : ""}><animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" /></circle>
                    <circle cx="200" cy="140" r="6" fill="#14b8a6"><animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" /></circle>
                </motion.g>

                {/* === TOPPER TOGGLE (SUN / STAR) === */}

                {/* SUN (Day Mode) */}
                <motion.g
                    style={{ originX: 0.5, originY: 0.5 }}
                    animate={{
                        opacity: isDay ? 1 : 0,
                        scale: isDay ? 1 : 0.5,
                        rotate: 360
                    }}
                    transition={{
                        opacity: { duration: 1.5 },
                        scale: { duration: 1.5 },
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                >
                    {/* Center */}
                    <circle cx="200" cy="60" r="25" fill="url(#sunGradient)" filter="url(#glow)" />
                    {/* Rays */}
                    {[...Array(12)].map((_, i) => (
                        <line
                            key={i}
                            x1="200" y1="60"
                            x2="200" y2="20"
                            stroke="#fdba74"
                            strokeWidth="4"
                            transform={`rotate(${i * 30} 200 60)`}
                            strokeLinecap="round"
                        />
                    ))}
                </motion.g>

                {/* STAR (Night Mode) */}
                <motion.g
                    style={{ originX: 0.5, originY: 0.5 }}
                    animate={{
                        opacity: isDay ? 0 : 1,
                        scale: isDay ? 0.5 : [1, 1.1, 1]
                    }}
                    transition={{
                        opacity: { duration: 1.5 },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    {/* Glow Ring */}
                    <circle cx="200" cy="60" r="40" fill="url(#starGradient)" opacity="0.3" filter="url(#glow)">
                        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
                    </circle>

                    {/* Star Body */}
                    <path
                        d="M200 20 L215 50 L250 50 L225 70 L235 100 L200 80 L165 100 L175 70 L150 50 L185 50 Z"
                        fill="url(#starGradient)"
                        stroke="#b45309"
                        strokeWidth="2"
                        filter="url(#glow)"
                    />
                </motion.g>

            </svg>
        </div>
    );
};

