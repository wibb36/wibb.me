'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function BlogCard({ post }: { post: any }) {
    return (
        <li>
            <Link
                key={post.slug}
                className="flex flex-col no-underline rounded-md p-4]"
                href={`/writing/${post.slug}`}
            >
                <span className="relative">
                    <div className="w-full flex flex-col">
                        <p>{post.title}</p>
                        <time className="font-mono text-sm tracking-tighter text-neutral-400">{post.publishedAt} · {Math.ceil(post.readingTime.minutes)} min read</time>
                        {/* <ViewCounter slug={post.slug} trackView={false} /> */}
                    </div>

                    {/* I should wrap motion.div with a condtional to only show it when the link is hovered on */}
                    {/* {isHovered && (
                    <motion.div
                        className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                        transition={{
                            type: 'spring',
                            stiffness: 250,
                            damping: 25,
                        }}
                        initial={{ y: 0 }}
                        animate={{ y: 10 }}
                        whileHover={{ y: -10 }}
                    />)} */}
                </span>
            </Link>
        </li>
    )
}