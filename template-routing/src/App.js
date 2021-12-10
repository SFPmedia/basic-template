import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import FourOhFour from "./components/FourOhFour";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/LoginPage" element={<LoginPage />} />
            <Route exact path="*" element={<FourOhFour />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
