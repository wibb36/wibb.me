import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import Logo from '../logo';
import Items from './nav-items';

import { useLockBody } from "@/hooks/use-lock-body"

interface MobileNavProps {
    // items: NavItemProps[]
    children?: React.ReactNode
}

export default function MobileNav({ children }: MobileNavProps) {
    useLockBody()

    return (
        <aside
            className={cn(
                "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden bg-primary"
            )}
        >
            <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
                <Link href="/" className="flex items-center space-x-2">
                    <span>Logo</span>
                    <span className="font-bold">Sam Wibb</span>
                </Link>
                <nav className="grid grid-flow-row auto-rows-max text-sm">
                    <Items />
                </nav>
                {/* {children} */}
            </div>
        </aside>
    )
}