import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  return <>
    <header className="App-header">
      <Link className="Sign-Up-link" to="/login">SignIn or Join</Link>
      <div>My Trips</div>
      <div></div>
    </header>
  </>
};

export default Header;