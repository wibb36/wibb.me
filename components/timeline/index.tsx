'use client';

import React from 'react';
import { cn } from '@/lib'

type TimelineBlockProps = {
    title: string;
    time: string;
    description: string | any;
    isLast?: boolean;
};

export function TimelineBlock({ title, time, description, isLast }: TimelineBlockProps) {
    return (
        <li className="mb-10 ml-4">
            <span className="absolute flex mt-1.5 -left-2.5">
                {isLast && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />}
                <span className={cn(
                    "relative inline-flex w-5 h-5 rounded-full border-4 border-background",
                    isLast ? "bg-primary" : "bg-base"
                )} />
            </span>

            <time className="relative top-[1.5px] text-xs tracking-wide uppercase text-base-foreground mt-1.5 mb-1">{time}</time>
            <h3 className="text-foreground md:text-xl font-semibold tracking-wide">{title}</h3>

            <p className="mt-3">{description}</p>

        </li>
    )
}

type TimelineProps = {
    timeline: TimelineBlockProps[];
};

export function Timeline({ timeline }: TimelineProps) {
    return (
        <div className="pl-2 my-10">
            <ol className="relative border-l border-base pl-6">
                {timeline
                    .map((block, index) => ({ ...block, originalIndex: index })) // Add the original index to each block
                    .sort((a, b) => b.originalIndex - a.originalIndex) // Sort the timeline array in reverse order based on original index
                    .map((block, index, arr) => (
                        <TimelineBlock key={block.title} {...block} isLast={index === 0} />  // if it's the first element after sorting, set isLast to true
                    ))}
            </ol>
        </div>
    )
}