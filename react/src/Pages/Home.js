import React from "react";
import SearchBar from "../Components/SearchBar";
import {useNavigate} from "react-router-dom";
import Header from "../Components/Header";

const Home = () => {
  const navigate= useNavigate();
  return <>

    <Header/>
    <SearchBar></SearchBar>
  </>;
};

export default Home;
