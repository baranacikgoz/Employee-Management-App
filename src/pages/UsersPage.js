import React, { Component } from "react";
import Users from "../components/Users";
import BottomAdd from "../components/BottomAdd";

class UsersPage extends Component {
  render() {
    return (
      <div style={{paddingTop:"70px", paddingBottom:"70px"}}>
        <Users />
        <BottomAdd />
      </div>
    );
  }
}
export default UsersPage;
