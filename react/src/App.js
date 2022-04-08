import "./App.css";
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Booking from "./Pages/Booking";
import Hotels from "./Pages/Hotels";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
<<<<<<< HEAD
import SignupAdmin from "./Pages/SignupAdmin";
=======

>>>>>>> 2d985221347b61fc7bd69f04720ce6573ab02506
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path='/signUp' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/booking' element={<Booking />} />
            <Route exact path='/hotels' element={<Hotels />} />
            <Route exact path='/SignupAdmin' element={<SignupAdmin />} />
            <Route exact path='/Login' element={<Login />} />
            <Route exact path='/LoginAdmin' element={<Login />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
