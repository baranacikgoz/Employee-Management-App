import React, { Component } from "react";
import { Navbar, Row, Col, Form, Button } from "react-bootstrap";
import UserConsumer from "../context";
import axios from "axios";

class BottomAdd extends Component {
  state = {
    name: "",
    jobTitle: "",
    salary: "",
  };

  addUser = async (dispatch, e) => {
    e.preventDefault();
    const { name, jobTitle, salary } = this.state;
    const newUser = {
      name,
      jobTitle,
      salary,
    };
    const response = await axios.post("http://localhost:3004/users", newUser);

    dispatch({
      type: "ADD_USER",
      payload: response.data,
    });
  };
  addName = (e) => {
    this.setState({ name: e.target.value });
  };
  addJob = (e) => {
    this.setState({ jobTitle: e.target.value });
  };
  addSalary = (e) => {
    this.setState({ salary: e.target.value });
  };
  render() {
    return (
      <UserConsumer>
        {(value) => {
          return (
           
              <Navbar  className="fixed-bottom text-center" style={{backgroundColor:"#eaeded"}}>
                <div className="text-center col-md-12">
                  <Form onSubmit={this.addUser.bind(this, value.dispatch)}>
                    <Row>
                      <Col>
                        <Form.Group
                          value={this.state.name}
                          onChange={this.addName}
                          controlId="name"
                        >
                          <Form.Text className="text-muted">
                            Enter the name please.
                          </Form.Text>
                          <Form.Control
                            type="name"
                            placeholder="Gandalf the Grey"
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group
                          value={this.state.jobTitle}
                          onChange={this.addJob}
                          controlId="jobTitle"
                        >
                          <Form.Text className="text-muted">
                            Enter the job please.
                          </Form.Text>
                          <Form.Control
                            type="name"
                            placeholder="White Wizard"
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group
                          value={this.state.salary}
                          onChange={this.addSalary}
                          controlId="name"
                        >
                          <Form.Text className="text-muted">
                            Enter the salary please.
                          </Form.Text>
                          <Form.Control type="number" placeholder="7000" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Text className="text-muted">
                          Clik to add user.
                        </Form.Text>
                        <Button className="btn" variant="primary" type="submit">
                          <i className="fas fa-user-plus"></i>
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Navbar>
          
          );
        }}
      </UserConsumer>
    );
  }
}
export default BottomAdd;
