import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import {useNavigate} from "react-router-dom";
import Header from "../Components/Header";

const Home = () => {
  const navigate= useNavigate();
  return <>

    <Header/>
    <SearchBar></SearchBar>
    (this is a temporary link to <Link to="/booking">booking wizard</Link>)
    (this is a temporary link to <Link to="/SearchResults"> Search Results</Link>)
    <p>
        <button onClick={() => {navigate("/Signup")}}>Signup?As a user</button>
        <button onClick={() => {navigate("/SignupAdmin")}}>Signup?As a hotel admin</button>
        
      </p>
  </>;
};

export default Home;
