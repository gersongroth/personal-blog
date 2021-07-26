import Link from 'next/link';
import { imageBuilder } from '../../lib/sanity';
import Date from '../common/Date';
import CoverImage from '../CoverImage';
import Avatar from './Avatar';

// TODO - props
const PostPreview = ({ title, coverImage, date, excerpt, author, slug }: any) => (
    <div>
        <div className="mb-5">
            <CoverImage slug={slug} title={title} imageObject={coverImage} url={imageBuilder(coverImage).url() || ''} />
        </div>
        <h3 className="text-3xl mb-3 leading-snug">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline">{title}</a>
            </Link>
        </h3>
        <div className="text-lg mb-4">
            <Date dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <Avatar name={author?.name} picture={author?.picture} />
    </div>
);

export default PostPreview;
