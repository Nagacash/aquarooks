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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-300 leading-relaxed space-y-4 text-left md:text-center"
                    >
                        {language === "de" && (
                            <>
                                <p>Wasser ist Leben.</p>
                                <p>
                                    Sauberes Trinkwasser verbessert und schützt die Gesundheit und Lebensqualität. Dennoch
                                    haben viele Menschen in Togo keinen Zugang zu diesem kostbaren Gut.
                                </p>
                                <p>
                                    Der Prozentsatz der Menschen in Togo, die Trinkwasser aus einer verbesserten Quelle
                                    beziehen, beträgt im Jahr 2022 nur 19,42 % der Bevölkerung.
                                </p>
                                <p>(United Nations / SDG Target 6.1)</p>
                                <p>
                                    Zu den verbesserten Wasserquellen (frei von fäkalen, bakteriell verunreinigten und
                                    chemischen Verunreinigungen) gehören Leitungswasser, geschützte gegrabene Brunnen,
                                    geschützte Quellen sowie verpacktes oder geliefertes Wasser.
                                </p>
                                <p>
                                    Die zunehmende Urbanisierung, also der Zuzug der ländlichen Bevölkerung in die Städte,
                                    fördert die Nachfrage nach abgefüllten Getränken. Der Grund: Menschen, die in Städten
                                    wie der Hauptstadt Lomé leben, konsumieren in der Regel abgepackte Produkte und
                                    abgepacktes Wasser.
                                </p>
                            </>
                        )}

                        {language === "en" && (
                            <>
                                <p>Water is life.</p>
                                <p>
                                    Clean drinking water improves and protects health and quality of life. Yet many people
                                    in Togo still have no access to this precious resource.
                                </p>
                                <p>
                                    In 2022, the percentage of people in Togo who obtained drinking water from an improved
                                    source was only 19.42% of the population.
                                </p>
                                <p>(United Nations / SDG Target 6.1)</p>
                                <p>
                                    Improved water sources (free from faecal, bacterially contaminated and chemical
                                    pollution) include piped water, protected dug wells, protected springs, as well as
                                    packaged or delivered water.
                                </p>
                                <p>
                                    Increasing urbanisation – the movement of people from rural areas into cities – is
                                    driving demand for packaged beverages. People living in cities such as the capital Lomé
                                    generally consume packaged products and packaged water.
                                </p>
                            </>
                        )}

                        {language === "fr" && (
                            <>
                                <p>L&apos;eau, c&apos;est la vie.</p>
                                <p>
                                    L&apos;eau potable améliore et protège la santé ainsi que la qualité de vie. Pourtant,
                                    de nombreuses personnes au Togo n&apos;ont toujours pas accès à cette ressource
                                    précieuse.
                                </p>
                                <p>
                                    En 2022, le pourcentage de la population togolaise ayant accès à de l&apos;eau de
                                    boisson provenant d&apos;une source améliorée n&apos;était que de 19,42 %.
                                </p>
                                <p>(Nations Unies / ODD Objectif 6.1)</p>
                                <p>
                                    Les sources d&apos;eau améliorées (exemptes de contamination fécale, bactérienne et
                                    chimique) comprennent l&apos;eau de conduite, les puits creusés protégés, les sources
                                    protégées, ainsi que l&apos;eau conditionnée ou livrée.
                                </p>
                                <p>
                                    L&apos;urbanisation croissante, c&apos;est-à-dire l&apos;exode des populations rurales
                                    vers les villes, stimule la demande en boissons conditionnées. En effet, les habitants
                                    des villes, comme la capitale Lomé, consomment généralement des produits et de l&apos;eau
                                    emballés.
                                </p>
                            </>
                        )}
                    </motion.div>
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
                                className="flex flex-col items-center justify-center p-10 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-accent/20"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                                    <Icon className="w-8 h-8 text-accent" />
                                </div>
                                <div className="text-5xl md:text-6xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-200">
                                    {stat.value}
                                </div>
                                <div className="text-slate-300 uppercase tracking-wider text-sm font-semibold text-center">
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
                                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                            >
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent shadow-lg">
                                    <Icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
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
