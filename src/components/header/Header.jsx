import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to={"/"}>Quiz Creator</Link>
      </h1>
    </header>
  );
};

export default Header;
