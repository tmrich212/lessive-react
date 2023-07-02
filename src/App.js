import React from "react";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./components/LandingPage";
import Pricing from './components/Pricing';
import Footer from "./components/Footer";
// import Form from "./components/Form";


function App() {
  return (
    <div className="App">
        <LandingPage />
        <About />
        <Pricing /> 
        <Footer />
    </div>
  )
}

export default App;
