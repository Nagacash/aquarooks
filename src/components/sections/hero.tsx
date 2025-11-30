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
    const videoRef = useRef<HTMLVideoElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);
    const gradientRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Ensure video plays on mobile - most aggressive autoplay approach
        const video = videoRef.current;
        if (!video) return;

        // Set all mobile compatibility attributes immediately
        video.muted = true;
        video.playsInline = true;
        video.setAttribute("muted", "true");
        video.setAttribute("playsinline", "true");
        video.setAttribute("webkit-playsinline", "true");
        video.setAttribute("x5-playsinline", "true");
        video.setAttribute("x5-video-player-type", "h5");
        video.setAttribute("x5-video-player-fullscreen", "true");
        video.setAttribute("x5-video-orientation", "portraint");
        
        // Force video to load immediately
        video.load();
        
        // Function to force play with multiple retries
        const forcePlay = async (retries = 10) => {
            for (let i = 0; i < retries; i++) {
                try {
                    if (video.paused) {
                        await video.play();
                        console.log("Video autoplay started successfully");
                        return true;
                    }
                } catch (error: any) {
                    if (i < retries - 1) {
                        await new Promise(resolve => setTimeout(resolve, 100 * (i + 1)));
                    } else {
                        console.log("Video autoplay failed after retries:", error);
                    }
                }
            }
            return false;
        };

        // Immediate play attempt
        forcePlay();

        // Play on every possible video event
        const playOnEvent = (eventName: string) => {
            video.addEventListener(eventName, () => {
                if (video.paused) {
                    video.play().catch(() => {});
                }
            }, { once: true });
        };

        // Try playing on all video events
        [
            "loadstart",
            "loadedmetadata",
            "loadeddata",
            "canplay",
            "canplaythrough",
            "playing",
            "play",
        ].forEach(playOnEvent);

        // Use Intersection Observer with immediate play
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (video.paused) {
                            video.play().catch(() => {
                                // If play fails, try again after a short delay
                                setTimeout(() => {
                                    video.play().catch(() => {});
                                }, 100);
                            });
                        }
                    }
                });
            },
            { threshold: 0 }
        );

        observer.observe(video);

        // Also try playing on window load
        const handleWindowLoad = () => {
            if (video.paused) {
                video.play().catch(() => {});
            }
        };
        window.addEventListener("load", handleWindowLoad);

        // Try playing on DOMContentLoaded
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => {
                video.play().catch(() => {});
            });
        } else {
            video.play().catch(() => {});
        }

        // Periodic check to ensure video is playing (for mobile browsers that pause)
        const playCheckInterval = setInterval(() => {
            if (video.paused && document.visibilityState === "visible") {
                video.play().catch(() => {});
            }
        }, 1000);

        // Handle page visibility changes
        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible" && video.paused) {
                video.play().catch(() => {});
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Cleanup
        return () => {
            observer.disconnect();
            window.removeEventListener("load", handleWindowLoad);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            clearInterval(playCheckInterval);
        };
    }, []);

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
                { opacity: 0, y: 60, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.4, ease: "power4.out" }
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
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ 
                    zIndex: 0,
                }}
            >
                <source src="/clips/aqua brooks3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
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
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 md:mb-10 tracking-tight font-heading px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 lg:px-12 lg:py-8 rounded-2xl md:rounded-3xl bg-primary/20 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/30 relative overflow-hidden"
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
                        className="text-lg px-12 py-8 bg-accent hover:bg-accent/90 text-white border-none shadow-[0_0_40px_-10px_rgba(56,189,248,0.5)] hover:shadow-[0_0_60px_-15px_rgba(56,189,248,0.6)] transition-all duration-300 relative overflow-hidden group rounded-full"
                    >
                        <span className="relative z-10 font-semibold tracking-wide">{content.cta}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent via-white/20 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Button>
                </div>
            </Container>

            {/* Scroll Indicator */}
            <div
                ref={scrollIndicatorRef}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/50 z-10"
            >
                <ArrowDown className="w-6 h-6" />
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[5]">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
