'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

export function Breadcrumbs() {
    const pathname = usePathname() || '';
    const paths = pathname.split('/').slice(1, -1);

    return (
        <nav>
            <ol>
                {paths.map((path) => (
                    <li key={path} className="flex items-center space-x-3">
                        <Link href={`${path === '' ? '/' : `/${path}`}`} className="text-neutral-800 dark:text-neutral-400 capitalize transition-all ease-linear" area-label={path}>
                            {path === '' ? 'home' : path}
                        </Link>
                        <div
                            aria-hidden="true"
                            className="w-px h-3 bg-neutral-400 rounded-full rotate-12"
                        />
                    </li>
                ))}
            </ol>
        </nav>
    )
}

