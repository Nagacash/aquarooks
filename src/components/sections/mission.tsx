"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Target, Heart, Globe, Leaf } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useLanguageStore } from "@/store/language-store";

gsap.registerPlugin(ScrollTrigger);

const missionContent = {
    de: {
        title: "Unsere Mission",
        subtitle: "Quelle des Lebens",
        description: "Wir sind bestrebt, hochwertiges Mineralwasser aus natürlichen Quellen in Togo zu liefern und gleichzeitig Nachhaltigkeit und soziale Verantwortung zu fördern.",
        values: [
            {
                icon: Target,
                title: "Qualität",
                description: "Höchste Standards für Reinheit und Geschmack",
            },
            {
                icon: Heart,
                title: "Nachhaltigkeit",
                description: "Umweltbewusste Praktiken und verantwortungsvolle Beschaffung",
            },
            {
                icon: Globe,
                title: "Gemeinschaft",
                description: "Unterstützung lokaler Gemeinden in Westafrika",
            },
            {
                icon: Leaf,
                title: "Natürlichkeit",
                description: "Reines, unverfälschtes Wasser aus natürlichen Quellen",
            },
        ],
    },
    en: {
        title: "Our Mission",
        subtitle: "Source of Life",
        description: "We are committed to delivering premium mineral water from natural sources in Togo while promoting sustainability and social responsibility.",
        values: [
            {
                icon: Target,
                title: "Quality",
                description: "Highest standards for purity and taste",
            },
            {
                icon: Heart,
                title: "Sustainability",
                description: "Environmentally conscious practices and responsible sourcing",
            },
            {
                icon: Globe,
                title: "Community",
                description: "Supporting local communities in West Africa",
            },
            {
                icon: Leaf,
                title: "Naturality",
                description: "Pure, unadulterated water from natural sources",
            },
        ],
    },
    fr: {
        title: "Notre Mission",
        subtitle: "Source de Vie",
        description: "Nous nous engageons à fournir de l'eau minérale premium provenant de sources naturelles au Togo tout en promouvant la durabilité et la responsabilité sociale.",
        values: [
            {
                icon: Target,
                title: "Qualité",
                description: "Les plus hauts standards de pureté et de goût",
            },
            {
                icon: Heart,
                title: "Durabilité",
                description: "Pratiques respectueuses de l'environnement et approvisionnement responsable",
            },
            {
                icon: Globe,
                title: "Communauté",
                description: "Soutien aux communautés locales en Afrique de l'Ouest",
            },
            {
                icon: Leaf,
                title: "Naturalité",
                description: "Eau pure et non altérée provenant de sources naturelles",
            },
        ],
    },
};

export function Mission() {
    const { language } = useLanguageStore();
    const content = missionContent[language];
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (cardsRef.current) {
                const cards = cardsRef.current.children;
                gsap.fromTo(
                    cards,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.9
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="mission" className="py-28 md:py-40 bg-gradient-to-b from-white via-slate-50/30 to-white scroll-mt-20">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-20">
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
                        className="text-4xl md:text-5xl font-bold text-primary mb-6"
                    >
                        {content.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        {content.description}
                    </motion.p>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content.values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="group p-10 rounded-3xl bg-white/80 backdrop-blur-xl hover:bg-white/95 hover:shadow-2xl transition-all duration-500 border border-white/60 hover:border-accent/40 shadow-xl hover:-translate-y-2 relative overflow-hidden"
                            >
                                {/* Hover gradient effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-blue-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                                        <Icon className="w-7 h-7 text-accent group-hover:text-white transition-all duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
