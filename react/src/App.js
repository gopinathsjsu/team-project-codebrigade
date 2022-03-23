import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Booking from "./Pages/Booking";
import Hotels from "./Pages/Hotels";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <div>
          <Routes>
            <Route exact path='/booking' element={<Booking />} />
            <Route exact path='/hotels' element={<Hotels />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <div>Sign In or Join</div>
      <div>My Trips</div>
      <div></div>
    </header>
  );
}

export default App;
