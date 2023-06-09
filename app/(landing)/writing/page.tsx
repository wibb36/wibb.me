import type { Metadata } from 'next';
import { allBlogs } from 'contentlayer/generated';
import { H1, BlogCard } from '@/components';

export const metadata: Metadata = {
    title: 'Writing',
    description: 'Read my thoughts on software development, design, and more.',
};


export default function WritingPage() {
    return (
        <>
            <section className="mb-6">
                <H1>Writing</H1>
                <h2 className="my-5 max-w-[702px] text-neutral-800 dark:text-neutral-200">
                    Every now and again, I aim to share my knowledge on <b>software</b>, AI, economy, people, globalization, and more, hoping to make an impact.
                </h2>
                <p className="text-orange-600">I'll soon move all articles from my old website to this new one.</p>
            </section>

            <section>
                <ul className={`space-y-6`}>
                    {allBlogs.sort((a, b) => {
                        if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                            return -1;
                        }
                        return 1;
                    }).map((post) => <BlogCard key={post.slug} post={post} />)}
                </ul>
            </section>
        </>
    )
}
