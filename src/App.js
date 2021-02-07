import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Score from "./pages/score";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/score/:id" component={Score} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
export default App;
