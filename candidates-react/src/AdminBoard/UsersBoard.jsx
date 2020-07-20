import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { adminActions } from '../_actions';

class UsersBoard extends React.Component {

    componentDidMount() {
        this.props.dispatch(adminActions.getAllUsers());
    }

    render() {
        const { user, admin } = this.props;

        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.username}!</h1>
                <h3>Users from secure api end point:</h3>
                {admin.isFetching && <em>Loading users...</em>}
                {admin.error && <span className="text-danger">ERRR: {admin.error}</span>}
                {admin.items &&
                    <ul>
                        {admin.items.map((user, index) =>
                            <li key={user.id}>
                                {user.username + ' ' + user.roles.name}
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/authenticate">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { admin, authentication } = state;
    const { user } = authentication;
    return {
        user,
        admin
    };
}

const connectedUsersBoard = connect(mapStateToProps)(UsersBoard);
export { connectedUsersBoard as UsersBoard };