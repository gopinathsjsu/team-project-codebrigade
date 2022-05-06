import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";
import "../Styles/Login.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        const idToken = data.getIdToken().getJwtToken();
        sessionStorage.setItem("userEmail",jwt_decode(idToken).email);
      },
      onFailure: (err) => {
        setErrorMessage(err.message);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });
  };

  return <>
  <Header/>
    <div className="Contents">
      <header className="title">Sign in to your account</header>
      <div className="fields-container">
        <form onSubmit={onSubmit}>
          <div className="field-container">
            <label htmlFor="email">Email</label>
            <input
              className="field"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>
          <div className="field-container">
            <label htmlFor="password">Password</label>
            <input
              className="field"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            {errorMessage? <div className="error-msg">{errorMessage}</div> : <span></span>}
          </div>
          <span className="hint-text">Forgot your password? </span>
          <Link className="alternate-link" to="/login">Reset password</Link>
          <div>
          <span className="hint-text">No account? </span>
          <Link className="alternate-link" to="/signUp">Create account</Link>
          <button className="login-button" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  </>
};

export default Login;