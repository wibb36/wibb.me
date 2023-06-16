import type { Metadata } from 'next';
import { allBlogs } from 'contentlayer/generated';
import { H1 } from '@/components';

import ArticleList from './list'

export const metadata: Metadata = {
    title: 'Writing',
    description: 'Read my thoughts on software development, design, and more.',
};

export default function WritingPage() {

    return (
        <>
            <section>
                <H1>Writing</H1>
                <h2 className="my-5 max-w-[702px] text-neutral-800 dark:text-neutral-200">
                    Every now and again, I aim to share my knowledge on <b>software</b>, AI, economy, people, globalization, and more, hoping to make an impact.
                </h2>

                <div className="flex bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 my-8">
                    <div className="flex items-center w-4 mr-4">⚠️</div>
                    <div className="w-full callout">
                        <p className="text-orange-600">I'll promptly transfer all articles from my previous website to this new one.</p>
                    </div>
                </div>

            </section>

            <ArticleList items={allBlogs} />

        </>
    )
}
