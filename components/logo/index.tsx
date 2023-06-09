'use client';

import Link, { LinkProps as NextLinkProps } from 'next/link';
import Image from "next/image";
import { name, avatar } from '../../lib';

interface LogoProps extends NextLinkProps {
    className?: string
}

export default function Logo(props: LogoProps) {
    return (
        <Link {...props} aria-label="Sam Wibb" className={props.className}>
            <Image
                alt={name}
                className="rounded-full grayscale border-solid border-4 border-neutral-200 dark:border-white"
                src={avatar}
                placeholder="blur"
                width={48}
                priority
            />
        </Link>
    )
}