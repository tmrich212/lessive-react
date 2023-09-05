import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import StorePage from './pages/StorePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartProvider from './CartContext';
import Success from './pages/Success';
import Cancel from './pages/Cancel';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, 
  {
    path: 'store',
    element: <StorePage />
  },
  {
    path: 'success',
    element: <Success />
  },
  {
    path: 'cancel',
    element: <Cancel />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);

/* <React.StrictMode>
<App /> testing testing
</React.StrictMode> */