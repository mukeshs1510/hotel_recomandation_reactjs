import React from "react";
import "./App.css";
import SIgnup from "./Components/Screens/SIgnup";
import { AuthProvider } from "./database/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/Screens/HomePage";
import Login from "./Components/Screens/Login";
import PrivateRoute from "./database/PrivateRoute";
import Services from "./Components/Services";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/" exact component={HomePage} />
            <Route path="/signup" component={SIgnup} />
            <Route path="/login" component={Login} />
            <Route path="/service" component={Services} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
