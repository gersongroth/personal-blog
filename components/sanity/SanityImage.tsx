import cn from 'classnames';
import Image from 'next/image';
import React from 'react';
import { imageBuilder } from '../../lib/sanity';
import { SanityImageProps } from '../../types/sanity/SanityImage';

const SanityImage = ({ imageObject, slug, alt }: SanityImageProps) => (
    <Image width={1240}
        height={540}
        alt={alt}
        className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
        })}
        src={imageBuilder(imageObject).width(1240).height(540).url() || ''} />
);

export default SanityImage;
