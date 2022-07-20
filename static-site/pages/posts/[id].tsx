import Head from 'next/head';
import Image from 'next/image';

import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';

export default function Post({ postData }: any) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="h-5">{postData.title}</h1>
        <small className="block">
          {' Created: '}
          <Date dateString={postData.createdDate} />
          {postData.updatedDate && (
            <>
              {' Updated: '}
              <Date dateString={postData.updatedDate} />
            </>
          )}
          {' Author: '}
          <Image
            priority
            src={postData.author.picture}
            height={16}
            width={16}
            alt={postData.author.name}
          />{' '}
          {postData.author.name}
        </small>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
