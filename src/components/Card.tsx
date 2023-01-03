import React, {FC, ReactNode, useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string
    height?: string
    children?: ReactNode
    variant: CardVariant
    // onClick: (num: number) => void
}

const Card: FC<CardProps> = ({
                                 width,
                                 height,
                                 variant,
                                 // onClick,
                                 children,
                             }) => {
    const [state, setState] = useState(0)

    return (
        <div
            style={{
                width,
                border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
                height,
                background: variant === CardVariant.primary ? 'lightgray' : ''
            }}
            // onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
};

export default Card;
