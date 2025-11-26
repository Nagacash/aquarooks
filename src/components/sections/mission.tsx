"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Target, Heart, Globe, Leaf } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Accordion } from "@/components/ui/accordion";
import { useLanguageStore } from "@/store/language-store";

gsap.registerPlugin(ScrollTrigger);

const missionContent = {
    de: {
        title: "Unsere Mission",
        subtitle: "Quelle des Lebens",
        description: "ROOK´S AQUA fördert, produziert und vermarktet natürliches Mineralwasser aus togolesischer Quelle in PET-Flaschen – mit Fokus auf Qualität, Nachhaltigkeit und gesellschaftliche Verantwortung.",
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
                description: "Protégée dans les bassins d&apos;eau souterrains du sud du Togo, loin de toute pollution environnementale.",
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-5 text-left md:text-center max-w-4xl mx-auto"
                    >
                        {language === "de" && (
                            <>
                                <p>
                                    Das 2023 gegründete Unternehmen „ROOK´S AQUA“ hat es sich zum Ziel gemacht, eine Versorgung von qualitativ erstklassigem, natürlichem Mineralwasser aus togolesischer Quelle landesweit für die Bevölkerung zu fördern, zu produzieren und in Trinkflaschen (PET) zu vermarkten und zu distribuieren.
                                </p>
                                <p>
                                    Aufgrund gesellschaftlicher Veränderungen und hygienischer Bedenken gegenüber den weitverbreiteten 0,25l „Mineralwasser-Plastikbeuteln“ der „sachets d&apos;eau minérale“ ist die Nachfrage nach PET-Flaschen („bouteilles“) stark angestiegen.
                                </p>
                                <p>
                                    Um diese steigende Nachfrage nach Mineralwasser aus PET-Flaschen zu bedienen, wurde ROOK&apos;S AQUA gegründet.
                                </p>
                                <p>
                                    Die dafür erschlossene Quelle auf eigenem Grund in der wasserreichen Region Atoèta-Alaroya / Commune Lac 2 in der Präfektur „LACS AU TOGO“ mit ihrer ausgezeichneten Wasserqualität wurde im geologischen Gutachten der Université de Lomé / Lamicoda vom April 2023 bestätigt.
                                </p>
                                <p>
                                    (Laboratoire de Microbiologie et de Contrôle de Qualité des Denrées Alimentaires (LAMICODA), Université de Lomé, Togo)
                                </p>
                                <p>
                                    „Unser in Atoéta / Commune Lac 2 vorhandenes Wasser enthält eine Mischung aus Mineralien und Nährstoffen, die durch Sand, Ton und Kalkstein gefiltert werden, wodurch die wertvollen Spurenelemente mit dem richtigen pH-Wert erhalten bleiben und ein natürlich reines, hochwertiges Mineralwasser entsteht“, so der Firmengründer Rodrigue Guedou Mahouton.
                                </p>
                                <p className="font-semibold text-primary mt-4">
                                    Mission Statements:
                                </p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Wir generieren eine sehr gute Rentabilität.</li>
                                    <li>Wir wachsen mit Gewissen.</li>
                                    <li>Wir machen Business, das allen zugutekommt.</li>
                                    <li>Wichtig sind uns Umwelt-, Sozial- und Governance-Standards (ESG).</li>
                                </ul>
                            </>
                        )}

                        {language === "en" && (
                            <>
                                <p>
                                    Founded in 2023, ROOK&apos;S AQUA aims to ensure nationwide access to high-quality natural mineral water from a Togolese source – by developing, producing, marketing and distributing it in PET drinking bottles.
                                </p>
                                <p>
                                    Due to social changes and hygiene concerns about the widespread 0.25 l mineral water plastic sachets (&quot;sachets d&apos;eau minérale&quot;), demand for PET bottles (&quot;bouteilles&quot;) has increased significantly.
                                </p>
                                <p>
                                    ROOK&apos;S AQUA was created to meet this growing demand for mineral water in PET bottles.
                                </p>
                                <p>
                                    The company&apos;s own source in the water-rich region of Atoèta-Alaroya / Commune Lac 2 in the prefecture &quot;LACS AU TOGO&quot;, with its excellent water quality, was confirmed by a geological report from Université de Lomé / Lamicoda in April 2023.
                                </p>
                                <p>
                                    (Laboratoire de Microbiologie et de Contrôle de Qualité des Denrées Alimentaires (LAMICODA), Université de Lomé, Togo)
                                </p>
                                <p>
                                    &quot;Our water available in Atoéta / Commune Lac 2 contains a mix of minerals and nutrients that are filtered through sand, clay and limestone, preserving valuable trace elements with the right pH value and creating naturally pure, high-quality mineral water,&quot; says company founder Rodrigue Guedou Mahouton.
                                </p>
                                <p className="font-semibold text-primary mt-4">
                                    Mission statements:
                                </p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>We generate very good profitability.</li>
                                    <li>We grow with conscience.</li>
                                    <li>We do business that benefits everyone.</li>
                                    <li>Environmental, social and governance (ESG) standards are essential to us.</li>
                                </ul>
                            </>
                        )}

                        {language === "fr" && (
                            <>
                                <p>
                                    Fondée en 2023, l&apos;entreprise ROOK&apos;S AQUA a pour objectif de promouvoir, produire et distribuer à l&apos;échelle nationale une eau minérale naturelle de très haute qualité, issue d&apos;une source togolaise, conditionnée en bouteilles PET pour la population.
                                </p>
                                <p>
                                    En raison des évolutions sociétales et des préoccupations hygiéniques liées aux sachets plastiques de 0,25 l d&apos;eau minérale (&quot;sachets d&apos;eau minérale&quot;), la demande en bouteilles PET (&quot;bouteilles&quot;) a fortement augmenté.
                                </p>
                                <p>
                                    ROOK&apos;S AQUA a été créée pour répondre à cette demande croissante d&apos;eau minérale en bouteilles PET.
                                </p>
                                <p>
                                    La source exploitée, située sur un terrain appartenant à l&apos;entreprise dans la région riche en eau d&apos;Atoèta-Alaroya / Commune Lac 2, dans la préfecture &quot;LACS AU TOGO&quot;, et sa qualité exceptionnelle ont été confirmées par un rapport géologique de l&apos;Université de Lomé / Lamicoda en avril 2023.
                                </p>
                                <p>
                                    (Laboratoire de Microbiologie et de Contrôle de Qualité des Denrées Alimentaires (LAMICODA), Université de Lomé, Togo)
                                </p>
                                <p>
                                    « Notre eau, disponible à Atoéta / Commune Lac 2, contient un mélange de minéraux et de nutriments filtrés à travers le sable, l&apos;argile et le calcaire, ce qui préserve les oligo-éléments précieux avec un pH optimal et donne naissance à une eau minérale naturellement pure et de haute qualité », explique le fondateur de l&apos;entreprise, Rodrigue Guedou Mahouton.
                                </p>
                                <p className="font-semibold text-primary mt-4">
                                    Déclarations de mission :
                                </p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Nous générons une très bonne rentabilité.</li>
                                    <li>Nous grandissons avec conscience.</li>
                                    <li>Nous faisons des affaires qui profitent à tous.</li>
                                    <li>Les normes environnementales, sociales et de gouvernance (ESG) sont essentielles pour nous.</li>
                                </ul>
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

                {language === "de" && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-20 max-w-4xl mx-auto text-left space-y-6 text-muted-foreground bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/30 shadow-xl"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                            Unser Ursprung
                        </h3>
                        <p>
                            Die Quelle von AQUA ROOKS befindet sich in der wasserreichsten Region Togos, in der Gemeinde Lac 2, Präfektur „Lacs au Togo”, unweit der Küste des Golfs von Guinea. Dort fördern wir natürliches Mineralwasser aus einer Tiefe von 80 bis 120 Metern aus unterirdischen Becken mit konstantem Durchfluss. Dort befindet sich der unterirdische Teil der „Commune Du Lac 2”, wo das Mineralwasser von AQUA ROOKS fließt. Dieser Prozess schafft einen gigantischen natürlichen Filter. So entstand im Herzen der „Commune Du Lac” die natürliche Quelle unseres Mineralwassers, geschaffen von der Natur.
                        </p>
                        <p>
                            Die ausgezeichnete Qualität des Wassers wurde im April 2023 durch ein geologisches Gutachten der Universität Lomé / LAMICODA bestätigt. (Labor für Mikrobiologie und Qualitätskontrolle von Lebensmitteln (LAMICODA), Universität Lomé, Togo)
                        </p>
                        <p>
                            Um sicherzustellen, dass sich die Quelle AQUA ROOKS im Einklang mit dem natürlichen Wasserkreislauf erneuert, sorgen unsere Mitarbeiter und Hydrogeologen für eine rationelle Bewirtschaftung der Quelle. Und dafür, dass die Ressource in Bezug auf Quantität erhalten und in Bezug auf Qualität geschützt wird. Getreu unserem Credo: Nicht mehr nehmen, als die Natur uns zur Verfügung stellt.
                        </p>

                        <div className="pt-6">
                            <Accordion title="Wissenschaftlicher Bericht & Geologische Analyse">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xl font-semibold text-primary mb-3">
                                            Lithologie (Gesteinsarten / stratigraphische Struktur)
                                        </h4>
                                        <div className="space-y-2">
                                            <p>
                                                In Oberflächennähe findet man lockeres Sandmaterial aus dem Quartär (Sand, teilweise mit Kies).
                                            </p>
                                            <p>
                                                Darunter befindet sich die sogenannte „Continental Terminal”-Formation, die aus klastischen Sedimenten (Sand, teilweise mit Lehmeinschlüssen, Kies) besteht.
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
                                            <p className="text-sm italic opacity-70">
                                                (Quelle: earthwise.bgs.ac.uk+1)
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-semibold text-primary mb-3">
                                            Hydrogeologische Bedingungen – Grundwasserleiter und Wasserressourcen
                                        </h4>
                                        <p className="mb-2">
                                            Die wichtigsten Grundwasserleiter sind (von oben nach unten):
                                        </p>
                                        <ol className="list-decimal list-inside space-y-1 ml-2">
                                            <li>Quartärer Sandgrundwasserleiter (oberflächennah, nicht begrenzt)</li>
                                            <li>Kontinentaler Endgrundwasserleiter (CT) (häufig genutzt)</li>
                                            <li>Paläozäner Grundwasserleiter (Kalkstein, tief)</li>
                                            <li>Maastricht-Grundwasserleiter (Sand/Sandstein)</li>
                                        </ol>
                                        <p className="text-sm italic opacity-70 mt-2">
                                            (Quelle: piahs.copernicus.org)
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-semibold text-primary mb-3">
                                            Hydraulische Eigenschaften und Produktivität
                                        </h4>
                                        <p>
                                            Der CT-Grundwasserleiter wird häufig genutzt (z. B. für Trinkwasser, insbesondere für lokale Brunnen). Die Durchlässigkeit (Leitfähigkeit) des kontinentalen Endaquifers wird in Studien mit Größenordnungen von ~5-8 ×
                                        </p>
                                    </div>
                                </div>
                            </Accordion>
                        </div>
                    </motion.div>
                )}
            </Container>
        </section>
    );
}
