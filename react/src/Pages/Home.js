import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import Header from "../Components/Header";

const Home = () => {
  return <>
    <Header/>
    <SearchBar></SearchBar>
    (this is a temporary link to <Link to="/booking">booking wizard</Link>)
  </>;
};

export default Home;
