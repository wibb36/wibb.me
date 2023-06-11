import { Layout, type NavItemProps } from '@/components';

const navItems: NavItemProps = {
    '/': {
        name: 'home',
        icon: 'home',
        className: ''
    },
    '/dev': {
        name: 'developer',
        icon: 'dev',
        className: ''
    },
    '/projects': {
        name: 'projects',
        icon: 'projects',
        className: ''
    },
    '/writing': {
        name: 'writing',
        icon: 'writing',
        className: ''
    }
};

interface LandingLayoutProps {
    children: React.ReactNode
}

export default async function LandingLayout(props: LandingLayoutProps) {
    return (
        <Layout items={navItems}>
            {props.children}
        </Layout>
    )
}