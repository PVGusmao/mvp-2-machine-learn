import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './screens/Home.jsx';
import { Register } from './screens/Register.jsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div><h1>Página não encontrada...</h1></div>,
  },
  {
    path: "/register",
    element: <Home />,
    errorElement: <div><h1>Página não encontrada...</h1></div>,
  },
  {
    path: "/list",
    element: <Register />,
    errorElement: <div><h1>Página não encontrada...</h1></div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
