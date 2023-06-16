'use client'

import * as React from 'react'
import { usePathname, useRouter } from 'next/navigation';

import type { Blog } from 'contentlayer/generated';
import { BlogCard, Tag } from '@/components';

export default function ArticleList({ items }: { items: Blog[] }) {
    const [selectedTag, setSelectedTag] = React.useState<string | null>(null);

    const router = useRouter();
    const pathname = usePathname(); // use useRouter hook to get router object

    const allTags = Array.from(
        new Set(items.flatMap((post) => post.tags?.split(', ').filter(Boolean) || []))
    );

    const handleTagChange = (tag: string | null) => {
        setSelectedTag(tag);

        // Update the URL parameter
        if (tag) {
            router.push(`${pathname}?tag=${tag}`);
        } else {
            router.push(pathname);
        }
    };

    React.useEffect(() => {
        // Check if 'tag' parameter exists in the URL
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('tag')) {
            setSelectedTag(urlParams.get('tag'));
        }
    }, [pathname]);


    return (
        <>
            <section>
                <h2 className="sr-only">Tags</h2>
                <ul className="flex gap-x-3">

                    <li key="all">
                        <Tag onClick={() => handleTagChange(null)}>
                            All
                        </Tag>
                    </li>

                    {allTags.map((tag) =>
                        <li key={tag}>
                            <Tag onClick={() => handleTagChange(tag)}>{tag}</Tag>
                        </li>
                    )}
                </ul>
            </section>

            <br />

            <section>
                <ul className={`space-y-6`}>

                    {items
                        .filter((post) => selectedTag ? post.tags?.includes(selectedTag) : true)
                        .sort((a, b) => {
                            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                                return -1;
                            }
                            return 1;
                        })
                        .map((post) => <BlogCard key={post.slug} post={post} />)}
                </ul>
            </section>
        </>
    )
}