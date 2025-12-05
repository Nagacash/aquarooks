"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Heart, Globe, Leaf } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useLanguageStore } from "@/store/language-store";

gsap.registerPlugin(ScrollTrigger);

const missionContent = {
    de: {
        title: "Unsere Mission",
        subtitle: "Quelle des Lebens",
        description: "AQUA ROOKS fördert, produziert und vermarktet natürliches Mineralwasser aus togolesischer Quelle in PET-Flaschen – mit Fokus auf Qualität, Nachhaltigkeit und gesellschaftliche Verantwortung.",
        values: [
            {
                icon: Target,
                title: "Natürliche Quelle",
                description: "Geschützt in den unterirdischen Wasserbecken im Süden Togos, fernab von Umweltverschmutzung.",
            },
            {
                icon: Heart,
                title: "Geografische Herkunft",
                description: "In Westafrika mit einzigartigen geologischen Eigenschaften.",
            },
            {
                icon: Globe,
                title: "Mineralzusammensetzung",
                description: "Eine ausgewogene Mineralzusammensetzung für optimalen Geschmack und Gesundheit.",
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
                title: "Natural Source",
                description: "Protected in underground water basins in southern Togo, far away from environmental pollution.",
            },
            {
                icon: Heart,
                title: "Geographic Origin",
                description: "Located in West Africa with unique geological characteristics.",
            },
            {
                icon: Globe,
                title: "Mineral Composition",
                description: "A balanced mineral profile for optimal taste and health.",
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
                title: "Source naturelle",
                description: "Protégée dans les bassins profonds du sud du Togo loin de la pollution environnementale",
            },
            {
                icon: Heart,
                title: "Origine géographique",
                description: "Située en Afrique de l&apos;Ouest avec des caractéristiques géologiques uniques.",
            },
            {
                icon: Globe,
                title: "Composition minérale",
                description: "Une composition minérale équilibrée pour un goût optimal et une bonne santé.",
            },
        ],
    },
    ru: {
        title: "Наша Миссия",
        subtitle: "Источник Жизни",
        description: "AQUA ROOKS добывает, производит и продает природную минеральную воду из тоголезского источника в ПЭТ-бутылках – с акцентом на качество, устойчивость и социальную ответственность.",
        values: [
            {
                icon: Target,
                title: "Природный источник",
                description: "Защищен в подземных водных бассейнах на юге Того, вдали от загрязнения окружающей среды.",
            },
            {
                icon: Heart,
                title: "Географическое происхождение",
                description: "В Западной Африке с уникальными геологическими характеристиками.",
            },
            {
                icon: Globe,
                title: "Минеральный состав",
                description: "Сбалансированный минеральный состав для оптимального вкуса и здоровья.",
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
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: "top 95%",
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
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex justify-center mb-6 sm:mb-8"
                    >
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40">
                            <Image
                                src="/images/logos/AR_LogoDrop.png"
                                alt="AQUA ROOKS Logo Drop"
                                width={160}
                                height={160}
                                className="w-full h-full object-contain drop-shadow-lg"
                                quality={95}
                            />
                        </div>
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4"
                    >
                        {content.subtitle}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6"
                    >
                        {content.title}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-left max-w-5xl mx-auto space-y-8"
                    >
                        {language === "de" && (
                            <>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/40 shadow-lg relative overflow-hidden">
                                    <motion.div 
                                        className="absolute top-0 left-0 w-1 bg-gradient-to-b from-accent to-primary"
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        viewport={{ once: true, margin: "-150px" }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                    <div className="pl-6">
                                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                                        Das 2023 gegründete Unternehmen „<span className="font-semibold text-primary">AQUA ROOKS</span>" hat es sich zum Ziel gemacht, eine Versorgung von qualitativ erstklassigem, natürlichem Mineralwasser aus togolesischer Quelle landesweit für die Bevölkerung zu fördern, zu produzieren und in <span className="font-semibold">SACHETS</span> („sachets d&apos;eau minérale" / Mineralwasser-Plastikbeutel") und später in Trinkflaschen (PET) zu vermarkten und zu distribuieren.
                                    </p>
                                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                        Auf Grund der gesellschaftlichen Veränderungen und der hygienischen Bedenken, nebst zahlreichen Krankheiten, der sehr oft „unsauberen" „Mineralwasser-Plastikbeutel", so genannte „Pure Water"-Beutel, ist die Nachfrage nach sauberen und kontrollierten Trinkwasserbeuteln („sachets d&apos;eau minérale") stark angestiegen. Um diese steigende Nachfrage nach bestem und sauberem Mineralwasser zu bedienen wurde „<span className="font-semibold text-primary">AQUA ROOKS</span>" gegründet.
                                    </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-accent/5 via-white/40 to-primary/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-accent/20 shadow-lg relative overflow-hidden">
                                    <motion.div 
                                        className="absolute top-0 left-0 w-1 bg-gradient-to-b from-accent to-primary"
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        viewport={{ once: true, margin: "-150px" }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                    <div className="pl-6">
                                    <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
                                        Die dafür erschlossene Quelle auf eigenem Grund in der wasserreichen Region <span className="font-semibold">Atoèta-Alaroya / Commune Lac 2</span> in der Präfektur „LACS AU TOGO" mit seiner ausgezeichneten Wasserqualität ist laut dem geologischen Gutachten der <span className="font-semibold">Université de Lomé / Lamicoda</span> vom April 2023 bestätigt.
                                    </p>
                                    <p className="text-sm text-muted-foreground italic border-l-4 border-accent/30 pl-4">
                                        (Laboratoire de Microbiologie et de Contrôle de Qualité des Denrées Alimentaires (LAMICODA), Université de Lomé, Togo)
                                    </p>
                                    </div>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary/20 shadow-lg relative overflow-hidden">
                                    <motion.div 
                                        className="absolute top-0 left-0 w-1 bg-gradient-to-b from-accent to-primary"
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        viewport={{ once: true, margin: "-150px" }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic mb-4 pl-6">
                                        „Unser in Atoéta / Commune Lac 2, vorhandenes Wasser enthält eine Mischung aus Mineralien und Nährstoffen die durch Sand, Ton, Kalkstein gefiltert werden, wodurch die wertvollen Spurenelemente mit dem richtigen pH-Wert erhalten bleiben und ein natürlich reines, hochwertiges Mineralwasser entsteht"
                                    </blockquote>
                                    <p className="text-base text-muted-foreground font-semibold pl-6">
                                        — Rodrigue Mahouton Guedou &amp; Oksana Fink, Firmengründer
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-primary/10 via-white/60 to-accent/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary/30 shadow-xl">
                                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                                        <span className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full" />
                                        Mission Statements
                                    </h3>
                                    <ul className="space-y-4 max-w-3xl">
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                Wir generieren eine sehr gute Rentabilität
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                Wir wachsen mit Gewissen.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                Wir machen Business das allen zu Gute kommt.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                Wichtig sind uns Umwelt-, Sozial- und Governance-Standards <span className="font-semibold text-primary">(ESG)</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}

                        {language === "en" && (
                            <>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/40 shadow-lg relative overflow-hidden">
                                    <motion.div 
                                        className="absolute top-0 left-0 w-1 bg-gradient-to-b from-accent to-primary"
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        viewport={{ once: true, margin: "-150px" }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                    <div className="pl-6">
                                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                                        The company &quot;<span className="font-semibold text-primary">AQUA ROOKS</span>&quot;, founded in 2023, has set itself the goal of promoting, producing, marketing and distributing high-quality natural mineral water from a Togolese source nationwide for the population in <span className="font-semibold">SACHETS</span> (&quot;sachets d&apos;eau minérale&quot; / mineral water plastic bags) and later in drinking bottles (PET).
                                    </p>
                                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                        Due to social changes and hygiene concerns, as well as numerous diseases caused by the often &quot;unclean&quot; mineral water plastic bags, so-called &quot;Pure Water&quot; bags, demand for clean and controlled drinking water bags (&quot;sachets d&apos;eau minérale&quot;) has increased significantly. To meet this growing demand for the best and cleanest mineral water, &quot;<span className="font-semibold text-primary">AQUA ROOKS</span>&quot; was founded.
                                    </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-accent/5 via-white/40 to-primary/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-accent/20 shadow-lg relative overflow-hidden">
                                    <motion.div 
                                        className="absolute top-0 left-0 w-1 bg-gradient-to-b from-accent to-primary"
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        viewport={{ once: true, margin: "-150px" }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                    <div className="pl-6">
                                    <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
                                        The source developed for this purpose on the company&apos;s own land in the water-rich region of <span className="font-semibold">Atoèta-Alaroya / Commune Lac 2</span> in the prefecture &quot;LACS AU TOGO&quot; with its excellent water quality has been confirmed according to the geological report from <span className="font-semibold">Université de Lomé / Lamicoda</span> from April 2023.
                                    </p>
                                    <p className="text-sm text-muted-foreground italic border-l-4 border-accent/30 pl-4">
                                        (Laboratoire de Microbiologie et de Contrôle de Qualité des Denrées Alimentaires (LAMICODA), Université de Lomé, Togo)
                                    </p>
                                    </div>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary/20 shadow-lg relative overflow-hidden">
                                    <motion.div 
                                        className="absolute top-0 left-0 w-1 bg-gradient-to-b from-accent to-primary"
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        viewport={{ once: true, margin: "-150px" }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic mb-4 pl-6">
                                        &quot;Our water available in Atoéta / Commune Lac 2 contains a mixture of minerals and nutrients that are filtered through sand, clay, and limestone, preserving the valuable trace elements with the right pH value and creating naturally pure, high-quality mineral water,&quot;
                                    </blockquote>
                                    <p className="text-base text-muted-foreground font-semibold pl-6">
                                        — Rodrigue Mahouton Guedou &amp; Oksana Fink, Company Founders
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-primary/10 via-white/60 to-accent/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary/30 shadow-xl">
                                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                                        <span className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full" />
                                        Mission Statements
                                    </h3>
                                    <ul className="space-y-4 max-w-3xl">
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                We generate very good profitability
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                We grow with conscience.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                We do business that benefits everyone.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                Environmental, social and governance <span className="font-semibold text-primary">(ESG)</span> standards are important to us
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}

                        {language === "fr" && (
                            <>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/40 shadow-lg relative overflow-hidden">
                                    <motion.div 
                                        className="absolute top-0 left-0 w-1 bg-gradient-to-b from-accent to-primary"
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        viewport={{ once: true, margin: "-150px" }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                    <div className="pl-6">
                                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                                        L&apos;entreprise &quot;<span className="font-semibold text-primary">AQUA ROOKS</span>&quot;, fondée en 2023, s&apos;est fixé pour objectif de promouvoir, produire, commercialiser et distribuer à l&apos;échelle nationale une eau minérale naturelle de première qualité provenant d&apos;une source togolaise pour la population en <span className="font-semibold">SACHETS</span> (&quot;sachets d&apos;eau minérale&quot; / sachets plastiques d&apos;eau minérale) et plus tard en bouteilles de boisson (PET).
                                    </p>
                                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                        En raison des changements sociétaux et des préoccupations hygiéniques, ainsi que de nombreuses maladies causées par les sachets plastiques d&apos;eau minérale souvent &quot;impurs&quot;, appelés sachets &quot;Pure Water&quot;, la demande de sachets d&apos;eau potable propres et contrôlés (&quot;sachets d&apos;eau minérale&quot;) a considérablement augmenté. Pour répondre à cette demande croissante d&apos;eau minérale de la meilleure qualité et la plus propre, &quot;<span className="font-semibold text-primary">AQUA ROOKS</span>&quot; a été fondée.
                                    </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-accent/5 via-white/40 to-primary/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-accent/20 shadow-lg relative overflow-hidden">
                                    <motion.div 
                                        className="absolute top-0 left-0 w-1 bg-gradient-to-b from-accent to-primary"
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        viewport={{ once: true, margin: "-150px" }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                    <div className="pl-6">
                                    <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
                                        La source développée à cet effet sur le terrain propre de l&apos;entreprise dans la région riche en eau d&apos;<span className="font-semibold">Atoèta-Alaroya / Commune Lac 2</span> dans la préfecture &quot;LACS AU TOGO&quot; avec sa qualité d&apos;eau excellente a été confirmée selon le rapport géologique de l&apos;<span className="font-semibold">Université de Lomé / Lamicoda</span> d&apos;avril 2023.
                                    </p>
                                    <p className="text-sm text-muted-foreground italic border-l-4 border-accent/30 pl-4">
                                        (Laboratoire de Microbiologie et de Contrôle de Qualité des Denrées Alimentaires (LAMICODA), Université de Lomé, Togo)
                                    </p>
                                    </div>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary/20 shadow-lg relative overflow-hidden">
                                    <motion.div 
                                        className="absolute top-0 left-0 w-1 bg-gradient-to-b from-accent to-primary"
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        viewport={{ once: true, margin: "-150px" }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic mb-4 pl-6">
                                        &quot;Notre eau disponible à Atoéta / Commune Lac 2 contient un mélange de minéraux et de nutriments qui sont filtrés à travers le sable, l&apos;argile et le calcaire, préservant les oligo-éléments précieux avec le bon pH et créant une eau minérale naturellement pure et de haute qualité&quot;
                                    </blockquote>
                                    <p className="text-base text-muted-foreground font-semibold pl-6">
                                        — Rodrigue Mahouton Guedou &amp; Oksana Fink, Fondateur de l&apos;entreprise
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-primary/10 via-white/60 to-accent/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary/30 shadow-xl">
                                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                                        <span className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full" />
                                        Déclarations de mission
                                    </h3>
                                    <ul className="space-y-4 max-w-3xl">
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                Nous générons une très bonne rentabilité
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                Nous grandissons avec conscience.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                Nous faisons des affaires qui profitent à tous.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                Les normes environnementales, sociales et de gouvernance <span className="font-semibold text-primary">(ESG)</span> sont importantes pour nous
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}

                        {language === "ru" && (
                            <>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/40 shadow-lg relative overflow-hidden">
                                    <motion.div 
                                        className="absolute top-0 left-0 w-1 bg-gradient-to-b from-accent to-primary"
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        viewport={{ once: true, margin: "-150px" }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                    <div className="pl-6">
                                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                                        Компания &quot;<span className="font-semibold text-primary">AQUA ROOKS</span>&quot;, основанная в 2023 году, поставила перед собой цель продвигать, производить, продавать и распространять по всей стране высококачественную природную минеральную воду из тоголезского источника для населения в <span className="font-semibold">ПАКЕТАХ</span> (&quot;sachets d&apos;eau minérale&quot; / пластиковые пакеты с минеральной водой) и позже в питьевых бутылках (ПЭТ).
                                    </p>
                                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                        Из-за социальных изменений и гигиенических проблем, а также многочисленных заболеваний, вызванных часто &quot;нечистыми&quot; пластиковыми пакетами с минеральной водой, так называемыми пакетами &quot;Pure Water&quot;, спрос на чистые и контролируемые пакеты с питьевой водой (&quot;sachets d&apos;eau minérale&quot;) значительно вырос. Для удовлетворения этого растущего спроса на лучшую и самую чистую минеральную воду была основана &quot;<span className="font-semibold text-primary">AQUA ROOKS</span>&quot;.
                                    </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-accent/5 via-white/40 to-primary/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-accent/20 shadow-lg relative overflow-hidden">
                                    <motion.div 
                                        className="absolute top-0 left-0 w-1 bg-gradient-to-b from-accent to-primary"
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        viewport={{ once: true, margin: "-150px" }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                    <div className="pl-6">
                                    <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
                                        Источник, разработанный для этой цели на собственной земле компании в богатом водой регионе <span className="font-semibold">Atoèta-Alaroya / Commune Lac 2</span> в префектуре &quot;LACS AU TOGO&quot; с его отличным качеством воды, был подтвержден согласно геологическому отчету <span className="font-semibold">Университета Ломе / Lamicoda</span> от апреля 2023 года.
                                    </p>
                                    <p className="text-sm text-muted-foreground italic border-l-4 border-accent/30 pl-4">
                                        (Лаборатория микробиологии и контроля качества пищевых продуктов (LAMICODA), Университет Ломе, Того)
                                    </p>
                                    </div>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary/20 shadow-lg relative overflow-hidden">
                                    <motion.div 
                                        className="absolute top-0 left-0 w-1 bg-gradient-to-b from-accent to-primary"
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        viewport={{ once: true, margin: "-150px" }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic mb-4 pl-6">
                                        &quot;Наша вода, доступная в Atoéta / Commune Lac 2, содержит смесь минералов и питательных веществ, которые фильтруются через песок, глину и известняк, сохраняя ценные микроэлементы с правильным уровнем pH и создавая естественно чистую, высококачественную минеральную воду&quot;
                                    </blockquote>
                                    <p className="text-base text-muted-foreground font-semibold pl-6">
                                        — Родриг Маутон Гуэду &amp; Оксана Финк, Основатели компании
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-primary/10 via-white/60 to-accent/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary/30 shadow-xl">
                                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                                        <span className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full" />
                                        Заявления о миссии
                                    </h3>
                                    <ul className="space-y-4 max-w-3xl">
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                Мы генерируем очень хорошую прибыльность
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                Мы растем с совестью.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                Мы ведем бизнес, который приносит пользу всем.
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary transition-all duration-300">
                                                <span className="text-accent font-bold text-sm">✓</span>
                                            </div>
                                            <p className="text-base md:text-lg text-foreground leading-relaxed flex-1 pt-1">
                                                Стандарты экологии, социальной ответственности и управления <span className="font-semibold text-primary">(ESG)</span> важны для нас
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </motion.div>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {content.values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="group p-10 rounded-3xl bg-white/60 backdrop-blur-2xl hover:bg-white/80 hover:shadow-2xl transition-all duration-500 border border-white/40 hover:border-accent/30 shadow-lg hover:-translate-y-2 relative overflow-hidden"
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
