import PostBody from 'bkp/components/sanity/PostBody';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Comments from '../../components/comments';
import Container from '../../components/common/container';
import Form from '../../components/form';
import Header from '../../components/header';
import Layout from '../../components/layout';
import MoreStories from '../../components/more-stories';
import PostHeader from '../../components/post/PostHeader';
import PostTitle from '../../components/post/PostTitle';
import SectionSeparator from '../../components/section-separator';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import { CMS_NAME } from '../../lib/constants';

// TODO - props

export default function Post({ post, morePosts, preview }: any) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.body} />
            </article>

            <Comments comments={post.comments} />
            <Form _id={post._id} />

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }: any) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post: any) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}
