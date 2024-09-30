import React from 'react';
import Image from 'next/image';
import background from '../assets/background.jpg';

export const DinamicBackground = () => {
    return (
        <div className="absolute inset-0">
            <Image
                src={background}
                alt='background'
                layout='fill'
                objectFit='cover'
                priority
                className="z-0"
            />
        </div>
    );
};
