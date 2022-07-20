import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import PostType from '../interfaces/post';

export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="h-2">
        <p>
          With over 20 years&apos; experience building both small and
          large-scale solutions for clients, covering a variety of sectors.
          Deeply understands the complete project lifecycle from meeting
          clients, collecting business requirements, analysing and designing
          systems, creating and following specifications to developing from the
          front to the back end, loosely coupled, distributed services of high
          quality and testability.
        </p>
      </section>
      <section className="h-3">
        <h2 className="h-5">Blog</h2>
        <ul className="list-item">
          {allPostsData.map(
            ({ id, createdDate, updatedDate, author, title }: PostType) => (
              <li className="list-item" key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className="block">
                  {'Created: '}
                  <Date dateString={createdDate} />
                  {updatedDate && (
                    <>
                      {' Updated: '}
                      <Date dateString={updatedDate} />
                    </>
                  )}
                  {' Author: '}
                  <Image
                    priority
                    src={author.picture}
                    height={16}
                    width={16}
                    alt={author.name}
                  />{' '}
                  {author.name}
                </small>
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
