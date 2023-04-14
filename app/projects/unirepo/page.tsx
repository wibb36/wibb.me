import React from 'react';
import type { Metadata } from 'next';
import { motion } from 'framer-motion';

import { H1 } from '../../../components';

export const metadata: Metadata = {
    title: 'Unirepo',
    description: 'Cross-platform monorepo starter.',
};

export default function UnirepoPage() {
    // const controls = useAnimation();

    // React.useEffect(() => {
    //     controls.start({
    //         opacity: 1,
    //         transition: {
    //             duration: 1,
    //         },
    //     });
    // }, []);


    return (
        <>
            <section className="mb-6">
                <H1 className="mt-[-3px] text-3xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300">Unirepo</H1>

                <h2 className="my-5 max-w-[702px] text-2xl md:text-4xl text-neutral-800 dark:text-neutral-200">
                    Bridging Web and Mobile for robust cross-platform app development.
                </h2>
                <p className="text-2xl text-neutral-400">Privately developed, open source in the future.</p>

                <div className="flex flex-col space-y-4 mt-8">
                    <h3 className="my-1 max-w-[702px] font-extrabold text-2xl md:text-4xl text-neutral-800 dark:text-neutral-200">In a few words...</h3>
                    <p className="text-xl">Say you got a brilliant idea for an app. You most likely want it everywhere: Web, iOS, Android, Tablets, TV, etc. With <b>Unirepo</b>, one command in your terminal gets you up to 80% of your front-end done in seconds.</p>
                </div>

                <div className="flex flex-col space-y-4 mt-8">
                    <h4 className="my-1 max-w-[702px] font-extrabold text-xl md:text-2xl text-neutral-800 dark:text-neutral-200">A little history...</h4>

                    <p className="text-lg">
                        For eons, developers have quested for the holy grail of cross-platform app development that spans iOS, Android, and web. The path was strewn with immense obstacles. While web development offered platform-independent apps, they couldn't match native apps' unparalleled performance and capabilities. Over time, cross-platform frameworks emerged, such as PhoneGap, Xamarin, and Titanium, each with their own unique pros and cons. But in 2015, Facebook appeared like a bolt from the blue with React Native, equipping developers with the power to create native iOS and Android apps in a single codebase. React Native Web followed, this time enabling the development of websites with React Native. but hurdles still remained - such as disparities in styling and navigation concepts between web and mobile as well as the difficulty of matching the native performance of writing native apps truly natively with Swift and Java.
                    </p>

                    <p className="text-lg">
                        In my opinion, React/React Native are perfect for web/mobile apps. Next.js dominates web development, while Expo excels in mobile. Combining the two will get you the best of both worlds in a single monorepo codebase that's easy to maintain and scale, respectively, there are still challenges to overcome before achieving a true cross-platform app development. An ideal cross-development experience would solve challenges such as navigation, styling, animations, responsive design systems, platform-specific APIs, and more.
                    </p>

                </div>

                <div className="flex flex-col space-y-4 mt-8">
                    <h4 className="my-1 max-w-[702px] font-extrabold text-xl md:text-2xl text-neutral-800 dark:text-neutral-200">Why Unirepo?</h4>

                    <p className='text-lg'>
                        In a nutshell, I created Unirepo for two reasons: first, to gradually eliminate code duplication across different projects as I build more apps, and second, to make it easier for myself to create universal apps by defining a common API as a single source of truth. As time went on, I developed a CLI tool that allows me to quickly create and configure new projects on-the-go.
                    </p>
                </div>

                <div className="flex flex-col space-y-4 mt-8">
                    <h4 className="my-1 max-w-[702px] font-extrabold text-xl md:text-2xl text-neutral-800 dark:text-neutral-200">Challenges</h4>

                    <p className='text-lg'>
                        Although there are many benefits to using Unirepo, it's not a perfect solution yet. There are still some cross-platform navigation issues that need to be addressed, specifically related to having a unified API for file system-based routing. But fear not, I'm on it and working to develop a solution to tackle this challenge head-on.
                    </p>

                    <p className='flex text-lg mt-4'>I truly believe this to be the future of software development.</p>
                </div>

            </section>
        </>
    )
}
