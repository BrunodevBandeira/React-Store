import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <Link className="link" to="/home" end> Home </Link>
        </li>

        <li>
          <Link className="link" to="/contact"> Contato </Link>
        </li>
      </ul>
     </nav>
  );
};


export default Header;
