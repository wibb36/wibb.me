'use client';

import * as React from "react"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '../logo';
import { ThemeSwitch } from '../theme-switch';
import Items, { navItems } from './nav-items';
// import MobileNav from './mobile-nav';

export function Sidebar() {

    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

    let pathname = usePathname() || '/';
    if (pathname.includes('/writing/')) {
        pathname = '/writing';
    }

    return (
        <aside
            className="flex flex-col gap-6 md:gap-10 w-[300px] sm:w-[150px] min-h-screen pt-8 sm:pt-20 bg-yellow-600"
        // className="sm:w-[150px] sm:flex-shrink-0 -mx-4 sm:mx-0 sm:px-0 font-serif"
        >

            <Logo href="/" className="items-center justify-center space-x-2 sm:flex" />


            <div className="flex flex-row sm:flex-col items-center sm:sticky sm:top-20">

                {/* <div className="mb-2 px-4 sm:px-0 sm:mb-8 space-y-10 flex flex-col sm:flex-row items-start ">

                    <button
                        className="flex items-center space-x-2 sm:hidden"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        {showMobileMenu ? "Close" : <Logo />}
                    </button>

                </div> */}

                {/* <nav className="grid grid-flow-row auto-rows-max text-sm"></nav> */}

                <nav
                    className="sm:flex flex-col items-start justify-center relative px-4 sm:px-0 pb-0 fade"
                    id="nav"
                >
                    <Items />

                    {/* Divider hidden on mobile temporary */}
                    <div className="flex my-10 w-[20px] h-[.5px] bg-neutral-300 dark:bg-neutral-800 self-center" />

                    <div className="flex align-middle self-center">
                        <ThemeSwitch className="p-[12px]" />
                    </div>

                </nav>



                {/* {showMobileMenu && navItems && (
                    <MobileNav />
                )} */}
            </div>
        </aside>
    )
}