import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  const isUserLoggedIn = sessionStorage.getItem("userEmail");

  return <>
    <header className="App-header">
      <Link className="link" to="/">Home</Link>
<<<<<<< HEAD
      <Link className="link" to="/myRewards">My Rewards</Link>
      <Link className="link" to="/signInOrJoin">SignIn or Join</Link>
      <Link className="link" to="/myTrips">My Trips</Link>
=======
      {isUserLoggedIn ? <Link className="link" to="/myRewards">My Rewards</Link> : ""}
      {!isUserLoggedIn ? <Link className="link" to="/login">SignIn or Join</Link> : ""}
      {isUserLoggedIn ? <Link className="link" to="/myTrips">My Trips</Link> : ""}
>>>>>>> 0ede0ee0c7b92658893dd752a9224b9e2d0b287c

      <div></div>
    </header>
  </>
};

export default Header;
