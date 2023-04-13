import * as React from 'react';

export default function Callout({ emoji, children }: { emoji: string; children: React.ReactNode }) {
    return (
        <div className="flex bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 my-8">
            <div className="flex items-center w-4 mr-4">{emoji}</div>
            <div className="w-full callout">{children}</div>
        </div>
    );
}