import React, { Component } from "react";
import Users from "../components/Users";
import BottomAdd from "../components/BottomAdd";

class UsersPage extends Component {
  render() {
    return (
      <div classname="container" >
        <body style={{ paddingTop: "80px" }}>
          <Users />
          <BottomAdd />
        </body>
      </div>
    );
  }
}
export default UsersPage;
