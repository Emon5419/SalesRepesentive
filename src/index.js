import './index.css';
import App from './App'
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddVendor from './Pages/AddVendor/AddVendor';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "CreateVendor",
    element: <AddVendor />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);

reportWebVitals();
