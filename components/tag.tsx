'use client'

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tagVariants = cva(
    "inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "bg-base border-transparent text-base-foreground",
                secondary:
                    "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
                destructive:
                    "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
                outline: "text-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface TagProps
    extends React.HTMLAttributes<HTMLButtonElement>, React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tagVariants> { }

function Tag({ className, variant, ...props }: TagProps) {
    return (
        <button className={cn(tagVariants({ variant }), className)} {...props} />
    )
}

export { Tag, tagVariants }
