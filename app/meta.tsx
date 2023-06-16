import type { Metadata } from 'next';

const APP_NAME = "Sam Wibb";
const APP_CREATOR = APP_NAME;

export const metadata: Metadata = {
    metadataBase: new URL('https://wibb.me'),
    applicationName: APP_NAME,
    title: {
        default: APP_NAME,
        template: '%s | Sam Wibb',
    },
    creator: APP_CREATOR,
    publisher: APP_CREATOR,
    description: 'Developer, writer, and creator.',
    keywords: ['developer', 'writer', 'creator', 'sam', 'wibb', 'wibb36'],
    openGraph: {
        title: APP_CREATOR,
        description: 'Developer, writer, and creator.',
        url: 'https://wibb.me',
        siteName: APP_CREATOR,
        images: [
            {
                url: '/og.png',
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
        title: APP_CREATOR,
        card: 'summary_large_image',
        // description: 'Developer, writer, and creator.',
        // siteId: '',
        // creator: '@wibb36',
        // creatorId: '',
        // image: 'https://wibb.me/og.png',
    },
    icons: {
        // icon: '',
        shortcut: '/favicon.ico',
        // apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
        // apple: '/apple-touch-icon.png',
        // other: {
        //     rel: 'apple-touch-icon-precomposed',
        //     url: '/apple-touch-icon-precomposed.png',
        // },
    },
    manifest: '/manifest.json',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    appleWebApp: {
        title: APP_NAME,
        statusBarStyle: 'black-translucent',
        capable: true,
        // icon: '',
        // iconSize: '',
        // iconPrecomposed: true,
        // iconGloss: 'auto',
        // launchImage: '',
        // launchImageSize: '',
        // launchImagePrecomposed: true,
        // launchImageGloss: 'auto',
    },
    formatDetection: {
        telephone: true,
    },
    verification: {
        google: 'UNbWyO-U7s3oD6AMJmNG1Le3AtSomhPPGeROeBfy0Fs',
        yandex: '0eb557e1e619fca2',
        // bing & yahoo: Yahoo has been using Bing's Webmaster Tools since 2011, it's done automatically through importing from Google.
    },
};