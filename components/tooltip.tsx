import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

type TooltipPrimitiveProps = React.ComponentProps<typeof TooltipPrimitive.Root>;
type TooltipProps = TooltipPrimitiveProps &
    React.ComponentProps<typeof TooltipPrimitive.Content> & {
        content: string;
        children: React.ReactNode;
        className?: any
    }

export function Tooltip({ content, children, className, ...props }: TooltipProps) {
    return (
        <TooltipPrimitive.Provider delayDuration={0} {...props}>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                    {children}
                </TooltipPrimitive.Trigger>

                <TooltipPrimitive.Content
                    {...props}
                    className={cn(
                        "z-50 overflow-hidden rounded-md bg-gray-200 dark:bg-gray-800 px-3 py-1.5 font-sans text-sm text-popover-foreground shadow-md animate-in fade-in-25 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
                        className
                    )}
                >
                    <TooltipPrimitive.Arrow className="animate-in fill-gray-200 dark:fill-gray-800" />
                    {content}
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    )
}