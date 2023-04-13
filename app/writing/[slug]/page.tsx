// @ts-nocheck

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Mdx, H1 } from '../../../components';

import { allBlogs } from 'contentlayer/generated';
// import ViewCounter from '../view-counter';

export async function generateStaticParams() {
    return allBlogs.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params
}): Promise<Metadata | undefined> {
    const post = allBlogs.find((post) => post.slug === params.slug);
    if (!post) {
        return;
    }

    const {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
        slug,
    } = post;
    const ogImage = image
        ? `https://wibb.me${image}`
        : `https://wibb.me/api/og?title=${title}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `https://wibb.me/writing/${slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default async function BlogPost({ params }) {
    const post = allBlogs.find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <section>
            <H1>{post.title}</H1>
            <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[702px]">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-2 tracking-tighter font-bold">
                    <time>{post.publishedAt}</time>
                </div>
                <div className="h-[0.2em] bg-gray-50 dark:bg-gray-800 mx-2" />
                {/* <ViewCounter slug={post.slug} trackView /> */}
            </div>
            <Mdx code={post.body.code}
            // tweets={tweets} 
            />
        </section>
    )
}