import React, { Component } from "react";
import Axios from "axios";
// var cors = require('cors');    
// app.use(cors({credentials: true, origin: 'http://localhost:5000'}));

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "", 
      loginErrors: ""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
 
  handleSubmit(event) {
    const {
      email, 
      password,
    } = this.state;
    
    Axios
      .post(
        "http://localhost:3001/sessions", 
        {
          user: {
            email: email,
            password: password,
          }
        }, 
        { withCredentials: true } 
      ).then(response => {
        console.log("res from login", response)
      }).catch(error => {
        console.log("login error", error);
      })
    
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email" 
            name="email" 
            placeholder="Email" 
            value={this.state.email} 
            onChange={this.handleChange} 
            required 
          />
          
          <input
            type="password" 
            name="password" 
            placeholder="Password" 
            value={this.state.password} 
            onChange={this.handleChange} 
            required 
          />
          
          <button type="submit">Login</button>
        </form>        
      </div>
    )
  }
}