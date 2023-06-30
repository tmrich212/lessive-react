import React from "react";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./components/LandingPage";
import Form from './components/Form';
import Footer from "./components/Footer";
// import Form from "./components/Form";


function App() {
  return (
    <div className="App">
        <LandingPage />
        <About />
        <Form /> 
        <Footer />
    </div>
  )
}

export default App;
