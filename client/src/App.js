import Login from "./components/Login";
import Test from "./components/HomePage";
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";
import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavbarLogin from "./components/NavbarLogin";
import HomeNavbar from "./components/Navbar";
import HomePage from "./components/HomePage";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/home" element={<HomePage/>} />

          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
