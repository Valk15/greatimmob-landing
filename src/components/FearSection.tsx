"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Banknote, ShieldAlert, type LucideIcon } from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */

interface FearCard {
    icon: LucideIcon;
    iconColor: string;
    title: string;
    text: string;
}

const cards: FearCard[] = [
    {
        icon: AlertTriangle,
        iconColor: "text-red-600",
        title: "Fermeture Administrative",
        text: "Les autorités ferment désormais les établissements non classés sous 48h.",
    },
    {
        icon: Banknote,
        iconColor: "text-amber-600",
        title: "Amendes Lourdes",
        text: "Des pénalités financières s'appliquent pour chaque nuitée non déclarée.",
    },
    {
        icon: ShieldAlert,
        iconColor: "text-slate-700",
        title: "Risque Squatteurs",
        text: "Sans contrat officiel, vous n'avez aucune protection juridique pour expulser.",
    },
];

/* ── Animation variants ───────────────────────────────── */

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

/* ── Component ────────────────────────────────────────── */

export default function FearSection() {
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-6xl px-6">
                {/* ── Header ───────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <h2 className="font-heading text-4xl font-bold leading-tight text-[#0F172A]">
                        L&apos;Ère du Flou Juridique est Terminée.
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        Louer sans conformité n&apos;est plus une astuce. C&apos;est un
                        risque majeur.
                    </p>
                </motion.div>

                {/* ── Cards Grid ───────────────────────────── */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {cards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.title}
                                variants={cardVariants}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                            >
                                <div
                                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 ${card.iconColor} transition-colors`}
                                >
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                                    {card.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-500">
                                    {card.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
