import Link from 'next/link';
import React from 'react';
import { SanityImageProps } from 'types/sanity/SanityImage';
import SanityImage from '../components/sanity/SanityImage';

interface CoverImageProps extends SanityImageProps {
    title: string;
}

export default function CoverImage({ title, imageObject, slug }: CoverImageProps) {
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>
            <SanityImage alt={`Cover Image for ${title}`} imageObject={imageObject} slug={slug} />
          </a>
        </Link>
      ) : (
        <SanityImage alt={`Cover Image for ${title}`} imageObject={imageObject} slug={slug} />
      )}
    </div>
  )
}
