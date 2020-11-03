import React from "react";
import "./styles.scss";
import axios from 'axios';


export default function Register(username, name, email, password) {
  
  const signup = () => {
    axios.post('/auth/users' , + "signup", {
      username, name, email, password,
    })
    .then(res => console.log(res))
  }
    return (
      <form>
        <div className="Signup">
              <h3>Sign Up</h3>
              <str> Name </str>
            <input
              type="name"
              placeholder="name"
            />
            <str> Email </str>
            <input
              type="email"
              placeholder="email"
            />
              <str>Username </str>
            <input
              type="username"
              placeholder="username"
            />
              <str> Password</str>
            <input
              type="password"
              placeholder="password"
            />
            <button onClick={signup} type="submit">Register!</button>
          </div>
        </form>
        );
}