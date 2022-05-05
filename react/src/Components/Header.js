import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  return <>
    <header className="App-header">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/myRewards">My Rewards</Link>
      <Link className="link" to="/signInOrJoin">SignIn or Join</Link>
      <Link className="link" to="/myTrips">My Trips</Link>

      <div></div>
    </header>
  </>
};

export default Header;
