import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"


import HomePage from "./Pages/Home";
import Cart from "./Pages/Cart";

  const AppRoutes = () => {
    return(
      <Router>
         <Routes>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<Cart />} path="/cart" exact />
        </Routes>
      </Router>
    )
  }

  export default AppRoutes;
