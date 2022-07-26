import Link from 'next/link';

import PostType from '../interfaces/post';
import PostFooter from './post-footer';
import PostHeader from './post-header';

type Props = {
  allPostsData: any;
};

const Posts = ({ allPostsData }: Props) => {
  return (
    <>
      {allPostsData.map(
        ({ id, date, title, excerpt, categories, tags }: PostType) => {
          return (
            <div className="mb-8 md:mb-16" key={id}>
              <PostHeader id={id} title={title} date={date} />
              <div>
                <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
              </div>
              <h3 className="text-lg mb-3 leading-snug">
                <Link as={`/posts/${id}`} href="/posts/[id]">
                  <a className="flex hover:underline">Continue Reading →</a>
                </Link>
              </h3>

              <PostFooter categories={categories} tags={tags} />
            </div>
          );
        }
      )}
    </>
  );
};

export default Posts;
