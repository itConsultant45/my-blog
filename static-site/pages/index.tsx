import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { AiFillFolderOpen, AiOutlineTags } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { BsPersonFill } from 'react-icons/bs';
import Footer from '../components/footer';
import Header from '../components/header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Michael's blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex min-h-screen">
        <section className="float-left p-8 w-2/3 ">
          <div className="mb-8 md:mb-16">
            <h1 className="mb-4 text-1xl lg:text-2xl leading-tight">
              <Link as={`/posts/1`} href="/posts/[slug]">
                <a className="hover:underline">
                  Dynamic Routing and Static Generation
                </a>
              </Link>
            </h1>
            <div className="flex items-center text-sm mb-4">
              <FaCalendarAlt />
              <span>01 / Jan / 2001</span>

              <BsPersonFill />
              <span>me</span>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Praesent elementum facilisis leo vel fringilla est ullamcorper
                eget. At imperdiet dui accumsan sit amet nulla facilities morbi
                tempus.
              </p>
            </div>
            <h3 className="text-lg mb-3 leading-snug">
              <Link as={`/posts/11`} href="/posts/[slug]">
                <a className="flex hover:underline">
                  <span>Continue Reading</span>
                  <FiArrowRight />
                </a>
              </Link>
            </h3>

            <div className="flex items-center">
              <AiFillFolderOpen />
              <span>c1, c2...</span>
            </div>

            <div className="flex items-center">
              <AiOutlineTags />
              <span>t1, t2...</span>
            </div>
          </div>

          <h3 className="text-lg mb-3 leading-snug">
            <Link as={`/posts/11`} href="/posts/[slug]">
              <a className="flex hover:underline">
                <span>Show More</span>
                <FiArrowRight />
              </a>
            </Link>
          </h3>
        </section>

        <section className="float-left p-10 w-1/3 hidden lg:block">
          <div className=" bg-gray-200">
            About
            <div className="flex-grow border-t m-2 border-gray-400"></div>
            X...
          </div>
          <br />
          <div className=" bg-gray-200">
            Archive
            <div className="flex-grow border-t m-2 border-gray-400"></div>
            X...
          </div>
          <br />
          <div className=" bg-gray-200">
            Categories
            <div className="flex-grow border-t m-2 border-gray-400"></div>
            X...
          </div>
          <br />
          <div className=" bg-gray-200">
            Tags
            <div className="flex-grow border-t m-2 border-gray-400"></div>
            X...
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;

//      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
//        <h1 className="text-6xl font-bold">
//          Welcome to{" "}
//          <a className="text-blue-600" href="https://nextjs.org">
//            Next.js!
//          </a>
//        </h1>
//
//        <p className="mt-3 text-2xl">
//          Get started by editing{" "}
//          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
//            pages/index.tsx
//          </code>
//        </p>
//
//        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
//          <a
//            href="https://nextjs.org/docs"
//            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
//          >
//            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
//            <p className="mt-4 text-xl">
//              Find in-depth information about Next.js features and its API.
//            </p>
//          </a>
//
//          <a
//            href="https://nextjs.org/learn"
//            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
//          >
//            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
//            <p className="mt-4 text-xl">
//              Learn about Next.js in an interactive course with quizzes!
//            </p>
//          </a>
//
//          <a
//            href="https://github.com/vercel/next.js/tree/canary/examples"
//            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
//          >
//            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
//            <p className="mt-4 text-xl">
//              Discover and deploy boilerplate example Next.js projects.
//            </p>
//          </a>
//
//          <a
//            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
//          >
//            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
//            <p className="mt-4 text-xl">
//              Instantly deploy your Next.js site to a public URL with Vercel.
//            </p>
//          </a>
//        </div>
//      </main>
