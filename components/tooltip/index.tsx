// This is a custom tooltip component that uses the Radix UI Tooltip component under the hood. It uses the same API as the Radix UI Tooltip component, but adds some custom styling and animation using TailwindCSS. It needs some work to make it more flexible, but it's a good starting point.

import './styles.css'

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { clsx } from "clsx";

interface TooltipProps {
    content: string;
    side?: "top" | "right" | "bottom" | "left";
    children: React.ReactNode;
}

export function Tooltip({ content, side = "top", children, ...props }: TooltipProps) {

    return (
        <TooltipPrimitive.Provider delayDuration={0} {...props}>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                    {children}
                </TooltipPrimitive.Trigger>

                <TooltipPrimitive.Content
                    sideOffset={5}
                    side={side}
                    className={clsx(
                        "radix-side-top:animate-slide-down-fade",
                        "radix-side-right:animate-slide-left-fade",
                        "radix-side-bottom:animate-slide-up-fade",
                        "radix-side-left:animate-slide-right-fade",
                        "inline-flex items-center rounded-md px-4 py-2.5",
                        "bg-gray-200 dark:bg-gray-800 relative top-[-18px] transform transition-all duration-400 z-10 shadow-x"
                    )}
                >
                    <TooltipPrimitive.Arrow className="fill-gray-200 dark:fill-gray-800" />
                    <span className="block font-mono text-sm leading-none">
                        {content}
                    </span>
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    )
}
