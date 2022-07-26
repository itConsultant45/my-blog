import Layout from '../components/layout';
import {
  getSortedPostsData,
  getCategoriesData,
  getTagsData,
} from '../lib/post-data';
import Posts from '../components/posts';

type Props = {
  allPostsData: any;
  allCategoriesData: { name: string; count: number }[];
  allTagsData: { name: string; count: number }[];
};

export default function Home({
  allPostsData,
  allCategoriesData,
  allTagsData,
}: Props) {
  return (
    <Layout
      home
      allCategoriesData={allCategoriesData}
      allTagsData={allTagsData}
    >
      <Posts allPostsData={allPostsData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allCategoriesData = getCategoriesData();
  const allTagsData = getTagsData();
  return {
    props: {
      allPostsData,
      allCategoriesData,
      allTagsData,
    },
  };
}
