'use client';

import React from 'react';
import Link from 'next/link';

type ProjectCardProps = {
    title: string;
    description: string;
    href?: string;
};

export function ProjectCard({ title, description, href }: ProjectCardProps) {

    const Card = () => (
        <div className='flex items-center rounded-xl p-4 border-2 border-neutral-800 shadow-md'>
            <div className='grow'>
                <h4 className="text-xl font-bold mb-1">{title}</h4>
                <p className="text-sm leading-5 text-neutral-400">{description}</p>
            </div>
            {/* <div className="w-12 h-12 ml-2 p-3 rounded-full shadow-md bg-white">

        </div> */}
        </div>
    )

    return href ? (
        <Link
            href={href}
            className="no-underline hover:bg-[#f8f8f8] dark:hover:bg-neutral-800"
        >
            <Card />
        </Link>
    ) : (
        <Card />
    )
}

type ProjectGroupProps = {
    groupTitle: string;
    projects: ProjectCardProps[];
};

export function ProjectGroup({ groupTitle, projects }: ProjectGroupProps) {
    return (
        <div className="my-8">
            <h3 className="text-xl font-bold mb-4 mx-[2px]">{groupTitle}</h3>
            <ul className="space-y-4">
                {projects.map((project) => (
                    <li key={project.title}>
                        <ProjectCard
                            // href={`/projects/${project.title.toLowerCase().replace(/ /g, '-')}`}
                            {...project}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}