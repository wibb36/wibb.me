import clsx from 'clsx';
import Balancer from 'react-wrap-balancer';

type PostTitleProps = {
    isGradient?: boolean
    className?: string
    children?: React.ReactNode
}

export const H1 = ({
    isGradient = true,
    className,
    children
}: PostTitleProps) => {
    return (
        <h1
            className={clsx(
                'capitalize font-bold text-3xl font-serif max-w-[702px]',
                { 'text-gradient': isGradient }, className
            )}
        >
            <Balancer>
                {children}
            </Balancer>
        </h1>
    )
}