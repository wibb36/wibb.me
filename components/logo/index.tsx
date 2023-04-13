'use client';

import Link from 'next/link';
import Image from "next/image";
import { name, avatar } from '../../lib';

export default function Logo() {
    return (
        <Link aria-label="Sam Wibb" href="/">
            <Image
                alt={name}
                className="rounded-full grayscale border-solid border-4 border-white"
                src={avatar}
                placeholder="blur"
                width={48}
                priority
            />
        </Link>
    )
}