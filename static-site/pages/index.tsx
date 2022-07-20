import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="h-2">
        <p>
          With over 20 years' experience building both small and large-scale
          solutions for clients, covering a variety of sectors. Deeply
          understands the complete project lifecycle from meeting clients,
          collecting business requirements, analysing and designing systems,
          creating and following specifications to developing from the front to
          the back end, loosely coupled, distributed services of high quality
          and testability.
        </p>
      </section>
      <section className="h-3">
        <h2 className="h-5">Blog</h2>
        <ul className="list-item">
          {allPostsData.map(({ id, createdDate, updatedDate, title }: any) => (
            <li className="list-item" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="text-red-300">
                Created: <Date dateString={createdDate} />
                {updatedDate && (
                  <div className="block">
                    {' '}
                    Updated:
                    <Date dateString={updatedDate} />
                  </div>
                )}
              </small>
            </li>
          ))}
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
