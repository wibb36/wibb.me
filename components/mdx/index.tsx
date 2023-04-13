// @ts-nocheck

import * as React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';

import Callout from './callout';
import Image from './image';
import Link from './link';
import { ProsCard, ConsCard } from './pros-cons-card';

const components = {
    Image,
    a: Link,
    Callout,
    ProsCard,
    ConsCard,
};

interface MdxProps {
    code: string;
    tweets: Record<string, any>;
}

export function Mdx({ code, tweets }: MdxProps) {
    const Component = useMDXComponent(code);
    const StaticTweet = ({ id }) => {
        const tweet = tweets.find((tweet) => tweet.id === id);
        return (
            <></>
            // <Tweet {...tweet} />
        );
    };

    return (
        <article className="prose prose-quoteless prose-neutral dark:prose-invert">
            <Component components={{ ...components, StaticTweet }} />
        </article>
    );
}