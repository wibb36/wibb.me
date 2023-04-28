import type { Metadata } from "next";
import Head from 'next/head';

export const metadata: Metadata = {
    title: "Offline",
};

export default function Page() {
    return (
        <>
            <Head>
                <title>Offline | Sam Wibb</title>
            </Head>
            <h1>This is offline fallback page</h1>
            <h2>When offline, any page route will fallback to this page</h2>
        </>
    );
}