'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const SolutionSection = () => {
    return (
        <section className="w-full bg-slate-900 py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">
                                Le Guide Officiel 2026.
                            </h2>
                            <p className="text-lg text-slate-400 font-light">
                                Tout ce que vous devez savoir pour éviter les sanctions et maximiser vos revenus.
                            </p>
                        </div>

                        <ul className="space-y-6">
                            <li className="flex items-center gap-4">
                                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                                <span className="text-slate-200">La Check-list Police & Autorités (Étape par étape).</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                                <span className="text-slate-200">Le Secret de la Fiscalité Optimisée pour MRE.</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                                <span className="text-slate-200">Comment doubler vos revenus légalement.</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Right Column: Floating Image */}
                    <motion.div
                        className="relative w-72 aspect-[3/4] mx-auto md:mr-auto"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-blue-600 rounded-lg blur-lg opacity-30"></div>

                        <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-slate-800">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/guide-cover.png"
                                alt="Guide Conformité 2026"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
