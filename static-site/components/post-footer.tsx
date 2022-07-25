import { AiFillFolderOpen, AiOutlineTags } from 'react-icons/ai';

const PostFooter = ({
  categories,
  tags,
}: {
  categories: string[];
  tags: string[];
}) => {
  return (
    <>
      <div className="flex items-center">
        <AiFillFolderOpen />
        <span>{categories.join(', ')}</span>
      </div>

      <div className="flex items-center">
        <AiOutlineTags />
        <span>{tags.join(', ')}</span>
      </div>
    </>
  );
};

export default PostFooter;
