import React, { Component } from 'react'
import AddUser from "../forms/AddUser"
import "../index.css"

class AddPage extends Component {
    render() {
        return (
         <div className="bgimage" style={{paddingTop:"70px"}}>
             <AddUser/>
         </div>
                
           
        )
    }
}
export default AddPage;