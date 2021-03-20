import React from "react";
import "./App.css";
import SIgnup from "./Components/Screens/SIgnup";
import { AuthProvider } from "./database/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/Screens/HomePage";
import Login from "./Components/Screens/Login";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" component={SIgnup} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
