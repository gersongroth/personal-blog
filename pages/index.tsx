import Head from 'next/head';
import Container from '../components/common/container';
import HeroPost from '../components/hero-post';
import Header from '../components/home/Header';
import Layout from '../components/layout';
import MoreStories from '../components/more-stories';
import { getAllPostsForHome, getPage } from '../lib/api';

// TODO - types
export default function Index({ allPosts, preview, page }: any) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{page.title}</title>
                </Head>
                <section>
                    {page.content.map((content: any) => (
                        <>{content['_type'] === 'hero' && <Header hero={content} page={page} />}</>
                    ))}
                </section>
                <Container>
                    {/* <Header page={page} />
                    <Intro /> */}
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview);
    // TODO - filtrar apenas x primeirs posts
    const page = await getPage('home');

    if (!page) {
        return {
            notFound: true,
        };
    }

    return {
        props: { allPosts, preview, page },
        revalidate: 1,
    };
}
