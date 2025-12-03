"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useLanguageStore } from "@/store/language-store";

const faqContent = {
    de: {
        title: "Häufig gestellte Fragen",
        subtitle: "Wissenswertes",
        items: [
            {
                question: "Woher kommt das Aqua Rooks Wasser?",
                answer: "Unser Wasser entspringt einer geschützten alpinen Quelle in unberührter Natur. Es wird direkt am Quellort abgefüllt, um seine ursprüngliche Reinheit und Mineralisierung zu bewahren."
            },
            {
                question: "Wie hoch ist der pH-Wert?",
                answer: "Aqua Rooks hat einen natürlich balancierten pH-Wert von 7,4. Dies entspricht dem pH-Wert des menschlichen Blutes und trägt zu einer optimalen Verträglichkeit bei."
            },
            {
                question: "Ist die Verpackung nachhaltig?",
                answer: "Ja, absolut. Wir verwenden ausschließlich Glasflaschen, die zu 100% recycelbar sind und den Geschmack des Wassers nicht beeinträchtigen. Unsere Etiketten bestehen aus recyceltem Papier."
            },
            {
                question: "Liefern Sie auch ins Ausland?",
                answer: "Derzeit konzentrieren wir uns auf den DACH-Raum (Deutschland, Österreich, Schweiz), um kurze Transportwege und maximale Frische zu garantieren. Eine Expansion ist jedoch geplant."
            }
        ]
    },
    en: {
        title: "Frequently Asked Questions",
        subtitle: "Good to know",
        items: [
            {
                question: "Where does Aqua Rooks water come from?",
                answer: "Our water originates from a protected alpine spring in untouched nature. It is bottled directly at the source to preserve its original purity and mineralization."
            },
            {
                question: "What is the pH level?",
                answer: "Aqua Rooks has a naturally balanced pH level of 7.4. This corresponds to the pH level of human blood and contributes to optimal tolerability."
            },
            {
                question: "Is the packaging sustainable?",
                answer: "Yes, absolutely. We exclusively use glass bottles that are 100% recyclable and do not affect the taste of the water. Our labels are made from recycled paper."
            },
            {
                question: "Do you ship internationally?",
                answer: "Currently, we focus on the DACH region (Germany, Austria, Switzerland) to guarantee short transport routes and maximum freshness. However, expansion is planned."
            }
        ]
    },
    fr: {
        title: "Questions Fréquemment Posées",
        subtitle: "Bon à savoir",
        items: [
            {
                question: "D'où vient l'eau Aqua Rooks ?",
                answer: "Notre eau provient d'une source alpine protégée dans une nature intacte. Elle est mise en bouteille directement à la source pour préserver sa pureté et sa minéralisation d'origine."
            },
            {
                question: "Quel est le niveau de pH ?",
                answer: "Aqua Rooks a un pH naturellement équilibré de 7,4. Cela correspond au pH du sang humain et contribue à une tolérance optimale."
            },
            {
                question: "L'emballage est-il durable ?",
                answer: "Oui, absolument. Nous utilisons exclusivement des bouteilles en verre 100% recyclables qui n'altèrent pas le goût de l'eau. Nos étiquettes sont fabriquées à partir de papier recyclé."
            },
            {
                question: "Livrez-vous à l'international ?",
                answer: "Actuellement, nous nous concentrons sur la région DACH (Allemagne, Autriche, Suisse) pour garantir des trajets de transport courts et une fraîcheur maximale. Cependant, une expansion est prévue."
            }
        ]
    },
    ru: {
        title: "Часто задаваемые вопросы",
        subtitle: "Полезно знать",
        items: [
            {
                question: "Откуда берется вода Aqua Rooks?",
                answer: "Наша вода берет начало из защищенного альпийского источника в нетронутой природе. Она разливается непосредственно у источника, чтобы сохранить ее первоначальную чистоту и минерализацию."
            },
            {
                question: "Какой уровень pH?",
                answer: "Aqua Rooks имеет естественно сбалансированный уровень pH 7,4. Это соответствует уровню pH человеческой крови и способствует оптимальной переносимости."
            },
            {
                question: "Устойчива ли упаковка?",
                answer: "Да, абсолютно. Мы используем исключительно стеклянные бутылки, которые на 100% перерабатываются и не влияют на вкус воды. Наши этикетки изготовлены из переработанной бумаги."
            },
            {
                question: "Доставляете ли вы за границу?",
                answer: "В настоящее время мы сосредоточены на регионе DACH (Германия, Австрия, Швейцария), чтобы гарантировать короткие пути транспортировки и максимальную свежесть. Однако планируется расширение."
            }
        ]
    },
};

export function Faq() {
    const { language } = useLanguageStore();
    const content = faqContent[language];
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 md:py-32 bg-secondary/30">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
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
                            className="text-4xl md:text-5xl font-bold text-primary"
                        >
                            {content.title}
                        </motion.h2>
                    </div>

                    <div className="space-y-4">
                        {content.items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`rounded-3xl overflow-hidden border transition-all duration-300 ${openIndex === index
                                        ? "bg-white shadow-xl border-accent/20"
                                        : "bg-white/50 hover:bg-white/80 border-transparent hover:border-primary/5"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                                >
                                    <span className={`text-lg md:text-xl font-bold pr-8 transition-colors duration-300 ${openIndex === index ? "text-primary" : "text-primary/80"
                                        }`}>
                                        {item.question}
                                    </span>
                                    <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? "bg-accent text-white rotate-180" : "bg-secondary text-primary group-hover:bg-accent/10"
                                        }`}>
                                        <ChevronDown size={20} />
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 md:px-8 pb-8 text-muted-foreground leading-relaxed text-lg">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
