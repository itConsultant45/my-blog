import Link from 'next/link';

import { FaCalendarAlt } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';

import Date from '../components/date';

const PostHeader = ({
  id,
  title,
  date,
}: {
  id: string;
  title: string;
  date: string;
}) => {
  return (
    <>
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
    </>
  );
};

export default PostHeader;
