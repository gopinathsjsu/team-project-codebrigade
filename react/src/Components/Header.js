import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  const isUserLoggedIn = sessionStorage.getItem("userEmail");

  return <>
    <header className="App-header">
      <Link className="link" to="/">Home</Link>
      {isUserLoggedIn ? <Link className="link" to="/myRewards">My Rewards</Link> : ""}
      {!isUserLoggedIn ? <Link className="link" to="/signInOrJoin">SignIn or Join</Link> : ""}
      {isUserLoggedIn ? <Link className="link" to="/myTrips">My Trips</Link> : ""}
    
      <div></div>
    </header>
  </>
};

export default Header;
