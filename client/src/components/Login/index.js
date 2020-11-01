import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// // import LoaderButton from "../components/LoaderButton";
// import { useAppContext } from "../libs/contextLib";
// import { useFormFields } from "../libs/hooksLib";
// import { onError } from "../libs/errorLib";
import Axios from 'axios'
import "./Login.scss";

export default function Login() {
  const login = () => {
    Axios.post('/auth/login' , {email:"mariakhandaker@gmail.com", password:'Lacey1'}).then(res => console.log(res))
  }
  const provinces = () => {
    Axios.get('/api/provinces').then(res => console.log(res))
  }
  return(
    <>
    <button onClick={login}>LOG IN</button>
    <button onClick={provinces}>Provinces</button>
  </>
  )
  // const history = useHistory();
  // const { userHasAuthenticated } = useAppContext();
  // const [isLoading, setIsLoading] = useState(false);
  // const [fields, handleFieldChange] = useFormFields({
  //   email: "",
  //   password: ""
  // });

  // function validateForm() {
  //   return fields.email.length > 0 && fields.password.length > 0;
  // }

  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   setIsLoading(true);

  //   try {
  //     userHasAuthenticated(true);
  //     history.push("/");
  //   } catch (e) {
  //     onError(e);
  //     setIsLoading(false);
  //   }
  // }

  // return (
  //   <div className="Login">
  //     <form onSubmit={handleSubmit}>
  //       <FormGroup controlId="email" bsSize="large">
  //         <ControlLabel>Email</ControlLabel>
  //         <FormControl
  //           autoFocus
  //           type="email"
  //           value={fields.email}
  //           onChange={handleFieldChange}
  //         />
  //       </FormGroup>
  //       <FormGroup controlId="password" bsSize="large">
  //         <ControlLabel>Password</ControlLabel>
  //         <FormControl
  //           type="password"
  //           value={fields.password}
  //           onChange={handleFieldChange}
  //         />
  //       </FormGroup>
  //       <LoaderButton
  //         block
  //         type="submit"
  //         bsSize="large"
  //         isLoading={isLoading}
  //         disabled={!validateForm()}
  //       >
  //         Login
  //       </LoaderButton>
  //     </form>
  //   </div>
  // );
}