import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { AiOutlineHome } from 'react-icons/ai';

const name = 'Michael Fernandez';
export const siteTitle = "Michael's blog";

export default function Layout({ children, home }: any) {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Michael\'s blog" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="table-header-group">
        {home && (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="border-rose-500"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="h-10">{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="m-3">
          <Link href="/">
            <a>
              <AiOutlineHome /> Back to home
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}