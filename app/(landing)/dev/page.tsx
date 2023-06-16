import type { Metadata } from 'next';
import Link from 'next/link'

import { H1, Timeline } from '@/components';
import timeline from './timeline';

export const metadata: Metadata = {
    title: 'Developer',
    description: 'Full-stack developer, mostly interested in front-end development',
};

export default function DeveloperPage() {
    return (
        <>
            <section className="max-w-[702px]">
                <H1>My dev experience</H1>
                <h2 className="my-5 text-neutral-800 dark:text-neutral-200">
                    In a nutshell, I love building UIs and I'm a big fan of the React ecosystem. I value clean code and follow principals such as <a href="https://en.wikipedia.org/wiki/KISS_principle" rel="noopener noreferrer" target="_blank">KISS</a>, <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" rel="noopener noreferrer" target="_blank">DRY</a>, and <a href="https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it#:~:text=%22You%20aren't%20gonna%20need,add%20functionality%20until%20deemed%20necessary." rel="noopener noreferrer" target="_blank">YAGNI</a>. I like type-system, tests before builds, lints before commits, and mostly continuous integration (CI/CD). Code correctness and uniformity save sprints.
                </h2>

                <p className="my-5 text-neutral-800 dark:text-neutral-200">
                    I build web & mobile apps using Next.js & Expo. Currently working on <Link href="/projects/unirepo">Unirepo</Link>, a cross-platform starter and cli. I firmly believe that, by default, apps should be universally accessible, secure, capable of performing natively at 60+ FPS, and cost-effective to develop and maintain.
                </p>

                <p className="my-5 text-neutral-800 dark:text-neutral-200">
                    Previously, I co-founded <a href="https://limitlesslane.com/" target="_blank">Limitlesslane</a> where I created and managed the web app & browser extensions with a user base of over 300,000 individuals.
                </p>

                <div className="flex flex-col space-y-4 mt-8">
                    <h3 className="my-1 max-w-[702px] font-extrabold text-xl md:text-2xl text-neutral-800 dark:text-neutral-200">A Brief History Timeline...(WIP)</h3>
                    <p className="my-5 text-neutral-800 dark:text-neutral-200">Here are a few tidbits from my dev journey thus far. I will update it later.</p>
                </div>


                <Timeline timeline={timeline} />
            </section>
        </>
    )
}
