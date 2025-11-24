"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useLanguageStore } from "@/store/language-store";

const impressumContent = {
    de: {
        title: "Impressum",
        subtitle: "Angaben gemäß § 5 TMG",
        company: {
            title: "Firmenangaben",
            name: "AQUA ROOKS",
            address: "Togo, Westafrika",
            email: "info@aquareoks.com",
            phone: "+228 XX XX XX XX",
        },
        responsible: {
            title: "Verantwortlich für den Inhalt",
            name: "AQUA ROOKS",
            address: "Togo, Westafrika",
        },
        disclaimer: {
            title: "Haftungsausschluss",
            content: [
                "Haftung für Inhalte: Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.",
                "Haftung für Links: Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
                "Urheberrecht: Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
            ],
        },
    },
    en: {
        title: "Imprint",
        subtitle: "Information according to § 5 TMG",
        company: {
            title: "Company Information",
            name: "AQUA ROOKS",
            address: "Togo, West Africa",
            email: "info@aquareoks.com",
            phone: "+228 XX XX XX XX",
        },
        responsible: {
            title: "Responsible for Content",
            name: "AQUA ROOKS",
            address: "Togo, West Africa",
        },
        disclaimer: {
            title: "Disclaimer",
            content: [
                "Liability for Contents: The contents of our pages have been created with the greatest care. However, we cannot guarantee the accuracy, completeness, and timeliness of the contents. As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 para. 1 TMG.",
                "Liability for Links: Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.",
                "Copyright: The content and works created by the site operators on these pages are subject to copyright law. Duplication, processing, distribution, and any form of commercialization of such material beyond the scope of the copyright law require the written consent of the respective author or creator.",
            ],
        },
    },
    fr: {
        title: "Mentions légales",
        subtitle: "Informations selon § 5 TMG",
        company: {
            title: "Informations sur l'entreprise",
            name: "AQUA ROOKS",
            address: "Togo, Afrique de l'Ouest",
            email: "info@aquareoks.com",
            phone: "+228 XX XX XX XX",
        },
        responsible: {
            title: "Responsable du contenu",
            name: "AQUA ROOKS",
            address: "Togo, Afrique de l'Ouest",
        },
        disclaimer: {
            title: "Avertissement",
            content: [
                "Responsabilité du contenu: Le contenu de nos pages a été créé avec le plus grand soin. Cependant, nous ne pouvons garantir l'exactitude, l'exhaustivité et l'actualité du contenu. En tant que prestataire de services, nous sommes responsables de notre propre contenu sur ces pages conformément aux lois générales en vertu du § 7 para. 1 TMG.",
                "Responsabilité des liens: Notre offre contient des liens vers des sites Web externes de tiers, sur le contenu desquels nous n'avons aucune influence. Par conséquent, nous ne pouvons assumer aucune responsabilité pour ce contenu externe. Le fournisseur ou l'opérateur respectif des pages est toujours responsable du contenu des pages liées.",
                "Droit d'auteur: Le contenu et les œuvres créés par les opérateurs du site sur ces pages sont soumis au droit d'auteur. La duplication, le traitement, la distribution et toute forme de commercialisation de ce matériel au-delà de la portée de la loi sur le droit d'auteur nécessitent le consentement écrit de l'auteur ou du créateur respectif.",
            ],
        },
    },
};

export default function ImpressumPage() {
    const { language } = useLanguageStore();
    const content = impressumContent[language];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <section className="pt-32 pb-24 md:pt-40 md:pb-32">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-12"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-4">
                                {content.title}
                            </h1>
                            <p className="text-foreground/60 text-lg">
                                {content.subtitle}
                            </p>
                        </motion.div>

                        <div className="space-y-12">
                            {/* Company Information */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100"
                            >
                                <h2 className="text-2xl font-bold text-primary font-heading mb-6">
                                    {content.company.title}
                                </h2>
                                <div className="space-y-3 text-foreground/80">
                                    <p>
                                        <span className="font-semibold">{content.company.name}</span>
                                    </p>
                                    <p>{content.company.address}</p>
                                    <p>
                                        <span className="font-semibold">E-Mail:</span>{" "}
                                        <a
                                            href={`mailto:${content.company.email}`}
                                            className="text-accent hover:underline"
                                        >
                                            {content.company.email}
                                        </a>
                                    </p>
                                    <p>
                                        <span className="font-semibold">Telefon:</span>{" "}
                                        <a
                                            href={`tel:${content.company.phone.replace(/\s/g, '')}`}
                                            className="text-accent hover:underline"
                                        >
                                            {content.company.phone}
                                        </a>
                                    </p>
                                </div>
                            </motion.div>

                            {/* Responsible for Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100"
                            >
                                <h2 className="text-2xl font-bold text-primary font-heading mb-6">
                                    {content.responsible.title}
                                </h2>
                                <div className="space-y-3 text-foreground/80">
                                    <p>
                                        <span className="font-semibold">{content.responsible.name}</span>
                                    </p>
                                    <p>{content.responsible.address}</p>
                                </div>
                            </motion.div>

                            {/* Disclaimer */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100"
                            >
                                <h2 className="text-2xl font-bold text-primary font-heading mb-6">
                                    {content.disclaimer.title}
                                </h2>
                                <div className="space-y-4 text-foreground/80 leading-relaxed">
                                    {content.disclaimer.content.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </main>
    );
}

