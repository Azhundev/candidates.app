import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { adminActions } from '../_actions';

class AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            roles: [],
            active: '',
            submitted: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            roles: this.state.roles,
            active: true
        };
        const { dispatch } = this.props;
        if (newUser) {
            dispatch(adminActions.addUser(newUser))
        }
    }

    render() {
        const { username, password, roles, submitted } = this.state;
        return (
            <div className="col-lg-8 offset-lg-2">
                <h2>Add User</h2>
                <form name="form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="username" value={username} onChange={this.onChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                        {submitted && !username &&
                            <div className="invalid-feedback">Email is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={this.onChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                        {submitted && !password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <select name="roles" value={roles} onChange={this.onChange} multiple={true} >
                            <option value="">Select Role</option>
                            <option value="ADMIN">Admin</option>
                            <option value="USER">User</option>
                        </select>
                        {submitted && !roles &&
                            <div className="invalid-feedback">Role is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">
                            <span className="spinner-border spinner-border-sm mr-1"></span>
                            Add
                    </button>
                        <Link to="/authenticate" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { adding } = state.admin;
    return {
        adding
    };
}

const connectedAddUser = connect(mapStateToProps)(AddUser)
export { connectedAddUser as AddUser };