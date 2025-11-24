"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useLanguageStore } from "@/store/language-store";

const footerContent = {
    de: {
        company: {
            title: "AQUA ROOKS",
            description: "Premium Mineralwasser aus natürlichen Quellen in Togo. Förderung von Nachhaltigkeit und sozialer Verantwortung.",
        },
        links: {
            title: "Links",
            mission: "Mission",
            source: "Quelle",
            benefits: "Vorteile",
            impressions: "Impressionen",
            contact: "Kontakt",
        },
        contact: {
            title: "Kontakt",
            email: "info@aquareoks.com",
            phone: "+228 XX XX XX XX",
            address: "Togo, Westafrika",
        },
        legal: {
            title: "Rechtliches",
            privacy: "Datenschutz",
            terms: "Nutzungsbedingungen",
            imprint: "Impressum",
        },
        copyright: "© 2024 AQUA ROOKS. Alle Rechte vorbehalten.",
    },
    en: {
        company: {
            title: "AQUA ROOKS",
            description: "Premium mineral water from natural sources in Togo. Promoting sustainability and social responsibility.",
        },
        links: {
            title: "Links",
            mission: "Mission",
            source: "Source",
            benefits: "Benefits",
            impressions: "Impressions",
            contact: "Contact",
        },
        contact: {
            title: "Contact",
            email: "info@aquareoks.com",
            phone: "+228 XX XX XX XX",
            address: "Togo, West Africa",
        },
        legal: {
            title: "Legal",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            imprint: "Imprint",
        },
        copyright: "© 2024 AQUA ROOKS. All rights reserved.",
    },
    fr: {
        company: {
            title: "AQUA ROOKS",
            description: "Eau minérale premium provenant de sources naturelles au Togo. Promouvoir la durabilité et la responsabilité sociale.",
        },
        links: {
            title: "Liens",
            mission: "Mission",
            source: "Source",
            benefits: "Avantages",
            impressions: "Impressions",
            contact: "Contact",
        },
        contact: {
            title: "Contact",
            email: "info@aquareoks.com",
            phone: "+228 XX XX XX XX",
            address: "Togo, Afrique de l'Ouest",
        },
        legal: {
            title: "Légal",
            privacy: "Politique de confidentialité",
            terms: "Conditions d'utilisation",
            imprint: "Mentions légales",
        },
        copyright: "© 2024 AQUA ROOKS. Tous droits réservés.",
    },
};

export function Footer() {
    const { language } = useLanguageStore();
    const content = footerContent[language];
    const pathname = usePathname();
    const router = useRouter();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        // If we're not on the home page, navigate to home page with hash
        if (pathname !== '/') {
            e.preventDefault();
            router.push(`/${hash}`);
            // Scroll to section after navigation
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
        // Otherwise, let the default hash link behavior work
    };

    return (
        <footer className="bg-primary text-primary-foreground">
            <Container>
                <div className="py-16 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Company Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-1"
                        >
                            <h3 className="text-2xl font-bold font-heading mb-4">
                                {content.company.title}
                            </h3>
                            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                                {content.company.description}
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h4 className="text-lg font-semibold font-heading mb-6">
                                {content.links.title}
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#mission"
                                        onClick={(e) => handleLinkClick(e, '#mission')}
                                        className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                                    >
                                        {content.links.mission}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#source"
                                        onClick={(e) => handleLinkClick(e, '#source')}
                                        className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                                    >
                                        {content.links.source}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#usp"
                                        onClick={(e) => handleLinkClick(e, '#usp')}
                                        className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                                    >
                                        {content.links.benefits}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#impressionen"
                                        onClick={(e) => handleLinkClick(e, '#impressionen')}
                                        className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                                    >
                                        {content.links.impressions}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        onClick={(e) => handleLinkClick(e, '#contact')}
                                        className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                                    >
                                        {content.links.contact}
                                    </a>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h4 className="text-lg font-semibold font-heading mb-6">
                                {content.contact.title}
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    <a
                                        href={`mailto:${content.contact.email}`}
                                        className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                                    >
                                        {content.contact.email}
                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    <a
                                        href={`tel:${content.contact.phone.replace(/\s/g, '')}`}
                                        className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                                    >
                                        {content.contact.phone}
                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    <span className="text-primary-foreground/80 text-sm">
                                        {content.contact.address}
                                    </span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Legal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h4 className="text-lg font-semibold font-heading mb-6">
                                {content.legal.title}
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="/privacy"
                                        className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                                    >
                                        {content.legal.privacy}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                                    >
                                        {content.legal.terms}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/impressum"
                                        className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                                    >
                                        {content.legal.imprint}
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="pt-8 border-t border-primary-foreground/20"
                    >
                        <p className="text-center text-primary-foreground/60 text-sm">
                            {content.copyright}
                        </p>
                    </motion.div>
                </div>
            </Container>
        </footer>
    );
}

