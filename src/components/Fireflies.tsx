"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Firefly = ({ delay }: { delay: number }) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        setX(Math.random() * 100);
        setY(Math.random() * 100);
    }, []);

    return (
        <motion.div
            initial={{ x: `${x}vw`, y: `${y}vh`, opacity: 0, scale: 0 }}
            animate={{
                x: [`${x}vw`, `${x + (Math.random() * 20 - 10)}vw`, `${x - (Math.random() * 20 - 10)}vw`],
                y: [`${y}vh`, `${y + (Math.random() * 20 - 10)}vh`, `${y - (Math.random() * 20 - 10)}vh`],
                opacity: [0, 1, 0.5, 1, 0],
                scale: [0, 1.5, 1, 1.2, 0],
            }}
            transition={{
                duration: 5 + Math.random() * 5,
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
