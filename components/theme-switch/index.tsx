import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils"

import { Tooltip } from '../tooltip'
import type { IconType } from '../icon'
import { Icon } from '../icon';

export function ThemeSwitch({ className }: { className?: string; }) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const options: Array<{ icon: IconType; label: string }> = [
        {
            icon: "desktop",
            label: "system",
        },
        {
            icon: "sunny",
            label: "light",
        },
        {
            icon: "moon",
            label: "dark",
        },
    ];

    const getNextTheme = () => {
        const currentThemeIndex = options.findIndex(option => option.label === theme);
        const nextThemeIndex = (currentThemeIndex + 1) % options.length;
        return options[nextThemeIndex].label;
    };

    const handleClick = () => {
        const appTheme = getNextTheme();

        setTheme(appTheme);

        // Update the checked state based on the next theme.
        setChecked(appTheme === 'dark');
    };

    const currentOption = options.find(option => option.label === theme) || options[0];
    const label = currentOption.label;

    return (
        <Tooltip
            content={label.charAt(0).toUpperCase() + label.slice(1)}
            side="right"
            sideOffset={6}
        >
            <label
                onClick={handleClick}
                className={cn(
                    'btn btn-square btn-ghost mask mask-squircle text-base-foreground hover:text-primary swap swap-rotate',
                    className
                )}
                aria-label={currentOption.label}
            >

                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="hidden" checked={checked} onChange={() => { }} />


                <Icon name={currentOption.icon} width={24} height={24} />
            </label>
        </Tooltip>
    );
}