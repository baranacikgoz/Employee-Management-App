import { Form, Button } from "react-bootstrap";
import UserConsumer from "../context";
import React, { Component } from "react";
import axios from "axios";

export default class UpdatePopover extends Component {
  state = {
    name: "",
    jobTitle: "",
    salary: "",
  };

  componentDidMount = async ()=> {
      const {id} =this.props;
      console.log(this.props)

      const response = await axios.get(`http://localhost:3004/users/${id}`);
      const {name,jobTitle,salary} = response.data

      this.setState({
          name,
          jobTitle,
          salary
      })
  }
  

  updateUser = async (dispatch, e) => {
    //Update user
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
            <Form
              className="text-center"
              onSubmit={this.updateUser.bind(this, value.dispatch)}
            >
          
                <Form.Group
                  value={this.state.name}
                  onChange={this.addName}
                  controlId="name"
                >
                  <Form.Text className="text-muted">
                    Enter the name please.
                  </Form.Text>
                  <Form.Control type="name" placeholder={this.state.name} />
                </Form.Group>

                
                  <Form.Group
                    value={this.state.jobTitle}
                    onChange={this.addJob}
                    controlId="jobTitle"
                  >
                    <Form.Text className="text-muted">
                      Enter the job please.
                    </Form.Text>
                    <Form.Control type="name" placeholder="White Wizard" />
                  </Form.Group>
            
                
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
                
                
                  <Button className="btn" variant="primary" type="submit">
                  <i className="far fa-save"></i>
                  </Button>
             
           
            </Form>
          );
        }}
      </UserConsumer>
    );
  }
}
