"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Firefly = ({ delay }: { delay: number }) => {
    const [config, setConfig] = useState<{
        initialX: number;
        initialY: number;
        xValues: number[];
        yValues: number[];
        duration: number;
    } | null>(null);

    useEffect(() => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        // eslint-disable-next-line
        setConfig({
            initialX: x,
            initialY: y,
            xValues: [x, x + (Math.random() * 20 - 10), x - (Math.random() * 20 - 10)],
            yValues: [y, y + (Math.random() * 20 - 10), y - (Math.random() * 20 - 10)],
            duration: 5 + Math.random() * 5
        });
    }, []);

    if (!config) return null;

    return (
        <motion.div
            initial={{ x: `${config.initialX}vw`, y: `${config.initialY}vh`, opacity: 0, scale: 0 }}
            animate={{
                x: config.xValues.map(v => `${v}vw`),
                y: config.yValues.map(v => `${v}vh`),
                opacity: [0, 1, 0.5, 1, 0],
                scale: [0, 1.5, 1, 1.2, 0],
            }}
            transition={{
                duration: config.duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
            }}
            className="absolute bg-amber-300 rounded-full shadow-[0_0_10px_2px_rgba(251,191,36,0.6)] pointer-events-none"
            style={{ width: "4px", height: "4px" }}
        />
    );
};

export const Fireflies = () => {
    const fireflies = Array.from({ length: 30 });
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {fireflies.map((_, i) => (
                <Firefly key={i} delay={i * 0.2} />
            ))}
        </div>
    );
};
