import React, { Component } from 'react'
import {Jumbotron,Button} from "react-bootstrap"

class JumbotronComp extends Component {
    render() {
        return (
            <Jumbotron fluid className="text-center">
            <h1>Hello from the employee management web service</h1>
            <p>
              This is a simple web app which is built with react, context-api, bootstrap etc.
            </p>
            <p>
                <Button size="xl" href="https://github.com/baranacikgoz"><i className="fab fa-github"></i></Button>
            </p>
            
          </Jumbotron>
        )
    }
}
export default JumbotronComp;