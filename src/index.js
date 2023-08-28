import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormPage from './pages/FormPage';
import StorePage from './pages/StorePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartProvider from './CartContext';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, 
  {
    path: 'form',
    element: <FormPage />
  },
  {
    path: 'store',
    element: <StorePage />
  },
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