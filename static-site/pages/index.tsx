import Link from 'next/link';

import Layout, { myName } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import PostType from '../interfaces/post';
import Footer from '../components/footer';

import { AiFillFolderOpen, AiOutlineTags } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { BsPersonFill } from 'react-icons/bs';

export default function Home({ allPostsData }: any) {
  console.log({ allPostsData });

  return (
    <Layout home>
      <div className="flex min-h-screen">
        <section className="float-left p-8 w-2/3 ">
          {allPostsData.map(({ id, date, title, excerpt }: PostType) => {
            return (
              <div className="mb-8 md:mb-16" key={id}>
                <h1 className="mb-4 text-1xl lg:text-2xl leading-tight">
                  <Link as={`/posts/${id}`} href="/posts/[id]">
                    <a className="hover:underline">{title}</a>
                  </Link>
                </h1>
                <div className="flex items-center text-sm mb-4">
                  <FaCalendarAlt />
                  <span>
                    <Date dateString={date} />
                  </span>

                  <BsPersonFill />
                  <span>me</span>
                </div>
                <div>
                  <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                </div>
                <h3 className="text-lg mb-3 leading-snug">
                  <Link as={`/posts/${id}`} href="/posts/[id]">
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
            );
          })}

          <h3 className="text-lg mb-3 leading-snug">
            {/* <Link as={`/posts/11`} href="/posts/[slug]"> */}
            <a className="flex hover:underline">
              <span>Show More</span>
              <FiArrowRight />
            </a>
            {/* </Link> */}
          </h3>
        </section>

        <section className="float-left p-10 w-1/3 hidden lg:block">
          <div className=" bg-gray-200">
            About
            <div className="flex-grow border-t m-2 border-gray-400"></div>
            {myName}
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

      <section className="">
        <h2 className="">Blog</h2>
        <ul className="">
          {allPostsData.map(({ id, date, title }: PostType) => {
            return (
              <li className="" key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className="">
                  <Date dateString={date} />
                </small>
              </li>
            );
          })}
        </ul>
      </section>

      <Footer />
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
