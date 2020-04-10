import React, { Component } from 'react'
import  Users  from '../components/Users';
import BottomAdd from '../components/BottomAdd';

class UsersPage extends Component {
    render() {
        return (
            <div>
                  <Users />
                  <BottomAdd />
                </div>
        )
    }
}
export default UsersPage;