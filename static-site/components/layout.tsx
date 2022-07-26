import Head from 'next/head';
import Link from 'next/link';

import Footer from './footer';
import Header from './header';
import RightSide from './right-side';

export const myName = 'Michael Fernandez';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({
  children,
  home,
  post,
  allCategoriesData,
  allTagsData,
}: any) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
      </Head>
      <Header />

      <div className="flex min-h-screen">
        <section className="float-left p-8 w-2/3 ">
          <main>{children}</main>
        </section>

        <section className="float-left p-10 w-1/3 hidden lg:block">
          <RightSide
            allCategoriesData={
              allCategoriesData as { name: string; count: number }[]
            }
            allTagsData={allTagsData as { name: string; count: number }[]}
          />
        </section>
      </div>
      <h3 className="text-lg mb-3 leading-snug">
        {home && (
          <>
            {/* <Link as={`/posts/11`} href="/posts/[slug]"> */}
            <a className="flex hover:underline">Show More →</a>
          </>
        )}
        {post && (
          <Link href="/">
            <a className="flex hover:underline">← Back to home</a>
          </Link>
        )}
      </h3>

      <Footer />
    </>
  );
}
