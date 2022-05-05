import React, {useState} from "react";
import UserPoolAdmin from "../UserPoolAdmin";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useEffect } from "react";


const SignupAdmin = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("");
  
    const onSubmit =(event) => {
        event.preventDefault();

        UserPoolAdmin.signUp(email, password, [], null, (err,data)=>{
            if (err) {
                console.error(err);
            }
            else{
            console.log(data)
            }
         });



    };
    const navigate= useNavigate();
    return<>
        <Header/>
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
                        <span className="hint-text">Already a hotel admin? </span>
                        <Link className="alternate-link" to="/loginAdmin">Signin</Link>
                        <button className="login-button" type="submit">Create account</button>
                    </div>

                </form>
            </div>
        </div>
        </>
};

export default SignupAdmin;
