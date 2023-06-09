import '@/styles/index.css'

import localFont from 'next/font/local';
import { TopLoader, Providers } from '../components';

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
        >
            <body className="scrollable">
                <TopLoader
                    color={`var(--primary)`}
                    easing="ease"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={2.5}
                    crawl={true}
                    showSpinner={false}
                    speed={200}
                />

                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
