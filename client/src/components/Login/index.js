import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios'
import "./login.scss";

export default function Login() {
  const login = () => {
    Axios.post('/auth/login' , {email:"mariakhandaker@gmail.com", password:'Lacey1'}).then(res => console.log(res))
  }
  
  return(
    <>
      <div>
        <h1>Login</h1>
        <form>
            Email: <input type="text" name="email"/>
            Password: <input type="text" name="password"/>
            <button onClick={login} type="submit">Log In</button>
        </form>
      </div>
  </>
  )
}