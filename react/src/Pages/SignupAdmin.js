import React, {useState} from "react";
import UserPoolAdmin from "../UserPoolAdmin";
import {useNavigate} from "react-router-dom";

const SignupAdmin = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("");
    const [name, setName]=  useState("");
    const [address, setAddress ]=  useState("");
    const [phone_number, setPhonenumber] =  useState("");

    const onSubmit =(event) => {
        event.preventDefault();

        UserPoolAdmin.signUp(email, password, name, address, phone_number, [], null, (err,data)=>{
            if (err) {
                console.error(err);
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
                <label htmlFor="name">Hotel Name</label>
                <input
                    value={name}
                    onChange={(event)=> setName(event.target.value)}
                    ></input>
                <label htmlFor="address">Address</label>
                <input
                    value={address}
                    onChange={(event)=> setAddress(event.target.value)}
                    ></input>
                <label htmlFor="phone_number">Contact number</label>
                <input
                    value={phone_number}
                    onChange={(event)=> setPhonenumber(event.target.value)}
                    ></input>
                <button type="submit">Signup</button>
                <button onClick={() => {navigate("/LoginAdmin")}}>Login?Already a hotel admin</button>

                </form>

        </div>
    );
};

export default SignupAdmin;
