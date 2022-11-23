// import './index.css';
// import App from './App'
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import PhoneSignUp from './Pages/PhoneSignUp';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "phonesignup",
//     element: <PhoneSignUp />,
//   },

// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <RouterProvider router={router} />

// );

// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
