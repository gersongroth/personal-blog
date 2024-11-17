import { SinglePost } from '../../../components/SinglePost';
import { getPost } from '../../../lib/cosmic';
import { Suspense } from 'react';
import { Loader } from '../../../components/Loader';
import { PageParams } from '../../../types/nextjs/params.type';

export async function generateMetadata({
  params,
}: PageParams) {
  const { slug } = await params;

  const post = await getPost(slug);
  return {
    title: `${post.title} | Gerson Groth`,
  };
}

export default async ({ params }: PageParams) => {
  const { slug } = await params;

  return (
    <Suspense fallback={<Loader />}>
      <SinglePost slug={slug} />;
    </Suspense>
  );
};
export const revalidate = 60;
