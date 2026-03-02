"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";

/* ── Animation variants ───────────────────────────────── */

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" },
    }),
};

/* ── Hero Component ───────────────────────────────────── */

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* ── Background Image ─────────────────────────── */}
            <Image
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury interior"
                fill
                priority
                className="object-cover"
                sizes="100vw"
            />

            {/* ── Dark Overlay ─────────────────────────────── */}
            <div className="absolute inset-0 bg-slate-900/70" />

            {/* ── Content ──────────────────────────────────── */}
            <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
                {/* Badge */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                >
                    <span className="inline-block rounded-full border border-gold/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
                        Nouvelle Législation 2026
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    className="mt-8 font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl"
                >
                    Propriétaires à Agadir&nbsp;:
                    <br />
                    <span className="text-gold">Êtes-vous en règle&nbsp;?</span>
                </motion.h1>

                {/* Subhead */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
                >
                    Les lois ont changé. La conformité n&apos;est plus une option.
                    Sécurisez votre patrimoine dès aujourd&apos;hui.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={3}
                    className="mt-10"
                >
                    <button
                        className="group relative inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110 animate-pulse-glow"
                    >
                        <Download className="h-4 w-4" />
                        Télécharger le Guide de Conformité (PDF)

                        {/* Shimmer overlay */}
                        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer bg-[length:200%_100%]" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
