"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Send, CheckCircle } from "lucide-react";

/* ── Constants ────────────────────────────────────────── */

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxYyVzianytOaYIsbtOYQqy0DJcy1nO_S23tCG4husApBUa8BXDRFpZKNil1Bqa5qxHyA/exec";

const WHATSAPP_URL =
    "https://wa.me/212722851232?text=Salam%20Hamza,%20j'ai%20t%C3%A9l%C3%A9charg%C3%A9%20le%20guide%20et%20je%20veux%20s%C3%A9curiser%20mon%20appartement.";

const PDF_HREF = "/Guide Conformite LCD Maroc 2026.pdf";
const PDF_DOWNLOAD_NAME = "Guide_Conformite_Maroc_2026.pdf";

/* ── Component ────────────────────────────────────────── */

export default function CTASection() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        /* ── Step A: Save lead data (fire-and-forget, no-cors) ── */
        try {
            fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    date: new Date().toISOString(),
                }),
            });
        } catch {
            // Silently continue — no-cors responses are opaque
        }

        /* ── Step B: Trigger PDF download ────────────────────── */
        const link = document.createElement("a");
        link.href = PDF_HREF;
        link.download = PDF_DOWNLOAD_NAME;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        /* ── Update UI to success state ──────────────────────── */
        setIsSubmitting(false);
        setIsSuccess(true);

        /* ── Step C: Redirect to WhatsApp after 2s ───────────── */
        setTimeout(() => {
            window.location.href = WHATSAPP_URL;
        }, 2000);
    };

    /* ── Button label & style based on state ─────────────── */
    let buttonText = "Recevoir mon Guide par WhatsApp";
    let ButtonIcon = Send;
    let buttonClass =
        "mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100";

    if (isSubmitting) {
        buttonText = "Traitement en cours...";
    } else if (isSuccess) {
        buttonText = "Succès ! Redirection WhatsApp...";
        ButtonIcon = CheckCircle;
        buttonClass =
            "mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300";
    }

    return (
        <section id="contact" className="relative bg-slate-950 py-32 overflow-hidden">
            {/* Subtle radial glow behind the card */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-[500px] w-[700px] rounded-full bg-amber-600/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12"
                >
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* ── Left: Promise ──────────────────────── */}
                        <div className="flex flex-col justify-center">
                            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                                Recevez votre Audit &amp; Guide{" "}
                                <span className="text-gold">Gratuitement.</span>
                            </h2>
                            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
                                Ne laissez pas 30% de vos revenus sur la table.
                                L&apos;audit est sans engagement.
                            </p>
                            <p className="mt-6 text-sm text-slate-500">
                                Rejoignez{" "}
                                <span className="font-semibold text-slate-300">
                                    +50 propriétaires
                                </span>{" "}
                                à Agadir.
                            </p>
                        </div>

                        {/* ── Right: Form ────────────────────────── */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                required
                                placeholder="Votre Nom"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="rounded-xl border border-slate-700 bg-slate-800/50 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-gold/60 focus:ring-1 focus:ring-gold/30"
                            />
                            <input
                                type="tel"
                                required
                                placeholder="+212 6..."
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="rounded-xl border border-slate-700 bg-slate-800/50 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-gold/60 focus:ring-1 focus:ring-gold/30"
                            />
                            <input
                                type="email"
                                required
                                placeholder="Votre Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="rounded-xl border border-slate-700 bg-slate-800/50 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-gold/60 focus:ring-1 focus:ring-gold/30"
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting || isSuccess}
                                className={buttonClass}
                            >
                                {buttonText}
                                <ButtonIcon className="h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
