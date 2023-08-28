import React from "react";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./components/LandingPage";
import Pricing from './components/Pricing';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
// import Form from "./components/Form";
import CartProvider from './CartContext'


function App() {
  return (
    <CartProvider>
      <div className="App">
          <LandingPage />
          <About />
          <Pricing /> 
          <Footer />
      </div>
    </CartProvider>
  )
}

export default App;
