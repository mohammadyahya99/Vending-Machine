
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SnackSlots from "./components/SnackSlots";
 class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
         
          
            <Route
            path="/"
            exact
            render={() => (
              <SnackSlots
               
              />
            )}
          />
     
        </Router>
      </div>
    );
  }
}

export default App;
