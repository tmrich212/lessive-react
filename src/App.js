import React from "react";
import About from "./components/About";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./components/LandingPage";


function App() {
  return (
 
    <div className="App">
        <LandingPage />
        <About />
    </div>
  )
}

export default App;
