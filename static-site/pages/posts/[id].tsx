import { AiFillFolderOpen, AiOutlineTags } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';

import Layout from '../../components/layout';
import { getAllPostIds, getPostData, getTagsData } from '../../lib/post-data';
import Date from '../../components/date';
import PostType from '../../interfaces/post';

type Props = {
  postData: PostType;
  allTagsData: { name: string; count: number }[];
};

export default function Post({ postData, allTagsData }: Props) {
  return (
    <Layout post allTagsData={allTagsData}>
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
  const allTagsData = getTagsData();
  return {
    props: {
      postData,
      allTagsData,
    },
  };
}
