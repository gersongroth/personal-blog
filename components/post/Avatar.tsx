import SanityImage from '@components/sanity/SanityImage';
import React from 'react';

interface AvatarProps {
    name: string;
    picture: string;
    width?: number;
    height?: number;
}

const Avatar = ({ name, picture, width, height }: AvatarProps) => {
    return (
        <div className="flex items-center">
            <SanityImage url={picture} width={width} height={height} className="w-12 h-12 rounded-full mr-4" alt={name} />
            <div className="text-xl font-bold">{name}</div>
        </div>
    );
};

export default Avatar;
