import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface CustomLinkProps extends NextLinkProps {
    href: string;
    children: React.ReactNode;
}

const Link = (props: CustomLinkProps) => {
    const href = props.href;

    if (href.startsWith('/')) {
        return (
            <NextLink {...props}>
                {props.children}
            </NextLink>
        );
    }

    if (href.startsWith('#')) {
        return <a {...props} />;
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export default Link