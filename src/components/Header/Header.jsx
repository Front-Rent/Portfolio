import { IoMenu } from "react-icons/io5";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>Portfolio.</h1>

      <nav>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>

          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <IoMenu className="menu" />
      </nav>
    </header>
  );
};

export default Header;
