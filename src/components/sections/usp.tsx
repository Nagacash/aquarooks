"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { CheckCircle2, Award, DollarSign, Shield } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useLanguageStore } from "@/store/language-store";

gsap.registerPlugin(ScrollTrigger);

const uspContent = {
    de: {
        title: "Unsere Vorteile",
        subtitle: "Warum AQUA ROOKS?",
        description: "Wir setzen neue Standards für Qualität und Reinheit im togolesischen Mineralwassermarkt.",
        benefits: [
            {
                icon: Award,
                title: "Höchste Qualität",
                description: "70% der verkauften Mineralwasser-Plastikbeutel in Togo erreichen nicht unsere Qualitätsstandards. Wir garantieren erstklassige Wasserqualität.",
            },
            {
                icon: Shield,
                title: "Zertifizierte Reinheit",
                description: "Unsere Quelle wurde von der Université de Lomé / Lamicoda geprüft und bestätigt. Höchste Hygienestandards.",
            },
            {
                icon: DollarSign,
                title: "Preisgünstig",
                description: "Trotz Premium-Qualität bieten wir wettbewerbsfähige Preise. Günstiger als Importware, dennoch profitabel.",
            },
            {
                icon: CheckCircle2,
                title: "Nachhaltig & Verantwortlich",
                description: "Wir wachsen mit Gewissen. Umwelt-, Sozial- und Governance-Standards (ESG) sind uns wichtig.",
            },
        ],
        stats: [
            { value: "70%", label: "Qualitätsvorsprung gegenüber Konkurrenz" },
            { value: "19.42%", label: "Verbesserte Wasserquellen in Togo" },
        ],
    },
    en: {
        title: "Our Benefits",
        subtitle: "Why AQUA ROOKS?",
        description: "We set new standards for quality and purity in Togo's mineral water market.",
        benefits: [
            {
                icon: Award,
                title: "Highest Quality",
                description: "70% of sold mineral water sachets in Togo don't meet our quality standards. We guarantee first-class water quality.",
            },
            {
                icon: Shield,
                title: "Certified Purity",
                description: "Our source has been tested and confirmed by Université de Lomé / Lamicoda. Highest hygiene standards.",
            },
            {
                icon: DollarSign,
                title: "Affordable",
                description: "Despite premium quality, we offer competitive prices. Cheaper than imports, yet profitable.",
            },
            {
                icon: CheckCircle2,
                title: "Sustainable & Responsible",
                description: "We grow with conscience. Environmental, Social, and Governance (ESG) standards are important to us.",
            },
        ],
        stats: [
            { value: "70%", label: "Quality advantage over competitors" },
            { value: "19.42%", label: "Improved water sources in Togo" },
        ],
    },
    fr: {
        title: "Nos Avantages",
        subtitle: "Pourquoi AQUA ROOKS?",
        description: "Nous établissons de nouvelles normes de qualité et de pureté sur le marché togolais de l'eau minérale.",
        benefits: [
            {
                icon: Award,
                title: "Qualité Supérieure",
                description: "70% des sachets d'eau minérale vendus au Togo n'atteignent pas nos normes de qualité. Nous garantissons une qualité d'eau de première classe.",
            },
            {
                icon: Shield,
                title: "Pureté Certifiée",
                description: "Notre source a été testée et confirmée par l'Université de Lomé / Lamicoda. Normes d'hygiène les plus élevées.",
            },
            {
                icon: DollarSign,
                title: "Abordable",
                description: "Malgré la qualité premium, nous offrons des prix compétitifs. Moins cher que les importations, mais rentable.",
            },
            {
                icon: CheckCircle2,
                title: "Durable & Responsable",
                description: "Nous grandissons avec conscience. Les normes environnementales, sociales et de gouvernance (ESG) nous tiennent à cœur.",
            },
        ],
        stats: [
            { value: "70%", label: "Avantage qualité sur les concurrents" },
            { value: "19.42%", label: "Sources d'eau améliorées au Togo" },
        ],
    },
    ru: {
        title: "Наши Преимущества",
        subtitle: "Почему AQUA ROOKS?",
        description: "Мы устанавливаем новые стандарты качества и чистоты на рынке минеральной воды Того.",
        benefits: [
            {
                icon: Award,
                title: "Высшее Качество",
                description: "70% проданных пакетов минеральной воды в Того не соответствуют нашим стандартам качества. Мы гарантируем первоклассное качество воды.",
            },
            {
                icon: Shield,
                title: "Сертифицированная Чистота",
                description: "Наш источник был протестирован и подтвержден Университетом Ломе / Lamicoda. Высшие стандарты гигиены.",
            },
            {
                icon: DollarSign,
                title: "Доступная Цена",
                description: "Несмотря на премиальное качество, мы предлагаем конкурентные цены. Дешевле импорта, но прибыльно.",
            },
            {
                icon: CheckCircle2,
                title: "Устойчивость и Ответственность",
                description: "Мы растем с совестью. Стандарты экологии, социальной ответственности и управления (ESG) важны для нас.",
            },
        ],
        stats: [
            { value: "70%", label: "Преимущество качества над конкурентами" },
            { value: "19.42%", label: "Улучшенные источники воды в Того" },
        ],
    },
};

