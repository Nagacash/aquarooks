"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, DollarSign, Droplet, ShoppingBag, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useLanguageStore } from "@/store/language-store";

gsap.registerPlugin(ScrollTrigger);

const marketContent = {
  de: {
    title: "Marktentwicklung",
    subtitle: "Bottled Water in Togo",
    intro: "Der Markt für abgefülltes Trinkwasser (PET-Flaschen) in Togo wächst dynamisch und bietet großes Potenzial für qualitativ hochwertiges, lokal produziertes Mineralwasser wie ROOK'S AQUA.",
    stats: [
      {
        value: "62,02 Mio. US$",
        label: "Umsatz 2023",
        sublabel: "Bottled Water Segment",
        icon: DollarSign,
        color: "from-accent/20 to-accent/10",
        iconColor: "text-accent",
      },
      {
        value: "5,08%",
        label: "Jährliches Wachstum",
        sublabel: "CAGR 2023–2027",
        icon: TrendingUp,
        color: "from-green-500/20 to-green-400/10",
        iconColor: "text-green-600",
      },
      {
        value: "143,70 Mio. L",
        label: "Volumen bis 2027",
        sublabel: "Prognose",
        icon: Droplet,
        color: "from-blue-500/20 to-blue-400/10",
        iconColor: "text-blue-600",
      },
      {
        value: "14,28 L",
        label: "Pro Person 2023",
        sublabel: "Durchschnittliches Volumen",
        icon: ShoppingBag,
        color: "from-primary/20 to-primary/10",
        iconColor: "text-primary",
      },
    ],
    points: [
      "Der Umsatz im Segment \"Bottled Water\" (Trinkflaschen PET) beläuft sich auf 62,02 Mio. US$ im Jahr 2023. Es wird erwartet, dass der Markt jährlich um 5,08 % wächst (CAGR 2023–2027).",
      "Bezogen auf die Gesamtbevölkerung werden im Jahr 2023 Einnahmen von 6,98 US$ pro Person generiert (CAGR 2023–2027).",
      "Im Segment \"Bottled Water\" wird bis 2027 ein Volumen von 143,70 Mio. Liter erwartet. Für 2024 wird ein Mengenwachstum von 3,8 % prognostiziert (CAGR 2023–2027).",
      "Es wird erwartet, dass das durchschnittliche Volumen pro Person im Flaschenwassersegment im Jahr 2023 bei 14,28 Litern liegt (CAGR 2023–2027).",
      "Bis 2027 werden voraussichtlich 8 % der Ausgaben im Flaschenwassersegment auf den Außer-Haus-Konsum (z. B. in Bars und Restaurants) entfallen (CAGR 2023–2027).",
    ],
    competitionTitle: "Wettbewerber",
    competitors: [
      { name: "Voltic", origin: "Ghana", type: "Importeur", share: "36%", verified: true },
      { name: "Diverse Importeure", origin: "Benin & Burkina Faso", type: "Importeur", share: "33,5%", verified: true },
      { name: "Cristal", origin: "Togo", type: "Lokaler Anbieter", share: "Nicht verifizierbar", verified: false },
      { name: "Kleinstanbieter", origin: "Togo", type: "Sachet-Produzenten", share: "Nicht verifizierbar", verified: false },
    ],
  },
  en: {
    title: "Market Development",
    subtitle: "Bottled Water in Togo",
    intro: "The bottled drinking water market (PET bottles) in Togo is growing dynamically and offers strong potential for high-quality, locally produced mineral water such as ROOK'S AQUA.",
    stats: [
      {
        value: "USD 62.02M",
        label: "Revenue 2023",
        sublabel: "Bottled Water Segment",
        icon: DollarSign,
        color: "from-accent/20 to-accent/10",
        iconColor: "text-accent",
      },
      {
        value: "5.08%",
        label: "Annual Growth",
        sublabel: "CAGR 2023–2027",
        icon: TrendingUp,
        color: "from-green-500/20 to-green-400/10",
        iconColor: "text-green-600",
      },
      {
        value: "143.70M L",
        label: "Volume by 2027",
        sublabel: "Forecast",
        icon: Droplet,
        color: "from-blue-500/20 to-blue-400/10",
        iconColor: "text-blue-600",
      },
      {
        value: "14.28 L",
        label: "Per Person 2023",
        sublabel: "Average Volume",
        icon: ShoppingBag,
        color: "from-primary/20 to-primary/10",
        iconColor: "text-primary",
      },
    ],
    points: [
      "Revenue in the bottled water segment (PET drinking bottles) amounts to USD 62.02 million in 2023, with an expected annual growth rate of 5.08% (CAGR 2023–2027).",
      "In 2023, revenue of USD 6.98 per person is generated, based on the total population (CAGR 2023–2027).",
      "By 2027, the bottled water segment is expected to reach a volume of 143.70 million litres. For 2024, a volume growth of 3.8% is forecast (CAGR 2023–2027).",
      "The average volume per person in the bottled water segment is expected to be 14.28 litres in 2023 (CAGR 2023–2027).",
      "By 2027, around 8% of spending in the bottled water segment is expected to take place out of home (e.g. in bars and restaurants) (CAGR 2023–2027).",
    ],
    competitionTitle: "Competitors",
    competitors: [
      { name: "Voltic", origin: "Ghana", type: "Importer", share: "36%", verified: true },
      { name: "Various Importers", origin: "Benin & Burkina Faso", type: "Importer", share: "33.5%", verified: true },
      { name: "Cristal", origin: "Togo", type: "Local Provider", share: "Not verified", verified: false },
      { name: "Small Suppliers", origin: "Togo", type: "Sachet Producers", share: "Not verified", verified: false },
    ],
  },
  fr: {
    title: "Évolution du marché",
    subtitle: "Eau en bouteille au Togo",
    intro: "Le marché de l'eau potable en bouteille (bouteilles PET) au Togo est en forte croissance et offre un grand potentiel pour une eau minérale locale de haute qualité comme ROOK'S AQUA.",
    stats: [
      {
        value: "62,02 M$ US",
        label: "Chiffre d'affaires 2023",
        sublabel: "Segment Eau en bouteille",
        icon: DollarSign,
        color: "from-accent/20 to-accent/10",
        iconColor: "text-accent",
      },
      {
        value: "5,08%",
        label: "Croissance annuelle",
        sublabel: "TCAC 2023–2027",
        icon: TrendingUp,
        color: "from-green-500/20 to-green-400/10",
        iconColor: "text-green-600",
      },
      {
        value: "143,70 M L",
        label: "Volume d'ici 2027",
        sublabel: "Prévision",
        icon: Droplet,
        color: "from-blue-500/20 to-blue-400/10",
        iconColor: "text-blue-600",
      },
      {
        value: "14,28 L",
        label: "Par personne 2023",
        sublabel: "Volume moyen",
        icon: ShoppingBag,
        color: "from-primary/20 to-primary/10",
        iconColor: "text-primary",
      },
    ],
    points: [
      "Le chiffre d'affaires du segment « Bottled Water » (eau en bouteille PET) s'élève à 62,02 millions de dollars US en 2023, avec une croissance annuelle prévue de 5,08 % (TCAC 2023–2027).",
      "En 2023, les revenus atteignent 6,98 dollars US par personne, en moyenne sur l'ensemble de la population (TCAC 2023–2027).",
      "D'ici 2027, le segment de l'eau en bouteille devrait atteindre un volume de 143,70 millions de litres. Pour 2024, une croissance en volume de 3,8 % est prévue (TCAC 2023–2027).",
      "Le volume moyen par personne dans le segment de l'eau en bouteille devrait être de 14,28 litres en 2023 (TCAC 2023–2027).",
      "D'ici 2027, environ 8 % des dépenses dans le segment de l'eau en bouteille devraient provenir de la consommation hors domicile (par exemple dans les bars et restaurants) (TCAC 2023–2027).",
    ],
    competitionTitle: "Concurrents",
    competitors: [
      { name: "Voltic", origin: "Ghana", type: "Importateur", share: "36%", verified: true },
      { name: "Divers importateurs", origin: "Bénin & Burkina Faso", type: "Importateur", share: "33,5%", verified: true },
      { name: "Cristal", origin: "Togo", type: "Fournisseur local", share: "Non vérifiée", verified: false },
      { name: "Petits fournisseurs", origin: "Togo", type: "Producteurs de sachets", share: "Non vérifiée", verified: false },
    ],
  },
};

