//import { CognitoAccessToken, CognitoUserPool } from "amazon-cognito-identity-js";
import React, {useState} from "react";
import UserPool from "../UserPool";
import {useNavigate} from "react-router-dom";



const Signup = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("");
    const [given_name, set_given_name]=  useState("");
    const [family_name, set_family_name] =  useState("");
    const [gender, setGender ]=  useState("");
    const [birthdate, setBirthdate] =  useState("");

    const onSubmit =(event) => {
        event.preventDefault();

        UserPool.signUp(email, password, given_name, family_name, birthdate, gender, [], null, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data)
         });
    };
    const navigate= useNavigate();
    return(
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                    ></input>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(event)=> setPassword(event.target.value)}
                    ></input>
                <label htmlFor="given_name">First Name</label>
                <input
                    value={given_name}
                    onChange={(event)=> set_given_name(event.target.value)}
                    ></input>
                <label htmlFor="family_name">Last Name</label>
                <input
                    value={family_name}
                    onChange={(event)=> set_family_name(event.target.value)}
                    ></input>
                <label htmlFor="birthdate">Birthdate</label>
                <input
                    value={birthdate}
                    onChange={(event)=> setBirthdate(event.target.value)}
                    ></input>
                <label htmlFor="gender">Gender</label>
                <input
                    value={gender}
                    onChange={(event)=> setGender(event.target.value)}
                    ></input>
                <button type="submit">Signup</button>
                <button onClick={() => {navigate("/Login")}}>Login?Already a user</button>
                </form>

        </div>
    );
};

export default Signup;
