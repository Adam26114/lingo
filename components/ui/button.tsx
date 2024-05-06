import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-extrabold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider",
    {
        variants: {
            variant: {
                default:
                    "bg-white text-black border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500 transition",
                primary:
                    "bg-primary text-black hover:bg-bg-primary/90 border-primary-foreground border-b-4 active:border-b-0",
                primaryOutline:
                    "bg-white text-primary-foreground hover:bg-slate-100",
                secondary:
                    "bg-secondary text-black hover:bg-secondary/90 border-secondary-foreground border-b-4 active:border-b-0",
                secondaryOutline: "b-white text-lime-500 hover:bg-slate-100",
                danger: "bg-danger text-black hover:bg-danger/90 border-danger-foreground border-b-4 active:border-b-0",
                dangerOutline: "bg-white text-danger hover:bg-slate-100",
                super: "bg-super text-black hover:bg-isuper/90 border-super-foreground border-b-4 active:border-b-0",
                superOutline:
                    "bg-white text-super-foreground hover:bg-slate-100",
                ghost: "bg-transparent text-slate-500 border-transparent border-0 hover:-slate-100",
                sidebar:
                    "bg-transparent text-slate-500 border-transparent border-2 hover:bg-slate-100 transition-none",
                sidebarOutline:
                    "bg-primary-foreground/15 text-primary-foreground border-primary border-2 hover:bg-primary-foreground/20 transition-none",
            },
            size: {
                default: "h-11 px-4 py-2",
                sm: "h-9  px-3",
                lg: "h-12  px-8",
                icon: "h-10 w-10",
                rounded: " rounded-full",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
