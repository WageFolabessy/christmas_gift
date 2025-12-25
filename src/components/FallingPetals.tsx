"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Petal = ({ delay }: { delay: number }) => {
    const [config, setConfig] = useState<{
        initialX: number;
        moveX: number;
        duration: number;
        fontSize: number;
    } | null>(null);

    useEffect(() => {
        // eslint-disable-next-line
        setConfig({
            initialX: Math.random() * 100,
            moveX: Math.random() * 20 - 10,
            duration: 10 + Math.random() * 5,
            fontSize: Math.random() * 10 + 10,
        });
    }, []);

    if (!config) return null;

    return (
        <motion.div
            initial={{ y: -20, x: `${config.initialX}vw`, opacity: 0, rotate: 0 }}
            animate={{
                y: "110vh",
                x: `${config.initialX + config.moveX}vw`,
                opacity: [0, 1, 1, 0],
                rotate: 360,
            }}
            transition={{
                duration: config.duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
            }}
            className="absolute top-0 text-pink-200/60 pointer-events-none"
            style={{ fontSize: `${config.fontSize}px` }}
        >
            ❀
        </motion.div>
    );
};

export const FallingPetals = () => {
    const petals = Array.from({ length: 20 });
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {petals.map((_, i) => (
                <Petal key={i} delay={i * 0.5} />
            ))}
        </div>
    );
};
