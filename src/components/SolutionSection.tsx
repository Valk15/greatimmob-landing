"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */

const checklist = [
    "La Check-list Police & Autorités (Étape par étape).",
    "Le Secret de la Fiscalité Optimisée pour MRE.",
    "Comment doubler vos revenus légalement.",
];

/* ── Animation variants ───────────────────────────────── */

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const },
    }),
};

/* ── Component ────────────────────────────────────────── */

export default function SolutionSection() {
    return (
        <section className="bg-slate-900 py-24">
            <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
                {/* ── Left Column: Pitch ──────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <motion.h2
                        variants={fadeUp}
                        custom={0}
                        className="font-heading text-4xl font-bold leading-tight text-white"
                    >
                        Le Guide Officiel 2026.
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        custom={1}
                        className="mt-4 max-w-md text-lg leading-relaxed text-slate-400"
                    >
                        Tout ce que vous devez savoir pour éviter les sanctions et maximiser
                        vos revenus.
                    </motion.p>

                    {/* Checklist */}
                    <ul className="mt-8 space-y-4">
                        {checklist.map((item, i) => (
                            <motion.li
                                key={i}
                                variants={fadeUp}
                                custom={i + 2}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                                <span className="text-sm leading-relaxed text-slate-300">
                                    {item}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* ── Right Column: Real Guide Cover ──────── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.div
                        className="relative w-72 aspect-[3/4] mx-auto md:mr-auto"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {/* The Glow */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-blue-600 rounded-lg blur-lg opacity-30" />

                        {/* The Image Container */}
                        <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-slate-800">
                            <img
                                src="/guide-cover.png"
                                alt="Guide Conformité 2026"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
