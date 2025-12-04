"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useLanguageStore } from "@/store/language-store";

type PrivacyLanguage = "de" | "en" | "fr";

const privacyContent: Record<PrivacyLanguage, {
    title: string;
    subtitle: string;
    company: {
        title: string;
        name: string;
        address: string;
        representative: string;
        contact: string;
        phone: string;
        email: string;
        register: string;
        registerCourt: string;
    };
    responsible: {
        title: string;
        name: string;
        address: string;
    };
    disclaimer: {
        title: string;
        content: {
            title: string;
            text: string;
        };
        links: {
            title: string;
            text: string;
        };
        copyright: {
            title: string;
            text: string;
        };
    };
    dataCollection: {
        title: string;
        visit: {
            title: string;
            text: string;
            items: string[];
            purpose: string;
        };
        contact: {
            title: string;
            text: string;
        };
        cookies: {
            title: string;
            text: string;
        };
        sharing: {
            title: string;
            text: string;
            items: string[];
        };
        analytics: {
            title: string;
            text: string;
        };
        rights: {
            title: string;
            text: string;
            items: string[];
        };
        security: {
            title: string;
            text: string;
        };
        updates: {
            title: string;
            text: string;
        };
    };
}> = {
    de: {
        title: "Datenschutzerklärung",
        subtitle: "Schutz Ihrer persönlichen Daten",
        company: {
            title: "Firmenangaben",
            name: "AQUA ROOKS S.A.",
            address: "Commune Lac 2 / Canton d'Aklakou, Togo",
            representative: "Vertreten durch: Rodrigue Mahouton Guedou",
            contact: "Kontakt:",
            phone: "Telefon: +228 90 62 80 29",
            email: "E-Mail: office@aqua-rooks.com",
            register: "Registereintrag: Eingetragen im Handelsregister Lomé, Togo",
            registerCourt: "Registergericht: Lomé",
        },
        responsible: {
            title: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
            name: "Rodrigue Mahouton Guedou",
            address: "Commune Lac 2 / Canton d'Aklakou, Togo",
        },
        disclaimer: {
            title: "Haftungsausschluss",
            content: {
                title: "Haftung für Inhalte",
                text: "Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt. AQUA ROOKS S.A. übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine darüberhinausgehende Haftung ist ausgeschlossen.",
            },
            links: {
                title: "Haftung für externe Links",
                text: "Unsere Website kann Links zu externen Webseiten Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte verlinkter Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung wurden mögliche Rechtsverstöße geprüft; rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche Kontrolle verlinkter Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverstößen werden wir solche Links umgehend entfernen.",
            },
            copyright: {
                title: "Urheberrecht",
                text: "Die durch AQUA ROOKS S.A. auf dieser Website erstellten Inhalte und Werke unterliegen dem togolesischen sowie internationalen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung oder Verwertung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung des jeweiligen Rechteinhabers.",
            },
        },
        dataCollection: {
            title: "Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck ihrer Verwendung",
            visit: {
                title: "a) Besuch der Website",
                text: "Beim Aufrufen unserer Website werden automatisch Informationen durch den Browser des Endgeräts an unseren Server gesendet. Diese Informationen können umfassen:",
                items: [
                    "IP-Adresse",
                    "Datum und Uhrzeit des Zugriffs",
                    "Name und URL der abgerufenen Datei",
                    "Website, von der aus der Zugriff erfolgt",
                    "Browsertyp und -version",
                    "Betriebssystem",
                ],
                purpose: "Diese Daten werden verarbeitet, um einen reibungslosen Verbindungsaufbau sowie eine komfortable Nutzung der Website zu gewährleisten und zur technischen Sicherheit.",
            },
            contact: {
                title: "Kontaktaufnahme",
                text: "Wenn du uns per Telefon oder E-Mail kontaktierst, speichern wir die von dir freiwillig übermittelten Daten (z. B. Name, Telefonnummer, E-Mail-Adresse, Anliegen), um deine Anfrage zu bearbeiten.",
            },
            cookies: {
                title: "Cookies",
                text: "Unsere Website kann Cookies verwenden, um die Nutzung zu erleichtern, Inhalte zu optimieren oder statistische Auswertungen vorzunehmen. Du kannst deinen Browser so einstellen, dass keine Cookies gespeichert werden.",
            },
            sharing: {
                title: "Weitergabe von Daten",
                text: "Eine Übermittlung personenbezogener Daten an Dritte erfolgt nur:",
                items: [
                    "wenn du ausdrücklich eingewilligt hast,",
                    "wenn es zur Erfüllung gesetzlicher Verpflichtungen notwendig ist,",
                    "oder wenn die Weitergabe zur Vertragserfüllung erforderlich ist.",
                ],
            },
            analytics: {
                title: "Analyse-Tools / Tracking",
                text: "Falls Analyse-Tools (z. B. Google Analytics) eingesetzt werden, erfolgt dies ausschließlich auf Basis berechtigter Interessen oder deiner Einwilligung.",
            },
            rights: {
                title: "Rechte der betroffenen Personen",
                text: "Du hast das Recht auf:",
                items: [
                    "Auskunft über gespeicherte personenbezogene Daten",
                    "Berichtigung unrichtiger Daten",
                    "Löschung deiner Daten (sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen)",
                    "Einschränkung der Verarbeitung",
                    "Widerspruch gegen die Verarbeitung",
                    "Datenübertragbarkeit (falls anwendbar)",
                ],
            },
            security: {
                title: "Datensicherheit",
                text: "Wir setzen technische und organisatorische Maßnahmen ein, um Daten gegen Verlust, Missbrauch oder unbefugten Zugriff zu schützen.",
            },
            updates: {
                title: "Aktualität und Änderung der Datenschutzerklärung",
                text: "Diese Datenschutzerklärung wird bei Bedarf aktualisiert. Die jeweils aktuelle Version ist auf unserer Website verfügbar.",
            },
        },
    },
    en: {
        title: "Privacy Policy",
        subtitle: "Protection of your personal data",
        company: {
            title: "Company Information",
            name: "AQUA ROOKS S.A.",
            address: "Commune Lac 2 / Canton d'Aklakou, Togo",
            representative: "Represented by: Rodrigue Mahouton Guedou",
            contact: "Contact:",
            phone: "Phone: +228 90 62 80 29",
            email: "Email: office@aqua-rooks.com",
            register: "Register Entry: Registered in the Commercial Register Lomé, Togo",
            registerCourt: "Register Court: Lomé",
        },
        responsible: {
            title: "Responsible for content according to § 18 para. 2 MStV",
            name: "Rodrigue Mahouton Guedou",
            address: "Commune Lac 2 / Canton d'Aklakou, Togo",
        },
        disclaimer: {
            title: "Disclaimer",
            content: {
                title: "Liability for Content",
                text: "The contents of our website have been created with the greatest care. However, AQUA ROOKS S.A. assumes no guarantee for the accuracy, completeness, and timeliness of the provided contents. As a service provider, we are responsible for our own content on these pages according to general laws. Any further liability is excluded.",
            },
            links: {
                title: "Liability for External Links",
                text: "Our website may contain links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any guarantee for these external contents. The respective provider or operator of the linked pages is always responsible for the contents. At the time of linking, possible legal violations were checked; illegal contents were not recognizable at that time. However, permanent content control of linked pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will immediately remove such links.",
            },
            copyright: {
                title: "Copyright",
                text: "The contents and works created by AQUA ROOKS S.A. on this website are subject to Togolese and international copyright law. Third-party contributions are marked as such. The reproduction, processing, distribution, or exploitation outside the limits of copyright requires the written consent of the respective rights holder.",
            },
        },
        dataCollection: {
            title: "Collection and Storage of Personal Data and the Nature and Purpose of its Use",
            visit: {
                title: "a) Visiting the Website",
                text: "When accessing our website, information is automatically sent by the browser of your device to our server. This information may include:",
                items: [
                    "IP address",
                    "Date and time of access",
                    "Name and URL of the accessed file",
                    "Website from which access is made",
                    "Browser type and version",
                    "Operating system",
                ],
                purpose: "This data is processed to ensure a smooth connection setup and comfortable use of the website and for technical security.",
            },
            contact: {
                title: "Contact",
                text: "If you contact us by phone or email, we store the data you voluntarily provide (e.g., name, phone number, email address, inquiry) to process your request.",
            },
            cookies: {
                title: "Cookies",
                text: "Our website may use cookies to facilitate use, optimize content, or perform statistical evaluations. You can set your browser so that no cookies are stored.",
            },
            sharing: {
                title: "Data Sharing",
                text: "Personal data is only transmitted to third parties:",
                items: [
                    "if you have expressly consented,",
                    "if it is necessary to fulfill legal obligations,",
                    "or if the sharing is required for contract fulfillment.",
                ],
            },
            analytics: {
                title: "Analysis Tools / Tracking",
                text: "If analysis tools (e.g., Google Analytics) are used, this is done exclusively on the basis of legitimate interests or your consent.",
            },
            rights: {
                title: "Rights of Affected Persons",
                text: "You have the right to:",
                items: [
                    "Information about stored personal data",
                    "Correction of incorrect data",
                    "Deletion of your data (provided no legal retention obligations oppose this)",
                    "Restriction of processing",
                    "Objection to processing",
                    "Data portability (if applicable)",
                ],
            },
            security: {
                title: "Data Security",
                text: "We use technical and organizational measures to protect data against loss, misuse, or unauthorized access.",
            },
            updates: {
                title: "Currency and Changes to the Privacy Policy",
                text: "This privacy policy is updated as needed. The current version is available on our website.",
            },
        },
    },
    fr: {
        title: "Politique de confidentialité",
        subtitle: "Protection de vos données personnelles",
        company: {
            title: "Informations sur l'entreprise",
            name: "AQUA ROOKS S.A.",
            address: "Commune Lac 2 / Canton d'Aklakou, Togo",
            representative: "Représenté par: Rodrigue Mahouton Guedou",
            contact: "Contact:",
            phone: "Téléphone: +228 90 62 80 29",
            email: "E-mail: office@aqua-rooks.com",
            register: "Inscription au registre: Inscrit au registre du commerce de Lomé, Togo",
            registerCourt: "Tribunal du registre: Lomé",
        },
        responsible: {
            title: "Responsable du contenu selon § 18 al. 2 MStV",
            name: "Rodrigue Mahouton Guedou",
            address: "Commune Lac 2 / Canton d'Aklakou, Togo",
        },
        disclaimer: {
            title: "Avertissement",
            content: {
                title: "Responsabilité du contenu",
                text: "Le contenu de notre site Web a été créé avec le plus grand soin. Cependant, AQUA ROOKS S.A. n'assume aucune garantie quant à l'exactitude, l'exhaustivité et l'actualité du contenu fourni. En tant que prestataire de services, nous sommes responsables de notre propre contenu sur ces pages conformément aux lois générales. Toute responsabilité supplémentaire est exclue.",
            },
            links: {
                title: "Responsabilité des liens externes",
                text: "Notre site Web peut contenir des liens vers des sites Web externes de tiers, sur le contenu desquels nous n'avons aucune influence. Par conséquent, nous ne pouvons assumer aucune garantie pour ce contenu externe. Le fournisseur ou l'opérateur respectif des pages liées est toujours responsable du contenu. Au moment du lien, les violations légales possibles ont été vérifiées; le contenu illégal n'était pas reconnaissable à ce moment-là. Cependant, un contrôle permanent du contenu des pages liées n'est pas raisonnable sans preuve concrète d'une violation légale. Dès que nous prenons connaissance de violations légales, nous supprimerons immédiatement ces liens.",
            },
            copyright: {
                title: "Droit d'auteur",
                text: "Le contenu et les œuvres créés par AQUA ROOKS S.A. sur ce site Web sont soumis au droit d'auteur togolais et international. Les contributions de tiers sont marquées comme telles. La reproduction, le traitement, la distribution ou l'exploitation en dehors des limites du droit d'auteur nécessite le consentement écrit du titulaire des droits respectif.",
            },
        },
        dataCollection: {
            title: "Collecte et stockage des données personnelles ainsi que la nature et l'objectif de leur utilisation",
            visit: {
                title: "a) Visite du site Web",
                text: "Lors de l'accès à notre site Web, des informations sont automatiquement envoyées par le navigateur de votre appareil à notre serveur. Ces informations peuvent inclure:",
                items: [
                    "Adresse IP",
                    "Date et heure d'accès",
                    "Nom et URL du fichier consulté",
                    "Site Web à partir duquel l'accès est effectué",
                    "Type et version du navigateur",
                    "Système d'exploitation",
                ],
                purpose: "Ces données sont traitées pour assurer une configuration de connexion fluide et une utilisation confortable du site Web et pour la sécurité technique.",
            },
            contact: {
                title: "Contact",
                text: "Si vous nous contactez par téléphone ou e-mail, nous stockons les données que vous fournissez volontairement (par exemple, nom, numéro de téléphone, adresse e-mail, demande) pour traiter votre demande.",
            },
            cookies: {
                title: "Cookies",
                text: "Notre site Web peut utiliser des cookies pour faciliter l'utilisation, optimiser le contenu ou effectuer des évaluations statistiques. Vous pouvez configurer votre navigateur pour qu'aucun cookie ne soit stocké.",
            },
            sharing: {
                title: "Partage de données",
                text: "Les données personnelles ne sont transmises à des tiers que:",
                items: [
                    "si vous avez expressément consenti,",
                    "si cela est nécessaire pour remplir des obligations légales,",
                    "ou si le partage est requis pour l'exécution du contrat.",
                ],
            },
            analytics: {
                title: "Outils d'analyse / Suivi",
                text: "Si des outils d'analyse (par exemple, Google Analytics) sont utilisés, cela se fait exclusivement sur la base d'intérêts légitimes ou de votre consentement.",
            },
            rights: {
                title: "Droits des personnes concernées",
                text: "Vous avez le droit à:",
                items: [
                    "Information sur les données personnelles stockées",
                    "Correction des données incorrectes",
                    "Suppression de vos données (à condition qu'aucune obligation légale de conservation ne s'y oppose)",
                    "Limitation du traitement",
                    "Opposition au traitement",
                    "Portabilité des données (si applicable)",
                ],
            },
            security: {
                title: "Sécurité des données",
                text: "Nous utilisons des mesures techniques et organisationnelles pour protéger les données contre la perte, l'abus ou l'accès non autorisé.",
            },
            updates: {
                title: "Actualité et modification de la politique de confidentialité",
                text: "Cette politique de confidentialité est mise à jour si nécessaire. La version actuelle est disponible sur notre site Web.",
            },
        },
    },
};

