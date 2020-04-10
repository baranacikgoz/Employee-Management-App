import React, { Component } from "react";
import "./App.css";
import NavbarC from "./components/NavbarC";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import UsersPage from "./pages/UsersPage"
import UpdateUser from "./pages/UpdateUser"


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarC></NavbarC>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/adduser" component={AddPage} />
              <Route exact path="/users" component={UsersPage} />
              <Route exact path="/edituser/:id" component={UpdateUser} />
              <Route component={HomePage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
