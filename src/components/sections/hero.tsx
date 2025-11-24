"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useLanguageStore } from "@/store/language-store";

gsap.registerPlugin(ScrollTrigger);

const heroContent = {
    de: {
        claim: "L'Eau Minérale – Source De Vie",
        subclaim: "Premium Mineralwasser aus Togo",
        cta: "Entdecken Sie unsere Mission",
    },
    en: {
        claim: "L'Eau Minérale – Source De Vie",
        subclaim: "Premium Mineral Water from Togo",
        cta: "Discover Our Mission",
    },
    fr: {
        claim: "L'Eau Minérale – Source De Vie",
        subclaim: "Eau Minérale Premium du Togo",
        cta: "Découvrez Notre Mission",
    },
};

export function Hero() {
    const { language } = useLanguageStore();
    const content = heroContent[language];
    const heroRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);
    const gradientRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate subtitle
            gsap.fromTo(
                subtitleRef.current,
                { opacity: 0, y: -20, scale: 0.8 },
                { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
            );

            // Animate title with split text effect
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 50, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.4, ease: "power3.out" }
            );

            // Animate button
            gsap.fromTo(
                buttonRef.current,
                { opacity: 0, y: 30, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.6, ease: "back.out(1.7)" }
            );

            // Animate scroll indicator
            gsap.fromTo(
                scrollIndicatorRef.current,
                { opacity: 0, y: -10 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 1,
                    yoyo: true,
                    repeat: -1,
                    ease: "power1.inOut"
                }
            );

            // Continuous floating animation for scroll indicator
            gsap.to(scrollIndicatorRef.current, {
                y: 10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                delay: 1.5
            });

            // Animate gradient background
            if (gradientRef.current) {
                gsap.to(gradientRef.current, {
                    backgroundPosition: "100% 100%",
                    duration: 20,
                    repeat: -1,
                    yoyo: true,
                    ease: "none"
                });
            }
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 to-primary flex items-center justify-center">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ zIndex: 0 }}
            >
                <source src="/clips/aqua brooks3.mp4" type="video/mp4" />
            </video>

            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-primary/60 to-primary/80 z-[1]" />

            {/* Additional depth layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent z-[1]" />

            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30 z-[2]">
                <div
                    ref={gradientRef}
                    className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent"
                    style={{ backgroundPosition: "0% 0%" }}
                />
            </div>

            <Container className="relative z-[3] flex flex-col items-center text-center">
                <span
                    ref={subtitleRef}
                    className="inline-block py-1 px-3 rounded-full bg-white/10 text-white border border-white/30 text-sm font-medium mb-6 backdrop-blur-md shadow-lg"
                >
                    {content.subclaim}
                </span>

                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 tracking-tight font-heading px-8 py-6 md:px-12 md:py-8 rounded-3xl bg-primary/30 backdrop-blur-md border border-white/20 shadow-2xl shadow-black/20 relative overflow-hidden"
                >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
                    <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-sm">
                        L'Eau Minérale
                    </span>
                    <br />
                    <span className="relative text-accent drop-shadow-md">Source De Vie</span>
                </h1>

                <div
                    ref={buttonRef}
                    onMouseMove={(e) => {
                        const btn = e.currentTarget;
                        const rect = btn.getBoundingClientRect();
                        const x = e.clientX - rect.left - rect.width / 2;
                        const y = e.clientY - rect.top - rect.height / 2;
                        gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: "power2.out" });
                    }}
                    onMouseLeave={(e) => {
                        gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
                    }}
                    className="inline-block"
                >
                    <Button
                        enableTilt
                        size="lg"
                        className="text-lg px-12 py-8 bg-accent hover:bg-accent/90 text-white border-none shadow-[0_0_40px_-10px_rgba(0,191,255,0.5)] hover:shadow-[0_0_60px_-15px_rgba(0,191,255,0.6)] transition-all duration-300 relative overflow-hidden group rounded-full"
                    >
                        <span className="relative z-10 font-semibold tracking-wide">{content.cta}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent via-white/20 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Button>
                </div>
            </Container>

            {/* Scroll Indicator */}
            <div
                ref={scrollIndicatorRef}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <ArrowDown className="w-6 h-6" />
            </div>
        </section>
    );
}
