import Link from 'next/link';

import { AiFillFolderOpen, AiOutlineTags } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { BsPersonFill } from 'react-icons/bs';

import Date from '../components/date';
import PostType from '../interfaces/post';

type Props = {
  allPostsData: any;
};

const Posts = ({ allPostsData }: Props) => {
  return (
    <>
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
    </>
  );
};

export default Posts;
