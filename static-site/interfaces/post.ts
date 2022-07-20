import type AuthorType from './author';

type PostType = {
  id: string;
  title: string;
  createdDate: string;
  updatedDate: string;
  author: AuthorType;
  contentHtml: string;
};

export default PostType;
