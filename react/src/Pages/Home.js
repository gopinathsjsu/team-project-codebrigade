import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  return <>
    <SearchBar></SearchBar>
    (this is a temporary link to <Link to="/booking">booking wizard</Link>)
  </>;
};

export default Home;
