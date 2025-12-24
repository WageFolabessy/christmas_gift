"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Petal = ({ delay }: { delay: number }) => {
    const [randomX, setRandomX] = useState(0);

    useEffect(() => {
        setRandomX(Math.random() * 100);
    }, []);

    return (
        <motion.div
            initial={{ y: -20, x: `${randomX}vw`, opacity: 0, rotate: 0 }}
            animate={{
                y: "110vh",
                x: `${randomX + (Math.random() * 20 - 10)}vw`,
                opacity: [0, 1, 1, 0],
                rotate: 360,
            }}
            transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
            }}
            className="absolute top-0 text-pink-200/60 pointer-events-none"
            style={{ fontSize: `${Math.random() * 10 + 10}px` }}
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
