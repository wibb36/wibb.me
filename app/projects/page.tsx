import type { Metadata } from 'next';
import { H1, ProjectGroup } from '../../components';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Developer, writer, and creator.',
};

export default function ProjectsPage() {

    const openSource = [
        {
            title: 'Unirepo',
            description: 'Cross-platform monorepo starter',
            href: '/projects/unirepo'
        },
        {
            title: 'Tendon',
            description: 'Cross-platform UI library',
            // href: '/projects/tendon'
        },
    ];

    const apps = [
        {
            title: 'Heaven',
            description: 'Secrets and password manager, previously known as Limitlesslane',
        },
        {
            title: 'Wibb',
            description: 'P2P marketplace for events and hospitality',
            // href: '/projects/wibb'
        },
        {
            title: 'Hulk',
            description: 'Auto purchaser bots for OOS products',
        },
    ];

    return (
        <section className="max-w-[702px]">
            <H1>Projects</H1>
            <h2 className="mt-5 mb-8 max-w-[702px] text-neutral-800 dark:text-neutral-200">
                Here's an overview of my ongoing projects.
            </h2>

            <ProjectGroup groupTitle="Open Source" projects={openSource} />
            <ProjectGroup groupTitle="Apps" projects={apps} />

        </section>
    )
}
