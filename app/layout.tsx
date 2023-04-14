import './global.css'

import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Sidebar, Breadcrumbs } from '../components';

const wibb_font = localFont({
    src: '../public/fonts/ibm-plex-sans-var.woff2',
    weight: '400',
    variable: '--font-wibb',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Sam Wibb',
        template: '%s | Sam Wibb',
    },
    creator: 'Sam Wibb',
    publisher: 'Sam Wibb',
    description: 'Developer, writer, and creator.',
    keywords: ['developer', 'writer', 'creator', 'sam', 'wibb', 'wibb36'],
    openGraph: {
        title: 'Sam Wibb',
        description: 'Developer, writer, and creator.',
        url: 'https://wibb.me',
        siteName: 'Sam Wibb',
        images: [
            {
                url: 'https://wibb.me/og.jpg',
                width: 1920,
                height: 1080,
            },
        ],
        locale: 'en-US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: 'Sam Wibb',
        card: 'summary_large_image',
        // description: 'Developer, writer, and creator.',
        // siteId: '',
        // creator: '@wibb36',
        // creatorId: '',
        // image: 'https://wibb.me/og.jpg',
    },
    icons: {
        // icon: '',
        shortcut: '/favicon.ico',
        // apple: '/apple-touch-icon.png',
        // other: {
        //     rel: 'apple-touch-icon-precomposed',
        //     url: '/apple-touch-icon-precomposed.png',
        // },
    },
    // manifest: 'https://wibb.me/manifest.json',
    verification: {
        google: 'UNbWyO-U7s3oD6AMJmNG1Le3AtSomhPPGeROeBfy0Fs',
        yandex: '0eb557e1e619fca2',
        // bing & yahoo: Yahoo has been using Bing's Webmaster Tools since 2011, it's done automatically through importing from Google.
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en"
            className={clsx(
                'text-black bg-white dark:text-white dark:bg-[#111010]',
                wibb_font.variable
            )}
        >
            <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto bg-grid [--grid-opacity:0.08] [--grid-size:100px] overflow-y-scroll scrollbar scrollbar-thumb-[#158f7a] dark:scrollbar-thumb-primary scrollbar-track-gray-200 dark:scrollbar-track-gray-800">
                <Sidebar />
                <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
                    <Breadcrumbs />
                    {children}
                </main>
            </body>
        </html>
    )
}
