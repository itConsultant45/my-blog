import Layout from '../components/layout';
import { getSortedPostsData, getTagsData } from '../lib/post-data';
import Posts from '../components/posts';

type Props = {
  allPostsData: any;
  allTagsData: { name: string; count: number }[];
};

export default function Home({ allPostsData, allTagsData }: Props) {
  return (
    <Layout home allTagsData={allTagsData}>
      <Posts allPostsData={allPostsData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allTagsData = getTagsData();
  return {
    props: {
      allPostsData,
      allTagsData,
    },
  };
}
