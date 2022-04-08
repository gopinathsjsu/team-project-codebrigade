import React from "react";
import {useNavigate} from "react-router-dom";


const Home=(props) =>{
    const navigate= useNavigate();
    return(
      <p>
        <button onClick={() => {navigate("/Signup")}}>Signup?As a user</button>
        <button onClick={() => {navigate("/SignupAdmin")}}>Signup?As a hotel admin</button>
      </p>
    )
}

export default Home;