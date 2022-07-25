import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/post-data';
import Posts from '../components/posts';

type Props = {
  allPostsData: any;
};

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <Posts allPostsData={allPostsData} />
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
