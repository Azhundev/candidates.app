import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history, Role, fetchWrapper } from '../_helpers';
import { PrivateRoute } from '../_components';
import { UsersBoard } from '../AdminBoard';
import { LoginPage } from '../LoginPage';
import { CandidatesBoard } from '../CandidatesBoard';
import { alertActions } from '../_actions';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            isAdmin: false,
            isUser: false
        };

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    componentDidMount() {
        fetchWrapper.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.roles === Role.Admin,
            isUser: x && x.roles === Role.User
        }));
    }

    logout() {
        fetchWrapper.logout();
        history.push('/authenticate');
    }

    render() {
        const { currentUser, isAdmin, isUser } = this.state;
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
                                {currentUser &&
                                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                                        <div className="navbar-nav">                                            
                                            <Link to="/usersboard" className="nav-item nav-link">Users Board</Link>
                                            <Link to="/candidatesboard" className="nav-item nav-link">Candidates Board</Link>
                                            <a href=" " onClick={this.logout} className="nav-item nav-link">Logout</a>
                                        </div>
                                    </nav>
                                }
                                {!currentUser &&
                                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                                        <div className="navbar-nav">
                                            <Redirect from="*" to="/authenticate" />
                                        </div>
                                    </nav>
                                }
                                <div className="jumbotron">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6 offset-md-3">                                                
                                                <Route path="/authenticate" component={LoginPage} />
                                                <Route path="/usersboard" component={UsersBoard} />
                                                <Route path="/candidatesboard" component={CandidatesBoard} />
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