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
import SearchResults from "./Pages/SearchResults";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path='/signUp' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/booking' element={<Booking />} />
            <Route exact path='/hotels' element={<Hotels />} />
            <Route exact path='/signUpAdmin' element={<SignupAdmin />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/loginAdmin' element={<Login />} />
            <Route exact path='/searchResults' element={<SearchResults/>} />
            <Route exact path='/' element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
