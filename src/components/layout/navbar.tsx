"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useLanguageStore } from "@/store/language-store";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "#mission", label: { de: "Mission", en: "Mission", fr: "Mission" } },
    { href: "#source", label: { de: "Quelle", en: "Source", fr: "Source" } },
    { href: "#usp", label: { de: "Vorteile", en: "Benefits", fr: "Avantages" } },
    { href: "#impressionen", label: { de: "Impressionen", en: "Impressions", fr: "Impressions" } },
    { href: "#contact", label: { de: "Kontakt", en: "Contact", fr: "Contact" } },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage } = useLanguageStore();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const nextLang = language === 'fr' ? 'en' : language === 'en' ? 'de' : 'fr';
        setLanguage(nextLang);
    };

    const handlePitchDeckClick = () => {
        window.open('/pdf/pitch.pdf', '_blank', 'noopener,noreferrer');
    };

    const playClickSound = () => {
        const audio = new Audio("/sound/click.wav");
        audio.volume = 0.2;
        audio.play().catch(e => console.error("Audio play failed", e));
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/20 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className={cn(
                        "text-2xl font-bold font-heading tracking-tight transition-colors duration-300",
                        isScrolled ? "text-primary" : "text-white"
                    )}
                >
                    AQUA ROOKS
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => {
                                e.stopPropagation();
                                playClickSound();
                            }}
                            className="text-sm font-medium text-foreground/80 hover:text-accent transition-all duration-300 relative group"
                        >
                            {link.label[language]}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={toggleLanguage}
                        className="gap-2"
                    >
                        <Globe className="w-4 h-4" />
                        <span className="uppercase">{language}</span>
                    </Button>
                    <Button
                        enableTilt
                        variant="default"
                        size="sm"
                        className="gap-2"
                        onClick={handlePitchDeckClick}
                    >
                        <Download className="w-4 h-4" />
                        <span>Pitch Deck</span>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-foreground relative z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl lg:hidden flex flex-col"
                    >
                        <Container className="flex-1 flex flex-col py-24">
                            <nav className="flex flex-col gap-6 items-center justify-center flex-1">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            playClickSound();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="text-3xl md:text-4xl font-bold font-heading text-foreground hover:text-accent transition-colors"
                                    >
                                        {link.label[language]}
                                    </motion.a>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="flex flex-col gap-4 mt-auto max-w-sm mx-auto w-full"
                            >
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="lg"
                                    onClick={toggleLanguage}
                                    className="w-full gap-2 text-lg h-12"
                                >
                                    <Globe className="w-5 h-5" />
                                    <span className="uppercase">Switch Language ({language})</span>
                                </Button>
                                <Button
                                    enableTilt
                                    size="lg"
                                    className="w-full gap-2 text-lg h-14 bg-accent hover:bg-accent/90 text-white shadow-xl shadow-accent/20"
                                    onClick={() => {
                                        handlePitchDeckClick();
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    <Download className="w-5 h-5" />
                                    <span>Download Pitch Deck</span>
                                </Button>
                            </motion.div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
