//import { CognitoAccessToken, CognitoUserPool } from "amazon-cognito-identity-js";
import React, { useState } from "react";
import UserPool from "../UserPool";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");


const Signup = () => {
    
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("");
  



    const onSubmit = (event) => {
        event.preventDefault();

        UserPool.signUp(email, password, [], null,(err,data)=>{
        if (err) {
            console.error(err);
        }
        console.log(data) 
    });
        
    };

    const navigate= useNavigate();
    return (
        <div className="Contents">
            <header className="title">Create an account</header>
            <div className="fields-container">
                <form onSubmit={onSubmit}>
                    <div className="field-container">
                        <label htmlFor="email">Email</label>
                        <input
                            className="field"
                            value={email}
                            placeholder="email@domain.com"
                            onChange={(event) => setEmail(event.target.value)}
                        ></input>
                    </div>
                    <div className="field-container">
                        <label htmlFor="password">Password</label>
                        <input
                            className="field"
                            type="password"
                            value={password}
                            placeholder="password"
                            onChange={(event) => setPassword(event.target.value)}
                        ></input>
                    </div>
                    <div className="clikables">
                        <span className="hint-text">Already a user? </span>
                        <Link className="alternate-link" to="/login">Signin</Link>
                        <button className="login-button" type="submit">Create account</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
