//import { CognitoAccessToken, CognitoUserPool } from "amazon-cognito-identity-js";
import React, { useState } from "react";
import UserPool from "../UserPool";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");


const Signup = () => {
    
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("");
    const [given_name, set_given_name]=  useState("");
    const [family_name, set_family_name] =  useState("");
    const [gender, setGender ]=  useState("");
    const [birthdate, setBirthdate] =  useState("");
    let attributeList = [];

    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute(email));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute(given_name));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute(family_name));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute(birthdate));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute(gender));



    const onSubmit = (event) => {
        event.preventDefault();

        UserPool.signUp(email, password, attributeList, null,(err,data)=>{
        if (err) {
            console.error(err);
        }
        console.log(data) 
    });
        
    };

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
                    <div className="field-container">
                        <label htmlFor="given_name">First Name</label>
                        <input
                            className="field"
                            value={given_name}
                            placeholder="Given name"
                            onChange={(event) => set_given_name(event.target.value)}
                        ></input>
                    </div>
                    <div className="field-container">
                        <label htmlFor="family_name">Last Name</label>
                        <input
                            className="field"
                            value={family_name}
                            placeholder="Family name"
                            onChange={(event) => set_family_name(event.target.value)}
                        ></input>
                    </div>
                    <div className="field-container">
                        <label htmlFor="birthdate">Birthdate</label>
                        <input
                            className="field"
                            value={birthdate}
                            placeholder="mm-dd-yyy"
                            onChange={(event) => setBirthdate(event.target.value)}
                        ></input>
                    </div>
                    <div className="field-container">
                        <label htmlFor="gender">Gender</label>
                        <input
                            className="field"
                            value={gender}
                            placeholder="Male/female"
                            onChange={(event) => setGender(event.target.value)}
                        ></input>
                    </div>
                    <div className="clikables">
                        <span className="hint-text">Have an account? </span>
                        <Link className="Sign-In-link" to="/Login">SignIn</Link>
                        <button className="create-button" type="submit">Create account</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
