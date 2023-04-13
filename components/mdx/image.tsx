import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends NextImageProps {
    alt: string;
}

export default function Image({ alt, ...props }: ImageProps) {
    return <NextImage alt={alt} className="rounded-lg" {...props} />;
}