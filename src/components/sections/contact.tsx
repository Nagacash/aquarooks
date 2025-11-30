"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Send, Loader2, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useLanguageStore } from "@/store/language-store";

const contactContent = {
    de: {
        title: "Kontakt",
        subtitle: "Lassen Sie uns in Verbindung treten",
        form: {
            firstName: "Vorname",
            lastName: "Nachname",
            email: "E-Mail",
            phone: "Telefon",
            message: "Nachricht",
            send: "Senden",
            sending: "Wird gesendet...",
            success: "Nachricht erfolgreich gesendet!",
            errors: {
                required: "Dieses Feld ist erforderlich",
                email: "Ungültige E-Mail-Adresse",
                phone: "Ungültige Telefonnummer",
            },
        },
    },
    en: {
        title: "Contact",
        subtitle: "Get in Touch",
        form: {
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email",
            phone: "Phone",
            message: "Message",
            send: "Send",
            sending: "Sending...",
            success: "Message sent successfully!",
            errors: {
                required: "This field is required",
                email: "Invalid email address",
                phone: "Invalid phone number",
            },
        },
    },
    fr: {
        title: "Contact",
        subtitle: "Entrons en Contact",
        form: {
            firstName: "Prénom",
            lastName: "Nom",
            email: "E-mail",
            phone: "Téléphone",
            message: "Message",
            send: "Envoyer",
            sending: "Envoi en cours...",
            success: "Message envoyé avec succès!",
            errors: {
                required: "Ce champ est requis",
                email: "Adresse e-mail invalide",
                phone: "Numéro de téléphone invalide",
            },
        },
    },
};

const formSchema = z.object({
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(1, "Required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
    const { language } = useLanguageStore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const content = contactContent[language];

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contact" className="py-28 md:py-40 bg-gradient-to-b from-slate-50 via-white to-slate-50 scroll-mt-20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto">
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
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 sm:mb-8"
                        >
                            {content.title}
                        </motion.h2>
                        
                        {/* Contact Information Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12"
                        >
                            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mx-auto mb-3">
                                    <Mail className="w-6 h-6 text-accent" />
                                </div>
                                <p className="text-sm font-semibold text-primary mb-1">E-Mail</p>
                                <a 
                                    href="mailto:office@aqua-rooks.com" 
                                    className="text-sm text-muted-foreground hover:text-accent transition-colors break-all"
                                >
                                    office@aqua-rooks.com
                                </a>
                            </div>
                            
                            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-3">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <p className="text-sm font-semibold text-primary mb-1">Togo WhatsApp</p>
                                <a 
                                    href="https://wa.me/22890628029" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                                >
                                    +228 90 62 80 29
                                </a>
                            </div>
                            
                            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-400/10 flex items-center justify-center mx-auto mb-3">
                                    <Phone className="w-6 h-6 text-green-600" />
                                </div>
                                <p className="text-sm font-semibold text-primary mb-1">Allemagne</p>
                                <a 
                                    href="tel:+491737201850" 
                                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                                >
                                    +49 173 720 1850
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 p-8 md:p-12 relative overflow-hidden group"
                    >
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-2">
                                        {content.form.success}
                                    </h3>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                    <div className="flex flex-col items-center gap-3 mb-8 pb-6 border-b border-slate-200/50">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 blur-xl -z-10" />
                                            <Image
                                                src="/images/logos/logo2.png"
                                                alt="AQUA ROOKS Logo"
                                                width={160}
                                                height={50}
                                                className="h-12 w-auto object-contain drop-shadow-lg"
                                                quality={95}
                                            />
                                        </div>
                                        <p className="text-xs font-medium text-muted-foreground text-center tracking-wide">
                                            AQUA ROOKS – L&apos;Eau Minérale – Source De Vie
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                                                {content.form.firstName}
                                            </label>
                                            <input
                                                {...register("firstName")}
                                                id="firstName"
                                                className="w-full px-5 py-4 rounded-xl border border-white/70 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm focus:bg-white focus:shadow-lg focus:shadow-accent/10"
                                                aria-invalid={errors.firstName ? "true" : "false"}
                                            />
                                            {errors.firstName && (
                                                <span className="text-sm text-red-500">{content.form.errors.required}</span>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                                                {content.form.lastName}
                                            </label>
                                            <input
                                                {...register("lastName")}
                                                id="lastName"
                                                className="w-full px-5 py-4 rounded-xl border border-white/70 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm focus:bg-white focus:shadow-lg focus:shadow-accent/10"
                                                aria-invalid={errors.lastName ? "true" : "false"}
                                            />
                                            {errors.lastName && (
                                                <span className="text-sm text-red-500">{content.form.errors.required}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-foreground">
                                                {content.form.email}
                                            </label>
                                            <input
                                                {...register("email")}
                                                id="email"
                                                type="email"
                                                className="w-full px-5 py-4 rounded-xl border border-white/70 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm focus:bg-white focus:shadow-lg focus:shadow-accent/10"
                                                aria-invalid={errors.email ? "true" : "false"}
                                            />
                                            {errors.email && (
                                                <span className="text-sm text-red-500">
                                                    {errors.email.type === "required"
                                                        ? content.form.errors.required
                                                        : content.form.errors.email}
                                                </span>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-foreground">
                                                {content.form.phone}
                                            </label>
                                            <input
                                                {...register("phone")}
                                                id="phone"
                                                type="tel"
                                                className="w-full px-5 py-4 rounded-xl border border-white/70 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm focus:bg-white focus:shadow-lg focus:shadow-accent/10"
                                                aria-invalid={errors.phone ? "true" : "false"}
                                            />
                                            {errors.phone && (
                                                <span className="text-sm text-red-500">{content.form.errors.required}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                                            {content.form.message}
                                        </label>
                                        <textarea
                                            {...register("message")}
                                            id="message"
                                            rows={5}
                                            className="w-full px-5 py-4 rounded-xl border border-white/70 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm focus:bg-white focus:shadow-lg focus:shadow-accent/10 resize-none"
                                            aria-invalid={errors.message ? "true" : "false"}
                                        />
                                        {errors.message && (
                                            <span className="text-sm text-red-500">
                                                {errors.message.message || content.form.errors.required}
                                            </span>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-6 text-lg font-semibold"
                                        enableTilt
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                {content.form.sending}
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 mr-2" />
                                                {content.form.send}
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
