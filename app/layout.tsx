import '../styles/global.css'

import localFont from 'next/font/local';
import { Providers, Sidebar, Breadcrumbs } from '../components';

export { metadata } from './meta'

const wibb_font = localFont({
    src: '../public/fonts/ibm-plex-sans-var.woff2',
    weight: '400',
    variable: '--font-wibb',
    display: 'swap',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={wibb_font.variable}
            suppressHydrationWarning
        >
            <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto bg-grid [--grid-opacity:0.08] [--grid-size:100px] overflow-y-scroll scrollbar scrollbar-thumb-[#158f7a] dark:scrollbar-thumb-primary scrollbar-track-gray-200 dark:scrollbar-track-gray-800" suppressHydrationWarning={true} >
                <Providers>
                    <Sidebar />
                    <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
                        <Breadcrumbs />
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    )
}
