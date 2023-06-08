'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils"
import type { IconType } from '../icon';
import { Icon } from '../icon';
import { Tooltip } from '../tooltip'
import Logo from '../logo';
import { ThemeSwitch } from '../theme-switch';

const navItems: Record<string, { name: string; icon: IconType; className: string }> = {
    '/': {
        name: 'home',
        icon: 'home',
        className: ''
    },
    '/dev': {
        name: 'developer',
        icon: 'dev',
        className: ''
    },
    '/projects': {
        name: 'projects',
        icon: 'projects',
        className: ''
    },
    '/writing': {
        name: 'writing',
        icon: 'writing',
        className: ''
    }
};

export function Sidebar() {

    let pathname = usePathname() || '/';
    if (pathname.includes('/writing/')) {
        pathname = '/writing';
    }

    return (
        <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
            <div className="flex flex-row md:flex-col items-center md:sticky md:top-20">

                <div className="mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
                    <Logo />
                </div>

                <nav
                    className="flex flex-row md:flex-col items-start justify-center relative px-4 md:px-0 pb-0 fade"
                    id="nav"
                >
                    <div
                        // className="relative flex flex-row md:flex-col items-center space-x-4 md:space-x-0 md:space-y-4"
                        className="grid gap-y-4"
                    >
                        {Object.entries(navItems).map(([path, { name, icon, className }]) => {
                            const isActive = path === pathname;
                            return (
                                <Tooltip
                                    key={name}
                                    content={name.charAt(0).toUpperCase() + name.slice(1)}
                                    side="right"
                                    sideOffset={6}
                                >
                                    <Link
                                        key={path}
                                        href={path}
                                        aria-label={name}
                                        className={cn(
                                            'relative transition-all hover:text-[#158f7a] dark:hover:text-[#2cffd1cb] flex align-middle',
                                            {
                                                'text-neutral-500': !isActive,
                                                'font-bold': isActive,
                                            }
                                        )}
                                    >
                                        <span className="relative p-[12px]">

                                            <Icon name={icon} width={24} height={24} className={cn(
                                                'transition-all', {
                                                'text-[#158f7a] dark:text-[#2cffd1cb]': isActive,
                                            }, className
                                            )} />
                                            <span className="sr-only">{name}</span>

                                            {path === pathname ? (
                                                <motion.div
                                                    className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-md z-[-1]"
                                                    layoutId="sidebar"
                                                    transition={{
                                                        type: 'spring',
                                                        stiffness: 250,
                                                        damping: 25,
                                                    }}
                                                />
                                            ) : null}
                                        </span>
                                    </Link>
                                </Tooltip>
                            );
                        })}
                    </div>

                    {/* Divider hidden on mobile temporary */}
                    <div className="hidden md:flex my-10 w-[20px] h-[.5px] bg-neutral-300 dark:bg-neutral-800 self-center" />

                    <div className="hidden md:flex align-middle self-center">
                        <ThemeSwitch className="p-[12px]" />
                    </div>

                </nav>
            </div>
        </aside>
    )
}