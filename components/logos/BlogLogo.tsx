import React from 'react';
import Image from 'next/image';

interface BlogLogoProps {
    className?: string;
}

const BlogLogo: React.FC<BlogLogoProps> = ({ className }) => {
    return (
        <Image 
            src="https://cdn.cosmicjs.com/e42097a0-a52c-11ef-b5a0-93db72e2be98-7bdc7aac8ec187f45b559baa90917504c7bad1fd-removebg-preview.png" 
            alt="Blog Logo" 
            className={className} 
            width={500} 
            height={500} 
        />
    );
};

export default BlogLogo;