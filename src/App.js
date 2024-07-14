import React from "react"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/layouts/Navigation/Navigation";
import Kakaomap from "./components/Kakaomap/Kakaomap";
import { Container } from "react-bootstrap";

function App() {
  return ( 
    <div className="App">
      <Navigation />
      <div className="container" style={{width: '100%', height: '60vh', paddingTop: '20px' }}>
      <Kakaomap />
      </div>
    </div>
  );
}

export default App;