import "./Signup.scss";
import "React" from "react";

export default function Register() {
  const signup = () => {
    Axios.post('/auth/users' , {email:"mariakhandaker@gmail.com", password:'Lacey1'}).then(res => console.log(res))
  }
    return (
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
          </div>
          <button onClick={signup} type="submit">Register!</button>
          );
}
