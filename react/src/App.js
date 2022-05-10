import "./App.css";
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Booking from "./Pages/Booking";
import Hotels from "./Pages/Hotels";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import LoginAdmin from "./Pages/LoginAdmin"
import SignupAdmin from "./Pages/SignupAdmin";
import SearchResults from "./Pages/SearchResults";
import MyTrips from "./Pages/MyTrips";
import Rewards from "./Pages/Rewards";
import Authentication from  "./Pages/Authentication";
import CustomerList from "./Pages/CustomerList";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/signUp' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/booking' element={<Booking />} />
            <Route exact path='/hotels' element={<Hotels />} />
            <Route exact path='/signUpAdmin' element={<SignupAdmin />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/loginAdmin' element={<LoginAdmin />} />
            <Route exact path='/searchResults' element={<SearchResults/>} />
            <Route exact path='/myTrips' element={<MyTrips />} />
            <Route exact path='/myRewards' element={<Rewards />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/signInOrJoin' element={<Authentication />} />
            <Route exact path='/customerList' element={<CustomerList />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
