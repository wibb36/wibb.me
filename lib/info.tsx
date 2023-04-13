import Link from 'next/link';
import me from 'public/static/avatar.jpg';

export const avatar = me;
export const name = 'Sam Wibb';

export const about = () => {
    return (
        <>
            I'm currently based in California and deeply involved in a diverse range of exciting <Link href='/projects'>projects</Link> and <Link href='/'>interests</Link>.
        </>
    );
};

export const bio = () => {
    const yearsSinceStart = new Date().getFullYear() - new Date('1995').getFullYear();

    return (
        <>
            As a software developer, I&apos;ve been writing code for over <b>{yearsSinceStart - 1} years</b>. While my expertise spans across the full software development stack, I am particularly passionate about UI Development. <Link href='/dev'>Read on</Link>.
        </>
    );
};
