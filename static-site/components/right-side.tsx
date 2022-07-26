import { myName } from './layout';

type Props = {
  allCategoriesData: { name: string; count: number }[];
  allTagsData: { name: string; count: number }[];
};

const RightSide = ({ allCategoriesData, allTagsData }: Props) => {
  const categories = allCategoriesData.map((x) => {
    return `${x.name}[${x.count}]`;
  });

  const tags = allTagsData.map((x) => {
    return `${x.name}[${x.count}]`;
  });

  return (
    <>
      <div className=" bg-gray-200">
        About
        <div className="flex-grow border-t m-2 border-gray-400"></div>
        {myName}
        X...
      </div>
      <br />
      <br />
      <div className=" bg-gray-200">
        Categories
        <div className="flex-grow border-t m-2 border-gray-400"></div>
        {categories.join(' ')}
      </div>
      <br />
      <div className=" bg-gray-200">
        Tags
        <div className="flex-grow border-t m-2 border-gray-400"></div>
        {tags.join(' ')}
      </div>
      <div className=" bg-gray-200">
        Archive
        <div className="flex-grow border-t m-2 border-gray-400"></div>
        X...
      </div>
    </>
  );
};

export default RightSide;
