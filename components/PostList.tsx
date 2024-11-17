import PostCard from '../components/PostCard';
import { getAllPosts, getAuthor, getAuthorPosts } from '../lib/cosmic';

export async function PostList({ authorSlug }: { authorSlug?: string }) {
  let posts = await getAllPosts();
  let author;
  if (authorSlug) {
    author = await getAuthor(authorSlug);
    posts = await getAuthorPosts(author.id);
  }
  return (
    <>
      {author && (
        <h1 className="my-4 text-4xl font-bold leading-tight tracking-tight text-zinc-700 dark:text-zinc-300">
          Artigos por {author.title}
        </h1>
      )}
      {!posts && 'Você deve adicionar ao menos um artigo'}
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          );
        })}
    </>
  );
}
