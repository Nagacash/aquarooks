"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Download } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useLanguageStore } from "@/store/language-store";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "#mission", label: { de: "Mission", en: "Mission", fr: "Mission", ru: "Миссия" } },
    { href: "#source", label: { de: "Quelle", en: "Source", fr: "Source", ru: "Источник" } },
    { href: "#usp", label: { de: "Vorteile", en: "Benefits", fr: "Avantages", ru: "Преимущества" } },
    {
        href: "#marktentwicklung",
        label: {
            de: "Marktentwicklung",
            en: "Market Development",
            fr: "Développement du marché",
            ru: "Развитие рынка",
        },
    },
    { href: "#impressionen", label: { de: "Impressionen", en: "Impressions", fr: "Impressions", ru: "Впечатления" } },
    { href: "#contact", label: { de: "Kontakt", en: "Contact", fr: "Contact", ru: "Контакты" } },
];

const pitchDeckText = {
    de: "Pitch Deck",
    en: "Pitch Deck",
    fr: "Présentation",
    ru: "Презентация",
};

const downloadPitchDeckText = {
    de: "Pitch Deck herunterladen",
    en: "Download Pitch Deck",
    fr: "Télécharger la présentation",
    ru: "Скачать презентацию",
};

const switchLanguageText = {
    de: "Sprache wechseln",
    en: "Switch Language",
    fr: "Changer de langue",
    ru: "Сменить язык",
};

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage } = useLanguageStore();
    const pathname = usePathname();
    const router = useRouter();

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
        const nextLang = language === 'fr' ? 'en' : language === 'en' ? 'de' : language === 'de' ? 'ru' : 'fr';
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

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        e.stopPropagation();
        playClickSound();

        const isHashLink = href.startsWith("#");
        if (isHashLink) {
            const hash = href;
            if (pathname !== "/") {
                router.push(`/${hash}`);
                setTimeout(() => {
                    const element = document.querySelector(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                }, 150);
            } else {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        } else {
            router.push(href);
        }
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
                <a href="#" className="flex items-center gap-2 sm:gap-3 group">
                    <div className="relative h-8 w-auto sm:h-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        <Image
                            src={isScrolled ? "/images/logos/logo2.png" : "/images/logos/logo1.png"}
                            alt="AQUA ROOKS Logo"
                            width={140}
                            height={45}
                            className="h-8 w-auto sm:h-10 object-contain transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-md"
                            priority
                            quality={95}
                        />
                    </div>
                    <span
                        className={cn(
                            "text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-heading tracking-tight transition-all duration-300",
                            isScrolled ? "text-primary group-hover:text-accent" : "text-white group-hover:text-accent/90"
                        )}
                    >
                        AQUA ROOKS
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-accent transition-all duration-300 relative group"
                        >
                            {link.href === "#marktentwicklung" && (
                                <div className="relative">
                                    <div className="absolute inset-0 bg-accent/20 blur-sm rounded -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Image
                                        src="/images/logos/bottle.png"
                                        alt="PET Bottle Icon"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300 group-hover:scale-110"
                                        unoptimized
                                    />
                                </div>
                            )}
                            <span>{link.label[language]}</span>
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
                        <span>{pitchDeckText[language]}</span>
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
                    <>
                        {/* Backdrop Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        
                        {/* Mobile Menu Content */}
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col"
                        >
                            {/* Top Bar with Close Button */}
                            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-slate-200/60 bg-white/95 backdrop-blur-sm flex-shrink-0">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <Image
                                        src={isScrolled ? "/images/logos/logo2.png" : "/images/logos/logo1.png"}
                                        alt="AQUA ROOKS Logo"
                                        width={140}
                                        height={45}
                                        className="h-7 w-auto sm:h-9 object-contain"
                                        quality={95}
                                    />
                                    <span className="text-base sm:text-lg font-bold font-heading text-primary">
                                        AQUA ROOKS
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
                                </button>
                            </div>

                            {/* Scrollable Content Area */}
                            <div className="flex-1 overflow-y-auto overscroll-contain">
                                <Container className="flex flex-col py-6 sm:py-8">
                                    <nav className="flex flex-col gap-3 sm:gap-4 items-center px-4 w-full">
                                        {navLinks.map((link, index) => (
                                            <motion.a
                                                key={link.href}
                                                href={link.href}
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                                                onClick={(e) => {
                                                    handleNavClick(e, link.href);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold font-heading text-slate-800 hover:text-accent transition-colors w-full justify-center py-3 px-4 rounded-xl hover:bg-slate-50 active:bg-slate-100"
                                            >
                                                {link.href === "#marktentwicklung" && (
                                                    <div className="relative flex-shrink-0">
                                                        <div className="absolute inset-0 bg-accent/20 blur-md rounded -z-10" />
                                                        <Image
                                                            src="/images/logos/bottle.png"
                                                            alt="PET Bottle Icon"
                                                            width={40}
                                                            height={40}
                                                            className="w-10 h-10 object-contain drop-shadow-lg filter brightness-110"
                                                            unoptimized
                                                        />
                                                    </div>
                                                )}
                                                <span className="whitespace-nowrap">{link.label[language]}</span>
                                            </motion.a>
                                        ))}
                                    </nav>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
                                        className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6 max-w-sm mx-auto w-full px-4 pb-4 sm:pb-6"
                                    >
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="lg"
                                            onClick={toggleLanguage}
                                            className="w-full gap-2 text-sm sm:text-base h-10 sm:h-11"
                                        >
                                            <Globe className="w-4 h-4" />
                                            <span className="uppercase text-xs sm:text-sm">{switchLanguageText[language]} ({language})</span>
                                        </Button>
                                        <Button
                                            enableTilt
                                            size="lg"
                                            className="w-full gap-2 text-sm sm:text-base h-11 sm:h-12 bg-accent hover:bg-accent/90 text-white shadow-xl shadow-accent/20"
                                            onClick={() => {
                                                handlePitchDeckClick();
                                                setIsMobileMenuOpen(false);
                                            }}
                                        >
                                            <Download className="w-4 h-4" />
                                            <span className="text-xs sm:text-sm">{downloadPitchDeckText[language]}</span>
                                        </Button>
                                    </motion.div>
                                </Container>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
