import cn from 'classnames';
import Link from 'next/link';
import React from 'react';
import { SanityImageProps } from 'types/sanity/SanityImage';
import SanityImage from '../components/sanity/SanityImage';
interface CoverImageProps extends SanityImageProps {
    title: string;
    slug?: string;
}

export default function CoverImage({ title, alt, slug, ...props }: CoverImageProps) {
    return (
        <div className="-mx-5 sm:mx-0">
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a aria-label={title}>
                        <SanityImage
                            alt={alt || `Cover Image for ${title}`}
                            className={cn('shadow-small', {
                                'hover:shadow-medium transition-shadow duration-200': slug,
                            })}
                            width={1240}
                            height={540}
                            {...props}
                        />
                    </a>
                </Link>
            ) : (
                <SanityImage
                    alt={alt || `Cover Image for ${title}`}
                    width={1240}
                    height={540}
                    className={cn('shadow-small', {
                        'hover:shadow-medium transition-shadow duration-200': slug,
                    })}
                    {...props}
                />
            )}
        </div>
    );
}
