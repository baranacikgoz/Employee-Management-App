import React, { Component } from "react";
import "../index.css"

class HomePage extends Component {
  render() {
    return (
 
      <header className="masthead bgimage">
      <div className="container h-100">
        <div
          className="row h-100 align-items-center justify-content-center text-center"
        >
          <div className="col-lg-10 align-self-end">
            <h1 className="text-uppercase text-black font-weight-bold">
              Welcome to Employee Management App.
            </h1>
            
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 font-weight-light mb-5">
              I've built this app with React.js, Context-Api, React-Router, Bootstrap etc.
            </p>
            <hr className="divider my-4" />
            <p className="text-white-75 font-weight-light mb-5">
              If you want to try app, once click <a href="https://infinite-escarpment-57092.herokuapp.com/">here </a>to wake up the database.
              Now you are free to add, delete or edit employees.
            </p>
            <button className="btn btn-primary btn-xl mr-2" href="https://github.com/baranacikgoz"
              ><i className="fab fa-github fa-2x"></i></button
            >
            <button className="btn btn-primary btn-xl ml-2" href="www.linkedin.com/in/baran-acikgoz"
              ><i className="fab fa-linkedin fa-2x"></i></button
            >
          </div>
        </div>
      </div>
    </header>
    
    );
  }
}
export default HomePage;
