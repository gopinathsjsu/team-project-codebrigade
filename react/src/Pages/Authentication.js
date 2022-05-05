import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Button from "react-bootstrap/Button";
import "./../Styles/searchBar.css";



const Authentication = () => {

    return <>
  
      <Header/>
      <Link to="/SignUpAdmin">SignIn as Admin</Link><br/>
      <Link to="/SignUp">SignIn as User</Link>

    </>;
  };
  
  export default Authentication;
  