import { NextRequest, ImageResponse } from 'next/server';

export const runtime = 'edge';

const font = fetch(
    new URL('../../../public/fonts/ibm-plex-sans-var.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const hasTitle = searchParams.has('title');

        const title = hasTitle
            ? searchParams.get('title')?.slice(0, 100)
            : 'Sam Wibb';

        const fontData = await font;

        return new ImageResponse((
            <div
                style={{
                    backgroundColor: 'black',
                    backgroundSize: '150px 150px',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        justifyItems: 'center',
                    }}
                >
                    <div
                        style={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            backgroundImage: 'url(https://wibb.me/og-bg.png)',
                        }}
                    ></div>
                </div>

                <div
                    style={{
                        fontSize: 60,
                        fontStyle: 'normal',
                        letterSpacing: '-0.025em',
                        color: 'white',
                        marginTop: 30,
                        padding: '0 120px',
                        lineHeight: 1.4,
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    {title}
                </div>
            </div>
        ), {

        })

    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response('Error: Failed to generate the image', { status: 500 });
    }
}