'use client';

import React from 'react';
import { cn } from "@/lib/utils"

type TimelineBlockProps = {
    title: string;
    time: string;
    description: string | any;
    className?: string;
};

export function TimelineBlock({ title, time, description, className }: TimelineBlockProps) {
    return (
        <li

            className={cn(
                'flex flex-col relative before:absolute before:top-[6px] before:w-4 before:h-4 before:rounded-full before:left-[-36px] before:z-[1] before:bg-primary sm:pl-3', className
            )}
        >

            <h3 className="text-base-foreground md:text-xl font-semibold tracking-wide">{title}</h3>
            <time className="text-xs tracking-wide uppercase text-base-foreground">{time}</time>

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
            <ul className="space-y-12 relative pl-6 before:absolute before:top-2 before:bottom-0 before:w-[1px] before:-left-[1px] before:bg-border">
                {timeline
                    .map((block, index) => ({ ...block, originalIndex: index })) // Add the original index to each block
                    .sort((a, b) => b.originalIndex - a.originalIndex) // Sort the timeline array in reverse order based on original index
                    .map((block) => (
                        <TimelineBlock key={block.title} {...block} />
                    ))}
            </ul>
        </div>
    )
}