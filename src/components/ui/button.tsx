"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-primary/90 backdrop-blur-sm text-primary-foreground hover:bg-primary shadow-lg hover:shadow-xl border border-primary/20",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                accent: "bg-accent/90 backdrop-blur-sm text-accent-foreground hover:bg-accent shadow-lg hover:shadow-accent/25 border border-accent/20",
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-12 rounded-full px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    enableTilt?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, enableTilt = false, ...props }, ref) => {
        const Comp = enableTilt ? motion.button : "button";

        const tiltProps = enableTilt ? {
            whileHover: { scale: 1.05, rotateX: 5, rotateY: 5 },
            whileTap: { scale: 0.95 },
            transition: { type: "spring", stiffness: 400, damping: 17 }
        } : {};

        return (
            // @ts-ignore - Framer motion types conflict with standard button types sometimes
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...tiltProps}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
