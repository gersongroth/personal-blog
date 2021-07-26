import Date from '../common/Date';
import CoverImage from '../CoverImage';
import Avatar from './Avatar';
import PostTitle from './PostTitle';

// TODO - props
const PostHeader = ({ title, coverImage, date, author }: any) => (
    <>
        <PostTitle>{title}</PostTitle>
        <div className="hidden md:block md:mb-12">
            <Avatar name={author?.name} picture={author?.picture} />
        </div>
        <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
            <CoverImage title={title} imageObject={coverImage} />
        </div>
        <div className="max-w-2xl mx-auto">
            <div className="block md:hidden mb-6">
                <Avatar name={author?.name} picture={author?.picture} />
            </div>
            <div className="mb-6 text-lg">
                <Date dateString={date} />
            </div>
        </div>
    </>
);

export default PostHeader;