export default function PrivacyPage() {
    const { language } = useLanguageStore();
    const effectiveLanguage: PrivacyLanguage = language === "ru" ? "fr" : language;
    const content = privacyContent[effectiveLanguage];
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
                                <div className="space-y-3 text-foreground/80 leading-relaxed">
                                    <p><span className="font-semibold">{content.company.name}</span></p>
                                    <p>{content.company.address}</p>
                                    <p>{content.company.representative}</p>
                                    <p className="mt-4">{content.company.contact}</p>
                                    <p>{content.company.phone}</p>
                                    <p>
                                        {content.company.email.split(": ")[0]}:{" "}
                                        <a href={`mailto:${content.company.email.split(": ")[1]}`} className="text-accent hover:underline">
                                            {content.company.email.split(": ")[1]}
                                        </a>
                                    </p>
                                    <p className="mt-4">{content.company.register}</p>
                                    <p>{content.company.registerCourt}</p>
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
                                <div className="space-y-3 text-foreground/80 leading-relaxed">
                                    <p><span className="font-semibold">{content.responsible.name}</span></p>
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
                                <div className="space-y-6 text-foreground/80 leading-relaxed">
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary mb-3">
                                            {content.disclaimer.content.title}
                                        </h3>
                                        <p>{content.disclaimer.content.text}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary mb-3">
                                            {content.disclaimer.links.title}
                                        </h3>
                                        <p>{content.disclaimer.links.text}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary mb-3">
                                            {content.disclaimer.copyright.title}
                                        </h3>
                                        <p>{content.disclaimer.copyright.text}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Data Collection */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100"
                            >
                                <h2 className="text-2xl font-bold text-primary font-heading mb-6">
                                    {content.dataCollection.title}
                                </h2>
                                <div className="space-y-6 text-foreground/80 leading-relaxed">
                                    {/* Visit Website */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary mb-3">
                                            {content.dataCollection.visit.title}
                                        </h3>
                                        <p className="mb-3">{content.dataCollection.visit.text}</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                                            {content.dataCollection.visit.items.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                        <p>{content.dataCollection.visit.purpose}</p>
                                    </div>

                                    {/* Contact */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary mb-3">
                                            {content.dataCollection.contact.title}
                                        </h3>
                                        <p>{content.dataCollection.contact.text}</p>
                                    </div>

                                    {/* Cookies */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary mb-3">
                                            {content.dataCollection.cookies.title}
                                        </h3>
                                        <p>{content.dataCollection.cookies.text}</p>
                                    </div>

                                    {/* Data Sharing */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary mb-3">
                                            {content.dataCollection.sharing.title}
                                        </h3>
                                        <p className="mb-3">{content.dataCollection.sharing.text}</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            {content.dataCollection.sharing.items.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Analytics */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary mb-3">
                                            {content.dataCollection.analytics.title}
                                        </h3>
                                        <p>{content.dataCollection.analytics.text}</p>
                                    </div>

                                    {/* Rights */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary mb-3">
                                            {content.dataCollection.rights.title}
                                        </h3>
                                        <p className="mb-3">{content.dataCollection.rights.text}</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            {content.dataCollection.rights.items.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Security */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary mb-3">
                                            {content.dataCollection.security.title}
                                        </h3>
                                        <p>{content.dataCollection.security.text}</p>
                                    </div>

                                    {/* Updates */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary mb-3">
                                            {content.dataCollection.updates.title}
                                        </h3>
                                        <p>{content.dataCollection.updates.text}</p>
                                    </div>
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

