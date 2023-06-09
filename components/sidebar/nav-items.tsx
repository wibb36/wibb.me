'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from "@/lib/utils"
import { Icon, type IconType } from '../icon';
import { Tooltip } from '../tooltip'

export type NavItemProps = Record<string, {
    name: string;
    icon: IconType;
    className: string;
}>

export const navItems: NavItemProps = {
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

export default function Items() {

    let pathname = usePathname() || '/';
    if (pathname.includes('/writing/')) {
        pathname = '/writing';
    }

    return (
        <div className="grid gap-y-1 sm:gap-y-4">
            {
                Object.entries(navItems).map(([path, { name, icon, className }]) => {
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
                                    'relative transition-all hover:text-[#158f7a] dark:hover:text-[#2cffd1cb] flex align-middle no-underline',
                                    {
                                        'text-neutral-500': !isActive,
                                        'font-bold': isActive,
                                    }
                                )}
                            >
                                <span className="relative p-[12px] flex items-center">

                                    <Icon name={icon} width={24} height={24} className={cn(
                                        'transition-all hidden sm:flex', {
                                        'text-[#158f7a] dark:text-[#2cffd1cb]': isActive,
                                    }, className
                                    )} />
                                    <span
                                        className="ml-4 items-center text-base font-sans"
                                    // className="sr-only"
                                    >{name.charAt(0).toUpperCase() + name.slice(1)}</span>

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
                })
            }
        </div>
    )
}