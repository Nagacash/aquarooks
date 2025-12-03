"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
    ru: {
        title: "Наш Источник",
        subtitle: "Природная Чистота",
        description: "Наша вода поступает из уникального природного источника в Того, известного своей исключительной минеральной композицией и чистотой.",
        stats: [
            { label: "Улучшенный Источник Воды", value: "19.42%", icon: Droplet },
            { label: "Объем на Человека", value: "14.28 L", icon: TestTube },
        ],
        features: [
            {
                icon: Mountain,
                title: "Природный Источник",
                description: "Защищен в горах Того, вдали от загрязнения",
            },
            {
                icon: MapPin,
                title: "Географическое Происхождение",
                description: "Премиальное расположение в Западной Африке с уникальными геологическими свойствами",
            },
            {
                icon: TestTube,
                title: "Минеральный Состав",
                description: "Сбалансированные минералы для оптимального вкуса и здоровья",
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
                <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
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
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                    >
                        {content.title}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-slate-300 leading-relaxed space-y-3 sm:space-y-4 text-left md:text-center px-4"
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

                        {language === "ru" && (
                            <>
                                <p>Вода — это жизнь.</p>
                                <p>
                                    Чистая питьевая вода улучшает и защищает здоровье и качество жизни. Тем не менее,
                                    многие люди в Того все еще не имеют доступа к этому драгоценному ресурсу.
                                </p>
                                <p>
                                    В 2022 году процент населения Того, имеющего доступ к питьевой воде из улучшенного
                                    источника, составлял всего 19,42%.
                                </p>
                                <p>(Организация Объединенных Наций / ЦУР Цель 6.1)</p>
                                <p>
                                    Улучшенные источники воды (свободные от фекального, бактериального и химического
                                    загрязнения) включают водопроводную воду, защищенные выкопанные колодцы, защищенные
                                    источники, а также упакованную или доставленную воду.
                                </p>
                                <p>
                                    Растущая урбанизация — перемещение людей из сельских районов в города — стимулирует
                                    спрос на упакованные напитки. Действительно, жители городов, таких как столица Ломе,
                                    обычно потребляют упакованные продукты и упакованную воду.
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

                {/* Bottle Image */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                        opacity: { duration: 0.8, ease: "easeOut" },
                        scale: { duration: 0.8, ease: "easeOut" },
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                        rotate: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    className="flex justify-center mb-12 sm:mb-16 md:mb-20"
                >
                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                        <Image
                            src="/images/logos/bottle.png"
                            alt="ROOK'S AQUA PET Bottle"
                            width={500}
                            height={1250}
                            className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.2)] filter brightness-105 contrast-110 saturate-105"
                            quality={95}
                        />
                    </div>
                </motion.div>

                {/* Unsere Mission Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        {language === "de" && "Unsere Mission"}
                        {language === "en" && "Our Mission"}
                        {language === "fr" && "Notre Mission"}
                        {language === "ru" && "Наша Миссия"}
                    </h3>
                </motion.div>

                {/* Unser Ursprung - Detailed Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="max-w-5xl mx-auto text-left space-y-6 text-slate-200 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        {language === "de" && "Unser Ursprung"}
                        {language === "en" && "Our Origin"}
                        {language === "fr" && "Notre Origine"}
                        {language === "ru" && "Наше Происхождение"}
                    </h3>

                    {language === "de" && (
                        <div className="space-y-8 leading-relaxed">
                            <div className="bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl p-6 md:p-8 border border-accent/20">
                                <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
                                    Die Quelle von <span className="font-semibold text-accent">AQUA ROOKS</span> befindet sich in der wasserreichsten Region Togos, in der Gemeinde <span className="font-semibold">Lac 2</span>, Präfektur „Lacs au Togo", unweit der Küste des Golfs von Guinea. Dort fördern wir natürliches Mineralwasser aus einer Tiefe von <span className="font-semibold text-accent">80 bis 120 Metern</span> aus unterirdischen Becken mit konstantem Durchfluss.
                                </p>
                                <p className="text-lg md:text-xl text-white leading-relaxed">
                                    Dort befindet sich der unterirdische Teil der „Commune Du Lac 2", wo das Mineralwasser von AQUA ROOKS fließt. Dieser Prozess schafft einen <span className="font-semibold text-accent">gigantischen natürlichen Filter</span>. So entstand im Herzen der „Commune Du Lac" die natürliche Quelle unseres Mineralwassers, geschaffen von der Natur.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                                        <span className="text-accent text-xl font-bold">✓</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                                            Die ausgezeichnete Qualität des Wassers wurde im <span className="font-semibold">April 2023</span> durch ein geologisches Gutachten der <span className="font-semibold text-accent">Universität Lomé / LAMICODA</span> bestätigt.
                                        </p>
                                        <p className="text-sm text-slate-400 italic mt-3 border-l-4 border-accent/30 pl-4">
                                            (Labor für Mikrobiologie und Qualitätskontrolle von Lebensmitteln (LAMICODA), Universität Lomé, Togo)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl p-6 md:p-8 border border-primary/20 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-primary" />
                                <div className="pl-6">
                                    <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-4">
                                        Um sicherzustellen, dass sich die Quelle AQUA ROOKS im Einklang mit dem natürlichen Wasserkreislauf erneuert, sorgen unsere Mitarbeiter und Hydrogeologen für eine <span className="font-semibold">rationelle Bewirtschaftung</span> der Quelle. Und dafür, dass die Ressource in Bezug auf Quantität erhalten und in Bezug auf Qualität geschützt wird.
                                    </p>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                        <p className="text-lg md:text-xl text-white font-semibold italic text-center">
                                            Getreu unserem Credo: <span className="text-accent">Nicht mehr nehmen, als die Natur uns zur Verfügung stellt.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/20">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                    Lithologie (Gesteinsarten / stratigraphische Struktur)
                                </h4>
                                <div className="space-y-3">
                                    <p>
                                        In Oberflächennähe findet man lockeres Sandmaterial aus dem Quartär (Sand, teilweise mit Kies).
                                    </p>
                                    <p>
                                        Darunter befindet sich die sogenannte „Continental Terminal"-Formation, die aus klastischen Sedimenten (Sand, teilweise mit Lehmeinschlüssen, Kies) besteht.
                                    </p>
                                    <p>
                                        In größerer Tiefe findet man eine Kalksteinschicht aus dem Paläozän (Dolomit-/Kalkstein-Grundwasserleiter), die hauptsächlich aus Karbonatgestein besteht.
                                    </p>
                                    <p>
                                        Noch tiefer befindet sich eine sandige oder sandige Kalksteinformation aus dem Maastrichtium (Oberkreide).
                                    </p>
                                    <p>
                                        Diese verschiedenen Grundwasserleiter sind durch eher undurchlässige (geringe Durchlässigkeit) Deckschichten und Zwischenschichten (Aquiluden) voneinander getrennt.
                                    </p>
                                    <p className="text-sm italic opacity-70 mt-4">
                                        (Quelle: earthwise.bgs.ac.uk+1)
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/20">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                    Hydrogeologische Bedingungen – Grundwasserleiter und Wasserressourcen
                                </h4>
                                <p className="mb-3">
                                    Die wichtigsten Grundwasserleiter sind (von oben nach unten):
                                </p>
                                <ol className="list-decimal list-inside space-y-2 ml-4">
                                    <li>Quartärer Sandgrundwasserleiter (oberflächennah, nicht begrenzt)</li>
                                    <li>Kontinentaler Endgrundwasserleiter (CT) (häufig genutzt)</li>
                                    <li>Paläozäner Grundwasserleiter (Kalkstein, tief)</li>
                                    <li>Maastricht-Grundwasserleiter (Sand/Sandstein)</li>
                                </ol>
                                <p className="text-sm italic opacity-70 mt-4">
                                    (Quelle: piahs.copernicus.org)
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/20">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                    Hydraulische Eigenschaften und Produktivität
                                </h4>
                                <p>
                                    Der CT-Grundwasserleiter wird häufig genutzt (z. B. für Trinkwasser, insbesondere für lokale Brunnen).
                                </p>
                                <p>
                                    Die Durchlässigkeit (Leitfähigkeit) des kontinentalen Endaquifers wird in Studien mit Größenordnungen von ~5-8 × 10⁻³ m²/s angegeben.
                                </p>
                                <p className="text-sm italic opacity-70 mt-4">
                                    (Quelle: piahs.copernicus.org)
                                </p>
                            </div>
                        </div>
                    )}

                    {language === "en" && (
                        <div className="space-y-8 leading-relaxed">
                            <div className="bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl p-6 md:p-8 border border-accent/20">
                                <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
                                    The source of <span className="font-semibold text-accent">AQUA ROOKS</span> is located in Togo&apos;s most water-rich region, in the municipality of <span className="font-semibold">Lac 2</span>, prefecture &quot;Lacs au Togo&quot;, not far from the coast of the Gulf of Guinea. Here we extract natural mineral water from a depth of <span className="font-semibold text-accent">80 to 120 meters</span> from underground basins with constant flow.
                                </p>
                                <p className="text-lg md:text-xl text-white leading-relaxed">
                                    This is where the underground part of the &quot;Commune Du Lac 2&quot; is located, where AQUA ROOKS mineral water flows. This process creates a <span className="font-semibold text-accent">gigantic natural filter</span>. This is how the natural source of our mineral water was created in the heart of the &quot;Commune Du Lac&quot;, created by nature.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                                        <span className="text-accent text-xl font-bold">✓</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                                            The excellent quality of the water was confirmed in <span className="font-semibold">April 2023</span> by a geological report from the <span className="font-semibold text-accent">University of Lomé / LAMICODA</span>.
                                        </p>
                                        <p className="text-sm text-slate-400 italic mt-3 border-l-4 border-accent/30 pl-4">
                                            (Laboratory for Microbiology and Food Quality Control (LAMICODA), University of Lomé, Togo)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl p-6 md:p-8 border border-primary/20 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-primary" />
                                <div className="pl-6">
                                    <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-4">
                                        To ensure that the source AQUA ROOKS renews itself in harmony with the natural water cycle, our employees and hydrogeologists ensure <span className="font-semibold">rational management</span> of the source. And that the resource is preserved in terms of quantity and protected in terms of quality.
                                    </p>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                        <p className="text-lg md:text-xl text-white font-semibold italic text-center">
                                            True to our credo: <span className="text-accent">Not taking more than nature provides us.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/20">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                    Lithology (Rock Types / Stratigraphic Structure)
                                </h4>
                                <div className="space-y-3">
                                    <p>
                                        Near the surface, loose sand material from the Quaternary (sand, partially with gravel) is found.
                                    </p>
                                    <p>
                                        Below this is the so-called &quot;Continental Terminal&quot; formation, which consists of clastic sediments (sand, partially with clay inclusions, gravel).
                                    </p>
                                    <p>
                                        At greater depth, a limestone layer from the Paleocene (dolomite/limestone aquifer) is found, which consists mainly of carbonate rock.
                                    </p>
                                    <p>
                                        Even deeper is a sandy or sandy limestone formation from the Maastrichtian (Upper Cretaceous).
                                    </p>
                                    <p>
                                        These various aquifers are separated from each other by rather impermeable (low permeability) cap layers and intermediate layers (aquicludes).
                                    </p>
                                    <p className="text-sm italic opacity-70 mt-4">
                                        (Source: earthwise.bgs.ac.uk+1)
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/20">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                    Hydrogeological Conditions – Aquifers and Water Resources
                                </h4>
                                <p className="mb-3">
                                    The most important aquifers are (from top to bottom):
                                </p>
                                <ol className="list-decimal list-inside space-y-2 ml-4">
                                    <li>Quaternary sand aquifer (near surface, unconfined)</li>
                                    <li>Continental Terminal aquifer (CT) (frequently used)</li>
                                    <li>Paleocene aquifer (limestone, deep)</li>
                                    <li>Maastrichtian aquifer (sand/sandstone)</li>
                                </ol>
                                <p className="text-sm italic opacity-70 mt-4">
                                    (Source: piahs.copernicus.org)
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/20">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                    Hydraulic Properties and Productivity
                                </h4>
                                <p>
                                    The CT aquifer is frequently used (e.g., for drinking water, especially for local wells).
                                </p>
                                <p>
                                    The permeability (conductivity) of the Continental Terminal aquifer is given in studies with orders of magnitude of ~5-8 × 10⁻³ m²/s.
                                </p>
                                <p className="text-sm italic opacity-70 mt-4">
                                    (Source: piahs.copernicus.org)
                                </p>
                            </div>
                        </div>
                    )}

                    {language === "fr" && (
                        <div className="space-y-8 leading-relaxed">
                            <div className="bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl p-6 md:p-8 border border-accent/20">
                                <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
                                    La source d&apos;<span className="font-semibold text-accent">AQUA ROOKS</span> se trouve dans la région la plus riche en eau du Togo, dans la commune de <span className="font-semibold">Lac 2</span>, préfecture &quot;Lacs au Togo&quot;, non loin de la côte du golfe de Guinée. Nous y extrayons de l&apos;eau minérale naturelle à une profondeur de <span className="font-semibold text-accent">80 à 120 mètres</span> depuis des bassins souterrains à débit constant.
                                </p>
                                <p className="text-lg md:text-xl text-white leading-relaxed">
                                    C&apos;est là que se trouve la partie souterraine de la &quot;Commune Du Lac 2&quot;, où coule l&apos;eau minérale d&apos;AQUA ROOKS. Ce processus crée un <span className="font-semibold text-accent">filtre naturel gigantesque</span>. C&apos;est ainsi qu&apos;est née la source naturelle de notre eau minérale au cœur de la &quot;Commune Du Lac&quot;, créée par la nature.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                                        <span className="text-accent text-xl font-bold">✓</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                                            L&apos;excellente qualité de l&apos;eau a été confirmée en <span className="font-semibold">avril 2023</span> par un rapport géologique de l&apos;<span className="font-semibold text-accent">Université de Lomé / LAMICODA</span>.
                                        </p>
                                        <p className="text-sm text-slate-400 italic mt-3 border-l-4 border-accent/30 pl-4">
                                            (Laboratoire de Microbiologie et de Contrôle de Qualité des Denrées Alimentaires (LAMICODA), Université de Lomé, Togo)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl p-6 md:p-8 border border-primary/20 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-primary" />
                                <div className="pl-6">
                                    <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-4">
                                        Pour garantir que la source AQUA ROOKS se renouvelle en harmonie avec le cycle naturel de l&apos;eau, nos employés et hydrogéologues assurent une <span className="font-semibold">gestion rationnelle</span> de la source. Et que la ressource soit préservée en termes de quantité et protégée en termes de qualité.
                                    </p>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                        <p className="text-lg md:text-xl text-white font-semibold italic text-center">
                                            Fidèles à notre credo : <span className="text-accent">Ne pas prendre plus que ce que la nature nous fournit.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/20">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                    Lithologie (Types de roches / Structure stratigraphique)
                                </h4>
                                <div className="space-y-3">
                                    <p>
                                        Près de la surface, on trouve du matériau sableux meuble du Quaternaire (sable, partiellement avec gravier).
                                    </p>
                                    <p>
                                        En dessous se trouve la formation dite &quot;Continental Terminal&quot;, qui consiste en sédiments clastiques (sable, partiellement avec inclusions d&apos;argile, gravier).
                                    </p>
                                    <p>
                                        À plus grande profondeur, on trouve une couche de calcaire du Paléocène (aquifère dolomitique/calcaire), qui consiste principalement en roche carbonatée.
                                    </p>
                                    <p>
                                        Encore plus profond se trouve une formation calcaire sableuse ou sableuse du Maastrichtien (Crétacé supérieur).
                                    </p>
                                    <p>
                                        Ces différents aquifères sont séparés les uns des autres par des couches de couverture et des couches intermédiaires (aquicludes) plutôt imperméables (faible perméabilité).
                                    </p>
                                    <p className="text-sm italic opacity-70 mt-4">
                                        (Source : earthwise.bgs.ac.uk+1)
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/20">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                    Conditions hydrogéologiques – Aquifères et ressources en eau
                                </h4>
                                <p className="mb-3">
                                    Les aquifères les plus importants sont (de haut en bas) :
                                </p>
                                <ol className="list-decimal list-inside space-y-2 ml-4">
                                    <li>Aquifère sableux quaternaire (près de la surface, non confiné)</li>
                                    <li>Aquifère Continental Terminal (CT) (fréquemment utilisé)</li>
                                    <li>Aquifère paléocène (calcaire, profond)</li>
                                    <li>Aquifère maastrichtien (sable/grès)</li>
                                </ol>
                                <p className="text-sm italic opacity-70 mt-4">
                                    (Source : piahs.copernicus.org)
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/20">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                    Propriétés hydrauliques et productivité
                                </h4>
                                <p>
                                    L&apos;aquifère CT est fréquemment utilisé (par exemple, pour l&apos;eau potable, en particulier pour les puits locaux).
                                </p>
                                <p>
                                    La perméabilité (conductivité) de l&apos;aquifère Continental Terminal est donnée dans les études avec des ordres de grandeur de ~5-8 × 10⁻³ m²/s.
                                </p>
                                <p className="text-sm italic opacity-70 mt-4">
                                    (Source : piahs.copernicus.org)
                                </p>
                            </div>
                        </div>
                    )}

                    {language === "ru" && (
                        <div className="space-y-8 leading-relaxed">
                            <div className="bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl p-6 md:p-8 border border-accent/20">
                                <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
                                    Источник <span className="font-semibold text-accent">AQUA ROOKS</span> расположен в самом богатом водой регионе Того, в муниципалитете <span className="font-semibold">Lac 2</span>, префектура &quot;Lacs au Togo&quot;, недалеко от побережья Гвинейского залива. Здесь мы добываем природную минеральную воду с глубины <span className="font-semibold text-accent">80 до 120 метров</span> из подземных бассейнов с постоянным потоком.
                                </p>
                                <p className="text-lg md:text-xl text-white leading-relaxed">
                                    Здесь находится подземная часть &quot;Commune Du Lac 2&quot;, где течет минеральная вода AQUA ROOKS. Этот процесс создает <span className="font-semibold text-accent">гигантский природный фильтр</span>. Так родился природный источник нашей минеральной воды в сердце &quot;Commune Du Lac&quot;, созданный природой.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                                        <span className="text-accent text-xl font-bold">✓</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                                            Отличное качество воды было подтверждено в <span className="font-semibold">апреле 2023 года</span> геологическим отчетом <span className="font-semibold text-accent">Университета Ломе / LAMICODA</span>.
                                        </p>
                                        <p className="text-sm text-slate-400 italic mt-3 border-l-4 border-accent/30 pl-4">
                                            (Лаборатория микробиологии и контроля качества пищевых продуктов (LAMICODA), Университет Ломе, Того)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl p-6 md:p-8 border border-primary/20 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-primary" />
                                <div className="pl-6">
                                    <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-4">
                                        Чтобы гарантировать, что источник AQUA ROOKS обновляется в гармонии с естественным водным циклом, наши сотрудники и гидрогеологи обеспечивают <span className="font-semibold">рациональное управление</span> источником. И чтобы ресурс сохранялся по количеству и защищался по качеству.
                                    </p>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                        <p className="text-lg md:text-xl text-white font-semibold italic text-center">
                                            Верны нашему кредо: <span className="text-accent">Не брать больше, чем природа нам предоставляет.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/20">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                    Литология (Типы пород / Стратиграфическая структура)
                                </h4>
                                <div className="space-y-3">
                                    <p>
                                        Близко к поверхности находится рыхлый песчаный материал из четвертичного периода (песок, частично с гравием).
                                    </p>
                                    <p>
                                        Ниже находится так называемая формация &quot;Continental Terminal&quot;, состоящая из обломочных осадков (песок, частично с включениями глины, гравий).
                                    </p>
                                    <p>
                                        На большей глубине находится известняковый слой из палеоцена (доломитовый/известняковый водоносный горизонт), состоящий в основном из карбонатной породы.
                                    </p>
                                    <p>
                                        Еще глубже находится песчаная или песчаная известняковая формация из маастрихта (верхний мел).
                                    </p>
                                    <p>
                                        Эти различные водоносные горизонты разделены друг от друга довольно непроницаемыми (низкая проницаемость) покрывающими слоями и промежуточными слоями (аквиклюдами).
                                    </p>
                                    <p className="text-sm italic opacity-70 mt-4">
                                        (Источник: earthwise.bgs.ac.uk+1)
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/20">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                    Гидрогеологические условия – Водоносные горизонты и водные ресурсы
                                </h4>
                                <p className="mb-3">
                                    Наиболее важные водоносные горизонты (сверху вниз):
                                </p>
                                <ol className="list-decimal list-inside space-y-2 ml-4">
                                    <li>Четвертичный песчаный водоносный горизонт (близко к поверхности, неограниченный)</li>
                                    <li>Водоносный горизонт Continental Terminal (CT) (часто используемый)</li>
                                    <li>Палеоценовый водоносный горизонт (известняк, глубокий)</li>
                                    <li>Маастрихтский водоносный горизонт (песок/песчаник)</li>
                                </ol>
                                <p className="text-sm italic opacity-70 mt-4">
                                    (Источник: piahs.copernicus.org)
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/20">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                    Гидравлические свойства и продуктивность
                                </h4>
                                <p>
                                    Водоносный горизонт CT часто используется (например, для питьевой воды, особенно для местных колодцев).
                                </p>
                                <p>
                                    Проницаемость (проводимость) водоносного горизонта Continental Terminal в исследованиях указывается с порядками величины ~5-8 × 10⁻³ м²/с.
                                </p>
                                <p className="text-sm italic opacity-70 mt-4">
                                    (Источник: piahs.copernicus.org)
                                </p>
                            </div>
                        </div>
                    )}
                </motion.div>
            </Container>
        </section>
    );
}
