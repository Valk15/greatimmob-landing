'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Banknote, ShieldAlert } from 'lucide-react';

const FearSection = () => {
    return (
        <section className="w-full bg-slate-50 py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-4"
                    >
                        L&apos;Ère du Flou Juridique est Terminée.
                    </motion.h2>
                    <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                        Louer sans conformité n&apos;est plus une astuce. C&apos;est un risque majeur.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                            <AlertTriangle className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Fermeture Administrative</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Les autorités ferment désormais les établissements non classés sous 48h.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                            <Banknote className="w-6 h-6 text-amber-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Amendes Lourdes</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Des pénalités financières s&apos;appliquent pour chaque nuitée non déclarée.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                            <ShieldAlert className="w-6 h-6 text-slate-700" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Risque Squatteurs</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Sans contrat officiel, vous n&apos;avez aucune protection juridique pour expulser.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FearSection;
