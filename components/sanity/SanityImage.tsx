import { ProjectConfig } from 'next-sanity/src/types';
import Image from 'next/image';
import React from 'react';
import { imageBuilder } from '../../lib/sanity';
import { SanityImageProps } from '../../types/sanity/SanityImage';

const buildSrc = (imageObject: ProjectConfig | undefined, width: number | undefined, height: number | undefined) => {
    if (!imageObject) {
        return undefined;
    }

    if (!width || !height) {
        return imageBuilder(imageObject).url();
    }

    return imageBuilder(imageObject).width(width).height(height).url();
};

const SanityImage = ({ className, imageObject, alt, width, height, url }: SanityImageProps) => {
    const src = url || buildSrc(imageObject, width, height);
    console.log(src);

    return (
        <>
            {!!src && (
                <>
                    {!!width && !!height ? (
                        <Image width={width} height={height} alt={alt} className={className} src={src} />
                    ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img alt={alt} className={className} src={src} />
                    )}
                </>
            )}
        </>
    );
};

export default SanityImage;
