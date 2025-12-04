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
    intro: "Der Markt für abgefülltes Trinkwasser (PET-Flaschen) in Togo wächst dynamisch und bietet großes Potenzial für qualitativ hochwertiges, lokal produziertes Mineralwasser wie AQUA ROOKS.",
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
    intro: "The bottled drinking water market (PET bottles) in Togo is growing dynamically and offers strong potential for high-quality, locally produced mineral water such as AQUA ROOKS.",
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
    intro: "Le marché de l'eau potable en bouteille (bouteilles PET) au Togo est en forte croissance et offre un grand potentiel pour une eau minérale locale de haute qualité comme AQUA ROOKS.",
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
  ru: {
    title: "Развитие рынка",
    subtitle: "Вода в бутылках в Того",
    intro: "Рынок бутилированной питьевой воды (ПЭТ-бутылки) в Того динамично растет и предлагает большой потенциал для высококачественной местной минеральной воды, такой как AQUA ROOKS.",
    stats: [
      {
        value: "62,02 млн $",
        label: "Выручка 2023",
        sublabel: "Сегмент бутилированной воды",
        icon: DollarSign,
        color: "from-accent/20 to-accent/10",
        iconColor: "text-accent",
      },
      {
        value: "5,08%",
        label: "Годовой рост",
        sublabel: "CAGR 2023–2027",
        icon: TrendingUp,
        color: "from-green-500/20 to-green-400/10",
        iconColor: "text-green-600",
      },
      {
        value: "143,70 млн л",
        label: "Объем к 2027",
        sublabel: "Прогноз",
        icon: Droplet,
        color: "from-blue-500/20 to-blue-400/10",
        iconColor: "text-blue-600",
      },
      {
        value: "14,28 л",
        label: "На человека 2023",
        sublabel: "Средний объем",
        icon: ShoppingBag,
        color: "from-primary/20 to-primary/10",
        iconColor: "text-primary",
      },
    ],
    points: [
      "Выручка в сегменте бутилированной воды (ПЭТ-бутылки) составляет 62,02 миллиона долларов США в 2023 году, с ожидаемым годовым темпом роста 5,08% (CAGR 2023–2027).",
      "В 2023 году выручка составляет 6,98 долларов США на человека, в среднем по всему населению (CAGR 2023–2027).",
      "К 2027 году сегмент бутилированной воды, как ожидается, достигнет объема 143,70 миллионов литров. На 2024 год прогнозируется рост объема на 3,8% (CAGR 2023–2027).",
      "Средний объем на человека в сегменте бутилированной воды, как ожидается, составит 14,28 литров в 2023 году (CAGR 2023–2027).",
      "К 2027 году около 8% расходов в сегменте бутилированной воды, как ожидается, будет приходиться на потребление вне дома (например, в барах и ресторанах) (CAGR 2023–2027).",
    ],
    competitionTitle: "Конкуренты",
    competitors: [
      { name: "Voltic", origin: "Гана", type: "Импортер", share: "36%", verified: true },
      { name: "Различные импортеры", origin: "Бенин и Буркина-Фасо", type: "Импортер", share: "33,5%", verified: true },
      { name: "Cristal", origin: "Того", type: "Местный поставщик", share: "Не проверено", verified: false },
      { name: "Мелкие поставщики", origin: "Того", type: "Производители пакетов", share: "Не проверено", verified: false },
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6"
          >
            {content.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4"
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
                    : language === "fr"
                    ? "Indicateurs du marché"
                    : "Рыночные показатели"}
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
                          {language === "de" ? "Marktanteil" : language === "en" ? "Market Share" : language === "fr" ? "Part de marché" : "Доля рынка"}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Bottle Image */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl lg:sticky lg:top-32">
            <div className="relative flex items-center justify-center">
              {/* Main image container */}
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
                className="relative z-10"
              >
                <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] xl:max-w-[700px]">
                    <Image
                    src="/images/logos/bottle.png"
                    alt="AQUA ROOKS PET Bottle"
                    width={700}
                    height={1750}
                    className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)] filter brightness-105 contrast-110 saturate-105"
                    priority
                    quality={95}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Future Outlook Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 mb-12"
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              {language === "de" && "Zukunftsaussichten"}
              {language === "en" && "Future Outlook"}
              {language === "fr" && "Perspectives d'avenir"}
              {language === "ru" && "Перспективы на будущее"}
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.6fr] gap-12 items-center">
              {/* Text Content */}
              <div className="p-8 md:p-10 rounded-3xl bg-white/95 backdrop-blur-sm shadow-2xl border border-slate-200/60">
                {language === "de" && (
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      Das Hygiene- und Gesundheitsbewusstsein der Menschen hat zugenommen. Die Nachfrage nach abgefülltem Wasser steigt. Abgefülltes Wasser wird in den kommenden Jahren einen neuen Höchststand beim Pro-Kopf-Verbrauch erreichen.
                    </p>
                    <p>
                      Der Markt für abgefülltes Wasser ist einer der florierendsten Sektoren, für den bis zum Ende des laufenden Jahrzehnts ein beträchtliches Wachstum erwartet wird, wenn die derzeitigen Trends anhalten. Erhöhte verfügbare Geldmittel der anwachsenden Mittelschicht, ein schwaches öffentliches Wasserversorgungssystem, die Infrastruktur und der Anstieg des Tourismus sind Faktoren, die zu einer raschen Expansion führen.
                    </p>
                    <p className="text-sm italic opacity-70 pt-4 border-t border-slate-200">
                      (Study: &quot;Bottled Water Market Analysis: Size, Share and Forecast&quot; (2018-2028) / Makreo Research)
                    </p>
                  </div>
                )}

                {language === "en" && (
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      People&apos;s awareness of hygiene and health has increased. Demand for bottled water is rising. Bottled water will reach a new peak in per capita consumption in the coming years.
                    </p>
                    <p>
                      The bottled water market is one of the most flourishing sectors, for which considerable growth is expected by the end of the current decade if current trends continue. Increased available funds of the growing middle class, a weak public water supply system, infrastructure and the rise in tourism are factors leading to rapid expansion.
                    </p>
                    <p className="text-sm italic opacity-70 pt-4 border-t border-slate-200">
                      (Study: &quot;Bottled Water Market Analysis: Size, Share and Forecast&quot; (2018-2028) / Makreo Research)
                    </p>
                  </div>
                )}

                {language === "fr" && (
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      La prise de conscience en matière d&apos;hygiène et de santé a augmenté. La demande d&apos;eau en bouteille augmente. L&apos;eau en bouteille atteindra un nouveau sommet de consommation par habitant dans les années à venir.
                    </p>
                    <p>
                      Le marché de l&apos;eau en bouteille est l&apos;un des secteurs les plus florissants, pour lequel une croissance considérable est attendue d&apos;ici la fin de la décennie actuelle si les tendances actuelles se maintiennent. L&apos;augmentation des fonds disponibles de la classe moyenne croissante, un système d&apos;approvisionnement en eau publique faible, l&apos;infrastructure et l&apos;essor du tourisme sont des facteurs qui conduisent à une expansion rapide.
                    </p>
                    <p className="text-sm italic opacity-70 pt-4 border-t border-slate-200">
                      (Étude : &quot;Bottled Water Market Analysis: Size, Share and Forecast&quot; (2018-2028) / Makreo Research)
                    </p>
                  </div>
                )}

                {language === "ru" && (
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      Осведомленность людей о гигиене и здоровье возросла. Спрос на бутилированную воду растет. Бутилированная вода достигнет нового пика потребления на душу населения в ближайшие годы.
                    </p>
                    <p>
                      Рынок бутилированной воды является одним из самых процветающих секторов, для которого ожидается значительный рост к концу текущего десятилетия, если текущие тенденции сохранятся. Увеличение доступных средств растущего среднего класса, слабая система общественного водоснабжения, инфраструктура и рост туризма являются факторами, ведущими к быстрому расширению.
                    </p>
                    <p className="text-sm italic opacity-70 pt-4 border-t border-slate-200">
                      (Исследование: &quot;Анализ рынка бутилированной воды: размер, доля и прогноз&quot; (2018-2028) / Makreo Research)
                    </p>
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="relative flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, -1.5, 1.5, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.8, ease: "easeOut" },
                    scale: { duration: 0.8, ease: "easeOut" },
                    y: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                  className="relative w-72 md:w-96 lg:w-[420px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
                  <Image
                    src="/images/logos/SachetDirty.png"
                    alt="Sachet Water Illustration"
                    width={420}
                    height={420}
                    className="w-full h-auto object-contain drop-shadow-2xl filter brightness-110 contrast-105"
                    quality={95}
                  />
                </motion.div>
              </div>
            </div>
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
            <p className="text-base md:text-lg font-semibold text-foreground text-center break-words leading-snug">
              {language === "de" &&
                "AQUA ROOKS positioniert sich in einem wachsenden Markt mit klaren Qualitäts- und Preisvorteilen."}
              {language === "en" &&
                "AQUA ROOKS is positioned in a growing market with clear quality and price advantages."}
              {language === "fr" &&
                "AQUA ROOKS se positionne sur un marché en croissance avec des avantages clairs en termes de qualité et de prix."}
              {language === "ru" &&
                "AQUA ROOKS позиционируется на растущем рынке с явными преимуществами в качестве и цене."}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
