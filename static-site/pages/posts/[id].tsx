import { AiFillFolderOpen, AiOutlineTags } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';

import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import PostType from '../../interfaces/post';

export default function Post({ postData }: { postData: PostType }) {
  return (
    <Layout post>
      <article>
        <div className="mb-8 md:mb-16">
          <h1 className="mb-4 text-1xl lg:text-2xl leading-tight">
            {postData.title}
          </h1>
          <div className="flex items-center text-sm mb-4">
            <FaCalendarAlt />
            <span>
              <Date dateString={postData.date} />
            </span>

            <BsPersonFill />
            <span>me</span>
          </div>

          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

          <div className="flex items-center">
            <AiFillFolderOpen />
            <span>c1, c2...</span>
          </div>

          <div className="flex items-center">
            <AiOutlineTags />
            <span>t1, t2...</span>
          </div>
        </div>
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

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
