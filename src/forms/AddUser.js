import React, { Component } from "react";
import { Container, Form, Card, Button, Row, InputGroup, Col } from "react-bootstrap";
import UserConsumer from "../context";
import axios from "axios";

class AddUser extends Component {
  state = {
    visible: true,
    name: "",
    jobTitle: "",
    salary: "",
  };

  changeVisibility = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  addUser = async (dispatch, e) => {
    e.preventDefault();
    const {name,jobTitle,salary} = this.state;
    const newUser = {
      name,
      jobTitle,
      salary,
    };
const response = await axios.post("http://localhost:3004/users",newUser)

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
            <Container className="col-md-4">
            <Card className="text-center">
              <Card.Header id="header">
                <div>
                  <Row>
                    <div className="col-md-9 text-center">
                      <Card.Text as="h4">User add form</Card.Text>
                    </div>
                    <div className="col-md-2">
                      <Button
                        onClick={this.changeVisibility}
                        variant="outline-primary"
                        size="sm"
                      >
                        {this.state.visible ? "Hide" : "Show"}
                      </Button>
                    </div>
                  </Row>
                </div>
              </Card.Header>
              {this.state.visible ? (
                <Card.Body>
                  <Form onSubmit={this.addUser.bind(this, value.dispatch)}>
                    <Form.Group
                      value={this.state.name}
                      onChange={this.addName}
                      controlId="name"
                    >
                      <Form.Label>Name : </Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Gandalf Grihamut"
                      />
                      <Form.Text className="text-muted">
                        Enter the name please.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group
                      value={this.state.jobTitle}
                      onChange={this.addJob}
                      controlId="jobTitle"
                    >
                      <Form.Label>Job : </Form.Label>
                      <Form.Control type="name" placeholder="White Wizard" />
                      <Form.Text className="text-muted">
                        Enter the job please.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group
                      value={this.state.salary}
                      onChange={this.addSalary}
                      as={Col}
                      md="8"
                      controlId="salary"
                    >
                      <Form.Label>Salary : </Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="number"
                          placeholder="7000"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend">
                            USD
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                      </InputGroup>
                      <Form.Text className="text-muted">
                        Enter a valid number please.
                      </Form.Text>
                    </Form.Group>
                    <Button
                      className="btn btn-block"
                      variant="primary"
                      type="submit"
                    >
                      Save
                    </Button>
                  </Form>
                </Card.Body>
              ) : null}
            </Card>
            </Container>
          );
        }}
      </UserConsumer>
    );
  }
}
export default AddUser;

/* <Form.Group controlId="salaryInput">
              <Form.Label>Salary : </Form.Label>
              <Form.Control type="number" placeholder="7000" />
              <Form.Text className="text-muted">
                Enter the salary name please.
              </Form.Text>
            </Form.Group> */

/*
            
            
            <Form onSubmit={this.addUser}>
              <Form.Group controlId={this.state.name}>
                <Form.Label>Name : </Form.Label>
                <Form.Control type="name" placeholder="Gandalf Grihamut" />
                <Form.Text className="text-muted">
                  Enter the name please.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="jobTitle">
                <Form.Label>Job : </Form.Label>
                <Form.Control type="name" placeholder="White Wizard" />
                <Form.Text className="text-muted">
                  Enter the job please.
                </Form.Text>
              </Form.Group>

              <Form.Group as={Col} md="8" controlId="salary">
                <Form.Label>Salary : </Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="7000"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      USD
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                </InputGroup>
                <Form.Text className="text-muted">
                  Enter a valid number please.
                </Form.Text>
              </Form.Group>
              <Button className="btn btn-block" variant="primary" type="submit">
                Save
              </Button>
            </Form>*/

/*

<form onSubmit={this.addUser} >
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input
                value={this.state.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="enter name"
                  className="form-control"
                  onChange={this.addName}
                ></input>
              </div>
              <div className="form-group" >
                    <label htmlFor="jobTitle">Name: </label>
                    <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    placeholder="enter name"
                    className="form-control"
                    ></input>

                </div>
                <div className="form-group" >
                    <label htmlFor="salary">Name: </label>
                    <input
                    type="text"
                    name="salary"
                    id="salary"
                    placeholder="enter name"
                    className="form-control"
                    ></input>

                </div>
              <button type="submit" className="btn btn-success">
                Save
              </button>
            </form>
*/
