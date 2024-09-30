
import React from 'react';
import Image from 'next/image';
import background from '../assets/background.jpg';

export const DinamicBackground = () => {
    return (
        <div className='absolute w-full h-screen'>
            <Image
                src={background}
                alt='background'
                layout='fill'
                objectFit='cover'
                priority
            />
        </div>
    );
};
