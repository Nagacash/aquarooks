"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Droplet, Mountain, MapPin, TestTube } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useLanguageStore } from "@/store/language-store";

const sourceContent = {
    de: {
        title: "Unsere Quelle",
        subtitle: "Natürliche Reinheit",
        description: "Unser Wasser stammt aus einer einzigartigen natürlichen Quelle in Togo, die für ihre außergewöhnliche Mineralzusammensetzung und Reinheit bekannt ist.",
        stats: [
            { label: "Verbesserte Wasserquelle", value: "19.42%", icon: Droplet },
            { label: "Volumen pro Person", value: "14.28 L", icon: TestTube },
        ],
        features: [
            {
                icon: Mountain,
                title: "Natürliche Quelle",
                description: "Geschützt in den Bergen Togos, fernab von Verschmutzung",
            },
            {
                icon: MapPin,
                title: "Geografische Herkunft",
                description: "Premium-Standort in Westafrika mit einzigartigen geologischen Eigenschaften",
            },
            {
                icon: TestTube,
                title: "Mineralzusammensetzung",
                description: "Ausgewogene Mineralien für optimalen Geschmack und Gesundheit",
            },
        ],
    },
    en: {
        title: "Our Source",
        subtitle: "Natural Purity",
        description: "Our water comes from a unique natural source in Togo, renowned for its exceptional mineral composition and purity.",
        stats: [
            { label: "Improved Water Source", value: "19.42%", icon: Droplet },
            { label: "Volume per Person", value: "14.28 L", icon: TestTube },
        ],
        features: [
            {
                icon: Mountain,
                title: "Natural Source",
                description: "Protected in the mountains of Togo, far from pollution",
            },
            {
                icon: MapPin,
                title: "Geographic Origin",
                description: "Premium location in West Africa with unique geological properties",
            },
            {
                icon: TestTube,
                title: "Mineral Composition",
                description: "Balanced minerals for optimal taste and health",
            },
        ],
    },
    fr: {
        title: "Notre Source",
        subtitle: "Pureté Naturelle",
        description: "Notre eau provient d'une source naturelle unique au Togo, réputée pour sa composition minérale exceptionnelle et sa pureté.",
        stats: [
            { label: "Source d'Eau Améliorée", value: "19.42%", icon: Droplet },
            { label: "Volume par Personne", value: "14.28 L", icon: TestTube },
        ],
        features: [
            {
                icon: Mountain,
                title: "Source Naturelle",
                description: "Protégée dans les montagnes du Togo, loin de la pollution",
            },
            {
                icon: MapPin,
                title: "Origine Géographique",
                description: "Emplacement premium en Afrique de l'Ouest avec des propriétés géologiques uniques",
            },
            {
                icon: TestTube,
                title: "Composition Minérale",
                description: "Minéraux équilibrés pour un goût et une santé optimaux",
            },
        ],
    },
};

export function Source() {
    const { language } = useLanguageStore();
    const content = sourceContent[language];
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            id="source"
            ref={sectionRef}
            className="relative py-28 md:py-40 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden scroll-mt-20"
        >
            {/* Parallax Background Elements */}
            <motion.div
                style={{ y }}
                className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-accent/10 to-transparent opacity-50 pointer-events-none"
            />

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4"
                    >
                        {content.subtitle}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        {content.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-300 leading-relaxed"
                    >
                        {content.description}
                    </motion.p>
                </div>

                {/* Stats Counters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {content.stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center justify-center p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
                            >
                                <Icon className="w-12 h-12 text-accent mb-4" />
                                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-slate-400 uppercase tracking-wider text-sm font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {content.features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="text-center p-6"
                            >
                                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
