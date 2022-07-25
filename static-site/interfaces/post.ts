import type AuthorType from './author';

type PostType = {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  author: AuthorType;
  excerpt: string;
  contentHtml: string;
};

export default PostType;