export function Market() {
  const { language } = useLanguageStore();
  const content = marketContent[language];
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const competitorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (statsRef.current) {
        const items = statsRef.current.children;
        gsap.fromTo(
          items,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (competitorsRef.current) {
        const items = competitorsRef.current.children;
        gsap.fromTo(
          items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: competitorsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="marktentwicklung"
      className="py-28 md:py-40 bg-gradient-to-b from-slate-50 via-white to-slate-50 scroll-mt-20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10">
        {/* Header */}
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
          >
            {content.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            {content.intro}
          </motion.p>
        </div>

        {/* Key Statistics Grid */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {content.stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 md:p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${stat.iconColor}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 mb-20 items-start">
          {/* Left: Market Details & Competitors */}
          <div className="space-y-8">
            {/* Market Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-10 rounded-3xl bg-white/95 backdrop-blur-sm shadow-2xl border border-slate-200/60"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  {language === "de"
                    ? "Marktkennzahlen"
                    : language === "en"
                    ? "Market Indicators"
                    : "Indicateurs du marché"}
                </h3>
              </div>
              <ul className="space-y-4">
                {content.points.map((item, idx) => (
                  <li key={idx} className="flex gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 group-hover:bg-accent/20 transition-colors">
                      <ArrowUpRight className="w-3 h-3 text-accent" />
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Competitors Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 md:p-10 rounded-3xl bg-white/95 backdrop-blur-sm shadow-2xl border border-slate-200/60"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-lg">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  {content.competitionTitle}
                </h3>
              </div>
              <div ref={competitorsRef} className="space-y-4">
                {content.competitors.map((competitor, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 hover:border-accent/40 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-primary text-lg group-hover:text-accent transition-colors">
                            {competitor.name}
                          </h4>
                          {competitor.verified && (
                            <span className="px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {competitor.origin} · {competitor.type}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">
                          {competitor.share}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {language === "de" ? "Marktanteil" : language === "en" ? "Market Share" : "Part de marché"}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Bottle Image */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-xs lg:sticky lg:top-32">
            <div className="relative">
              {/* Enhanced glow effects - tighter around bottle */}
              <div className="absolute inset-0 -inset-8 rounded-[2.5rem] bg-gradient-to-b from-accent/25 via-primary/12 to-accent/25 blur-3xl animate-pulse opacity-60" />
              <div className="absolute inset-0 -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/8 via-transparent to-primary/8 blur-xl" />
              
              {/* Main image container */}
              <div className="relative z-10 flex items-center justify-center transform hover:scale-110 transition-all duration-700 ease-out">
                <div className="relative w-full max-w-[280px]">
                  {/* Additional shadow layers for depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/15 to-transparent blur-2xl -z-10 scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 blur-xl -z-10 scale-105" />
                  
                  <Image
                    src="/images/logos/bottle.png"
                    alt="ROOK'S AQUA PET Bottle"
                    width={400}
                    height={1000}
                    className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,191,255,0.3)] filter brightness-110 contrast-105 saturate-110"
                    priority
                    quality={95}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Outlook Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 mb-12 flex flex-col items-center text-center space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-primary">
            {language === "de" && "Zukunftsaussichten"}
            {language === "en" && "Future Outlook"}
            {language === "fr" && "Perspectives d'avenir"}
          </h3>
          <div className="relative w-56 md:w-72 lg:w-80">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <Image
              src="/images/logos/SachetDirty.png"
              alt="Sachet Water Illustration"
              width={320}
              height={320}
              className="w-full h-auto object-contain drop-shadow-2xl filter brightness-110 contrast-105"
              quality={95}
            />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-primary/10"
        >
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-accent" />
            <p className="text-base md:text-lg font-semibold text-foreground text-center">
              {language === "de" &&
                "ROOK'S AQUA positioniert sich in einem wachsenden Markt mit klaren Qualitäts- und Preisvorteilen."}
              {language === "en" &&
                "ROOK'S AQUA is positioned in a growing market with clear quality and price advantages."}
              {language === "fr" &&
                "ROOK'S AQUA se positionne sur un marché en croissance avec des avantages clairs en termes de qualité et de prix."}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
