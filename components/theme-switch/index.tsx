import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import clsx from 'clsx';

import type { IconType } from '../icon'
import { Icon } from '../icon';

export function ThemeSwitch({ className }: { className?: string; }) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

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
        setTheme(getNextTheme());
    };

    const currentOption = options.find(option => option.label === theme) || options[0];

    return (
        <button
            onClick={handleClick}
            className={clsx(
                'transition-all text-neutral-500 hover:text-[#158f7a] dark:hover:text-[#2cffd1cb]', className
            )}
            aria-label={currentOption.label}
            type="button"
        >
            <Icon name={currentOption.icon} width={24} height={24} className='transition-all' />
        </button>
    );
}