import { myName } from './layout';

const Footer = () => {
  return (
    <footer className="p-4 text-center text-white bg-gray-600">
      <p>© {myName}</p>
    </footer>
  );
};

export default Footer;
