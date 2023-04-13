'use client';

import React from 'react';

export type IconType = keyof typeof icons;

export const icons = {
    home: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M20 6L9 17l-5-5" />
        </svg>
    ),

    dev: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 384 512" fill="none" {...props}>
            <g clipPath="url(#a)">
                <path d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zm192 0v128h128L256 0zM153 289l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L71 337c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zm112-34 48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />

            </g>
        </svg>
    ),

    projects: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 512 512" fill="none" {...props}>
            <g clipPath="url(#a)">
                <path d="M156.6 384.9 125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2 3-8.9 7-20.5 11.8-33.8H24c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7.2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3H200c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8 13.4 72.9 9.3 194.8-111.4 276.7-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1.2S224 496.7 224 488V380.8c-14.1 4.9-26.4 8.9-35.7 11.9-11.2 3.6-23.4.5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
            </g>
        </svg>
    ),

    writing: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 448 512" {...props}>
            <g clipPath="url(#a)">
                <path
                    d="M0 96C0 43 43 0 96 0h320c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-53 0-96-43-96-96V96zm144 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H144zm-16 80c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H144c-8.8 0-16 7.2-16 16z"
                />
                <path
                    d="M64 416c0-17.7 14.3-32 32-32h320v64H96c-17.7 0-32-14.3-32-32z"
                    style={{
                        opacity: 0.4,
                    }}
                />
            </g>
        </svg>
    ),

    arrow: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 12 12" {...props} fill="none">
            <path
                fill="currentColor"
                d="M2.071 11.35.963 10.241l8.239-8.253H2.838L2.852.455h8.992V9.46h-1.548l.014-6.363-8.239 8.252Z"
            />
        </svg>
    ),

    views: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                stroke="currentColor"
                d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941"
            />
        </svg>
    ),
}