export function USP() {
    const { language } = useLanguageStore();
    const content = uspContent[language];
    const sectionRef = useRef<HTMLElement>(null);
    const benefitsRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate benefits cards
            if (benefitsRef.current) {
                const cards = benefitsRef.current.children;
                gsap.fromTo(
                    cards,
                    {
                        opacity: 0,
                        y: 60,
                        scale: 0.95
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.7,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: benefitsRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            }

            // Animate stats
            if (statsRef.current) {
                const stats = statsRef.current.children;
                gsap.fromTo(
                    stats,
                    {
                        opacity: 0,
                        scale: 0.8,
                        y: 30
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="usp" className="py-28 md:py-40 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 scroll-mt-20 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4"
                    >
                        {content.subtitle}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6"
                    >
                        {content.title}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto px-4"
                    >
                        {language === "de" && (
                            <>
                                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-8 sm:mb-12">
                                    Wir setzen neue Standards für Qualität und Reinheit im togolesischen Mineralwassermarkt.
                                </p>

                                {/* Alleinstellungsmerkmal & Vision Card */}
                                <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200/60 p-4 sm:p-6 md:p-8 lg:p-12 mb-6 sm:mb-8">
                                    <div className="text-center mb-6 sm:mb-8">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 px-2">
                                            Alleinstellungsmerkmal &amp; Vision
                                        </h3>
                                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
                                    </div>

                                    <div className="space-y-4 sm:space-y-6">
                                        {/* Key Stat Highlight */}
                                        <div className="p-4 sm:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20">
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                                                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent flex-shrink-0">70%</div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed break-words">
                                                        des importierten Wassers aus <span className="font-semibold text-primary">Ghana, Benin, Burkina Faso</span> (u. a. Coca-Cola, Nestlé) besitzen nachweislich <span className="font-semibold text-accent">nicht die Wasserqualität</span> von AQUA ROOKS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Main Content */}
                                        <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                                            <p className="text-sm sm:text-base md:text-lg break-words">
                                                <span className="font-semibold text-primary">AQUA ROOKS</span> – das in PET-Flaschen abgefüllte, qualitativ erstklassige Mineralwasser – wird im Durchschnitt <span className="font-semibold text-accent">preisgünstiger als die Importware</span> und dennoch profitabel auf dem togolesischen Markt angeboten.
                                            </p>
                                            
                                            <p className="text-sm sm:text-base md:text-lg break-words">
                                                Unsere Vision ist es, AQUA ROOKS zukünftig zu <span className="font-semibold text-primary">der Water Brand</span> im togolesischen Markt für bestes Trink- bzw. Mineralwasser zu machen.
                                            </p>
                                        </div>

                                        {/* Vision Pillars */}
                                        <div className="mt-8 pt-8 border-t border-slate-200/60">
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {["Profitabel", "Sozial", "Regional", "National"].map((pillar, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 text-center group hover:scale-105 transition-all duration-300"
                                                    >
                                                        <div className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                                                            {pillar}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {language === "en" && (
                            <>
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-12">
                                    We are setting new standards for quality and purity in Togo&apos;s mineral water market.
                                </p>

                                {/* Unique Selling Proposition & Vision Card */}
                                <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200/60 p-4 sm:p-6 md:p-8 lg:p-12 mb-6 sm:mb-8">
                                    <div className="text-center mb-6 sm:mb-8">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 px-2">
                                            Unique Selling Proposition &amp; Vision
                                        </h3>
                                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
                                    </div>

                                    <div className="space-y-4 sm:space-y-6">
                                        {/* Key Stat Highlight */}
                                        <div className="p-4 sm:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20">
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                                                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent flex-shrink-0">70%</div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed break-words">
                                                        of imported water from <span className="font-semibold text-primary">Ghana, Benin, Burkina Faso</span> (including brands such as Coca-Cola and Nestlé) demonstrably <span className="font-semibold text-accent">does not reach the water quality</span> of AQUA ROOKS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Main Content */}
                                        <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                                            <p className="text-sm sm:text-base md:text-lg break-words">
                                                <span className="font-semibold text-primary">AQUA ROOKS</span> – a premium-quality mineral water bottled in PET – is offered on the Togolese market at, on average, a <span className="font-semibold text-accent">lower price than imported products</span>, while remaining profitable.
                                            </p>
                                            
                                            <p className="text-sm sm:text-base md:text-lg break-words">
                                                Our vision is to make AQUA ROOKS <span className="font-semibold text-primary">the water brand</span> in the Togolese market for the best drinking and mineral water.
                                            </p>
                                        </div>

                                        {/* Vision Pillars */}
                                        <div className="mt-8 pt-8 border-t border-slate-200/60">
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {["Profitable", "Social", "Regional", "National"].map((pillar, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 text-center group hover:scale-105 transition-all duration-300"
                                                    >
                                                        <div className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                                                            {pillar}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {language === "fr" && (
                            <>
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-12">
                                    Nous établissons de nouvelles normes de qualité et de pureté sur le marché togolais de l&apos;eau minérale.
                                </p>

                                {/* Proposition unique & vision Card */}
                                <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200/60 p-4 sm:p-6 md:p-8 lg:p-12 mb-6 sm:mb-8">
                                    <div className="text-center mb-6 sm:mb-8">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 px-2">
                                            Proposition unique &amp; vision
                                        </h3>
                                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
                                    </div>

                                    <div className="space-y-4 sm:space-y-6">
                                        {/* Key Stat Highlight */}
                                        <div className="p-4 sm:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20">
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                                                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent flex-shrink-0">70%</div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed break-words">
                                                        de l&apos;eau importée du <span className="font-semibold text-primary">Ghana, du Bénin et du Burkina Faso</span> (y compris des marques comme Coca-Cola et Nestlé) <span className="font-semibold text-accent">n&apos;atteignent pas la qualité</span> de l&apos;eau de AQUA ROOKS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Main Content */}
                                        <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                                            <p className="text-sm sm:text-base md:text-lg break-words">
                                                <span className="font-semibold text-primary">AQUA ROOKS</span> – une eau minérale de première qualité embouteillée en PET – est proposée sur le marché togolais à un prix en moyenne <span className="font-semibold text-accent">inférieur à celui des produits importés</span>, tout en restant rentable.
                                            </p>
                                            
                                            <p className="text-sm sm:text-base md:text-lg break-words">
                                                Notre vision est de faire de AQUA ROOKS <span className="font-semibold text-primary">la marque d&apos;eau de référence</span> sur le marché togolais pour la meilleure eau potable et minérale.
                                            </p>
                                        </div>

                                        {/* Vision Pillars */}
                                        <div className="mt-8 pt-8 border-t border-slate-200/60">
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {["Rentable", "Sociale", "Régionale", "Nationale"].map((pillar, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 text-center group hover:scale-105 transition-all duration-300"
                                                    >
                                                        <div className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                                                            {pillar}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {language === "ru" && (
                            <>
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-12">
                                    Мы устанавливаем новые стандарты качества и чистоты на рынке минеральной воды Того.
                                </p>

                                {/* Уникальное торговое предложение и видение */}
                                <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200/60 p-4 sm:p-6 md:p-8 lg:p-12 mb-6 sm:mb-8">
                                    <div className="text-center mb-6 sm:mb-8">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 px-2">
                                            Уникальное торговое предложение &amp; Видение
                                        </h3>
                                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
                                    </div>

                                    <div className="space-y-4 sm:space-y-6">
                                        {/* Ключевая статистика */}
                                        <div className="p-4 sm:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20">
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                                                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent flex-shrink-0">70%</div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed break-words">
                                                        импортированной воды из <span className="font-semibold text-primary">Ганы, Бенина и Буркина-Фасо</span> (включая такие бренды, как Coca-Cola и Nestlé) <span className="font-semibold text-accent">не достигает качества</span> воды AQUA ROOKS.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Основной контент */}
                                        <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                                            <p className="text-sm sm:text-base md:text-lg break-words">
                                                <span className="font-semibold text-primary">AQUA ROOKS</span> – премиальная минеральная вода, разлитая в ПЭТ-бутылки – предлагается на тоголезском рынке по цене в среднем <span className="font-semibold text-accent">ниже, чем импортированные продукты</span>, оставаясь при этом прибыльной.
                                            </p>
                                            
                                            <p className="text-sm sm:text-base md:text-lg break-words">
                                                Наше видение – сделать AQUA ROOKS <span className="font-semibold text-primary">ведущим брендом воды</span> на тоголезском рынке для лучшей питьевой и минеральной воды.
                                            </p>
                                        </div>

                                        {/* Столпы видения */}
                                        <div className="mt-8 pt-8 border-t border-slate-200/60">
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {["Прибыльность", "Социальность", "Региональность", "Национальность"].map((pillar, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 text-center group hover:scale-105 transition-all duration-300"
                                                    >
                                                        <div className="text-base sm:text-lg md:text-xl font-bold text-primary group-hover:text-accent transition-colors break-words leading-snug">
                                                            {pillar}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                </div>

                <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {content.benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="group p-10 rounded-3xl bg-white/95 backdrop-blur-xl hover:bg-white hover:shadow-2xl transition-all duration-500 border border-slate-200/60 hover:border-accent/50 shadow-xl hover:-translate-y-3 relative overflow-hidden"
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-blue-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                                        <Icon className="w-8 h-8 text-accent group-hover:text-white transition-all duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats */}
                <div
                    ref={statsRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
                >
                    {content.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-10 rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-primary/90 backdrop-blur-xl text-white border border-white/30 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                        >
                            {/* Animated background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                    {stat.value}
                                </div>
                                <div className="text-primary-foreground/90 text-sm font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

