import { myName } from './layout';

const RightSide = () => {
  return (
    <>
      <div className=" bg-gray-200">
        About
        <div className="flex-grow border-t m-2 border-gray-400"></div>
        {myName}
        X...
      </div>
      <br />
      <div className=" bg-gray-200">
        Archive
        <div className="flex-grow border-t m-2 border-gray-400"></div>
        X...
      </div>
      <br />
      <div className=" bg-gray-200">
        Categories
        <div className="flex-grow border-t m-2 border-gray-400"></div>
        X...
      </div>
      <br />
      <div className=" bg-gray-200">
        Tags
        <div className="flex-grow border-t m-2 border-gray-400"></div>
        X...
      </div>
    </>
  );
};

export default RightSide;
