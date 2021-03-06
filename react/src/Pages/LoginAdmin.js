import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPoolAdmin from "../UserPoolAdmin";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { useDispatch } from "react-redux";
import { fetchCustomers } from "../redux/customer/customerAction";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
     dispatch(fetchCustomers());
    const user = new CognitoUser({
      Username: email,
      Pool: UserPoolAdmin,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
      },
      onFailure: (err) => {
        console.error("onFailure: ", err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });
    navigate("/customerList")
  };

  return<>
  <Header/>
    <div className="Contents">
      <header className="title">Sign in to your Admin account</header>
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