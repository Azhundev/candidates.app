import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { adminActions } from '../_actions';

class UsersBoard extends React.Component {
    componentDidMount() {
        this.props.dispatch(adminActions.getAllUsers());
    }

    render() {
        const { users } = this.props;       
                    
        return (
            <div className="col-md-6 col-md-offset-3">
                
                <p>You're logged in with React & JWT!!</p>
                <h3>Users from secure api end point:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.username}
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedUsersBoard = connect(mapStateToProps)(UsersBoard);
export { connectedUsersBoard as UsersBoard };