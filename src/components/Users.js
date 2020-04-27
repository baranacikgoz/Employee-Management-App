import React, { Component } from "react";
import UserConsumer from "../context";
import ListItemC from "../components/ListItemC";
import { Table } from "react-bootstrap";

class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          return (
            <div class="container">
              <Table responsive="sm" bordered hover className="text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Salary</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {value.users.map((user) => {
                    return (
                      <ListItemC
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        jobTitle={user.jobTitle}
                        salary={user.salary}
                      />
                    );
                  })}
                </tbody>
              </Table>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default Users;
