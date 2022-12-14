import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";


const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const { logIn, googleSignIn } = useUserAuth();
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
         await logIn(email, password);
         navigate("/home");
      } catch (err) {
         setError(err.message);
      }
   };

   const handleGoogleSignIn = async (e) => {
      e.preventDefault();
      try {
         await googleSignIn();
         navigate("/home");
      } catch (error) {
         console.log(error.message);
      }
   };

   return (
      <>
         <div className="p-4 box tagName">
            <h2 className="text-center text-light">Yaqeen</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                     type="email"
                     placeholder="Email address"
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                     type="password"
                     placeholder="Password"
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </Form.Group>

               <div className="d-grid gap-2">
                  <Button variant="primary" type="Submit">
                     Log In
                  </Button>
               </div>
            </Form>
            <hr />
            <div>
               <GoogleButton
                  className="g-btn w-100 h-25"
                  type="dark"
                  onClick={handleGoogleSignIn}
               />
            </div>
            <Link to="/phonesignup">
               <div className="d-grid gap-2 mt-3">
                  <Button variant="success" type="Submit">
                     Sign in with Phone
                  </Button>
               </div>
            </Link>
         </div>
         <div className="p-4 box mt-3 text-center text-white">
            Don't have an account? <Link to="/signup" className="text-white">Sign up</Link>
         </div>
      </>
   );
};

export default Login;