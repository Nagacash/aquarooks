"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useLanguageStore } from "@/store/language-store";

const privacyContent = {
    de: {
        title: "Datenschutzerklärung",
        subtitle: "Schutz Ihrer persönlichen Daten",
        introduction: {
            title: "1. Datenschutz auf einen Blick",
            content: [
                "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
            ],
        },
        dataCollection: {
            title: "2. Datenerfassung auf dieser Website",
            content: [
                "Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
                "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt \"Hinweis zur Verantwortlichen Stelle\" in dieser Datenschutzerklärung entnehmen.",
                "Wie erfassen wir Ihre Daten?",
                "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.",
                "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.",
            ],
        },
        yourRights: {
            title: "3. Ihre Rechte",
            content: [
                "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.",
            ],
        },
        contact: {
            title: "4. Kontakt",
            content: [
                "Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:",
                "E-Mail: info@aquareoks.com",
            ],
        },
    },
    en: {
        title: "Privacy Policy",
        subtitle: "Protection of your personal data",
        introduction: {
            title: "1. Data Protection at a Glance",
            content: [
                "The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you can be personally identified.",
            ],
        },
        dataCollection: {
            title: "2. Data Collection on this Website",
            content: [
                "Who is responsible for data collection on this website?",
                "The data processing on this website is carried out by the website operator. You can find their contact details in the section \"Information on the Responsible Party\" in this privacy policy.",
                "How do we collect your data?",
                "On the one hand, your data is collected by you providing it to us. This can be, for example, data that you enter in a contact form.",
                "Other data is collected automatically or after your consent when you visit the website by our IT systems. This is mainly technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.",
            ],
        },
        yourRights: {
            title: "3. Your Rights",
            content: [
                "You have the right to receive information free of charge at any time about the origin, recipient, and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. Furthermore, you have the right to request the restriction of the processing of your personal data under certain circumstances. You also have the right to lodge a complaint with the competent supervisory authority.",
            ],
        },
        contact: {
            title: "4. Contact",
            content: [
                "If you have any questions about data protection, you can contact us at any time:",
                "Email: info@aquareoks.com",
            ],
        },
    },
    fr: {
        title: "Politique de confidentialité",
        subtitle: "Protection de vos données personnelles",
        introduction: {
            title: "1. Protection des données en un coup d'œil",
            content: [
                "Les informations suivantes donnent un aperçu simple de ce qui arrive à vos données personnelles lorsque vous visitez ce site Web. Les données personnelles sont toutes les données avec lesquelles vous pouvez être personnellement identifié.",
            ],
        },
        dataCollection: {
            title: "2. Collecte de données sur ce site Web",
            content: [
                "Qui est responsable de la collecte de données sur ce site Web?",
                "Le traitement des données sur ce site Web est effectué par l'opérateur du site Web. Vous pouvez trouver leurs coordonnées dans la section \"Informations sur la partie responsable\" de cette politique de confidentialité.",
                "Comment collectons-nous vos données?",
                "D'une part, vos données sont collectées lorsque vous nous les fournissez. Il peut s'agir, par exemple, de données que vous saisissez dans un formulaire de contact.",
                "D'autres données sont collectées automatiquement ou après votre consentement lors de la visite du site Web par nos systèmes informatiques. Il s'agit principalement de données techniques (par exemple, navigateur Internet, système d'exploitation ou heure d'accès à la page). Ces données sont collectées automatiquement dès que vous entrez sur ce site Web.",
            ],
        },
        yourRights: {
            title: "3. Vos droits",
            content: [
                "Vous avez le droit de recevoir gratuitement des informations à tout moment sur l'origine, le destinataire et l'objectif de vos données personnelles stockées. Vous avez également le droit de demander la correction ou la suppression de ces données. Si vous avez donné votre consentement au traitement des données, vous pouvez révoquer ce consentement à tout moment pour l'avenir. De plus, vous avez le droit de demander la restriction du traitement de vos données personnelles dans certaines circonstances. Vous avez également le droit de déposer une plainte auprès de l'autorité de surveillance compétente.",
            ],
        },
        contact: {
            title: "4. Contact",
            content: [
                "Si vous avez des questions sur la protection des données, vous pouvez nous contacter à tout moment:",
                "E-mail: info@aquareoks.com",
            ],
        },
    },
};

export default function PrivacyPage() {
    const { language } = useLanguageStore();
    const content = privacyContent[language];
    const router = useRouter();

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <section className="pt-32 pb-24 md:pt-40 md:pb-32">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-between mb-12 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-2">
                                    {content.title}
                                </h1>
                                <p className="text-foreground/60 text-lg">
                                    {content.subtitle}
                                </p>
                            </motion.div>
                            <motion.button
                                type="button"
                                onClick={() => router.push("/")}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="px-4 py-2 text-sm rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
                            >
                                {language === "de" && "Zurück"}
                                {language === "en" && "Back"}
                                {language === "fr" && "Retour"}
                            </motion.button>
                        </div>

                        <div className="space-y-12">
                            {/* Introduction */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100"
                            >
                                <h2 className="text-2xl font-bold text-primary font-heading mb-6">
                                    {content.introduction.title}
                                </h2>
                                <div className="space-y-4 text-foreground/80 leading-relaxed">
                                    {content.introduction.content.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Data Collection */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100"
                            >
                                <h2 className="text-2xl font-bold text-primary font-heading mb-6">
                                    {content.dataCollection.title}
                                </h2>
                                <div className="space-y-4 text-foreground/80 leading-relaxed">
                                    {content.dataCollection.content.map((paragraph, index) => (
                                        <p key={index} className={index % 2 === 0 && index > 0 ? "font-semibold mt-6" : ""}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Your Rights */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100"
                            >
                                <h2 className="text-2xl font-bold text-primary font-heading mb-6">
                                    {content.yourRights.title}
                                </h2>
                                <div className="space-y-4 text-foreground/80 leading-relaxed">
                                    {content.yourRights.content.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Contact */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100"
                            >
                                <h2 className="text-2xl font-bold text-primary font-heading mb-6">
                                    {content.contact.title}
                                </h2>
                                <div className="space-y-4 text-foreground/80 leading-relaxed">
                                    {content.contact.content.map((paragraph, index) => (
                                        <p key={index}>
                                            {paragraph.includes("info@aquareoks.com") ? (
                                                <>
                                                    {paragraph.split("info@aquareoks.com")[0]}
                                                    <a
                                                        href="mailto:info@aquareoks.com"
                                                        className="text-accent hover:underline"
                                                    >
                                                        info@aquareoks.com
                                                    </a>
                                                </>
                                            ) : (
                                                paragraph
                                            )}
                                        </p>
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

