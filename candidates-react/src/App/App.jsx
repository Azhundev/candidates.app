import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { history, Role, fetchWrapper } from '../_helpers';
import { UsersBoard, AddUser } from '../AdminBoard';
import { LoginPage } from '../LoginPage';
import { CandidatesBoard } from '../CandidatesBoard';
import { alertActions } from '../_actions';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }
    
    
    logout() {
        fetchWrapper.logout();
        history.push('/authenticate');
    }

    render() {
        
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">

                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                
                                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                                        <div className="navbar-nav">
                                            <Link to="/usersboard" className="nav-item nav-link">Users Board</Link>
                                            <Link to="/adduser" className="nav-item nav-link">Add User</Link>
                                            <Link to="/candidatesboard" className="nav-item nav-link">Candidates Board</Link>
                                            <a href=" " onClick={this.logout} className="nav-item nav-link">Logout</a>
                                        </div>
                                    </nav>
                                
                                 
                                    <Link to="/authenticate" className="nav-item nav-link">Login Page</Link>
                                
                                <div className="jumbotron">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6 offset-md-3">
                                                <Route path="/authenticate" component={LoginPage} />
                                                <Route path="/usersboard" component={UsersBoard} />
                                                <Route path="/candidatesboard" component={CandidatesBoard} />
                                                <Route path="/adduser" component={AddUser} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 