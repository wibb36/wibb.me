import * as React from 'react';
import type { IconType } from './icons';
import { icons } from './icons';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconType;
    width?: number;
    height?: number;
}

export const Icon: React.FC<IconProps> = ({ name, width = '1em', height = '1em', className, ...rest }) => {
    const IconComponent = icons[name];

    return (
        <IconComponent
            className={`fill-current ${className}`}
            width={width}
            height={height}
            {...rest}
        />
    )
}

export { IconType }