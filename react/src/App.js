import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Booking from "./Pages/Booking";
import Hotels from "./Pages/Hotels";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/booking' element={<Booking />} />
          <Route exact path='/hotels' element={<Hotels />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home/search screen can go here</h2>
      (this is a temporary link to <Link to="/booking">booking wizard</Link>)
    </div>
  );
}

export default App;
