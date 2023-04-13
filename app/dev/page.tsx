import type { Metadata } from 'next';
import { H1, Timeline } from '../../components';

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
                <h2 className="my-5 text-gray-800 dark:text-gray-200">
                    In a nutshell, I love building UIs and I'm a big fan of the React ecosystem. I value clean code and follow principals such as <a href="https://en.wikipedia.org/wiki/KISS_principle" rel="noopener noreferrer" target="_blank">KISS</a>, <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" rel="noopener noreferrer" target="_blank">DRY</a>, and <a href="https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it#:~:text=%22You%20aren't%20gonna%20need,add%20functionality%20until%20deemed%20necessary." rel="noopener noreferrer" target="_blank">YAGNI</a>. I like type-system, tests before builds, lints before commits, and mostly continuous integration (CI/CD). Code correctness and uniformity save sprints.
                </h2>

                <p className="my-5 text-gray-800 dark:text-gray-200">Today, I make web and mobile applications with Next.js and Expo</p>

                <div className="flex flex-col space-y-4 mt-8">
                    <h3 className="my-1 max-w-[702px] font-extrabold text-xl md:text-2xl text-gray-800 dark:text-gray-200">A little history...</h3>
                    <p className="my-5 text-gray-800 dark:text-gray-200">A few facts when I look back on my dev experience. I'll probably update it more over time</p>
                </div>


                <Timeline timeline={timeline} />
            </section>
        </>
    )
}
