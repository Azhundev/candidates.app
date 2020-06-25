import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { adminActions } from '../_actions';

class AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            roles: '',
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
            email: this.state.email,
            password: this.state.password,
            roles: this.state.roles
        };
        const { dispatch } = this.props;
        if(newUser) {
            dispatch(adminActions.addUser(newUser))
        }
    }

    render() {
        const { email, password, roles, submitted } = this.state;
        return (
            <div className="col-lg-8 offset-lg-2">
                <h2>Add User</h2>
                <form name="form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={email} onChange={this.onChange} className={'form-control' + (submitted && !email ? ' is-invalid' : '')} />
                        {submitted && !email &&
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
                        <select className="form-control form-control-lg" name="roles" value={roles} onChange={this.onChange}>
                            <option value="">Select Role</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
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