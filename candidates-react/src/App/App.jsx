import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history, fetchWrapper } from '../_helpers';
import { PrivateRoute, Nav } from '../_components';
import { UsersBoard, AddUser } from '../AdminBoard';
import { LoginPage } from '../LoginPage';
import { CandidatesBoard, AddCandidate } from '../CandidatesBoard';
import { alertActions } from '../_actions';
import "bootstrap/dist/css/bootstrap.min.css";

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
                        <Nav />
                            <div>
                                <div className="col-md-6 offset-md-3">
                                    <Route path="/authenticate" component={LoginPage} />
                                    <PrivateRoute exact path="/adduser" component={AddUser} />
                                    <PrivateRoute exact path="/usersboard" component={UsersBoard} />
                                    <PrivateRoute exact path="/candidatesboard" component={CandidatesBoard} />
                                    <PrivateRoute exact path="/addcandidate" component={AddCandidate} />
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