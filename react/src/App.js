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
import SignupAdmin from "./Pages/SignupAdmin";
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path='/signUp' element={<Signup />} />
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
