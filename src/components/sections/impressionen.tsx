"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { useLanguageStore } from "@/store/language-store";

gsap.registerPlugin(ScrollTrigger);

const impressionenContent = {
    de: {
        title: "Impressionen",
        subtitle: "Einblicke",
        description: "Entdecken Sie die Schönheit unserer Quellen und die Qualität unserer Produktion.",
    },
    en: {
        title: "Impressions",
        subtitle: "Insights",
        description: "Discover the beauty of our sources and the quality of our production.",
    },
    fr: {
        title: "Impressions",
        subtitle: "Aperçus",
        description: "Découvrez la beauté de nos sources et la qualité de notre production.",
    },
    ru: {
        title: "Впечатления",
        subtitle: "Обзор",
        description: "Откройте для себя красоту наших источников и качество нашего производства.",
    },
};

const images = [
    { src: "/images/gallery/10aqua.png", alt: "Aqua Gallery 1" },
    { src: "/images/gallery/2aqua.png", alt: "Aqua Gallery 2" },
    { src: "/images/gallery/3aqua.png", alt: "Aqua Gallery 3" },
    { src: "/images/gallery/4aqua.png", alt: "Aqua Gallery 4" },
    { src: "/images/gallery/5aqua.png", alt: "Aqua Gallery 5" },
    { src: "/images/gallery/water.png", alt: "Aqua Gallery Highlight" },
];

export function Impressionen() {
    const { language } = useLanguageStore();
    const content = impressionenContent[language];
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered entrance animation – trigger earlier so images are visible as soon as they enter the viewport
            gsap.fromTo(
                imagesRef.current,
                {
                    y: 40,
                    opacity: 0,
                    scale: 0.97,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 95%", // start animation just as the grid enters the viewport
                        end: "bottom 5%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (index: number) => {
        const el = imagesRef.current[index];
        if (!el) return;

        gsap.to(el.querySelector('.overlay'), {
            opacity: 0, // Reveal color
            duration: 0.4,
            ease: "power2.out"
        });
        gsap.to(el.querySelector('img'), {
            scale: 1.1,
            duration: 0.6,
            ease: "power2.out"
        });
        gsap.to(el.querySelector('.badge'), {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(1.7)"
        });
    };

    const handleMouseLeave = (index: number) => {
        const el = imagesRef.current[index];
        if (!el) return;

        gsap.to(el.querySelector('.overlay'), {
            opacity: 1, // Back to B&W
            duration: 0.4,
            ease: "power2.out"
        });
        gsap.to(el.querySelector('img'), {
            scale: 1,
            duration: 0.6,
            ease: "power2.out"
        });
        gsap.to(el.querySelector('.badge'), {
            y: 20,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in"
        });
    };

    return (
        <section id="impressionen" className="py-24 md:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 scroll-mt-20">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-20">
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
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        {content.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-300 leading-relaxed"
                    >
                        {content.description}
                    </motion.p>
                </div>

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) imagesRef.current[index] = el;
                            }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className="relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer group bg-secondary shadow-2xl"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover will-change-transform transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={90}
                            />
                            {/* B&W Overlay */}
                            <div className="overlay absolute inset-0 bg-black mix-blend-color opacity-100 transition-opacity duration-300 z-10" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center p-6 z-20">
                                <div className="badge opacity-0 transform translate-y-4">
                                    <span className="text-white font-medium tracking-wider uppercase text-sm border border-white/50 px-6 py-3 rounded-full backdrop-blur-md bg-white/10">
                                        AQUA ROOKS
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
