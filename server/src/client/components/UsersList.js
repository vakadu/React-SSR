import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component{

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers(){
        console.log(this.props.users);
        // return this.props.users.map(user => {
        //     return <li key={user.id}>{user.name}</li>
        // });
    }

    render(){
        return (
            <div>
                List of Users
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

function mapStateProps(state) {
    return { users: state.users };
}

export default connect(mapStateProps, { fetchUsers })(UsersList);