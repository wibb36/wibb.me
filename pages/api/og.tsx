import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
    runtime: 'edge',
};

const font = fetch(
    new URL('../../public/fonts/ibm-plex-sans-var.woff2', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
    const { searchParams } = req.nextUrl;
    const postTitle = searchParams.get('title');

    return new ImageResponse((
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                backgroundImage: 'url(https://wibb.me/og-bg.webp)',
            }}
        >
            <div
                style={{
                    marginLeft: 190,
                    marginRight: 190,
                    display: 'flex',
                    fontSize: 130,
                    fontFamily: 'IBM Plex Sans',
                    letterSpacing: '-0.05em',
                    fontStyle: 'normal',
                    color: 'white',
                    lineHeight: '120px',
                    whiteSpace: 'pre-wrap',
                }}
            >
                {postTitle}
            </div>
        </div>
    ), {
        width: 1920,
        height: 1080,
        fonts: [
            {
                name: 'IBM Plex Sans',
                data: await font,
                style: 'normal',
            }
        ]
    });
}